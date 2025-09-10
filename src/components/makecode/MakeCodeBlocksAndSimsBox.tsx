import { Box } from "@mui/material"
import React from "react"
import StartMissingSimulatorsButton from "../buttons/StartMissingSimulatorsButton"
import MakeCodeAddBlocksButton from "./MakeCodeAddBlocksButton"
import { tL } from "../translations"

export default function MakeCodeBlocksAndSimsBox() {

  return (
      <Box m={1}>
        <MakeCodeAddBlocksButton />
        <StartMissingSimulatorsButton
        variant="contained"
        >
          {tL("simAdd")}
        </StartMissingSimulatorsButton>
      </Box>
      )
}
