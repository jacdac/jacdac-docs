import { listLegacyPagesByPrefix } from "../../compat/pageData"
import React from "react"
import { ReactNode } from "react"
import PageLinkList from "../ui/PageLinkList"

export default function BlogEntries(props: { header?: ReactNode }) {
    const { header } = props
    const nodes = listLegacyPagesByPrefix("/blog/").map(page => ({
        slug: page.slug,
        title: page.title || page.slug,
        description: page.description || page.excerpt,
        order: page.order,
        date: page.date,
    }))
    return React.createElement(PageLinkList, { header, nodes })
}
