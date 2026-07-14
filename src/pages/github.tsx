import { Link } from "../components/ui/GatsbyMuiCompat"
import React from "react"
import PageLinkList from "../components/ui/PageLinkList"

export const frontmatter = {
    title: "GitHub repositories",
}
import CoreHead from "../components/shell/Head"
export const Head = props => <CoreHead {...props} {...frontmatter} />

export default function Page() {
    return (
        <>
            <h1>GitHub Repositories</h1>
            <p>
                Jacdac is Open Source on GitHub. Here is a map to help you find
                the part you want:
            </p>
            <h2>Discussions</h2>
            <p>
                Post your questions, bugs, suggestions on the centralized
                discussions at{" "}
                <a href="https://github.com/jacdac/jacdac/discussions">
                    https://github.com/jacdac/jacdac/discussions
                </a>
                .
            </p>
            <h2>Videos on Youtube</h2>
            <p>
                The{" "}
                <a href="https://www.youtube.com/channel/UCDDeOurixeITal31eI4Ga2g">
                    Jacdac channel
                </a>{" "}
                hosts various videos on using Jacdac.
            </p>
            <h2>Specification and Schematics</h2>
            <PageLinkList
                dense
                nodes={[
                    {
                        title: "jacdac/jacdac",
                        description:
                            "Service specifications and device catalog",
                        href: "https://github.com/jacdac/jacdac",
                    },
                    {
                        title: "jacdac/jacdac-ddk",
                        description: "Device Development Kit",
                        href: "https://github.com/jacdac/jacdac-ddk",
                    },
                ]}
            />
            <h2>Module Development</h2>

            <h3>Server SDKs</h3>
            <PageLinkList
                dense
                nodes={[
                    {
                        title: "jacdac/jacdac-c",
                        description: "C Firmware library",
                        href: "https://github.com/jacdac/jacdac-c",
                    },
                    {
                        title: "jacdac/jacdac-stm32x0",
                        description: "Firmware library for STM32F0 and similar",
                        href: "https://github.com/jacdac/jacdac-stm32x0",
                    },
                    {
                        title: "jacdac/jacdac-msr-modules",
                        description:
                            "Firmware for prototype Jacdac modules made by Microsoft Research",
                        href: "https://github.com/jacdac/jacdac-msr-modules",
                    },
                    {
                        title: "jacdac/jacdac-module-template",
                        description:
                            "Template repository for firmware for a STM32G0-based Jacdac module",
                        href: "https://github.com/jacdac/jacdac-module-template",
                    },
                    {
                        title: "jacdac/jacdac-esp32",
                        description: "Firmware library for ESP32 IDF",
                        href: "https://github.com/jacdac/jacdac-esp32",
                    },
                    {
                        title: "jacdac/jacdac-pico",
                        description: "Firmware library for Raspberry Pi Pico",
                        href: "https://github.com/jacdac/jacdac-pico",
                    },
                    {
                        title: "jacdac/jacdac-padauk",
                        description: "Firmware library for PADAUK",
                        href: "https://github.com/jacdac/jacdac-padauk",
                    },
                    {
                        title: "jacdac/jacdac-posix",
                        description:
                            "Firmware library for native Jacdac on desktop",
                        href: "https://github.com/jacdac/jacdac-posix",
                    },
                    {
                        title: "jacdac/codal-jacdac",
                        description: "Jacdac-C SDK integration for CODAL",
                        href: "https://github.com/jacdac/codal-jacdac",
                    },
                ]}
            />

            <h2>Client SDKs</h2>

            <PageLinkList
                dense
                nodes={[
                    {
                        title: "jacdac/jacdac-ts",
                        description: "TypeScript/JavaScript library",
                        href: "https://github.com/jacdac/jacdac-ts",
                    },
                    {
                        title: "microsoft/devicescript",
                        description: "DeviceScript compiler and runtime",
                        href: "https://github.com/microsoft/devicescript",
                    },
                    {
                        title: "jacdac/jacdac-dotnet",
                        description: ".NET (desktop, nano, tiny) library",
                        href: "https://github.com/jacdac/jacdac-dotnet",
                    },
                    {
                        title: "jacdac/jacdac-python",
                        description: "Python (desktop) library",
                        href: "https://github.com/jacdac/jacdac-python",
                    },
                    {
                        title: "jacdac/pxt-jacdac",
                        description: "MakeCode library",
                        href: "https://github.com/jacdac/pxt-jacdac",
                    },
                ]}
            />

            <h2>Integrations</h2>

            <PageLinkList
                dense
                nodes={[
                    {
                        title: "jacdac/jacdac-docs",
                        description: "Documentation, web tools and dashboard",
                        href: "https://github.com/jacdac/jacdac-docs",
                    },
                    {
                        title: "jacdac/jacdac-cli",
                        description: "Command line interface",
                        href: "https://github.com/jacdac/jacdac-cli",
                    },
                    {
                        title: "jacdac/react-jacdac",
                        description: "React library",
                        href: "https://github.com/jacdac/react-jacdac",
                    },
                    {
                        title: "jacdac/node-red-contrib-jacdac",
                        description: "node-red-contrib-jacdac",
                        href: "https://github.com/jacdac/node-red-contrib-jacdac",
                    },
                    {
                        title: "microsoft/microcode",
                        description: "MicroCode",
                        href: "https://github.com/microsoft/microcode",
                    },
                    {
                        title: "microsoft/devicescript",
                        description: "DeviceScript",
                        href: "https://github.com/microsoft/devicescript",
                    },
                ]}
            />
        </>
    )
}
