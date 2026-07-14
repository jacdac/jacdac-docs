import { listLegacyPagesByPrefix } from "../../compat/pageData"
import React, { ReactNode, useMemo } from "react"
import { serviceSpecificationFromClassIdentifier } from "../../../jacdac-ts/src/jdom/spec"
import { arrayify, unique } from "../../../jacdac-ts/src/jdom/utils"
import PageLinkList from "../ui/PageLinkList"

export default function MakeCodeExtensions(props: {
    header?: ReactNode
    serviceClass?: number | number[]
    serviceName?: string
}) {
    const { serviceName, serviceClass, header } = props
    const serviceNames = unique([
        ...(serviceName?.split(/\s*,\s*/gi).filter(s => !!s) || []),
        ...(arrayify(serviceClass)
            ?.map(sc => serviceSpecificationFromClassIdentifier(sc)?.shortId)
            .filter(s => !!s) || []),
    ])
    const extensionPages = listLegacyPagesByPrefix(
        "/clients/makecode/extensions/"
    )
    const nodes = useMemo(() => {
        let nodes = extensionPages

        // filter out
        if (serviceNames?.length)
            nodes = nodes.filter(node => serviceNames.some(n => node.slug.indexOf(n) > -1))
        return nodes
    }, [serviceNames.join(","), extensionPages.length])

    return (
        <PageLinkList
            header={header}
            nodes={nodes.map(page => ({
                slug: page.slug,
                title: page.title,
                order: page.order,
            }))}
        />
    )
}
