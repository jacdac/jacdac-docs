import React, { useEffect, useState } from "react"
import {
    Card,
    CardContent,
    CardActions,
    CardHeader,
    Typography,
    Input,
} from "@mui/material"
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import CheckIcon from "@mui/icons-material/Check"
// tslint:disable-next-line: no-submodule-imports
import Alert from "./ui/Alert"
import { Button } from "gatsby-theme-material-ui"
import { NoSsr } from "@mui/material"
import { useId } from "react"
import useDeviceCatalog from "./devices/useDeviceCatalog"
import SwitchWithLabel from "./ui/SwitchWithLabel"

export default function RandomGenerator(props: {
    device?: boolean
    firmware?: boolean
}) {
    const { device, firmware } = props
    const [hex, setHex] = useState(true)
    const fieldId = useId()
    const deviceCatalog = useDeviceCatalog()

    const compute = () =>
        device
            ? deviceCatalog.uniqueDeviceId()
            : firmware
            ? deviceCatalog.uniqueFirmwareId(!hex)
            : deviceCatalog.uniqueServiceId()

    const [value, setValue] = useState(compute())
    const [copySuccess, setCopySuccess] = useState(false)

    const handleRegenerate = () => {
        const v = compute()
        setValue(v)
        setCopySuccess(false)
    }
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(value)
            setCopySuccess(true)
        } catch (err) {
            setCopySuccess(false)
        }
    }
    const handleHex = (ev, checked: boolean) => {
        setHex(checked)
    }
    useEffect(handleRegenerate, [hex])
    const title = device
        ? "Random Device Identifier"
        : firmware
        ? "Random Product Identifier"
        : "Random Service Identifier"
    return (
        <NoSsr>
            <Card>
                <CardHeader title={title} />
                <CardContent>
                    {value !== undefined && (
                        <Typography variant="h5" component="h2">
                            <Input
                                id={fieldId}
                                value={value}
                                readOnly={true}
                                inputProps={{
                                    "aria-label": "generated identifier",
                                }}
                            />
                            {copySuccess && <CheckIcon />}
                        </Typography>
                    )}
                    {value === undefined && (
                        <Alert severity="error">
                            Oops, unable to generate a strong random number.
                        </Alert>
                    )}
                </CardContent>
                <CardActions>
                    {firmware && <SwitchWithLabel label="hex" checked={hex} onChange={handleHex} />}
                    <Button
                        aria-label="copy random number to clipboard"
                        size="small"
                        variant="contained"
                        onClick={handleCopy}
                    >
                        Copy
                    </Button>
                    <Button
                        aria-label="regenerate random number"
                        size="small"
                        variant="contained"
                        color="primary"
                        onClick={handleRegenerate}
                    >
                        Regenerate
                    </Button>
                </CardActions>
            </Card>
        </NoSsr>
    )
}
