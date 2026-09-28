import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const repoRoot = path.resolve(__dirname, "..")

const args = process.argv.slice(2)

function getArg(flag, fallback) {
    const index = args.indexOf(flag)
    if (index < 0) return fallback
    const value = args[index + 1]
    if (!value || value.startsWith("--")) {
        throw new Error(`Missing value for ${flag}`)
    }
    return value
}

const componentsRoot = path.resolve(
    repoRoot,
    getArg("--root", "src/components")
)
const outputPath = path.resolve(
    repoRoot,
    getArg("--output", "docs/component-dependencies.md")
)
const includeIsolated = args.includes("--include-isolated")
const groupBy = getArg("--group-by", "file")
const topArg = getArg("--top", "")
const topCount = topArg ? Number.parseInt(topArg, 10) : undefined
const defaultFolderExclusions = [
    "blog",
    "dotnet",
    "devicescript",
    "faq",
    "home",
    "python",
]
const hasExcludeArg = args.includes("--exclude")
const excludeValues = hasExcludeArg
    ? getArg("--exclude", "")
    : groupBy === "folder"
      ? defaultFolderExclusions.join(",")
      : ""
const exclude = new Set(
    excludeValues
        .split(",")
        .map(value => value.trim())
        .filter(Boolean)
)

if (topArg && (!Number.isInteger(topCount) || topCount <= 0)) {
    throw new Error(`Invalid --top value: ${topArg}`)
}

function toPosix(filePath) {
    return filePath.split(path.sep).join("/")
}

function walkTsxFiles(root, out = []) {
    const entries = fs.readdirSync(root, { withFileTypes: true })
    for (const entry of entries) {
        const fullPath = path.join(root, entry.name)
        if (entry.isDirectory()) walkTsxFiles(fullPath, out)
        else if (entry.isFile() && entry.name.endsWith(".tsx")) out.push(fullPath)
    }
    return out
}

function resolveRelativeComponent(fromFile, specifier) {
    if (!specifier.startsWith(".")) return undefined

    const base = path.resolve(path.dirname(fromFile), specifier)
    const candidates = [
        `${base}.tsx`,
        `${base}.ts`,
        `${base}.jsx`,
        `${base}.js`,
        path.join(base, "index.tsx"),
        path.join(base, "index.ts"),
        path.join(base, "index.jsx"),
        path.join(base, "index.js"),
    ]

    const resolved = candidates.find(candidate => fs.existsSync(candidate))
    if (!resolved || !resolved.endsWith(".tsx")) return undefined
    if (!resolved.startsWith(componentsRoot + path.sep) && resolved !== componentsRoot)
        return undefined

    return resolved
}

function collectSpecifiers(source) {
    const specifiers = new Set()
    const importPatterns = [
        /import\s+(?:type\s+)?[^"']*?from\s+["']([^"']+)["']/g,
        /import\(\s*["']([^"']+)["']\s*\)/g,
    ]

    for (const pattern of importPatterns) {
        let match
        while ((match = pattern.exec(source))) {
            specifiers.add(match[1])
        }
    }

    return [...specifiers]
}

function nodeId(relPath) {
    return `n_${relPath.replace(/[^A-Za-z0-9_]/g, "_")}`
}

function nodeLabel(relPath) {
    return relPath.replace(/\.tsx$/, "")
}

function folderGroup(relPath) {
    const relativeToComponents = toPosix(path.relative(componentsRoot, path.join(repoRoot, relPath)))
    const segments = relativeToComponents.split("/")
    return segments.length > 1 ? segments[0] : "root"
}

if (!fs.existsSync(componentsRoot)) {
    throw new Error(`Components root does not exist: ${componentsRoot}`)
}

const files = walkTsxFiles(componentsRoot).sort((left, right) =>
    left.localeCompare(right)
)
const relPaths = new Map(
    files.map(filePath => [filePath, toPosix(path.relative(repoRoot, filePath))])
)
const edges = new Set()
const connected = new Set()

for (const filePath of files) {
    const source = fs.readFileSync(filePath, "utf8")
    const fromRel = relPaths.get(filePath)

    for (const specifier of collectSpecifiers(source)) {
        const resolved = resolveRelativeComponent(filePath, specifier)
        if (!resolved) continue

        const toRel = relPaths.get(resolved)
        if (!toRel || toRel === fromRel) continue

        edges.add(`${fromRel}-->${toRel}`)
        connected.add(fromRel)
        connected.add(toRel)
    }
}

const includedNodes = includeIsolated
    ? [...relPaths.values()]
    : [...relPaths.values()].filter(relPath => connected.has(relPath))

const mermaidLines = ["flowchart LR"]

let displayedNodes = includedNodes
let displayedEdges = [...edges].sort((left, right) => left.localeCompare(right))

if (groupBy === "folder") {
    const groupedNodes = new Set(includedNodes.map(folderGroup))
    const groupedEdges = new Set()

    for (const edge of displayedEdges) {
        const [fromRel, toRel] = edge.split("-->")
        const fromGroup = folderGroup(fromRel)
        const toGroup = folderGroup(toRel)
        if (exclude.has(fromGroup) || exclude.has(toGroup)) continue
        if (fromGroup === toGroup) continue
        groupedEdges.add(`${fromGroup}-->${toGroup}`)
        groupedNodes.add(fromGroup)
        groupedNodes.add(toGroup)
    }

    displayedNodes = [...groupedNodes]
        .filter(group => !exclude.has(group))
        .sort((left, right) =>
            left.localeCompare(right)
        )
    displayedEdges = [...groupedEdges].sort((left, right) =>
        left.localeCompare(right)
    )

    if (topCount) {
        const degreeByGroup = new Map(displayedNodes.map(group => [group, 0]))
        for (const edge of displayedEdges) {
            const [fromGroup, toGroup] = edge.split("-->")
            degreeByGroup.set(fromGroup, (degreeByGroup.get(fromGroup) || 0) + 1)
            degreeByGroup.set(toGroup, (degreeByGroup.get(toGroup) || 0) + 1)
        }

        const busiestGroups = new Set(
            [...degreeByGroup.entries()]
                .sort((left, right) => {
                    const degreeDiff = right[1] - left[1]
                    return degreeDiff || left[0].localeCompare(right[0])
                })
                .slice(0, topCount)
                .map(([group]) => group)
        )

        displayedNodes = displayedNodes.filter(group => busiestGroups.has(group))
        displayedEdges = displayedEdges.filter(edge => {
            const [fromGroup, toGroup] = edge.split("-->")
            return busiestGroups.has(fromGroup) && busiestGroups.has(toGroup)
        })
    }

    for (const group of displayedNodes) {
        mermaidLines.push(`    ${nodeId(group)}[\"${group}\"]`)
    }

    for (const edge of displayedEdges) {
        const [fromGroup, toGroup] = edge.split("-->")
        mermaidLines.push(`    ${nodeId(fromGroup)} --> ${nodeId(toGroup)}`)
    }
} else {
    for (const relPath of displayedNodes) {
        mermaidLines.push(`    ${nodeId(relPath)}[\"${nodeLabel(relPath)}\"]`)
    }

    for (const edge of displayedEdges) {
        const [fromRel, toRel] = edge.split("-->")
        mermaidLines.push(`    ${nodeId(fromRel)} --> ${nodeId(toRel)}`)
    }
}

const content = [
    "# Component Dependency Diagram",
    "",
    groupBy === "folder"
        ? `Generated from ${includedNodes.length} component files, grouped into ${displayedNodes.length} folders with ${displayedEdges.length} inter-folder dependency edges${topCount ? ` after keeping the top ${topCount} busiest folders` : ""}.`
        : `Generated from ${includedNodes.length} component files and ${edges.size} dependency edges.`,
    "",
    "```mermaid",
    ...mermaidLines,
    "```",
    "",
].join("\n")

fs.mkdirSync(path.dirname(outputPath), { recursive: true })
fs.writeFileSync(outputPath, content, "utf8")

console.log(
    groupBy === "folder"
        ? `Wrote folder-grouped component dependency diagram for ${displayedNodes.length} nodes and ${displayedEdges.length} edges to ${outputPath}`
        : `Wrote component dependency diagram for ${includedNodes.length} nodes and ${edges.size} edges to ${outputPath}`
)