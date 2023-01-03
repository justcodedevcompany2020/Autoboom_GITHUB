import * as React from "react"
import Svg, { G, Rect, Path, Defs, ClipPath } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={23}
            height={22}
            viewBox="0 0 23 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_10649_32395)" fill={props.active ? "#FF7A00" : "#C4C8D4"}>
                <Rect x={10.5939} width={2} height={22} rx={1} />
                <Path d="M20.02 10.962a.3.3 0 01.3-.3h2.38a.3.3 0 01.3.3v.943a.3.3 0 01-.17.27l-2.38 1.144a.3.3 0 01-.43-.27v-2.087zM2.98 10.962a.3.3 0 00-.3-.3H.3a.3.3 0 00-.3.3v.943a.3.3 0 00.17.27l2.38 1.144a.3.3 0 00.43-.27v-2.087z" />
                <Path d="M7.37 2.8A5.05 5.05 0 002.41 6.893l-.867 4.493v7.138a1.65 1.65 0 103.298 0v-.7H8.8a.5.5 0 00.5-.5v-1.1a.5.5 0 00-.5-.5H3.644v-4.137l.83-4.296A2.95 2.95 0 017.37 4.9H8.8a.5.5 0 00.5-.5V3.3a.5.5 0 00-.5-.5H7.37zM15.974 2.8a5.05 5.05 0 014.958 4.092l.868 4.494v7.137a1.65 1.65 0 11-3.298 0v-.7h-3.958a.5.5 0 01-.5-.5v-1.1a.5.5 0 01.5-.5H19.7v-4.136l-.83-4.296A2.95 2.95 0 0015.974 4.9h-1.43a.5.5 0 01-.5-.5V3.3a.5.5 0 01.5-.5h1.43z" />
            </G>
            <Defs>
                <ClipPath id="clip0_10649_32395">
                    <Path fill="#fff" d="M0 0H23.0001V22H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default SvgComponent
