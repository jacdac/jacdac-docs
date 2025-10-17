import React, { ChangeEvent, useEffect, useState } from "react"
import {
    CursorCharacterScreenReg,
    CursorCharacterScreenCmd,
} from "../../../jacdac-ts/src/jdom/constants"
import { DashboardServiceProps } from "./DashboardServiceWidget"
import { useRegisterUnpackedValue } from "../../jacdac/useRegisterValue"
import { Grid, TextField } from "@mui/material"
import useRegister from "../hooks/useRegister"
import CmdButton from "../CmdButton"
import ClearIcon from "@mui/icons-material/Clear"
import CharacterScreenWidget from "../widgets/CharacterScreenWidget"
import DashboardRegisterValueFallback from "./DashboardRegisterValueFallback"
import { CursorCharacterScreenServer } from "../../../jacdac-ts/src/servers/cursorcharscreenserver"
import useServiceServer from "../hooks/useServiceServer"
import { tL } from "../translations"

export default function DashboardCursorCharacterScreen(props: DashboardServiceProps) {
    const { service, expanded } = props

    const server = useServiceServer<CursorCharacterScreenServer>(
        service,
        () => new CursorCharacterScreenServer()
    )

    const rowsRegister = useRegister(service, CursorCharacterScreenReg.Rows)
    const columnsRegister = useRegister(service, CursorCharacterScreenReg.Columns)
    const enabledRegister = useRegister(service,CursorCharacterScreenReg.Enabled)
    const [rows] = useRegisterUnpackedValue<[number]>(rowsRegister, props)
    const [columns] = useRegisterUnpackedValue<[number]>(columnsRegister, props)
    const [enabled] = useRegisterUnpackedValue<[number]>(
        enabledRegister,
        props
    )

    const [screen, setScreen] = useState<string>(server.screen)

    const [fieldMessage, setFieldMessage] = useState(screen)

    const handleClear = async () => {
        setFieldMessage("")
        server.clear()
    }

    const handleFieldMessageChange = async (
        ev: ChangeEvent<HTMLTextAreaElement>
    ) => {
        setFieldMessage(ev.target.value)
        server.clear()
        server.show(ev.target.value)
    }

    // listen for clear command
    useEffect(
        () =>
            server.subscribe(CursorCharacterScreenServer.UPDATE, () => {
                setScreen(server.screen)
            }),
        [server]
    )

    if (rows === undefined || columns === undefined)
        return (
            <DashboardRegisterValueFallback
                register={rows === undefined ? rowsRegister : columnsRegister}
            />
        ) // size unknown

    return (
        <Grid container spacing={1}>
            {expanded && (
                <Grid item xs={12}>
                    <Grid container spacing={1}>
                        <Grid item xs>
                            <TextField
                                label={tL("text")}
                                value={fieldMessage}
                                onChange={handleFieldMessageChange}
                                multiline={true}
                                rows={rows || 2}
                                fullWidth={true}
                            />
                        </Grid>
                        <Grid item>
                            <CmdButton
                                title={tL("clear the entire display")}
                                onClick={handleClear}
                                icon={<ClearIcon />}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            )}
            <Grid item xs>
                <CharacterScreenWidget
                    rows={rows}
                    columns={columns}
                    rtl={false}
                    message={screen}
                    disabled={enabled === 0}
                />
            </Grid>
        </Grid>
    )
}
