import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={51}
            height={44}
            viewBox="0 0 51 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M27.12 27.022l-4.199-2.29a4 4 0 110-5.463l4.2-2.29a3.998 3.998 0 015.245-4.739 4 4 0 11-4.285 6.493l-4.2 2.29a4.006 4.006 0 010 1.954l4.199 2.29a4 4 0 11-.96 1.754v.001zM20 24a2 2 0 100-4.001 2 2 0 000 4zm11-6a2 2 0 100-4 2 2 0 000 4zM31 30a2 2 0 100-4 2 2 0 000 4z"
                fill="#091334"
            />
        </Svg>
    )
}

export default SvgComponent
