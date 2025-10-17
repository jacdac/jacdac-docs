import React, { createElement, useState, useEffect } from "react"
import useDeviceProductIdentifier from "../../jacdac/useDeviceProductIdentifier"
import {
    JDDevice,
    JDService,
    SRV_BUTTON,
    SRV_SERVO,
    EVENT,
    ButtonEvent,
    ButtonServer,
    ReflectedLightServer,
    JDRegister,
    RotaryEncoderReg,
    SRV_DC_CURRENT_MEASUREMENT,
} from "../../../jacdac-ts/src/jacdac"
import { DashboardServiceProps } from "./DashboardServiceWidget"
import useServiceServer from "../hooks/useServiceServer"
import DashboardServiceDefaultWidget from "./DashboardServiceDefaultWidget"
import useRegister from "../hooks/useRegister"
import { useRegisterUnpackedValue } from "../../jacdac/useRegisterValue"
import Suspense from "../ui/Suspense"
import { CircularProgress } from "@mui/material"

import {
    createLEDWidget,
    createLightsWidget,
    createPirWidget,
    createPumpWidget,
    createServoWidget,
} from "./DashboardFwdUniqueComponents"
import FwdDialButtonWidget from "../widgets/FwdDialButtonWidget"
import FwdDialWidget from "../widgets/FwdDialWidget"
import FwdLineWidget from "../widgets/FwdLineWidget"
import FwdSoilMoistureWidget from "../widgets/FwdSoilMoistureWidget"
import FwdSolarWidget from "../widgets/FwdSolarWidget"
import FwdSonarWidget from "../widgets/FwdSonarWidget"
import FwdTouchWidget from "../widgets/FwdTouchWidget"
import useEvent from "../hooks/useEvent"
import useSvgButtonProps from "../hooks/useSvgButtonProps"
import FwdDcCurrentWidget from "../widgets/FwdDcCurrentWidget"
import FwdDcVoltageWidget from "../widgets/FwdDcVoltageWidget"
import FwdPhWidget from "../widgets/FwdPhWidget"
import FwdTemperatureWidget from "../widgets/FwdTemperatureWidget"
import FwdFloatWidget from "../widgets/FwdFloatWidget"
import FwdEcWidget from "../widgets/FwdEcWidget"
import FwdPirWidget from "../widgets/FwdPirWidget"

enum ProductId {
    BreakoutBoard1 = 873600795,
    BreakoutBoard2 = 943529908,
    LedRing = 1054009247,
    FloatSensor = 884365778,
    Dial = 932148851,
    MoistureSensor = 870361737,
    LineSensor = 1000568338,
    TouchSensor = 1064434129,
    EnergySensor = 919046000,
    Lights = 827772839,
    PhSensor = 1067983758,
    SonarSensor = 926591985,
    SolarSensor = 1005257879,
    TemperatureSensor = 827772841,
    EcSensor = 884234713,
    PirSensor = 884222425,
}

export function hasCustomFwdWidget(device: JDDevice): boolean {
    const productId = useDeviceProductIdentifier(device)
    const productIds = Object.values(ProductId) as number[]
    return productIds.includes(productId)
}

function buttonWidgetProps(service: JDService, server?: ButtonServer) {
    const [pressed, setPressed] = useState<boolean>(false)
    const downEvent = useEvent(service, ButtonEvent.Down)
    const upEvent = useEvent(service, ButtonEvent.Up)
    useEffect(
        () => downEvent.subscribe(EVENT, () => setPressed(true)),
        [downEvent]
    )
    useEffect(
        () => upEvent.subscribe(EVENT, () => setPressed(false)),
        [upEvent]
    )

    return {
        onDown: () => server?.down(),
        onUp: () => server?.up(),
        checked: pressed,
        label: `button ${pressed ? `down` : `up`}`,
    }
}

function lineWidgetProps(
    value: number,
    register: JDRegister,
    server: ReflectedLightServer
) {
    const handleDown = () => {
        server.reading.setValues([value > 0 ? 0 : 1.0])
        register.refresh()
    }
    return {
        buttonProps: useSvgButtonProps("line detector", server && handleDown),
    }
}

function dialWidgetProps(value: number, service: JDService) {
    const clicksPerTurnRegister = useRegister(
        service,
        RotaryEncoderReg.ClicksPerTurn
    )
    const [clicksPerTurn = 20] = useRegisterUnpackedValue<[number]>(
        clicksPerTurnRegister
    )

    return {
        position: value,
        angle: (value / clicksPerTurn) * 360,
    }
}

export function lazifyWidget(widget, widgetProps) {
    return (
        <Suspense
            fallback={
                <CircularProgress
                    aria-label={`loading...`}
                    color={widgetProps.color}
                    disableShrink={true}
                    variant={"indeterminate"}
                    size={"1rem"}
                />
            }
        >
            {createElement(widget, widgetProps)}
        </Suspense>
    )
}

export function FwdEduSubstituteWidget(dashboardProps: DashboardServiceProps) {
    const { service } = dashboardProps

    const server = useServiceServer(service)
    const color = server ? "secondary" : ("primary" as "primary" | "secondary")
    const size = "clamp(6rem, 12vw, 14vh)"

    // semi-generics
    const registerNumber =
        service?.readingRegister?.specification?.identifier || 257
    const valueReg = useRegister(service, registerNumber)
    const [value] = useRegisterUnpackedValue<[number]>(valueReg, dashboardProps)
    const widgetProps = { color: color, size: size, value: value }

    const productId = useDeviceProductIdentifier(service.device)

    switch (productId) {
        case ProductId.BreakoutBoard1:
        case ProductId.BreakoutBoard2:
            if (service.serviceClass === SRV_SERVO) {
                return createServoWidget(dashboardProps)
            }
            return createPumpWidget(dashboardProps)
        case ProductId.LedRing:
            return createLEDWidget(dashboardProps)
        case ProductId.Lights: {
            return createLightsWidget(dashboardProps)
        }
        case ProductId.FloatSensor:
            return lazifyWidget(FwdFloatWidget, {
                ...widgetProps,
                ...buttonWidgetProps(service, server as ButtonServer),
            })
        case ProductId.Dial:
            if (service.serviceClass === SRV_BUTTON) {
                return lazifyWidget(FwdDialButtonWidget, {
                    ...widgetProps,
                    ...buttonWidgetProps(service, server as ButtonServer),
                })
            }
            return lazifyWidget(FwdDialWidget, {
                ...widgetProps,
                ...dialWidgetProps(value, service),
            })
        case ProductId.MoistureSensor:
            return lazifyWidget(FwdSoilMoistureWidget, {
                ...widgetProps,
                size: "clamp(14rem, 12vw, 16vh)",
            })
        case ProductId.LineSensor:
            return lazifyWidget(FwdLineWidget, {
                ...widgetProps,
                size: "clamp(4rem, 8vw, 12vh)",
                ...lineWidgetProps(
                    value,
                    valueReg,
                    server as ReflectedLightServer
                ),
            })
        case ProductId.TouchSensor:
            return lazifyWidget(FwdTouchWidget, {
                ...widgetProps,
                ...buttonWidgetProps(service, server as ButtonServer),
            })
        case ProductId.EnergySensor:
            if (service.serviceClass === SRV_DC_CURRENT_MEASUREMENT) {
                return lazifyWidget(FwdDcCurrentWidget, {
                    ...widgetProps,
                    currentOrVoltage: "current",
                })
            }
            return lazifyWidget(FwdDcVoltageWidget, {
                ...widgetProps,
                currentOrVoltage: "voltage",
            })
        case ProductId.PhSensor:
            return lazifyWidget(FwdPhWidget, {
                ...widgetProps,
                size: "clamp(14rem, 12vw, 16vh)",
            })
        case ProductId.SonarSensor:
            return lazifyWidget(FwdSonarWidget, {
                color: widgetProps.color,
                value: widgetProps.value * 100,
                size: "clamp(6rem, 15vw, 20vh",
            })
        case ProductId.SolarSensor:
            return lazifyWidget(FwdSolarWidget, widgetProps)
        case ProductId.TemperatureSensor:
            return lazifyWidget(FwdTemperatureWidget, {
                ...widgetProps,
                size: "clamp(14rem, 12vw, 16vh)",
            })
        case ProductId.EcSensor:
            return lazifyWidget(FwdEcWidget, {
                ...widgetProps,
                size: "clamp(14rem, 12vw, 16vh)",
            })
        case ProductId.PirSensor:
            return createPirWidget(dashboardProps)
    }
    return DashboardServiceDefaultWidget(dashboardProps)
}
