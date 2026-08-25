import React from "react"
import { listLegacyPagesByPrefix } from "../../compat/pageData"
import PageLinkList from "../ui/PageLinkList"

export default function FaqPageList() {
    const nodes = listLegacyPagesByPrefix("/faq/").map(page => ({
        slug: page.slug,
        title: page.title,
        description: page.description || page.excerpt,
        order: page.order,
    }))
    return <PageLinkList nodes={nodes} />
}
