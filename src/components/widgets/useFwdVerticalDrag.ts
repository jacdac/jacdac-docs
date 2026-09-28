import React, { useRef } from "react"

// Pointer handlers that map a vertical drag inside an SVG to a 0..1 value:
// `bottom` (in viewBox units) is 0, `top` is 1. Returns no handlers when
// `onChange` is missing, so read-only widgets stay inert.
export default function useFwdVerticalDrag<T extends SVGElement>(
    svgRef: React.MutableRefObject<SVGSVGElement>,
    top: number,
    bottom: number,
    onChange?: (value: number) => void
) {
    const dragging = useRef(false)
    if (!onChange) return {}

    const update = (ev: React.PointerEvent<T>) => {
        const svg = svgRef.current
        const ctm = svg?.getScreenCTM()
        if (!ctm) return
        const pt = svg.createSVGPoint()
        pt.x = ev.clientX
        pt.y = ev.clientY
        const { y } = pt.matrixTransform(ctm.inverse())
        onChange(Math.max(0, Math.min(1, (bottom - y) / (bottom - top))))
    }

    return {
        className: "clickeable",
        onPointerDown: (ev: React.PointerEvent<T>) => {
            ev.preventDefault()
            ;(ev.target as Element).setPointerCapture(ev.pointerId)
            dragging.current = true
            update(ev)
        },
        onPointerMove: (ev: React.PointerEvent<T>) => {
            if (dragging.current) update(ev)
        },
        onPointerUp: (ev: React.PointerEvent<T>) => {
            ;(ev.target as Element).releasePointerCapture(ev.pointerId)
            dragging.current = false
        },
    }
}
