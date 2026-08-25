import { listLegacyPages } from "../compat/pageData"
import { useRef } from "react"

interface SearchDoc {
    title: string
    url: string
}

interface SearchResultEntry {
    ref: string
}

interface SearchIndexLike {
    search: (query: string, options?: unknown) => SearchResultEntry[]
    documentStore: {
        getDoc: (ref: string) => SearchDoc
    }
}

export default function useSearchIndex() {
    const pages = listLegacyPages()
    const docs = pages
        .filter(page => !!page.slug && !!page.title)
        .map(page => ({
            title: page.title,
            url: page.slug,
            haystack: `${page.title} ${page.description || ""} ${page.excerpt || ""}`.toLowerCase(),
        }))

    const index = useRef<SearchIndexLike>({
        search: (query: string) => {
            const q = (query || "").trim().toLowerCase()
            if (!q) return []
            return docs
                .filter(doc => doc.haystack.includes(q))
                .slice(0, 40)
                .map(doc => ({ ref: doc.url }))
        },
        documentStore: {
            getDoc: (ref: string) => {
                const doc = docs.find(d => d.url === ref)
                if (doc) return { title: doc.title, url: doc.url }
                return { title: ref, url: ref }
            },
        },
    })
    return index.current
}
