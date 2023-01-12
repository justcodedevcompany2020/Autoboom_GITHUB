import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={30}
            height={28}
            viewBox="0 0 30 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Rect width={30} height={28} rx={4} fill="#E6F2FF" />
            <Path transform="translate(8 5)" fill="#fff" d="M0 0H14V18H0z" />
            <Rect
                x={8.5}
                y={5.5}
                width={13}
                height={17}
                rx={1.5}
                fill="#E6F2FF"
                stroke="#091334"
            />
            <Path
                d="M19 13.667v2.666s0 .667-.8.667c-.935 0-.7-.857-1.2-.857h-4c-.5 0-.265.857-1.2.857-.8 0-.8-.667-.8-.667v-2.666S11.4 11 13 11h4c1.6 0 2 2.667 2 2.667z"
                fill="#fff"
                stroke="#091334"
                strokeLinejoin="round"
            />
            <Rect x={12} y={5} width={6} height={2} rx={1} fill="#091334" />
        </Svg>
    )
}

export default SvgComponent