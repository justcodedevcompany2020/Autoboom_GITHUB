import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={12}
            height={16}
            viewBox="0 0 12 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 7.5c0-4-3.5-6-6-6s-6 2-6 6c0 5 6 8 6 8s6-3 6-8zm-6 2a2 2 0 100-4 2 2 0 000 4z"
                fill="#6B7185"
            />
        </Svg>
    )
}

export default SvgComponent
