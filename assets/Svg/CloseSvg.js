import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={50}
            height={44}
            viewBox="0 0 50 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_10567_20504)">
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.707 14.293a1 1 0 00-1.414 1.414L22.586 22l-6.293 6.293a1 1 0 001.414 1.414L24 23.414l6.293 6.293a1 1 0 001.414-1.414L25.414 22l6.293-6.293a1 1 0 00-1.414-1.414L24 20.586l-6.293-6.293z"
                    fill="#091334"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_10567_20504">
                    <Path fill="#fff" transform="translate(16 14)" d="M0 0H16V16H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default SvgComponent
