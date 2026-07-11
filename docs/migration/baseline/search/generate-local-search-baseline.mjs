import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs"
import { join, relative, extname, sep } from "node:path"

const repoRoot = process.cwd()
const pagesRoot = join(repoRoot, "src", "pages")
const outFile = join(repoRoot, "docs", "migration", "baseline", "search", "results.md")
const queryFile = join(repoRoot, "docs", "migration", "baseline", "search", "queries.txt")

const exts = new Set([".md", ".mdx", ".ts", ".tsx", ".js", ".jsx"])

function walk(dir, files = []) {
    for (const entry of readdirSync(dir)) {
        const full = join(dir, entry)
        const st = statSync(full)
        if (st.isDirectory()) walk(full, files)
        else files.push(full)
    }
    return files
}

function toRoute(filePath) {
    const rel = relative(pagesRoot, filePath).split(sep).join("/")
    const ext = extname(rel)
    if (!exts.has(ext)) return null
    if (rel.endsWith(".tsx_") || rel.endsWith(".ts_")) return null
    const noExt = rel.slice(0, -ext.length)
    if (noExt === "index") return "/"
    if (noExt.endsWith("/index")) return `/${noExt.slice(0, -"/index".length)}/`
    return `/${noExt}/`
}

function normalize(text) {
    return text.toLowerCase().replace(/[^a-z0-9\s]+/g, " ")
}

const docs = walk(pagesRoot)
    .map(f => ({
        file: f,
        route: toRoute(f),
        text: normalize(readFileSync(f, "utf8")),
    }))
    .filter(d => !!d.route)

const queries = readFileSync(queryFile, "utf8")
    .split(/\r?\n/)
    .map(s => s.trim())
    .filter(Boolean)

function scoreDoc(docText, terms) {
    let score = 0
    for (const t of terms) {
        if (!t) continue
        const re = new RegExp(`\\b${t.replace(/[.*+?^${}()|[\\]\\]/g, "\\$&")}\\b`, "g")
        const matches = docText.match(re)
        if (matches) score += matches.length
    }
    return score
}

const lines = []
lines.push("# Search Baseline Results (Local Corpus Heuristic)")
lines.push("")
lines.push(`Date: ${new Date().toISOString()}`)
lines.push("Environment: local source corpus (src/pages)")
lines.push("Reviewer: automated heuristic script")
lines.push("")
lines.push("Note: This is a heuristic baseline from source text, not the runtime Gatsby search index.")
lines.push("")
lines.push("| Query | Expected in Top 3 (Y/N) | Top 10 Results Snapshot | Notes |")
lines.push("| --- | --- | --- | --- |")

for (const query of queries) {
    const terms = normalize(query).split(/\s+/).filter(Boolean)
    const ranked = docs
        .map(d => ({ ...d, score: scoreDoc(d.text, terms) }))
        .filter(d => d.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 10)

    const topRoutes = ranked.map(r => `${r.route} (${r.score})`).join("<br/>")
    const inTop3 = ranked.slice(0, 3).length > 0 ? "Y" : "N"
    const notes = ranked.length === 0 ? "No local text match" : "Heuristic match"
    lines.push(`| ${query} | ${inTop3} | ${topRoutes || ""} | ${notes} |`)
}

writeFileSync(outFile, lines.join("\n") + "\n")
console.log(`Wrote ${outFile}`)
