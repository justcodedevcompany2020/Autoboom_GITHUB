import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={14}
            height={14}
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G opacity={0.6} stroke="#091334" strokeWidth={1.05}>
                <Circle cx={7} cy={7} r={6.475} />
                <Path d="M9.475 7.117c0 1.78-.327 3.428-.836 4.612-.255.593-.546 1.045-.842 1.34-.295.295-.564.406-.797.406-.233 0-.502-.11-.797-.405-.296-.296-.587-.748-.842-1.341-.51-1.184-.836-2.832-.836-4.612 0-1.781.327-3.491.84-4.737.256-.625.55-1.107.849-1.424.3-.318.566-.431.786-.431.22 0 .486.113.786.43.3.318.593.8.85 1.425.512 1.246.839 2.956.839 4.737zM.766 6.713h12.6" />
            </G>
        </Svg>
    )
}

export default SvgComponent
