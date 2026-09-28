import legacyPageIndex from "../generated/legacy-page-index.json"

export interface LegacyPageEntry {
    slug: string
    title: string
    description?: string
    excerpt?: string
    order?: number
    date?: string
    services?: string
    hideToc?: boolean
}

function normalizePrefix(prefix: string) {
    if (!prefix.startsWith("/")) return `/${prefix}`
    return prefix
}

export function listLegacyPagesByPrefix(prefix: string): LegacyPageEntry[] {
    const normalized = normalizePrefix(prefix)
    return (legacyPageIndex.pages || []).filter(page =>
        page.slug?.startsWith(normalized)
    )
}

export function listLegacyPages(): LegacyPageEntry[] {
    return legacyPageIndex.pages || []
}