import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M5.5 9.4L8.773 13 14.5 7"
                stroke="#fff"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Rect x={0.5} y={0.5} width={19} height={19} rx={9.5} stroke="#C4C8D4" />
        </Svg>
    )
}

export default SvgComponent
