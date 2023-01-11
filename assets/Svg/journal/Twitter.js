import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={31}
            height={30}
            viewBox="0 0 31 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Rect x={0.5} width={30} height={30} rx={15} fill="#6B7593" />
            <Path
                d="M23.5 10.043c-.6.265-1.235.44-1.886.516a3.292 3.292 0 001.444-1.815 6.563 6.563 0 01-2.085.796 3.283 3.283 0 00-5.593 2.992 9.325 9.325 0 01-6.766-3.428 3.28 3.28 0 001.016 4.38 3.272 3.272 0 01-1.487-.41v.04a3.281 3.281 0 002.633 3.218c-.483.13-.99.15-1.483.056a3.283 3.283 0 003.067 2.279 6.59 6.59 0 01-4.86 1.358 9.29 9.29 0 005.031 1.475c6.039 0 9.341-4.999 9.341-9.334 0-.141-.004-.284-.01-.424a6.667 6.667 0 001.638-1.698z"
                fill="#F0F1F4"
            />
        </Svg>
    )
}

export default SvgComponent
