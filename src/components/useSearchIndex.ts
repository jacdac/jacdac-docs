import { graphql, useStaticQuery } from "../compat/gatsbyData"
import { Index } from "elasticlunr"
import { useRef } from "react"

export default function useSearchIndex() {
    const { siteSearchIndex } = useStaticQuery(graphql`
        query SearchIndexQuery {
            siteSearchIndex {
                index
            }
        }
    `)
    const index = useRef(
        siteSearchIndex?.index
            ? Index.load(siteSearchIndex.index)
            : (({ search: () => [] } as unknown) as Index)
    )
    return index.current
}
