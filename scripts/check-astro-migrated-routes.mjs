import fs from "node:fs"
import path from "node:path"

const repoRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..")
const distRoot = path.join(repoRoot, "astro-starlight", "dist")

// Keep this list in sync with migrated docs routes in astro-starlight/src/content/docs.
const migratedRoutes = [
    "/tools/traces/",
    "/tools/device-tree/",
    "/tools/firmware/",
    "/tools/more/",
]

function routeToFile(route) {
    const normalized = route.replace(/^\/+|\/+$/g, "")
    if (!normalized) return path.join(distRoot, "index.html")
    return path.join(distRoot, normalized, "index.html")
}

const missing = migratedRoutes.filter(route => !fs.existsSync(routeToFile(route)))

if (missing.length) {
    console.error("Missing migrated Astro routes in dist output:")
    for (const route of missing) {
        console.error(`- ${route} -> ${routeToFile(route)}`)
    }
    process.exit(1)
}

console.log(`Verified ${migratedRoutes.length} migrated Astro routes in dist output.`)