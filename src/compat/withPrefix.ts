function normalizePrefix(prefix: string): string {
    if (!prefix || prefix === "/") return ""
    return prefix.endsWith("/") ? prefix.slice(0, -1) : prefix
}

function normalizePath(path: string): string {
    if (!path) return "/"
    return path.startsWith("/") ? path : `/${path}`
}

export function withPrefix(path: string): string {
    if (!path) return path
    if (/^https?:\/\//i.test(path)) return path

    const normalizedPath = normalizePath(path)

    if (typeof window !== "undefined") {
        // Gatsby exposes __PATH_PREFIX; Astro pages can expose __BASE_PATH.
        const runtimePrefix =
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ((window as any).__PATH_PREFIX__ as string) ||
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ((window as any).__BASE_PATH__ as string)

        const prefix = normalizePrefix(runtimePrefix)
        if (prefix) return `${prefix}${normalizedPath}`
    }

    // Keep legacy production compatibility when no runtime prefix is present.
    return `/jacdac-docs${normalizedPath}`
}
