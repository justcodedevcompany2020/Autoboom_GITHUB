import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={16}
            height={20}
            viewBox="0 0 16 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_10820_31117)">
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.749 12.507C.277 6.493.256 1.827 2.259.671 3.263.092 6.27-1.644 7.159 4.525c.155 2.583-4.086 1.023-.904 6.536 3.183 5.512 3.953 1.059 6.112 2.484 4.898 3.855 1.891 5.59.89 6.17-2.006 1.156-6.035-1.194-9.507-7.208z"
                    fill="#fff"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_10820_31117">
                    <Path
                        fill="#fff"
                        transform="translate(.911)"
                        d="M0 0H14.1771V20H0z"
                    />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default SvgComponent
