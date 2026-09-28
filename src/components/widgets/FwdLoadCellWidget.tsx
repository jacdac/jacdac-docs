import React from "react"
import {
    FwdPill,
    FwdSquareFaceplate,
    FWD_LINE,
    FWD_PURPLE,
} from "./FwdFaceplates"

// The weight scale service reports kg. Shown in g below 1 kg.
function formatWeight(kg: number) {
    if (isNaN(kg)) return "-- g"
    if (Math.abs(kg) < 1) return `${Math.round(kg * 1000)} g`
    return `${kg.toFixed(2)} kg`
}

export default function FwdLoadCellWidget(props: {
    value: number
    size?: string
}) {
    const { value, size } = props

    // platform sinks and the block grows, easing off towards heavy loads
    const kg = isNaN(value) ? 0 : Math.max(0, value)
    const k = 1 - Math.exp(-kg / 0.5)
    const dip = k * 10
    const blockWidth = 22 + k * 34
    const blockHeight = 12 + k * 22
    const output = formatWeight(value)

    return (
        <FwdSquareFaceplate label="LOAD CELL" size={size}>
            <g aria-label={output}>
                <rect
                    x="120"
                    y="170"
                    width="110"
                    height="10"
                    rx="3"
                    fill="#d9d9d9"
                    stroke={FWD_LINE}
                    strokeWidth="2"
                />
                <rect
                    x="170"
                    y={148 + dip}
                    width="10"
                    height={22 - dip}
                    fill={FWD_LINE}
                />
                <rect
                    x="118"
                    y={140 + dip}
                    width="114"
                    height="9"
                    rx="3"
                    fill="#fff"
                    stroke={FWD_LINE}
                    strokeWidth="2.5"
                />
                <rect
                    x={175 - blockWidth / 2}
                    y={140 + dip - blockHeight}
                    width={blockWidth}
                    height={blockHeight}
                    rx="3"
                    fill={kg >= 0.001 ? FWD_PURPLE : "#fff"}
                    stroke={FWD_LINE}
                    strokeWidth="2"
                />
            </g>
            <FwdPill cx={175} cy={222} width={160}>
                {output}
            </FwdPill>
        </FwdSquareFaceplate>
    )
}
