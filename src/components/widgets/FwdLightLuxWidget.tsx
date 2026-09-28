import React from "react"
import { FwdPill, FwdSquareFaceplate, FWD_LINE } from "./FwdFaceplates"

// log scale so a dim room still moves the sun; saturates in daylight
const fullScaleLux = 10000
const rays = Array.from({ length: 12 }, (_, i) => (i / 12) * 2 * Math.PI)

export default function FwdLightLuxWidget(props: {
    value: number
    size?: string
}) {
    const { value, size } = props

    const hasValue = !isNaN(value)
    const lux = hasValue ? Math.max(0, value) : 0
    const k = Math.min(1, Math.log10(1 + lux) / Math.log10(1 + fullScaleLux))
    const output = hasValue ? `${Math.round(lux)} lux` : "-- lux"
    const rayEnd = 32 + k * 26

    return (
        <FwdSquareFaceplate label="LIGHT LUX" size={size}>
            <g transform="translate(175 130)" aria-label={output}>
                <g
                    stroke={k > 0.02 ? "#f4be52" : "#bbb"}
                    strokeWidth="4"
                    strokeLinecap="round"
                    opacity={0.35 + 0.65 * k}
                >
                    {rays.map(a => (
                        <line
                            key={a}
                            x1={Math.cos(a) * 24}
                            y1={Math.sin(a) * 24}
                            x2={Math.cos(a) * rayEnd}
                            y2={Math.sin(a) * rayEnd}
                        />
                    ))}
                </g>
                <circle
                    r="19"
                    fill={`hsl(44 ${Math.round(20 + 70 * k)}% ${Math.round(
                        88 - 28 * k
                    )}%)`}
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
