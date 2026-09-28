import React from "react"
import {
    FwdTallFaceplate,
    FWD_FONT,
    FWD_INK,
    FWD_PILL,
    FWD_PURPLE,
} from "./FwdFaceplates"

// Clock face centre and radius: the bezel spans y 102-342, clear of the label
// above and the mounting holes (y 356-384) below.
const cx = 187.8
const cy = 222
const R = 112

const ticks = Array.from({ length: 60 }, (_, i) => i)

function Hand(props: {
    turns: number
    length: number
    width: number
    color: string
}) {
    const { turns, length, width, color } = props
    const a = turns * 2 * Math.PI
    return (
        <line
            x1="0"
            y1="0"
            x2={Math.sin(a) * length}
            y2={-Math.cos(a) * length}
            stroke={color}
            strokeWidth={width}
            strokeLinecap="round"
        />
    )
}

export default function FwdTimeRtcWidget(props: {
    time?: Date
    size?: string
}) {
    const { time, size } = props

    const hasTime = !!time && !isNaN(time.getTime())
    const seconds = hasTime ? time.getSeconds() : 0
    const minutes = hasTime ? time.getMinutes() + seconds / 60 : 0
    const hours = hasTime ? (time.getHours() % 12) + minutes / 60 : 0
    const timeText = hasTime
        ? time.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })
        : "--:--"
    const dateText = hasTime
        ? time.toLocaleDateString([], {
              weekday: "short",
              month: "short",
              day: "numeric",
          })
        : "--"

    return (
        <FwdTallFaceplate label="TIME RTC" size={size}>
            <g
                transform={`translate(${cx} ${cy})`}
                role="timer"
                aria-label={timeText}
            >
                <circle r={R + 8} fill={FWD_PILL} />
                <circle r={R} fill="#fff" />
                {ticks.map(i => {
                    const a = (i / 60) * 2 * Math.PI
                    const major = i % 5 === 0
                    const inner = R - (major ? 18 : 9)
                    return (
                        <line
                            key={i}
                            x1={Math.sin(a) * inner}
                            y1={-Math.cos(a) * inner}
                            x2={Math.sin(a) * (R - 4)}
                            y2={-Math.cos(a) * (R - 4)}
                            stroke={major ? FWD_INK : "#999"}
                            strokeWidth={major ? (i % 15 ? 3 : 5) : 1.5}
                        />
                    )
                })}
                {hasTime && (
                    <>
                        <Hand
                            turns={hours / 12}
                            length={R * 0.5}
                            width={9}
                            color={FWD_INK}
                        />
                        <Hand
                            turns={minutes / 60}
                            length={R * 0.76}
                            width={6}
                            color={FWD_INK}
                        />
                        <Hand
                            turns={seconds / 60}
                            length={R * 0.86}
                            width={2.5}
                            color={FWD_PURPLE}
                        />
                    </>
                )}
                <circle r="7" fill={FWD_PURPLE} />
            </g>
            <text
                x={cx}
                y="486.4"
                fill={FWD_INK}
                fontFamily={FWD_FONT}
                fontSize="35px"
                textAnchor="middle"
            >
                {timeText}
            </text>
            <text
                x={cx}
                y="520"
                fill="#5b5b5b"
                fontFamily={FWD_FONT}
                fontSize="18px"
                textAnchor="middle"
            >
                {dateText}
            </text>
        </FwdTallFaceplate>
    )
}
