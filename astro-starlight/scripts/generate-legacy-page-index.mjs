import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const repoRoot = path.resolve(__dirname, "..", "..")
const pagesRoot = path.join(repoRoot, "src", "pages")
const outputPath = path.join(repoRoot, "src", "generated", "legacy-page-index.json")
const tracesRoot = path.join(repoRoot, "jacdac-ts", "jacdac-spec", "traces")
const tracesOutputPath = path.join(repoRoot, "src", "generated", "legacy-trace-index.json")

function walkMdxFiles(root, out = []) {
    const entries = fs.readdirSync(root, { withFileTypes: true })
    for (const entry of entries) {
        const full = path.join(root, entry.name)
        if (entry.isDirectory()) walkMdxFiles(full, out)
        else if (/\.(md|mdx)$/i.test(entry.name)) out.push(full)
    }
    return out
}

function walkFiles(root, out = []) {
    const entries = fs.readdirSync(root, { withFileTypes: true })
    for (const entry of entries) {
        const full = path.join(root, entry.name)
        if (entry.isDirectory()) walkFiles(full, out)
        else out.push(full)
    }
    return out
}

function normalizeSlug(relPath) {
    const noExt = relPath.replace(/\.(md|mdx)$/i, "")
    const posix = noExt.split(path.sep).join("/")
    if (posix.endsWith("/index")) return `/${posix.slice(0, -"/index".length)}/`
    return `/${posix}/`
}

function parseFrontmatter(source) {
    if (!source.startsWith("---\n")) return { frontmatter: {}, body: source }
    const end = source.indexOf("\n---\n", 4)
    if (end < 0) return { frontmatter: {}, body: source }

    const fmText = source.slice(4, end)
    const body = source.slice(end + 5)
    const frontmatter = {}

    for (const line of fmText.split(/\r?\n/)) {
        const m = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/)
        if (!m) continue
        const key = m[1]
        let value = m[2].trim()
        if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
            value = value.slice(1, -1)
        }
        if (/^-?\d+(\.\d+)?$/.test(value)) frontmatter[key] = Number(value)
        else if (/^(true|false)$/i.test(value)) frontmatter[key] = /^true$/i.test(value)
        else frontmatter[key] = value
    }

    return { frontmatter, body }
}

function createExcerpt(body) {
    const lines = body
        .split(/\r?\n/)
        .map(line => line.trim())
        .filter(line => line && !line.startsWith("#") && !line.startsWith("<"))
    const text = lines.join(" ").replace(/\s+/g, " ").trim()
    return text.slice(0, 240)
}

const files = walkMdxFiles(pagesRoot)
const pages = files.map(file => {
    const rel = path.relative(pagesRoot, file)
    const source = fs.readFileSync(file, "utf8")
    const { frontmatter, body } = parseFrontmatter(source)
    const slug = normalizeSlug(rel)
    const excerpt = createExcerpt(body)

    return {
        slug,
        title: frontmatter.title || "",
        description: frontmatter.description || "",
        order: typeof frontmatter.order === "number" ? frontmatter.order : undefined,
        date: frontmatter.date || "",
        services: frontmatter.services || "",
        hideToc: !!frontmatter.hideToc,
        excerpt,
    }
})

pages.sort((l, r) => l.slug.localeCompare(r.slug))

const traces = fs.existsSync(tracesRoot)
    ? walkFiles(tracesRoot, [])
          .filter(file => file.endsWith(".txt"))
          .map(file => ({
              name: path.basename(file, ".txt"),
              content: fs.readFileSync(file, "utf8"),
          }))
          .sort((l, r) => l.name.localeCompare(r.name))
    : []

fs.mkdirSync(path.dirname(outputPath), { recursive: true })
fs.writeFileSync(outputPath, `${JSON.stringify({ pages }, null, 2)}\n`, "utf8")
fs.writeFileSync(tracesOutputPath, `${JSON.stringify({ traces }, null, 2)}\n`, "utf8")

console.log(`Generated legacy page index for ${pages.length} pages`)
console.log(`Generated legacy trace index for ${traces.length} traces`)