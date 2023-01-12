import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={12}
            height={12}
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_11240_36894)">
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.293.293a1 1 0 111.414 1.414L7.414 6l4.293 4.293a1 1 0 01-1.414 1.414L6 7.414l-4.293 4.293a1 1 0 01-1.414-1.414L4.586 6 .293 1.707A1 1 0 011.707.293L6 4.586 10.293.293z"
                    fill="#6C7694"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_11240_36894">
                    <Path
                        fill="#fff"
                        transform="matrix(-1 0 0 1 12 0)"
                        d="M0 0H12V12H0z"
                    />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default SvgComponent
