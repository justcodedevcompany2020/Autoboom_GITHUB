import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={22}
            height={16}
            viewBox="0 0 22 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_10626_24848)">
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.25 2a2 2 0 100 4 2 2 0 000-4zM4.376 3a4.002 4.002 0 017.748 0h8.126a1 1 0 110 2h-8.126a4.002 4.002 0 01-7.748 0H1.25a1 1 0 010-2h3.126zm9.874 7a2 2 0 100 4 2 2 0 000-4zm-3.874 1a4.002 4.002 0 017.748 0h2.126a1 1 0 110 2h-2.126a4.002 4.002 0 01-7.748 0H1.25a1 1 0 110-2h9.126z"
                    fill="#091334"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_10626_24848">
                    <Path fill="#fff" transform="translate(.25)" d="M0 0H21V16H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default SvgComponent
