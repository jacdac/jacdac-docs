import React from "react"
import SvgWidget from "./SvgWidget"
import useWidgetTheme from "./useWidgetTheme"

export default function FwdFloatWidget(props: {
    checked?: boolean
    label?: string
    color?: "primary" | "secondary"
    size?: string
    onDown?: () => void
    onUp?: () => void
}) {
    const { checked, color, size } = props
    const { active } = useWidgetTheme(color)

    const w = 324.08417
    const h = 710.79329

    return (
        <SvgWidget width={w} height={h} size={size}>
            <g className={"fwdEduWidget"}>
                <g>
                    <path
                        d="M282.80411,160.94757v23.78003c0,3.1001-2,5.61011-4.45996,5.61011h-54.57007v51.56006h-12.83008v25.77979h-16.69995v366.06006h28.40015v.43994c0,23.74023-19.25,43-42.99023,43h-38.7998c-23.73999,0-42.98999-19.25977-42.98999-43v-.43994h28.3999v-366.06006h-16.68994v-25.77979h-12.83008v-51.56006h-54.57007c-2.46997,0-4.45996-2.51001-4.45996-5.61011v-23.78003c0-3.09985,1.98999-5.60986,4.45996-5.60986h64.05005V40.32769c0-14.42993,11.04004-26.13013,24.65991-26.13013h58.74023c13.61987,0,24.66992,11.7002,24.66992,26.13013v115.01001h64.05005c2.45996,0,4.45996,2.51001,4.45996,5.60986Z"
                        fill="none"
                        stroke="#231f20"
                        strokeMiterlimit="2"
                        strokeWidth="2"
                    />
                    <line
                        x1="106.22403"
                        y1="155.3377"
                        x2="214.2941"
                        y2="155.3377"
                        fill="none"
                        stroke="#231f20"
                        strokeMiterlimit="2"
                        strokeWidth="2"
                    />
                    <line
                        x1="96.74405"
                        y1="190.3377"
                        x2="223.77408"
                        y2="190.3377"
                        fill="none"
                        stroke="#231f20"
                        strokeMiterlimit="2"
                        strokeWidth="2"
                    />
                    <line
                        x1="210.944"
                        y1="241.89776"
                        x2="109.57413"
                        y2="241.89776"
                        fill="none"
                        stroke="#231f20"
                        strokeMiterlimit="2"
                        strokeWidth="2"
                    />
                    <line
                        x1="126.26407"
                        y1="267.67755"
                        x2="194.24405"
                        y2="267.67755"
                        fill="none"
                        stroke="#231f20"
                        strokeMiterlimit="2"
                        strokeWidth="2"
                    />
                    <line
                        x1="126.26407"
                        y1="633.7376"
                        x2="194.24405"
                        y2="633.7376"
                        fill="none"
                        stroke="#231f20"
                        strokeMiterlimit="2"
                        strokeWidth="2"
                    />
                </g>
                <rect
                    className={"float-transition"}
                    x="39.38252"
                    y={checked ? "297.9536" : "390.33026"}
                    fill={checked ? active : "#fff"}
                    width="241.75308"
                    height="221.71515"
                    rx="15.54198"
                    ry="15.54198"
                    stroke="#231f20"
                    strokeMiterlimit="2"
                    strokeWidth="2"
                />
            </g>
        </SvgWidget>
    )
}
