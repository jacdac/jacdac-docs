import { useEffect, useState } from "react"
import { ROLE_MANAGER_CHANGE } from "../../../jacdac-ts/src/jdom/constants"
import { RoleManagerClient } from "../../../jacdac-ts/src/jdom/clients/rolemanagerclient"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import JacdacContext, { JacdacContextProps } from "../../jacdac/Context"
import useBus from "../../jacdac/useBus"

export default function useRoleManagerClient(): RoleManagerClient {
    const bus = useBus()
    const [mgr, setMgr] = useState<RoleManagerClient>(bus.roleManager)
    useEffect(() => {
        // bus.roleManager may have changed between the initial render and this
        // effect running (e.g. the role manager service just got discovered);
        // re-sync immediately instead of only reacting to future events
        setMgr(bus.roleManager)
        return bus.subscribe(ROLE_MANAGER_CHANGE, () => setMgr(bus.roleManager))
    }, [bus])
    return mgr
}
