import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={13}
            height={12}
            viewBox="0 0 13 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_10657_33198)">
                <Path
                    d="M.94 2.166l2.538 1.742L6.008.261A.61.61 0 016.5 0a.59.59 0 01.492.26l2.53 3.648 2.539-1.742a.592.592 0 01.879.246c.05.107.07.227.056.345l-.993 8.693a.629.629 0 01-.199.393.594.594 0 01-.402.157H1.598a.595.595 0 01-.401-.157.629.629 0 01-.199-.393L.004 2.756a.639.639 0 01.057-.344.616.616 0 01.227-.259.591.591 0 01.652.013z"
                    fill="#FFBF1A"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_10657_33198">
                    <Path fill="#fff" d="M0 0H13V12H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default SvgComponent
