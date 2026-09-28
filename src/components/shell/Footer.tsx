import { Typography } from "@mui/material"
import { styled } from "@mui/material/styles"
import { Link } from "../ui/GatsbyMuiCompat"
import React from "react"
import TraceSaveButton from "../trace/TraceSaveButton"

const PREFIX = "Footer"

const classes = {
    footer: `${PREFIX}footer`,
}

const Root = styled("footer")(({ theme }) => ({
    [`&.${classes.footer}`]: {
        textAlign: "center",
        "& *": {
            fontSize: `${theme.typography.fontSize * 0.8}px`,
            textDecoration: "none",
            color: theme.palette.text.primary,
        },
        "& .note": {
            fontSize: `${theme.typography.fontSize * 0.9}px`,
        },
        "& a:hover": {
            textDecoration: "underline",
        },
        "& a:visited": {
            color: theme.palette.grey[400],
        },
        "& a": {
            marginRight: theme.spacing(0.5),
        },
    },
}))

export default function Footer() {
    const repo = process.env.GATSBY_GITHUB_REPOSITORY
    const sha = process.env.GATSBY_GITHUB_SHA

    return (
        <Root role="contentinfo" className={classes.footer}>
            <a
                href="https://github.com/jacdac/jacdac/discussions"
                target="_blank"
                rel="noopener noreferrer"
            >
                Contact Us
            </a>
            {repo && sha && (
                <>
                    |
                    <a
                        href={`https://github.com/${repo}/commit/${sha}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {sha.slice(0, 8)}
                    </a>
                </>
            )}
            | <TraceSaveButton variant="link" />
        </Root>
    )
}
