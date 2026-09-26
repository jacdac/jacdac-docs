import React from "react"
import SvgWidget from "./SvgWidget"

// pill centre shared by all three readouts
const cx = 176.7

export default function FwdBme280Widget(props: {
    temperature: number
    humidity: number
    pressure: number
}) {
    const { temperature, humidity, pressure } = props

    const tempOutput = !isNaN(temperature) ? temperature.toFixed(1) : "--"
    const humidityOutput = !isNaN(humidity) ? humidity.toFixed(0) : "--"
    // pressure register reports hPa, faceplate shows kPa
    const pressureOutput = !isNaN(pressure) ? (pressure / 10).toFixed(1) : "--"

    const w = 350
    const h = 350

    return (
        <SvgWidget width={w} height={h} size="clamp(14rem, 12vw, 16vh)">
            <path
                d="M275.44,147.63v-10.44c0-3.11,2.52-5.63,5.63-5.63h24.89c4.58,0,8.29-3.71,8.29-8.29V54.85c0-8.22-6.66-14.89-14.89-14.89H50.56c-8.17,0-14.8,6.63-14.8,14.89v69.73c0,2.69,2.18,4.87,4.87,4.87h27.06c2.81,0,5.09,2.28,5.09,5.09v13.63c0,2.81-2.28,5.09-5.09,5.09H31.26c-3.48,0-6.3,2.82-6.3,6.3v38.01c0,3.48,2.82,6.3,6.3,6.3h36.43c2.81,0,5.09,2.28,5.09,5.09v13.72c0,2.81-2.28,5.09-5.09,5.09h-27.06c-2.69,0-4.87,2.18-4.87,4.87v69.73c0,8.17,6.63,14.8,14.8,14.8h248.79c8.25,0,14.89-6.63,14.89-14.8v-67.42c0-4.58-3.71-8.29-8.29-8.29h-24.89c-3.11,0-5.63-2.52-5.63-5.63v-10.52c0-3.08,2.47-5.58,5.55-5.63l37.44-.53c3.67-.05,6.62-3.04,6.62-6.71v-37.68c0-3.71-3.01-6.71-6.71-6.71h-37.26c-3.11,0-5.63-2.52-5.63-5.63h0Z"
                fill="none"
                stroke="#333"
                strokeMiterlimit="10"
                strokeWidth="3px"
            />
            <text
                transform="translate(53.16 71.17)"
                fill="#231f20"
                fontFamily="Galano Grotesque Bold"
                fontSize="19.22px"
            >
                <tspan x="0" y="0">
                    BME280
                </tspan>
            </text>
            <g>
                <circle cx="284.47" cy="63" r="4.52" fill="#231f20" />
                <path
                    d="M278.63,56.22s-6.16,7.41,0,13.57"
                    fill="none"
                    stroke="#231f20"
                    strokeMiterlimit="10"
                    strokeWidth="2px"
                />
                <path
                    d="M272.7,52.47s-6.16,11.5,0,21.06"
                    fill="none"
                    stroke="#231f20"
                    strokeMiterlimit="10"
                    strokeWidth="2px"
                />
                <path
                    d="M290.09,56.22s6.16,7.41,0,13.57"
                    fill="none"
                    stroke="#231f20"
                    strokeMiterlimit="10"
                    strokeWidth="2px"
                />
                <path
                    d="M296.01,52.47s6.16,11.5,0,21.06"
                    fill="none"
                    stroke="#231f20"
                    strokeMiterlimit="10"
                    strokeWidth="2px"
                />
            </g>
            <g fill="#878787">
                <path d="M40.93,165.56h23.81c1.61,0,2.91,1.3,2.91,2.91h0c0,1.61-1.3,2.91-2.91,2.91h-23.81c-1.61,0-2.91-1.3-2.91-2.91h0c0-1.61,1.3-2.91,2.91-2.91Z" />
                <path d="M36.78,175.58h27.96c1.61,0,2.91,1.3,2.91,2.91h0c0,1.61-1.3,2.91-2.91,2.91h-27.96c-1.61,0-2.91-1.3-2.91-2.91h0c0-1.61,1.3-2.91,2.91-2.91Z" />
                <path d="M36.78,185.61h27.96c1.61,0,2.91,1.3,2.91,2.91h0c0,1.61-1.3,2.91-2.91,2.91h-27.96c-1.61,0-2.91-1.3-2.91-2.91h0c0-1.61,1.3-2.91,2.91-2.91Z" />
                <path d="M307.86,191.43h-23.81c-1.61,0-2.91-1.3-2.91-2.91h0c0-1.61,1.3-2.91,2.91-2.91h23.81c1.61,0,2.91,1.3,2.91,2.91h0c0,1.61-1.3,2.91-2.91,2.91Z" />
                <path d="M312.01,181.4h-27.96c-1.61,0-2.91-1.3-2.91-2.91h0c0-1.61,1.3-2.91,2.91-2.91h27.96c1.61,0,2.91,1.3,2.91,2.91h0c0,1.61-1.3,2.91-2.91,2.91Z" />
                <path d="M312.01,171.37h-27.96c-1.61,0-2.91-1.3-2.91-2.91h0c0-1.61,1.3-2.91,2.91-2.91h27.96c1.61,0,2.91,1.3,2.91,2.91h0c0,1.61-1.3,2.91-2.91,2.91Z" />
            </g>
            <g fill="#fff">
                <circle cx="64.83" cy="168.41" r="1.58" />
                <circle cx="64.83" cy="178.55" r="1.58" />
                <circle cx="64.83" cy="188.69" r="1.58" />
                <circle cx="283.96" cy="188.57" r="1.58" />
                <circle cx="283.96" cy="178.43" r="1.58" />
                <circle cx="283.96" cy="168.29" r="1.58" />
            </g>
            <g fill="none" stroke="#333" strokeMiterlimit="10">
                <circle cx="150.34" cy="297.63" r="3.84" />
                <circle cx="162.67" cy="297.63" r="3.84" />
                <circle cx="175" cy="297.63" r="3.84" />
                <circle cx="187.33" cy="297.63" r="3.84" />
                <circle cx="199.66" cy="297.63" r="3.84" />
                <polyline points="145.51 292.17 145.51 288.69 204.27 288.69 204.27 292.17" />
                <polyline points="145.62 303.09 145.62 306.57 204.38 306.57 204.38 303.09" />
            </g>
            <g
                fill="#231f20"
                fontFamily="Galano Grotesque Bold"
                fontSize="26.08px"
            >
                <rect
                    x="120.93"
                    y="85.5"
                    width="111.55"
                    height="50"
                    rx="12"
                    ry="12"
                    fill="#eaeaea"
                />
                <text x={cx} y="121.04" textAnchor="middle">
                    {tempOutput}°C
                </text>
                <rect
                    x="119.81"
                    y="153.23"
                    width="113.79"
                    height="50"
                    rx="12"
                    ry="12"
                    fill="#eaeaea"
                />
                <text x={cx} y="188.65" textAnchor="middle">
                    {humidityOutput}%RH
                </text>
                <rect
                    x="96.46"
                    y="220.96"
                    width="160.49"
                    height="50"
                    rx="12"
                    ry="12"
                    fill="#eaeaea"
                />
                <text x={cx} y="255.73" textAnchor="middle">
                    {pressureOutput} kPa
                </text>
            </g>
        </SvgWidget>
    )
}
