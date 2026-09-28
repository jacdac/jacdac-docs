import React from "react"
import {
    FwdSquareFaceplate,
    FWD_FONT,
    FWD_INK,
    FWD_LINE,
} from "./FwdFaceplates"

// strip area below the screw terminal, in viewBox units
const stripLeft = 84
const stripWidth = 182
const firstRowY = 191
const maxRows = 3

export default function FwdNeopixelWidget(props: {
    pixels?: Uint8Array
    numPixels?: number
    size?: string
}) {
    const { pixels, numPixels, size } = props

    // up to 8 per row, wrapping to 3 rows; longer strips pack more per row
    const count = numPixels ?? (pixels ? Math.floor(pixels.length / 3) : 0)
    const perRow = Math.max(Math.min(8, count), Math.ceil(count / maxRows), 1)
    const rows = Math.max(1, Math.ceil(count / perRow))
    const pitch = (stripWidth - 4) / perRow
    const r = Math.min(8.5, pitch * 0.38)
    const rowPitch = Math.max(2 * r + 6, 14)
    const stripHeight = (rows - 1) * rowPitch + 2 * r + 9

    const color = (i: number) => {
        const k = i * 3
        if (!pixels || k + 2 >= pixels.length) return "#555"
        const [red, green, blue] = [pixels[k], pixels[k + 1], pixels[k + 2]]
        // an unlit LED reads as dark grey rather than disappearing into the outline
        if (!red && !green && !blue) return "#555"
        return `rgb(${red}, ${green}, ${blue})`
    }

    const label = count ? `${count} LED${count === 1 ? "" : "s"}` : "-- LEDs"

    return (
        <FwdSquareFaceplate label="NEOPIXEL" size={size}>
            <rect
                x="100"
                y="104"
                width="54"
                height="34"
                rx="3"
                fill="#3fae49"
                stroke={FWD_LINE}
                strokeWidth="2"
            />
            <g fill="#2f8a37" stroke={FWD_LINE} strokeWidth="1.5">
                <circle cx="109" cy="121" r="5.5" />
                <circle cx="127" cy="121" r="5.5" />
                <circle cx="145" cy="121" r="5.5" />
            </g>
            <path
                d={`M154,121 C180,121 170,${firstRowY - r - 4} 196,${
                    firstRowY - r - 4
                }`}
                fill="none"
                stroke={FWD_LINE}
                strokeWidth="3"
            />
            <rect
                x={stripLeft}
                y={firstRowY - r - 4.5}
                width={stripWidth}
                height={stripHeight}
                rx="6"
                fill="#fff"
                stroke={FWD_LINE}
                strokeWidth="2"
            />
            <g stroke={FWD_LINE} strokeWidth="1.5" aria-label={label}>
                {Array.from({ length: count }, (_, i) => (
                    <circle
                        key={i}
                        cx={stripLeft + 2 + pitch * ((i % perRow) + 0.5)}
                        cy={firstRowY + Math.floor(i / perRow) * rowPitch}
                        r={r}
                        fill={color(i)}
                    />
                ))}
            </g>
            <text
                x="175"
                y={firstRowY - r - 4.5 + stripHeight + 26}
                fill={FWD_INK}
                fontFamily={FWD_FONT}
                fontSize="20px"
                textAnchor="middle"
            >
                {label}
            </text>
        </FwdSquareFaceplate>
    )
}
