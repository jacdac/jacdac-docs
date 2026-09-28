import { Grid } from "@mui/material"
import React, { useEffect, useState } from "react"
import DashboardServiceWidget, {
    DashboardServiceProps,
    isExpandableView,
} from "./DashboardServiceWidget"
import StatusCodeAlert from "../services/StatusCodeAlert"
import DashboardServiceWidgetItemHeader from "./DashboardServiceWidgetItemHeader"
import { useHiddenFwdService } from "./DashboardFwdEduWidgets"

export default function DashboardServiceWidgetItem(
    props: React.Attributes & DashboardServiceProps
): JSX.Element {
    const { service, controlled, ...rest } = props
    const { serviceClass } = service
    const expandable = props.expandable || isExpandableView(serviceClass)
    const [expanded, setExpanded] = useState<boolean>(
        !controlled && expandable ? false : undefined
    )
    const statusCodeAlert = <StatusCodeAlert service={service} {...rest} />
    const toggleExpanded = () => setExpanded(e => !e)
    useEffect(() => {
        setExpanded(!controlled && expandable ? false : undefined)
    }, [controlled, expandable])
    const hidden = useHiddenFwdService(service)

    if (hidden) return null

    return (
        <Grid item>
            <DashboardServiceWidgetItemHeader
                {...props}
                expanded={expanded}
                toggleExpanded={toggleExpanded}
            />
            {statusCodeAlert}
            <DashboardServiceWidget {...props} expanded={expanded} />
        </Grid>
    )
}
