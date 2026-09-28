import React, { useEffect, useId, useRef } from "react"
import {
    FwdPill,
    FwdSquareFaceplate,
    FWD_LINE,
    FWD_PURPLE,
} from "./FwdFaceplates"

export default function FwdI2cWidget(props: {
    address?: number
    transactions: number
    ok?: boolean
    size?: string
}) {
    const { address, transactions, ok, size } = props
    const pathId = `fwdi2c${useId().replace(/:/g, "")}`
    const motionRef = useRef<SVGAnimationElement>()
    const fadeRef = useRef<SVGAnimationElement>()

    // run the dot along the bus once per observed transaction
    useEffect(() => {
        if (!transactions) return
        motionRef.current?.beginElement()
        fadeRef.current?.beginElement()
    }, [transactions])

    const output =
        ok === false
            ? "ERROR"
            : address !== undefined
            ? `0x${address.toString(16).padStart(2, "0")}`
            : "--"

    return (
        <FwdSquareFaceplate label="I2C" size={size}>
            <rect
                x="140"
                y="92"
                width="70"
                height="26"
                rx="3"
                fill="#f1e3c8"
                stroke={FWD_LINE}
                strokeWidth="2"
            />
            <g fill={FWD_LINE}>
                <rect x="147" y="99" width="8" height="12" />
                <rect x="162" y="99" width="8" height="12" />
                <rect x="177" y="99" width="8" height="12" />
                <rect x="192" y="99" width="8" height="12" />
            </g>
            <g fill="none" stroke="#878787" strokeWidth="3">
                <path id={pathId} d="M166,118 V150 H150 V180" />
                <path d="M184,118 V150 H200 V180" />
            </g>
            <g fontFamily="system-ui, sans-serif" fontSize="11" fill="#5b5b5b">
                <text x="150" y="196" textAnchor="middle">
                    SDA
                </text>
                <text x="200" y="196" textAnchor="middle">
                    SCL
                </text>
            </g>
            <circle r="5.5" fill={FWD_PURPLE} opacity="0">
                <animateMotion
                    ref={motionRef}
                    begin="indefinite"
                    dur="0.6s"
                    fill="freeze"
                >
                    <mpath href={`#${pathId}`} />
                </animateMotion>
                <animate
                    ref={fadeRef}
                    attributeName="opacity"
                    begin="indefinite"
                    dur="0.6s"
                    values="1;1;0"
                    fill="freeze"
                />
            </circle>
            <FwdPill cx={175} cy={238} width={130}>
                {output}
            </FwdPill>
        </FwdSquareFaceplate>
    )
}
