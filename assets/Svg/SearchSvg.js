import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={17}
            height={18}
            viewBox="0 0 17 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G opacity={0.3} clipPath="url(#clip0_10567_5017)">
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 7a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM6.5.5a6.5 6.5 0 103.835 11.749l4.958 4.958a1 1 0 001.414-1.414l-4.958-4.958A6.5 6.5 0 006.5.5z"
                    fill="#091334"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_10567_5017">
                    <Path fill="#fff" transform="translate(0 .5)" d="M0 0H17V17H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default SvgComponent
