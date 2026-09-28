import React from "react"
import SvgWidget from "./SvgWidget"
import useSvgButtonProps from "../hooks/useSvgButtonProps"
import useWidgetTheme from "./useWidgetTheme"
import { GamepadButtons } from "../../../jacdac-ts/src/jdom/constants"

// switch body top-left corner and cap centre for each direction
const keys: {
    button: GamepadButtons
    label: string
    x: number
    y: number
    cx: number
    cy: number
}[] = [
    {
        button: GamepadButtons.Up,
        label: "up",
        x: 149.01,
        y: 83.93,
        cx: 173.9,
        cy: 108.83,
    },
    {
        button: GamepadButtons.Right,
        label: "right",
        x: 221.69,
        y: 148.73,
        cx: 246.6,
        cy: 173.62,
    },
    {
        button: GamepadButtons.Down,
        label: "down",
        x: 149.01,
        y: 214.42,
        cx: 173.9,
        cy: 239.32,
    },
    {
        button: GamepadButtons.Left,
        label: "left",
        x: 76.33,
        y: 150.11,
        cx: 101.23,
        cy: 175.01,
    },
]

function DpadKey(props: {
    button: GamepadButtons
    label: string
    x: number
    y: number
    cx: number
    cy: number
    pressed: boolean
    active: string
    onDown?: (button: GamepadButtons) => void
    onUp?: (button: GamepadButtons) => void
}) {
    const { button, label, x, y, cx, cy, pressed, active, onDown, onUp } = props
    const buttonProps = useSvgButtonProps<SVGGElement>(
        `${label} ${pressed ? "down" : "up"}`,
        onDown && (() => onDown(button)),
        onUp && (() => onUp(button))
    )
    const s = 49.79

    return (
        <g {...buttonProps}>
            <rect
                x={x}
                y={y}
                width={s}
                height={s}
                fill="#fff"
                stroke="#333"
                strokeMiterlimit="10"
                strokeWidth="3px"
            />
            <circle
                cx={cx}
                cy={cy}
                r="13.67"
                fill={pressed ? active : "#333"}
            />
            <g fill="#333">
                <circle cx={x + 7.43} cy={y + 7.22} r="2.71" />
                <circle cx={x + 42.36} cy={y + 7.22} r="2.71" />
                <circle cx={x + 7.43} cy={y + 42.2} r="2.71" />
                <circle cx={x + 42.36} cy={y + 42.2} r="2.71" />
            </g>
        </g>
    )
}

export default function FwdDpadWidget(props: {
    buttons: number
    color?: "primary" | "secondary"
    size?: string
    onDown?: (button: GamepadButtons) => void
    onUp?: (button: GamepadButtons) => void
}) {
    const {
        buttons = 0,
        color,
        size = "clamp(14rem, 12vw, 16vh)",
        onDown,
        onUp,
    } = props

    // pressed caps use the theme highlight, like the other FE button widgets
    const { active } = useWidgetTheme(color)

    const w = 350
    const h = 350

    return (
        <SvgWidget width={w} height={h} size={size}>
            <path
                d="M205.93,275.44h10.44c3.11,0,5.63,2.52,5.63,5.63v24.89c0,4.58,3.71,8.29,8.29,8.29h68.44c8.22,0,14.89-6.66,14.89-14.89V50.57c0-8.17-6.63-14.8-14.89-14.8h-69.73c-2.69,0-4.87,2.18-4.87,4.87v27.06c0,2.81-2.28,5.09-5.09,5.09h-13.63c-2.81,0-5.09-2.28-5.09-5.09V31.26c0-3.48-2.82-6.3-6.3-6.3h-38.01c-3.48,0-6.3,2.82-6.3,6.3v36.43c0,2.81-2.28,5.09-5.09,5.09h-13.72c-2.81,0-5.09-2.28-5.09-5.09v-27.06c0-2.69-2.18-4.87-4.87-4.87H51.2c-8.17,0-14.8,6.63-14.8,14.8v248.79c0,8.25,6.63,14.89,14.8,14.89h67.42c4.58,0,8.29-3.71,8.29-8.29v-24.89c0-3.11,2.52-5.63,5.63-5.63h10.52c3.08,0,5.58,2.47,5.63,5.55l.53,37.44c.05,3.67,3.04,6.62,6.71,6.62h37.68c3.71,0,6.71-3.01,6.71-6.71v-37.26c0-3.11,2.52-5.63,5.63-5.63h0ZM240.43,93.1c0-7.59,6.11-13.7,13.7-13.7s13.63,6.11,13.63,13.7-6.11,13.63-13.63,13.63-13.7-6.11-13.7-13.63ZM240.43,257.5c0-7.59,6.11-13.7,13.7-13.7s13.63,6.11,13.63,13.7-6.11,13.63-13.63,13.63-13.7-6.11-13.7-13.63ZM77.96,93.1c0-7.59,6.11-13.7,13.7-13.7s13.63,6.11,13.63,13.7-6.11,13.63-13.63,13.63-13.7-6.11-13.7-13.63ZM77.96,257.5c0-7.59,6.11-13.7,13.7-13.7s13.63,6.11,13.63,13.7-6.11,13.63-13.63,13.63-13.7-6.11-13.7-13.63Z"
                fill="none"
                stroke="#333"
                strokeMiterlimit="10"
                strokeWidth="3px"
            />
            <g fill="#878787">
                <path d="M188.01,40.93v23.81c0,1.61-1.3,2.91-2.91,2.91h0c-1.61,0-2.91-1.3-2.91-2.91v-23.81c0-1.61,1.3-2.91,2.91-2.91h0c1.61,0,2.91,1.3,2.91,2.91Z" />
                <path d="M177.98,36.79v27.96c0,1.61-1.3,2.91-2.91,2.91h0c-1.61,0-2.91-1.3-2.91-2.91v-27.96c0-1.61,1.3-2.91,2.91-2.91h0c1.61,0,2.91,1.3,2.91,2.91Z" />
                <path d="M167.95,36.79v27.96c0,1.61-1.3,2.91-2.91,2.91h0c-1.61,0-2.91-1.3-2.91-2.91v-27.96c0-1.61,1.3-2.91,2.91-2.91h0c1.61,0,2.91,1.3,2.91,2.91Z" />
                <path d="M162.14,307.87v-23.81c0-1.61,1.3-2.91,2.91-2.91h0c1.61,0,2.91,1.3,2.91,2.91v23.81c0,1.61-1.3,2.91-2.91,2.91h0c-1.61,0-2.91-1.3-2.91-2.91Z" />
                <path d="M172.16,312.01v-27.96c0-1.61,1.3-2.91,2.91-2.91h0c1.61,0,2.91,1.3,2.91,2.91v27.96c0,1.61-1.3,2.91-2.91,2.91h0c-1.61,0-2.91-1.3-2.91-2.91Z" />
                <path d="M182.19,312.01v-27.96c0-1.61,1.3-2.91,2.91-2.91h0c1.61,0,2.91,1.3,2.91,2.91v27.96c0,1.61-1.3,2.91-2.91,2.91h0c-1.61,0-2.91-1.3-2.91-2.91Z" />
            </g>
            <g fill="#fff">
                <circle cx="185.15" cy="64.84" r="1.58" />
                <circle cx="175.01" cy="64.84" r="1.58" />
                <circle cx="164.87" cy="64.84" r="1.58" />
                <circle cx="164.99" cy="283.96" r="1.58" />
                <circle cx="175.13" cy="283.96" r="1.58" />
                <circle cx="185.27" cy="283.96" r="1.58" />
            </g>
            <text
                transform="translate(48.54 64.84)"
                fill="#231f20"
                fontFamily="Galano Grotesque Bold"
                fontSize="19.22px"
            >
                <tspan x="0" y="0">
                    D-Pad
                </tspan>
            </text>
            <g>
                <circle cx="283.26" cy="63.25" r="4.52" fill="#231f20" />
                <path
                    d="M277.41,56.47s-6.16,7.41,0,13.57"
                    fill="none"
                    stroke="#231f20"
                    strokeMiterlimit="10"
                    strokeWidth="2px"
                />
                <path
                    d="M271.49,52.73s-6.16,11.5,0,21.06"
                    fill="none"
                    stroke="#231f20"
                    strokeMiterlimit="10"
                    strokeWidth="2px"
                />
                <path
                    d="M288.87,56.47s6.16,7.41,0,13.57"
                    fill="none"
                    stroke="#231f20"
                    strokeMiterlimit="10"
                    strokeWidth="2px"
                />
                <path
                    d="M294.8,52.73s6.16,11.5,0,21.06"
                    fill="none"
                    stroke="#231f20"
                    strokeMiterlimit="10"
                    strokeWidth="2px"
                />
            </g>
            <rect
                x="153.73"
                y="149.06"
                width="40.35"
                height="50.02"
                fill="#333"
            />
            {keys.map(key => (
                <DpadKey
                    key={key.label}
                    {...key}
                    pressed={!!(buttons & key.button)}
                    active={active}
                    onDown={onDown}
                    onUp={onUp}
                />
            ))}
        </SvgWidget>
    )
}
