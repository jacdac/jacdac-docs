import React, { ReactNode } from "react"
import SvgWidget from "./SvgWidget"

// Shared FE module faceplates: board outline, all-caps label, Jacdac icon,
// connector tabs and the 5-pin header. Widgets draw their readout as children.

export const FWD_INK = "#231f20"
export const FWD_LINE = "#333"
export const FWD_PILL = "#eaeaea"
export const FWD_PURPLE = "#65479c"
export const FWD_FONT = "Galano Grotesque Bold"

function JacdacIcon(props: { cx: number; cy: number }) {
    const { cx, cy } = props
    return (
        <g>
            <circle cx={cx} cy={cy} r="4.52" fill={FWD_INK} />
            <g
                fill="none"
                stroke={FWD_INK}
                strokeMiterlimit="10"
                strokeWidth="2px"
                transform={`translate(${cx} ${cy})`}
            >
                <path d="M-5.84,-6.78s-6.16,7.41,0,13.57" />
                <path d="M-11.77,-10.53s-6.16,11.5,0,21.06" />
                <path d="M5.62,-6.78s6.16,7.41,0,13.57" />
                <path d="M11.54,-10.53s6.16,11.5,0,21.06" />
            </g>
        </g>
    )
}

function Label(props: { x: number; y: number; children: ReactNode }) {
    const { x, y, children } = props
    return (
        <text
            x={x}
            y={y}
            fill={FWD_INK}
            fontFamily={FWD_FONT}
            fontSize="19.22px"
        >
            {children}
        </text>
    )
}

// grey connector bars on both side tabs; y = top bar
function ConnectorTabs(props: {
    y: number
    left: number
    right: number
    dotLeft: number
    dotRight: number
}) {
    const { y, left, right, dotLeft, dotRight } = props
    return (
        <>
            <g fill="#878787">
                <rect x={left + 4.2} y={y} width="29.6" height="5.8" rx="2.9" />
                <rect x={left} y={y + 10} width="33.8" height="5.8" rx="2.9" />
                <rect
                    x={left}
                    y={y + 20.1}
                    width="33.8"
                    height="5.8"
                    rx="2.9"
                />
                <rect
                    x={right - 33.7}
                    y={y}
                    width="33.7"
                    height="5.8"
                    rx="2.9"
                />
                <rect
                    x={right - 33.7}
                    y={y + 10}
                    width="33.7"
                    height="5.8"
                    rx="2.9"
                />
                <rect
                    x={right - 33.7}
                    y={y + 20.1}
                    width="29.6"
                    height="5.8"
                    rx="2.9"
                />
            </g>
            <g fill="#fff">
                <circle cx={dotLeft} cy={y + 2.9} r="1.6" />
                <circle cx={dotLeft} cy={y + 12.9} r="1.6" />
                <circle cx={dotLeft} cy={y + 23} r="1.6" />
                <circle cx={dotRight} cy={y + 2.9} r="1.6" />
                <circle cx={dotRight} cy={y + 12.9} r="1.6" />
                <circle cx={dotRight} cy={y + 23} r="1.6" />
            </g>
        </>
    )
}

/** Readout pill used on the square boards (BME280 style). */
export function FwdPill(props: {
    cx: number
    cy: number
    width: number
    children: ReactNode
}) {
    const { cx, cy, width, children } = props
    return (
        <g>
            <rect
                x={cx - width / 2}
                y={cy - 25}
                width={width}
                height="50"
                rx="12"
                ry="12"
                fill={FWD_PILL}
            />
            <text
                x={cx}
                y={cy + 9.5}
                fill={FWD_INK}
                fontFamily={FWD_FONT}
                fontSize="26.08px"
                textAnchor="middle"
            >
                {children}
            </text>
        </g>
    )
}

/** Square board (BME280 outline), 350 x 350. Content centre line is x = 175. */
export function FwdSquareFaceplate(props: {
    label: string
    size?: string
    svgRef?: React.MutableRefObject<SVGSVGElement>
    children?: ReactNode
}) {
    const { label, size = "clamp(14rem, 12vw, 16vh)", svgRef, children } = props
    return (
        <SvgWidget width={350} height={350} size={size} svgRef={svgRef}>
            <path
                d="M275.44,147.63v-10.44c0-3.11,2.52-5.63,5.63-5.63h24.89c4.58,0,8.29-3.71,8.29-8.29V54.85c0-8.22-6.66-14.89-14.89-14.89H50.56c-8.17,0-14.8,6.63-14.8,14.89v69.73c0,2.69,2.18,4.87,4.87,4.87h27.06c2.81,0,5.09,2.28,5.09,5.09v13.63c0,2.81-2.28,5.09-5.09,5.09H31.26c-3.48,0-6.3,2.82-6.3,6.3v38.01c0,3.48,2.82,6.3,6.3,6.3h36.43c2.81,0,5.09,2.28,5.09,5.09v13.72c0,2.81-2.28,5.09-5.09,5.09h-27.06c-2.69,0-4.87,2.18-4.87,4.87v69.73c0,8.17,6.63,14.8,14.8,14.8h248.79c8.25,0,14.89-6.63,14.89-14.8v-67.42c0-4.58-3.71-8.29-8.29-8.29h-24.89c-3.11,0-5.63-2.52-5.63-5.63v-10.52c0-3.08,2.47-5.58,5.55-5.63l37.44-.53c3.67-.05,6.62-3.04,6.62-6.71v-37.68c0-3.71-3.01-6.71-6.71-6.71h-37.26c-3.11,0-5.63-2.52-5.63-5.63h0Z"
                fill="none"
                stroke={FWD_LINE}
                strokeMiterlimit="10"
                strokeWidth="3px"
            />
            <Label x={53.16} y={71.17}>
                {label}
            </Label>
            <JacdacIcon cx={284.47} cy={63} />
            <ConnectorTabs
                y={165.56}
                left={33.87}
                right={314.92}
                dotLeft={64.83}
                dotRight={283.96}
            />
            <g fill="none" stroke={FWD_LINE} strokeMiterlimit="10">
                <circle cx="150.34" cy="297.63" r="3.84" />
                <circle cx="162.67" cy="297.63" r="3.84" />
                <circle cx="175" cy="297.63" r="3.84" />
                <circle cx="187.33" cy="297.63" r="3.84" />
                <circle cx="199.66" cy="297.63" r="3.84" />
                <polyline points="145.51 292.17 145.51 288.69 204.27 288.69 204.27 292.17" />
                <polyline points="145.62 303.09 145.62 306.57 204.38 306.57 204.38 303.09" />
            </g>
            {children}
        </SvgWidget>
    )
}

/** Tall board (Slider outline), 368.7 x 622.8. Content centre line is x = 187.8. */
export function FwdTallFaceplate(props: {
    label: string
    size?: string
    svgRef?: React.MutableRefObject<SVGSVGElement>
    children?: ReactNode
}) {
    const {
        label,
        size = "clamp(23.6rem, 20.3vw, 27vh)",
        svgRef,
        children,
    } = props
    return (
        <SvgWidget width={368.7} height={622.8} size={size} svgRef={svgRef}>
            <path
                d="M327,59.1c0-8.2-6.7-14.9-14.9-14.9H63.3c-8.2,0-14.8,6.6-14.8,14.9M48.5,59.1v335.9c0,2.7,2.2,4.9,4.9,4.9h27.1c2.8,0,5.1,2.3,5.1,5.1v13.6c0,2.8-2.3,5.1-5.1,5.1h-36.4c-3.5,0-6.3,2.8-6.3,6.3v38c0,3.5,2.8,6.3,6.3,6.3h36.4c2.8,0,5.1,2.3,5.1,5.1v13.7c0,2.8-2.3,5.1-5.1,5.1h-27.1c-2.7,0-4.9,2.2-4.9,4.9v69.7c0,8.2,6.6,14.8,14.8,14.8h248.8c8.3,0,14.9-6.6,14.9-14.8v-67.4c0-4.6-3.7-8.3-8.3-8.3h-24.9c-3.1,0-5.6-2.5-5.6-5.6v-10.5c0-3.1,2.5-5.6,5.5-5.6l37.4-.5c3.7,0,6.6-3,6.6-6.7v-37.7c0-3.7-3-6.7-6.7-6.7h-37.3c-3.1,0-5.6-2.5-5.6-5.6h.1v-10.5c0-3.1,2.5-5.6,5.6-5.6h24.9c4.6,0,8.3-3.7,8.3-8.3V59.1M105.8,383.6c-7.6,0-13.7-6.1-13.7-13.7s6.1-13.6,13.7-13.6,13.6,6.1,13.6,13.6-6.1,13.7-13.6,13.7ZM270.2,383.6c-7.6,0-13.7-6.1-13.7-13.7s6.1-13.6,13.7-13.6,13.6,6.1,13.6,13.6-6.1,13.7-13.6,13.7ZM105.8,546c-7.6,0-13.7-6.1-13.7-13.7s6.1-13.6,13.7-13.6,13.6,6.1,13.6,13.6-6.1,13.7-13.6,13.7ZM270.2,546c-7.6,0-13.7-6.1-13.7-13.7s6.1-13.6,13.7-13.6,13.6,6.1,13.6,13.6-6.1,13.7-13.6,13.7Z"
                fill="none"
                stroke={FWD_LINE}
                strokeMiterlimit="10"
                strokeWidth="3px"
            />
            <rect
                x="160.3"
                y="568.6"
                width="62.4"
                height="18.4"
                fill="none"
                stroke={FWD_LINE}
                strokeMiterlimit="10"
                strokeWidth="3px"
            />
            <Label x={65.9} y={75.4}>
                {label}
            </Label>
            <JacdacIcon cx={297.2} cy={67.2} />
            <ConnectorTabs
                y={436}
                left={46.6}
                right={327.6}
                dotLeft={77.6}
                dotRight={296.7}
            />
            {children}
        </SvgWidget>
    )
}
