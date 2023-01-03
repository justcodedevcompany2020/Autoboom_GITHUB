import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

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
            <G clipPath="url(#clip0_10401_158694)">
                <Path
                    d="M32 8.5c-.605 0-1.1.495-1.1 1.1v3.3h-3.3c-.605 0-1.1.495-1.1 1.1 0 .605.495 1.1 1.1 1.1h3.3v3.3c0 .605.495 1.1 1.1 1.1.605 0 1.1-.495 1.1-1.1v-3.3h3.3c.605 0 1.1-.495 1.1-1.1 0-.605-.495-1.1-1.1-1.1h-3.3V9.6c0-.605-.495-1.1-1.1-1.1zM32 3c-6.072 0-11 4.928-11 11s4.928 11 11 11 11-4.928 11-11S38.072 3 32 3zm0 19.8c-4.851 0-8.8-3.949-8.8-8.8 0-4.851 3.949-8.8 8.8-8.8 4.851 0 8.8 3.949 8.8 8.8 0 4.851-3.949 8.8-8.8 8.8z"
                    fill="#091334"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_10401_158694">
                    <Path fill="#fff" transform="translate(21 3)" d="M0 0H22V22H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default SvgComponent
