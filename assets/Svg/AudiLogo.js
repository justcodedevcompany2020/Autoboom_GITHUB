import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={50}
            height={20}
            viewBox="0 0 50 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            {...props}
        >
            <Path opacity={0.8} fill="url(#pattern0)" d="M0 0.71875H50V19.27935H0z" />
            <Defs>
                <Pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width={1}
                    height={1}
                >
                    <Use
                        xlinkHref="#image0_11287_32691"
                        transform="scale(.00379 .0102)"
                    />
                </Pattern>
                <Image
                    id="image0_11287_32691"
                    width={264}
                    height={98}
                    xlinkHref="data:image/png;base64,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"
                />
            </Defs>
        </Svg>
    )
}

export default SvgComponent
