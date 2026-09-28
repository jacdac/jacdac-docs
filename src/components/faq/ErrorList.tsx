import React from "react"
import { listLegacyPagesByPrefix } from "../../compat/pageData"
import { groupBy } from "../../../jacdac-ts/src/jdom/utils"
import PageLinkList from "../ui/PageLinkList"

export default function ErrorList() {
    const nodes: {
        slug: string
        title: string
    }[] = listLegacyPagesByPrefix("/faq/errors/")
        ?.filter(node => node.slug?.indexOf("/") > -1 && node.title)
        .map(node => ({
            slug: node.slug,
            title: node.title,
            order: node.order,
        }))

    const groups = groupBy(nodes || [], node => node.slug.split("/", 3)[2] || "")
    const groupNames = Object.keys(groups).filter(g => !!g)
    console.debug(groupNames)

    return (
        <>
            {groupNames.map(group => (
                <>
                    <h2 key={group}>{group}</h2>
                    <PageLinkList nodes={groups[group]} />
                </>
            ))}
        </>
    )
}
