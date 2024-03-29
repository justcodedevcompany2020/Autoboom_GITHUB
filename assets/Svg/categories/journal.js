import * as React from "react"
import Svg, { Rect, G, Path, Defs, ClipPath } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={57}
            height={56}
            viewBox="0 0 57 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Rect x={0.5} width={56} height={56} rx={28} fill="#F0F1F4" />
            <G clipPath="url(#clip0_10498_6486)">
                <Path
                    d="M36.833 38h-16.11c2.222 0 1.666-5 1.666-5 0-1.227.995-8.333 2.222-8.333h11.667s2.222 0 2.222 2.222v9.444S38.5 38 36.833 38z"
                    fill="#99AAB5"
                />
                <Path
                    d="M35.167 36.333C35.167 38 36.833 38 36.833 38H20.167S18.5 38 18.5 35.778V20.222A2.222 2.222 0 0120.722 18h12.222a2.222 2.222 0 012.223 2.222v16.111z"
                    fill="#CCD6DD"
                />
                <Path
                    d="M33.5 29.111a.556.556 0 01-.556.556H28.5a.556.556 0 110-1.111h4.444a.556.556 0 01.556.555zM33.5 26.889a.556.556 0 01-.556.555H28.5a.556.556 0 110-1.11h4.444a.556.556 0 01.556.555zM33.5 24.667a.555.555 0 01-.556.555H28.5a.556.556 0 010-1.11h4.444a.555.555 0 01.556.555zM33.5 31.333a.555.555 0 01-.556.556H20.722a.555.555 0 110-1.111h12.222a.556.556 0 01.556.555zM33.5 33.556a.556.556 0 01-.556.555H20.722a.555.555 0 110-1.111h12.222a.556.556 0 01.556.556zM33.5 35.778a.555.555 0 01-.556.555H20.722a.556.556 0 010-1.11h12.222a.556.556 0 01.556.555zM32.389 23s1.111 0 1.111-1.111v-1.111s0-1.111-1.111-1.111H21.278s-1.111 0-1.111 1.11v1.112s0 1.111 1.11 1.111H32.39z"
                    fill="#99AAB5"
                />
                <Path
                    d="M25.722 29.667s1.111 0 1.111-1.111v-3.334s0-1.11-1.11-1.11h-4.445s-1.111 0-1.111 1.11v3.334s0 1.11 1.11 1.11h4.445z"
                    fill="#5EB3F4"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_10498_6486">
                    <Path fill="#fff" transform="translate(18.5 18)" d="M0 0H20V20H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default SvgComponent
