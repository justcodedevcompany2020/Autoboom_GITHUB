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
            <G clipPath="url(#clip0_10401_158753)">
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22 8a1 1 0 011-1h18a1 1 0 110 2H23a1 1 0 01-1-1zm0 6a1 1 0 011-1h18a1 1 0 110 2H23a1 1 0 01-1-1zm1 5a1 1 0 100 2h18a1 1 0 100-2H23z"
                    fill="#091334"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_10401_158753">
                    <Path
                        fill="#fff"
                        transform="translate(22 7)"
                        d="M0 0H20.0018V14H0z"
                    />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default SvgComponent
