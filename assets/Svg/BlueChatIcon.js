import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

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
            <G clipPath="url(#clip0_10820_31110)">
                <Path
                    d="M.5 10a9.5 9.5 0 0119 0c0 2.186-.739 4.2-1.98 5.805 0 0 .8 2.392 1.557 3.009 0 0 0 .265-.21.395-1.848 0-4.215-.924-4.215-.924A9.456 9.456 0 0110 19.5 9.5 9.5 0 01.5 10z"
                    fill="#2B65EE"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_10820_31110">
                    <Path
                        fill="#fff"
                        transform="translate(.5 .5)"
                        d="M0 0H18.9991V18.9991H0z"
                    />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default SvgComponent
