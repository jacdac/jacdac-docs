import fs from "node:fs"
import path from "node:path"

const repoRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..")
const distRoot = path.join(repoRoot, "astro-starlight", "dist")

// Keep this list in sync with migrated docs routes in astro-starlight/src/content/docs.
const migratedRoutes = [
    { route: "/tools/traces/", marker: "Analyzer trace" },
    { route: "/tools/device-tree/", marker: "Identify services" },
    { route: "/tools/firmware/", marker: "Firmware Updater" },
    { route: "/tools/more/", marker: "Testing and compliance" },
    { route: "/tools/packet-console/", marker: "Pause and inspect" },
    { route: "/tools/makecode-sim/", marker: "Add blocks" },
]

function routeToFile(route) {
    const normalized = route.replace(/^\/+|\/+$/g, "")
    if (!normalized) return path.join(distRoot, "index.html")
    return path.join(distRoot, normalized, "index.html")
}

const missing = migratedRoutes.filter(({ route }) => !fs.existsSync(routeToFile(route)))

if (missing.length) {
    console.error("Missing migrated Astro routes in dist output:")
    for (const { route } of missing) {
        console.error(`- ${route} -> ${routeToFile(route)}`)
    }
    process.exit(1)
}

const missingMarkers = migratedRoutes.filter(({ route, marker }) => {
    const html = fs.readFileSync(routeToFile(route), "utf8")
    return !html.includes(marker)
})

if (missingMarkers.length) {
    console.error("Migrated routes are missing expected content markers:")
    for (const { route, marker } of missingMarkers) {
        console.error(`- ${route} missing marker: ${JSON.stringify(marker)}`)
    }
    process.exit(1)
}

console.log(`Verified ${migratedRoutes.length} migrated Astro routes and content markers.`)