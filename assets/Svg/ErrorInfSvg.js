import * as React from "react"
import Svg, { Rect, G, Path, Defs, ClipPath } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Rect width={20} height={20} rx={10} fill="#FFEAE5" />
            <G clipPath="url(#clip0_10897_44404)">
                <Path
                    opacity={0.8}
                    d="M10 12.5a1 1 0 110 2 1 1 0 010-2zm0-7a1 1 0 011 1v4a1 1 0 11-2 0v-4a1 1 0 011-1z"
                    fill="#E72A4A"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_10897_44404">
                    <Path fill="#fff" transform="translate(9 5.5)" d="M0 0H2V9H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default SvgComponent
