import { withPrefix } from "./withPrefix"

export function navigate(path: string): void {
    if (!path) return

    if (/^https?:\/\//i.test(path)) {
        if (typeof window !== "undefined") window.location.href = path
        return
    }

    const target = withPrefix(path)
    if (typeof window !== "undefined") window.location.href = target
}
