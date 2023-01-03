import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={43}
            height={44}
            viewBox="0 0 43 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M25 15l-6.93 6.93a.1.1 0 000 .14L25 29"
                stroke="#091334"
                strokeWidth={2}
                strokeLinecap="round"
            />
        </Svg>
    )
}

export default SvgComponent
