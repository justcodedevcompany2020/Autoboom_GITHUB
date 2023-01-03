import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={64}
            height={28}
            viewBox="0 0 64 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M24 8.135c3.5-4.5 8 1 8 1s4.5-5.5 8-1c4 5-5 11.5-8 13.5-3-2-12-8.5-8-13.5z"
                stroke="#6C7694"
                strokeWidth={2}
            />
        </Svg>
    )
}

export default SvgComponent
