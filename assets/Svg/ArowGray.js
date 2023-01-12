import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={10}
            height={16}
            viewBox="0 0 10 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M1 1l7 7-7 7"
                stroke="#C4C8D4"
                strokeWidth={2}
                strokeLinecap="round"
            />
        </Svg>
    )
}

export default SvgComponent