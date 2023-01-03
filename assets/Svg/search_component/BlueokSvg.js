import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={14}
            height={14}
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7 14a2.334 2.334 0 002.22-1.61 2.333 2.333 0 003.17-3.17 2.334 2.334 0 000-4.44 2.333 2.333 0 00-3.17-3.17 2.334 2.334 0 00-4.44 0 2.333 2.333 0 00-3.17 3.17 2.334 2.334 0 000 4.44 2.333 2.333 0 003.17 3.17A2.334 2.334 0 007 14z"
                fill="#8BC5FF"
            />
            <Path
                d="M4.667 7L6.61 8.944l3.111-3.5"
                stroke="#fff"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default SvgComponent
