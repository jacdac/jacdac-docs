import { Grid, TextField } from "@mui/material"
import React, { ChangeEvent, startTransition, useState } from "react"
import { arrayConcatMany, unique } from "../../../jacdac-ts/src/jdom/utils"
import useBus from "../../jacdac/useBus"
import useChange from "../../jacdac/useChange"
import FilterChip from "../ui/FilterChip"
import DeviceSpecificationList from "./DeviceSpecificationList"
import ServiceSpecificationSelect from "./ServiceSpecificationSelect"

export default function FilteredDeviceSpecificationList(props: {
    showSearch?: boolean
    showServiceList?: boolean
    count?: number
    company?: string
}) {
    const { showSearch, showServiceList, ...others } = props
    const bus = useBus()
    const { deviceCatalog } = bus

    const [serviceClass, setServiceClass] = useState<number>(NaN)
    const handleServiceChanged = value => setServiceClass(value)

    const [query, setQuery] = useState("")
    const [firmwareSources, setFirmwareSources] = useState(false)
    const [hardwareDesign, setHardwareDesign] = useState(false)

    const tags = useChange(deviceCatalog, _ =>
        unique(
            arrayConcatMany(
                _.specifications()
                    .map(spec => spec.tags)
                    .filter(tags => !!tags)
            )
        )
    )
    const [selectedTags, setSelectedTags] = useState<string[]>([])

    const handleSearchQueryChange = (e: ChangeEvent<HTMLInputElement>) =>
        startTransition(() => setQuery(e.target.value))
    const handleSetFirmwareSources = () => setFirmwareSources(c => !c)
    const handleSetHardwareDesign = () => setHardwareDesign(c => !c)
    const handleSetSelectedTag = (tag: string) => () =>
        setSelectedTags(ts => {
            const i = ts.indexOf(tag)
            if (i < 0) return [...ts, tag]
            else return [...ts.slice(0, i), ...ts.slice(i + 1)]
        })
    return (
        <>
            <Grid sx={{ mb: 1 }} container spacing={1}>
                {showSearch && (
                    <Grid item xs={12}>
                        <TextField
                            tabIndex={0}
                            type="search"
                            value={query}
                            fullWidth={true}
                            size="small"
                            label="Search devices"
                            aria-label="Search devices"
                            onChange={handleSearchQueryChange}
                        />
                    </Grid>
                )}
                {showServiceList && (
                    <Grid item xs>
                        <ServiceSpecificationSelect
                            label="Filter by Service"
                            serviceClass={serviceClass}
                            setServiceClass={handleServiceChanged}
                            hasRegisteredDevice={true}
                        />
                    </Grid>
                )}
                <Grid item>
                    <FilterChip
                        label="firmware code"
                        value={firmwareSources}
                        onClick={handleSetFirmwareSources}
                    />
                </Grid>
                <Grid item>
                    <FilterChip
                        label="hardware design"
                        value={hardwareDesign}
                        onClick={handleSetHardwareDesign}
                    />
                </Grid>
                {tags
                    ?.filter(t => t !== "ec30")
                    .map(tag => (
                        <Grid item key={tag}>
                            <FilterChip
                                label={tag}
                                value={selectedTags.indexOf(tag) > -1}
                                onClick={handleSetSelectedTag(tag)}
                            />
                        </Grid>
                    ))}
            </Grid>
            <DeviceSpecificationList
                {...others}
                query={query}
                buyNow={true}
                connector={"jacdac"}
                firmwareSources={firmwareSources}
                hardwareDesign={hardwareDesign}
                serviceClass={serviceClass}
                tags={selectedTags}
            />
            <div style={{ marginTop: "5rem" }} />
            <DeviceSpecificationList
                {...others}
                header={"Grove, Qwiic, STEMMA QT connectors"}
                query={query}
                buyNow={true}
                connector={"grove"}
                firmwareSources={firmwareSources}
                hardwareDesign={hardwareDesign}
                serviceClass={serviceClass}
                tags={selectedTags}
            />
            <div style={{ marginTop: "5rem" }} />
            <DeviceSpecificationList
                {...others}
                header={
                    "No PCB Edge connector (does not connect with Jacdac cables)"
                }
                query={query}
                buyNow={true}
                connector={"none"}
                firmwareSources={firmwareSources}
                hardwareDesign={hardwareDesign}
                serviceClass={serviceClass}
                tags={selectedTags}
            />
            <div style={{ marginTop: "5rem" }} />
            <DeviceSpecificationList
                {...others}
                header={"Prototypes (not available for purchase)"}
                query={query}
                buyNow={false}
                firmwareSources={firmwareSources}
                hardwareDesign={hardwareDesign}
                serviceClass={serviceClass}
                tags={selectedTags}
            />
        </>
    )
}
