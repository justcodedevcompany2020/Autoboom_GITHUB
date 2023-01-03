import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

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
            <Rect width={20} height={20} rx={10} fill="#2B65EE" />
            <Path
                d="M5.5 9.4L8.773 13 14.5 7"
                stroke="#fff"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default SvgComponent
