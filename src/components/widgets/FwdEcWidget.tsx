import React from "react"
import SvgWidget from "./SvgWidget"

export default function FwdEcWidget(props: { value: number }) {
    const { value } = props

    const output = !isNaN(value) ? value.toFixed(0) : "--"

    const w = 368.71687
    const h = 401.34016

    return (
        <SvgWidget width={w} height={h} size="clamp(14rem, 12vw, 16vh)">
            <g>
                <text
                    transform="translate(184 208.74161)"
                    fontFamily="Galano Grotesque Bold"
                    fontSize="66.43494px"
                    textAnchor="middle"
                >
                    {output}
                </text>
                <text
                    transform="translate(145.52179 257.37833)"
                    fontFamily="Galano Grotesque Bold"
                    fontSize="48.12629px"
                >
                    <tspan x="0" y="0" letterSpacing="-.07999em">
                        m
                    </tspan>
                    <tspan x="41.91797" y="0">
                        V
                    </tspan>
                </text>
            </g>
            <text
                transform="translate(64.36971 120.15177)"
                fill="#231f20"
                fontFamily="Galano Grotesque Bold"
                fontSize="27.9327px"
            >
                <tspan x="0" y="0" letterSpacing="-.01em">
                    E
                </tspan>
                <tspan x="17.17871" y="0">
                    C
                </tspan>
            </text>
            <circle cx="298.69747" cy="108.88913" r="4.05088" fill="#231f20" />
            <path
                d="M293.46252,102.81063s-5.51956,6.63745,0,12.157"
                fill="none"
                stroke="#231f20"
                strokeMiterlimit="10"
                strokeWidth="2px"
            />
            <path
                d="M288.15256,99.45697s-5.51956,10.29948,0,18.86432"
                fill="none"
                stroke="#231f20"
                strokeMiterlimit="10"
                strokeWidth="2px"
            />
            <path
                d="M303.72533,102.81063s5.51956,6.63745,0,12.157"
                fill="none"
                stroke="#231f20"
                strokeMiterlimit="10"
                strokeWidth="2px"
            />
            <path
                d="M309.03529,99.45697s5.51956,10.29948,0,18.86432"
                fill="none"
                stroke="#231f20"
                strokeMiterlimit="10"
                strokeWidth="2px"
            />
            <g>
                <polyline
                    points="218.95378 35.29231 218.95378 100.19279 150.08178 100.19279 150.08178 35.29231"
                    fill="none"
                    stroke="#333"
                    strokeMiterlimit="10"
                    strokeWidth="3px"
                />
                <rect
                    x="163.17777"
                    y="52.92949"
                    width="3.97968"
                    height="32.23539"
                    fill="#231f20"
                />
                <rect
                    x="202.66272"
                    y="52.92949"
                    width="3.97968"
                    height="32.23539"
                    fill="#231f20"
                />
                <g>
                    <path
                        d="M284.7946,196.65966v-10.4366c0-3.10744,2.51908-5.62652,5.62652-5.62652h24.89158c4.5759,0,8.28539-3.7095,8.28539-8.28539V50.19085c0-8.22083-6.6643-14.88512-14.88512-14.88512H59.91876c-8.16522,0-14.79998,6.63476-14.79998,14.88512v123.41058c0,2.68889,2.17978,4.86867,4.86867,4.86867h27.05919c2.81144,0,5.09057,2.27913,5.09057,5.09057v13.63496c0,2.81144-2.27913,5.09057-5.09057,5.09057h-36.4318c-3.4786,0-6.29857,2.81997-6.29857,6.29857v38.01239c0,3.4786,2.81997,6.29857,6.29857,6.29857h36.4318c2.81144,0,5.09057,2.27913,5.09057,5.09057v13.7201c0,2.81144-2.27913,5.09057-5.09057,5.09057h-27.05919c-2.68889,0-4.86867,2.17978-4.86867,4.86867v69.72672c0,8.17409,6.62641,14.8005,14.8005,14.8005h248.7937c8.25088,0,14.88512-6.63476,14.88512-14.8005v-67.41578c0-4.5759-3.7095-8.28539-8.28539-8.28539h-24.89158c-3.10744,0-5.62652-2.51908-5.62652-5.62652v-10.51547c0-3.07647,2.47094-5.58254,5.54711-5.62596l37.43901-.52849c3.67108-.05182,6.61989-3.04255,6.61989-6.714v-37.67984c0-3.70842-3.00627-6.71469-6.71469-6.71469h-37.26479c-3.10744,0-5.62652-2.51908-5.62652-5.62652Z"
                        fill="none"
                        stroke="#333"
                        strokeMiterlimit="10"
                        strokeWidth="3px"
                    />
                    <g>
                        <g>
                            <rect
                                x="47.37769"
                                y="214.58515"
                                width="29.62724"
                                height="5.8156"
                                rx="2.9078"
                                ry="2.9078"
                                fill="#878787"
                            />
                            <rect
                                x="43.23039"
                                y="224.61198"
                                width="33.77454"
                                height="5.8156"
                                rx="2.9078"
                                ry="2.9078"
                                fill="#878787"
                            />
                            <rect
                                x="43.23039"
                                y="234.63882"
                                width="33.77454"
                                height="5.8156"
                                rx="2.9078"
                                ry="2.9078"
                                fill="#878787"
                            />
                        </g>
                        <circle
                            cx="74.18999"
                            cy="217.44145"
                            r="1.58428"
                            fill="#fff"
                        />
                        <circle
                            cx="74.18999"
                            cy="227.57988"
                            r="1.58428"
                            fill="#fff"
                        />
                        <circle
                            cx="74.18999"
                            cy="237.71831"
                            r="1.58428"
                            fill="#fff"
                        />
                    </g>
                    <g>
                        <g>
                            <rect
                                x="290.49968"
                                y="234.63882"
                                width="29.62724"
                                height="5.8156"
                                rx="2.9078"
                                ry="2.9078"
                                transform="translate(610.62659 475.09324) rotate(-180)"
                                fill="#878787"
                            />
                            <rect
                                x="290.49968"
                                y="224.61198"
                                width="33.77454"
                                height="5.8156"
                                rx="2.9078"
                                ry="2.9078"
                                transform="translate(614.77389 455.03956) rotate(180)"
                                fill="#878787"
                            />
                            <rect
                                x="290.49968"
                                y="214.58515"
                                width="33.77454"
                                height="5.8156"
                                rx="2.9078"
                                ry="2.9078"
                                transform="translate(614.77389 434.98589) rotate(-180)"
                                fill="#878787"
                            />
                        </g>
                        <circle
                            cx="293.31462"
                            cy="237.59812"
                            r="1.58428"
                            fill="#fff"
                        />
                        <circle
                            cx="293.31462"
                            cy="227.45969"
                            r="1.58428"
                            fill="#fff"
                        />
                        <circle
                            cx="293.31462"
                            cy="217.32126"
                            r="1.58428"
                            fill="#fff"
                        />
                    </g>
                </g>
            </g>
        </SvgWidget>
    )
}
