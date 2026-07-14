import { listLegacyPagesByPrefix } from "../../compat/pageData"
import React from "react"
import PageLinkList from "../ui/PageLinkList"

export default function DotNetProjects() {
    const nodes = listLegacyPagesByPrefix("/clients/dotnet/projects/").map(page => ({
        slug: page.slug,
        title: page.title,
        description: page.description || page.excerpt,
        order: page.order,
    }))
    return <PageLinkList nodes={nodes} />
}
