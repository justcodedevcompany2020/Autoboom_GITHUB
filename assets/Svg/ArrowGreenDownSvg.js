import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path d="M12 8h4l-8 8-8-8h4V0h8v8z" fill="#090" />
        </Svg>
    )
}

export default SvgComponent
