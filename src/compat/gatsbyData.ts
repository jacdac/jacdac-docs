export function graphql(
    strings: TemplateStringsArray,
    ...values: unknown[]
): string {
    const parts: string[] = []
    for (let i = 0; i < strings.length; i++) {
        parts.push(strings[i])
        if (i < values.length) parts.push(String(values[i]))
    }
    return parts.join("")
}

export function useStaticQuery<T>(_query: string): T {
    return {} as T
}
