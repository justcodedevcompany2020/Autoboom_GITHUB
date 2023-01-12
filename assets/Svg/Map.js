import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={14}
            height={18}
            viewBox="0 0 14 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M6.75.5C3.156.5.25 3.16.25 6.45c0 3.56 4.137 8.473 5.81 10.314a.924.924 0 001.38 0c1.673-1.841 5.81-6.754 5.81-10.314 0-3.29-2.906-5.95-6.5-5.95zM2.107 6.45c0-2.346 2.08-4.25 4.643-4.25 2.563 0 4.643 1.904 4.643 4.25 0 2.448-2.674 6.112-4.643 8.398-1.931-2.27-4.643-5.976-4.643-8.398z"
                fill="#fff"
            />
            <Path
                d="M6.75 9.001c1.282 0 2.321-1.001 2.321-2.237 0-1.235-1.039-2.237-2.321-2.237-1.282 0-2.321 1.002-2.321 2.237C4.429 8 5.468 9.001 6.75 9.001z"
                fill="#fff"
            />
        </Svg>
    )
}

export default SvgComponent