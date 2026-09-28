import { readdirSync, statSync, writeFileSync } from "node:fs"
import { join, extname, relative, sep } from "node:path"

const repoRoot = process.cwd()
const pagesRoot = join(repoRoot, "src", "pages")
const outDir = join(repoRoot, "docs", "migration", "baseline", "routes")

const pageExtensions = new Set([".md", ".mdx", ".js", ".jsx", ".ts", ".tsx"])

function walk(dir, files = []) {
    for (const entry of readdirSync(dir)) {
        const full = join(dir, entry)
        const st = statSync(full)
        if (st.isDirectory()) {
            walk(full, files)
        } else {
            files.push(full)
        }
    }
    return files
}

function fileToRoute(filePath) {
    const rel = relative(pagesRoot, filePath).split(sep).join("/")
    const ext = extname(rel)
    if (!pageExtensions.has(ext)) return null

    // Ignore non-route helpers or intentionally disabled files.
    if (rel.endsWith(".tsx_") || rel.endsWith(".ts_")) return null

    const noExt = rel.slice(0, -ext.length)
    if (noExt === "index") return "/"
    if (noExt.endsWith("/index")) return `/${noExt.slice(0, -"/index".length)}/`
    return `/${noExt}/`
}

const staticPageRoutes = walk(pagesRoot)
    .map(fileToRoute)
    .filter(Boolean)
    .sort()

const generatedRouteFamilies = [
    {
        kind: "generated-services",
        routePattern: "/services/{shortId}/",
        source: "gatsby-node createServicePages",
    },
    {
        kind: "generated-services",
        routePattern: "/services/{shortId}/playground/",
        source: "gatsby-node createServicePages",
    },
    {
        kind: "generated-devices",
        routePattern: "/devices/{identifier}/",
        source: "gatsby-node createDevicePages",
    },
    {
        kind: "generated-devices",
        routePattern: "/devices/{company}/",
        source: "gatsby-node createDevicePages",
    },
]

const redirects = [
    {
        from: "/tools/module-tester",
        to: "/tools/device-tester",
        source: "gatsby-node createRedirects",
    },
    {
        from: "/clients/p5js",
        to: "/clients/javascript/p5js",
        source: "gatsby-node createRedirects",
    },
    {
        from: "/services/0x{classId}",
        to: "/services/{shortId}/",
        source: "gatsby-node createServicePages",
    },
    {
        from: "/devices/0x{productId}",
        to: "/devices/{identifier}/",
        source: "gatsby-node createDevicePages",
    },
    {
        from: "/devices/codes/{vanity}/",
        to: "/devices/{identifier}/",
        source: "gatsby-node createDeviceQRPages",
    },
]

const snapshot = {
    generatedAt: new Date().toISOString(),
    staticPageRouteCount: staticPageRoutes.length,
    staticPageRoutes,
    generatedRouteFamilies,
    redirects,
}

writeFileSync(join(outDir, "routes.snapshot.json"), JSON.stringify(snapshot, null, 2))

const md = [
    "# Route Baseline Snapshot",
    "",
    `Generated at: ${snapshot.generatedAt}`,
    "",
    `Static page routes discovered: ${snapshot.staticPageRouteCount}`,
    "",
    "## Generated Route Families",
    "",
    "| Kind | Pattern | Source |",
    "| --- | --- | --- |",
    ...generatedRouteFamilies.map(r => `| ${r.kind} | ${r.routePattern} | ${r.source} |`),
    "",
    "## Redirects",
    "",
    "| From | To | Source |",
    "| --- | --- | --- |",
    ...redirects.map(r => `| ${r.from} | ${r.to} | ${r.source} |`),
    "",
    "## Static Routes",
    "",
    ...staticPageRoutes.map(r => `- ${r}`),
    "",
].join("\n")

writeFileSync(join(outDir, "routes.snapshot.md"), md)

console.log(`Wrote ${join(outDir, "routes.snapshot.json")}`)
console.log(`Wrote ${join(outDir, "routes.snapshot.md")}`)
