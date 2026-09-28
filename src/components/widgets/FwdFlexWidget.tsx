import React, { useId, useRef } from "react"
import SvgWidget from "./SvgWidget"
import useFwdVerticalDrag from "./useFwdVerticalDrag"

// strip silhouette: wide end at the top, base at the bottom
const strip =
    "M125.3,92.4s54.1,41.8,49.9,191.6h27.4s-8.4-127.7,41.3-191.6h-118.6Z"
const stripTop = 92.4
const stripBottom = 284

export default function FwdFlexWidget(props: {
    value: number
    size?: string
    onChange?: (value: number) => void
}) {
    const { value, size = "clamp(18rem, 15.5vw, 20.6vh)", onChange } = props
    const svgRef = useRef<SVGSVGElement>()
    const clipId = `fwdflex${useId().replace(/:/g, "")}`
    const dragProps = useFwdVerticalDrag<SVGGElement>(
        svgRef,
        stripTop,
        stripBottom,
        onChange
    )

    // bending is signed (-1..1); the strip fills by magnitude, the text keeps the sign
    const hasValue = !isNaN(value)
    const bend = hasValue ? Math.min(1, Math.abs(value)) : 0
    const output = hasValue ? `${Math.round(value * 100)}%` : "--"
    const fill = bend * (stripBottom - stripTop)

    const w = 368.7
    const h = 474.9

    return (
        <SvgWidget width={w} height={h} size={size} svgRef={svgRef}>
            <defs>
                <clipPath id={clipId}>
                    <path d={strip} />
                </clipPath>
            </defs>
            <path
                d="M327,62.8c0-8.2-6.7-14.9-14.9-14.9H63.3c-8.2,0-14.8,6.6-14.8,14.9M48.5,62.8v184.3c0,2.7,2.2,4.9,4.9,4.9h27.1c2.8,0,5.1,2.3,5.1,5.1v13.6c0,2.8-2.3,5.1-5.1,5.1h-36.4c-3.5,0-6.3,2.8-6.3,6.3v38c0,3.5,2.8,6.3,6.3,6.3h36.4c2.8,0,5.1,2.3,5.1,5.1v13.7c0,2.8-2.3,5.1-5.1,5.1h-27.1c-2.7,0-4.9,2.2-4.9,4.9v69.7c0,8.2,6.6,14.8,14.8,14.8h248.8c8.3,0,14.9-6.6,14.9-14.8v-67.4c0-4.6-3.7-8.3-8.3-8.3h-24.9c-3.1,0-5.6-2.5-5.6-5.6v-10.5c0-3.1,2.5-5.6,5.5-5.6l37.4-.5c3.7,0,6.6-3,6.6-6.7v-37.7c0-3.7-3-6.7-6.7-6.7h-37.3c-3.1,0-5.6-2.5-5.6-5.6h.1v-10.5c0-3.1,2.5-5.6,5.6-5.6h24.9c4.6,0,8.3-3.7,8.3-8.3V62.8M105.8,235.7c-7.6,0-13.7-6.1-13.7-13.7s6.1-13.6,13.7-13.6,13.6,6.1,13.6,13.6-6.1,13.7-13.6,13.7ZM270.2,235.7c-7.6,0-13.7-6.1-13.7-13.7s6.1-13.6,13.7-13.6,13.6,6.1,13.6,13.6-6.1,13.7-13.6,13.7ZM105.8,398.1c-7.6,0-13.7-6.1-13.7-13.7s6.1-13.6,13.7-13.6,13.6,6.1,13.6,13.6-6.1,13.7-13.6,13.7ZM270.2,398.1c-7.6,0-13.7-6.1-13.7-13.7s6.1-13.6,13.7-13.6,13.6,6.1,13.6,13.6-6.1,13.7-13.6,13.7Z"
                fill="none"
                stroke="#333"
                strokeMiterlimit="10"
                strokeWidth="3px"
            />
            <rect
                x="160.3"
                y="420.7"
                width="62.4"
                height="18.4"
                fill="none"
                stroke="#333"
                strokeMiterlimit="10"
                strokeWidth="3px"
            />
            <text
                x="65.9"
                y="79.1"
                fill="#231f20"
                fontFamily="Galano Grotesque Bold"
                fontSize="19.22px"
            >
                FLEX
            </text>
            <g>
                <circle cx="297.2" cy="70.9" r="4.52" fill="#231f20" />
                <g
                    fill="none"
                    stroke="#231f20"
                    strokeMiterlimit="10"
                    strokeWidth="2px"
                >
                    <path d="M291.36,64.12s-6.16,7.41,0,13.57" />
                    <path d="M285.43,60.37s-6.16,11.5,0,21.06" />
                    <path d="M302.82,64.12s6.16,7.41,0,13.57" />
                    <path d="M308.74,60.37s6.16,11.5,0,21.06" />
                </g>
            </g>
            <g fill="#878787">
                <rect x="50.8" y="288.1" width="29.6" height="5.8" rx="2.9" />
                <rect x="46.6" y="298.1" width="33.8" height="5.8" rx="2.9" />
                <rect x="46.6" y="308.2" width="33.8" height="5.8" rx="2.9" />
                <rect x="293.9" y="288.1" width="33.7" height="5.8" rx="2.9" />
                <rect x="293.9" y="298.1" width="33.7" height="5.8" rx="2.9" />
                <rect x="293.9" y="308.2" width="29.6" height="5.8" rx="2.9" />
            </g>
            <g fill="#fff">
                <circle cx="77.6" cy="291" r="1.6" />
                <circle cx="77.6" cy="301" r="1.6" />
                <circle cx="77.6" cy="311.1" r="1.6" />
                <circle cx="296.7" cy="291" r="1.6" />
                <circle cx="296.7" cy="301" r="1.6" />
                <circle cx="296.7" cy="311.1" r="1.6" />
            </g>
            <g {...dragProps} aria-label={`flex ${output}`}>
                <path d={strip} fill="#eaeaea" />
                <rect
                    x="120"
                    y={stripBottom - fill}
                    width="130"
                    height={fill}
                    fill="#65479c"
                    clipPath={`url(#${clipId})`}
                />
            </g>
            <text
                x="187.8"
                y="338.5"
                fill="#231f20"
                fontFamily="Galano Grotesque Bold"
                fontSize="35px"
                textAnchor="middle"
            >
                {output}
            </text>
        </SvgWidget>
    )
}
