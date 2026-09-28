import React from "react"
import { parseTrace } from "../../../jacdac-ts/src/jdom/logparser"
import { Trace } from "../../../jacdac-ts/src/jdom/trace/trace"
import { Grid } from "@mui/material"
import TraceCard from "./TraceCard"
import useGridBreakpoints from "../useGridBreakpoints"
import traceIndex from "../../generated/legacy-trace-index.json"

export default function TraceList() {
    const gridBreakpoints = useGridBreakpoints()
    const traces: { trace: Trace; name: string }[] =
        (traceIndex?.traces || [])
        .map(node => {
            return {
                trace: parseTrace(node.content as string),
                name: node.name as string,
            }
        })
        .filter(trace => !!trace.trace)

    return (
        <Grid container spacing={2}>
            {traces.map(({ trace, name }) => (
                <Grid item key={name}>
                    <TraceCard name={name} trace={trace} {...gridBreakpoints} />
                </Grid>
            ))}
        </Grid>
    )
}
