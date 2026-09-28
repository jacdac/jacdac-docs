#!/usr/bin/env node

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const astroRoot = path.join(repoRoot, "astro-starlight", "src")
const pagesRoot = path.join(astroRoot, "pages")
const checklistPath = path.join(
    repoRoot,
    "docs",
    "migration",
    "astro-island-provider-checklist.md"
)

const CLIENT_DIRECTIVE_RE = /client:(only|load|visible|idle)\s*=\s*["'][^"']+["']/
const LEGACY_IMPORT_RE = /from\s+["'](?:\.\.\/){3,}src\//

function buildMissingCoverageMessage(missing) {
    const lines = ["Legacy Astro islands missing checklist coverage:"]
    for (const usage of missing) {
        lines.push(`- page: ${usage.page}`)
        lines.push(`  component: ${usage.component}`)
    }
    lines.push("", "Suggested checklist entries (copy/paste):")
    for (const usage of missing) {
        const componentName = path.basename(usage.component).replace(/\.[^.]+$/, "")
        lines.push(`- \`${usage.page}\``)
        lines.push(
            `  - mounts \`${componentName}\` from \`${usage.component}\``
        )
    }
    lines.push(
        "Update docs/migration/astro-island-provider-checklist.md with both page and component entries."
    )
    return lines.join("\n")
}

function runSelfTest() {
    const sample = [
        {
            page: "astro-starlight/src/pages/example/index.astro",
            component: "astro-starlight/src/components/example/LegacyExampleIsland.tsx",
        },
    ]
    const output = buildMissingCoverageMessage(sample)
    const expectations = [
        "Legacy Astro islands missing checklist coverage:",
        "- page: astro-starlight/src/pages/example/index.astro",
        "component: astro-starlight/src/components/example/LegacyExampleIsland.tsx",
        "Suggested checklist entries (copy/paste):",
        "- `astro-starlight/src/pages/example/index.astro`",
        "- mounts `LegacyExampleIsland` from `astro-starlight/src/components/example/LegacyExampleIsland.tsx`",
    ]

    const failed = expectations.filter(snippet => !output.includes(snippet))
    if (failed.length) {
        console.error("Self-test failed. Missing expected snippets:")
        for (const snippet of failed) console.error(`- ${snippet}`)
        process.exit(1)
    }

    console.log("Self-test passed.")
    process.exit(0)
}

if (process.argv.includes("--self-test")) runSelfTest()

function toPosix(relPath) {
    return relPath.split(path.sep).join("/")
}

function walkFiles(root, predicate, out = []) {
    const entries = fs.readdirSync(root, { withFileTypes: true })
    for (const entry of entries) {
        const full = path.join(root, entry.name)
        if (entry.isDirectory()) walkFiles(full, predicate, out)
        else if (predicate(full)) out.push(full)
    }
    return out
}

function resolveImport(fromFile, specifier) {
    const base = path.resolve(path.dirname(fromFile), specifier)
    const candidates = [
        `${base}.astro`,
        `${base}.tsx`,
        `${base}.ts`,
        `${base}.jsx`,
        `${base}.js`,
        path.join(base, "index.astro"),
        path.join(base, "index.tsx"),
        path.join(base, "index.ts"),
        path.join(base, "index.jsx"),
        path.join(base, "index.js"),
    ]
    return candidates.find(candidate => fs.existsSync(candidate))
}

function parseAstroFile(filePath) {
    const source = fs.readFileSync(filePath, "utf8")
    const fmMatch = source.match(/^---\n([\s\S]*?)\n---\n?/)
    const frontmatter = fmMatch ? fmMatch[1] : ""
    const body = fmMatch ? source.slice(fmMatch[0].length) : source

    const imports = []
    const importRe = /import\s+([^;]+?)\s+from\s+["']([^"']+)["']/g
    let match
    while ((match = importRe.exec(frontmatter))) {
        const importClause = match[1]
        const specifier = match[2]
        if (!specifier.startsWith(".")) continue

        const names = []
        const defaultMatch = importClause.match(/^\s*([A-Za-z_$][\w$]*)/)
        if (defaultMatch) names.push(defaultMatch[1])

        const namedMatch = importClause.match(/\{([^}]+)\}/)
        if (namedMatch) {
            const named = namedMatch[1]
                .split(",")
                .map(part => part.trim())
                .filter(Boolean)
                .map(part => part.split(/\s+as\s+/).pop().trim())
            names.push(...named)
        }

        for (const name of names) {
            imports.push({ name, specifier })
        }
    }

    return { body, imports }
}

function findLegacyIslandUsages() {
    const astroPages = walkFiles(pagesRoot, file => file.endsWith(".astro"))
    const usages = []

    for (const pagePath of astroPages) {
        const { body, imports } = parseAstroFile(pagePath)
        if (!CLIENT_DIRECTIVE_RE.test(body)) continue

        for (const imp of imports) {
            const componentUseRe = new RegExp(
                `<${imp.name}\\b[^>]*client:(only|load|visible|idle)\\s*=`,
                "m"
            )
            if (!componentUseRe.test(body)) continue

            const resolved = resolveImport(pagePath, imp.specifier)
            if (!resolved) continue

            const componentSource = fs.readFileSync(resolved, "utf8")
            if (!LEGACY_IMPORT_RE.test(componentSource)) continue

            usages.push({
                page: toPosix(path.relative(repoRoot, pagePath)),
                component: toPosix(path.relative(repoRoot, resolved)),
            })
        }
    }

    return usages
}

if (!fs.existsSync(checklistPath)) {
    console.error(`Missing checklist file: ${toPosix(path.relative(repoRoot, checklistPath))}`)
    process.exit(1)
}

const checklist = fs.readFileSync(checklistPath, "utf8")
const usages = findLegacyIslandUsages()

if (!usages.length) {
    console.log("No legacy Astro island usages found.")
    process.exit(0)
}

const missing = usages.filter(
    usage =>
        !checklist.includes(`\`${usage.page}\``) ||
        !checklist.includes(`\`${usage.component}\``)
)

if (missing.length) {
    console.error(buildMissingCoverageMessage(missing))
    process.exit(1)
}

console.log(`Checklist coverage OK for ${usages.length} legacy Astro island usage(s).`)