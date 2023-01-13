import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={12}
            height={16}
            viewBox="0 0 12 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_10744_136544)">
                <Path
                    d="M0 .25h12v10.366c0 .124 0 .187-.002.24a3 3 0 01-2.892 2.892c-.053.002-.116.002-.24.002h-.073a2 2 0 00-1.354.561l-.051.051L6 15.75l-1.388-1.388a2 2 0 00-1.405-.612h-.073c-.124 0-.187 0-.24-.002a3 3 0 01-2.892-2.892C0 10.803 0 10.74 0 10.616V.25z"
                    fill="#8BC5FF"
                />
                <Path d="M3 6.75l2.5 2.5 4-4.5" stroke="#fff" strokeWidth={1.6} />
            </G>
            <Defs>
                <ClipPath id="clip0_10744_136544">
                    <Path fill="#fff" transform="translate(0 .25)" d="M0 0H12V15.5H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default SvgComponent