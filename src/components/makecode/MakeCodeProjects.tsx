import { listLegacyPagesByPrefix } from "../../compat/pageData"
import React, { useMemo } from "react"
import { ReactNode } from "react"
import { serviceSpecificationFromClassIdentifier } from "../../../jacdac-ts/src/jdom/spec"
import { arrayify, unique } from "../../../jacdac-ts/src/jdom/utils"
import PageLinkList from "../ui/PageLinkList"

export default function MakeCodeProjects(props: {
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

    const projectPages = listLegacyPagesByPrefix("/clients/makecode/projects/")

    const nodes = useMemo(() => {
        // grab the nodes
        let nodes = projectPages
        // filter out
        if (serviceNames?.length)
            nodes = nodes.filter(node =>
                serviceNames.some(n => node.services?.indexOf(n) > -1)
            )
        return nodes.map(page => ({
            slug: page.slug,
            title: page.title,
            description: page.description,
            services: page.services,
            order: page.order,
        }))
    }, [serviceNames.join(","), projectPages.length])

    return <PageLinkList header={header} nodes={nodes} />
}
