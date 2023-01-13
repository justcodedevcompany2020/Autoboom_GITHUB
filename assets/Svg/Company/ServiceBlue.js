import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={18}
            height={18}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 18a3.001 3.001 0 002.854-2.07 3 3 0 004.075-4.077 3.001 3.001 0 000-5.707 3 3 0 00-4.076-4.075 3.001 3.001 0 00-5.706 0A3 3 0 002.07 6.146a3.001 3.001 0 00.001 5.707 3 3 0 004.075 4.077A3.001 3.001 0 009 18z"
                fill="#0080FF"
            />
            <Path
                d="M6.55 9.173l1.977 2.143 3.165-3.857"
                stroke="#fff"
                strokeWidth={1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default SvgComponent