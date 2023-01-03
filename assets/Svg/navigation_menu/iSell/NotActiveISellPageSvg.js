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
            <G clipPath="url(#clip0_10401_158703)">
                <Path
                    d="M32 1c-7.176 0-13 5.824-13 13s5.824 13 13 13 13-5.824 13-13S39.176 1 32 1zm5.2 14.3h-3.9v3.9c0 .715-.585 1.3-1.3 1.3-.715 0-1.3-.585-1.3-1.3v-3.9h-3.9c-.715 0-1.3-.585-1.3-1.3 0-.715.585-1.3 1.3-1.3h3.9V8.8c0-.715.585-1.3 1.3-1.3.715 0 1.3.585 1.3 1.3v3.9h3.9c.715 0 1.3.585 1.3 1.3 0 .715-.585 1.3-1.3 1.3z"
                    fill="#2B65EE"
                />
                <Path
                    d="M33.3 15.3h3.9c.715 0 1.3-.585 1.3-1.3 0-.715-.585-1.3-1.3-1.3h-3.9V8.8c0-.715-.585-1.3-1.3-1.3-.715 0-1.3.585-1.3 1.3v3.9h-3.9c-.715 0-1.3.585-1.3 1.3 0 .715.585 1.3 1.3 1.3h3.9v3.9c0 .715.585 1.3 1.3 1.3.715 0 1.3-.585 1.3-1.3v-3.9z"
                    fill="#fff"
                />
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M32 1c-7.18 0-13 5.82-13 13s5.82 13 13 13 13-5.82 13-13S39.18 1 32 1zm0 0c7.176 0 13 5.824 13 13s-5.824 13-13 13-13-5.824-13-13S24.824 1 32 1z"
                    fill="#fff"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_10401_158703">
                    <Path fill="#fff" transform="translate(19 1)" d="M0 0H26V26H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default SvgComponent
