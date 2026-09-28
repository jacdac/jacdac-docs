import React from "react"
import { AlertTitle } from "@mui/material"
import Alert from "../ui/Alert"
import { Link } from "../ui/GatsbyMuiCompat"

export default function HelpAlert() {
    return (
        <Alert sx={{ mt: 2 }} severity="info">
            <AlertTitle>Need help?</AlertTitle>
            Start a{" "}
            <Link
                target="_blank"
                href="https://github.com/jacdac/jacdac/discussions"
            >
                GitHub Discussion
            </Link>
        </Alert>
    )
}
