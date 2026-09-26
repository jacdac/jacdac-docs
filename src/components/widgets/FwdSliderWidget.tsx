import React, { useRef } from "react"
import useFwdVerticalDrag from "./useFwdVerticalDrag"
import {
    FwdTallFaceplate,
    FWD_FONT,
    FWD_INK,
    FWD_PILL,
    FWD_PURPLE,
} from "./FwdFaceplates"

// track extent in viewBox units
const trackTop = 94.6
const trackBottom = 416.2

export default function FwdSliderWidget(props: {
    value: number
    size?: string
    onChange?: (value: number) => void
}) {
    const { value, size, onChange } = props
    const svgRef = useRef<SVGSVGElement>()
    const dragProps = useFwdVerticalDrag<SVGGElement>(
        svgRef,
        trackTop,
        trackBottom,
        onChange
    )

    const hasValue = !isNaN(value)
    const position = hasValue ? Math.max(0, Math.min(1, value)) : 0
    const output = hasValue ? `${Math.round(value * 100)}%` : "--"
    const fill = position * (trackBottom - trackTop)

    return (
        <FwdTallFaceplate label="SLIDER" size={size} svgRef={svgRef}>
            <g {...dragProps} aria-label={`slider ${output}`}>
                <rect
                    x="149.1"
                    y={trackTop}
                    width="77.4"
                    height={trackBottom - trackTop}
                    rx="11.2"
                    ry="11.2"
                    fill={FWD_PILL}
                />
                <rect
                    x="149.1"
                    y={trackBottom - fill}
                    width="77.4"
                    height={fill}
                    rx="11.2"
                    ry="11.2"
                    fill={FWD_PURPLE}
                />
            </g>
            <text
                x="187.8"
                y="486.4"
                fill={FWD_INK}
                fontFamily={FWD_FONT}
                fontSize="35px"
                textAnchor="middle"
            >
                {output}
            </text>
        </FwdTallFaceplate>
    )
}
