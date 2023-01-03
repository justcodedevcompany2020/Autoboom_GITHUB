import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={50}
            height={44}
            viewBox="0 0 50 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_10626_31907)">
                <Path
                    d="M23.44 17.185a.5.5 0 01-.388.815H21.1a.06.06 0 00-.06.06v10.95a.99.99 0 01-1.981 0V18.06A.06.06 0 0019 18h-1.952a.5.5 0 01-.388-.815l3.002-3.705a.5.5 0 01.777 0l3.001 3.705zM32.952 26a.5.5 0 01.388.815l-3.002 3.705a.5.5 0 01-.777 0l-3.001-3.705a.5.5 0 01.388-.815h2.012V14.99a.99.99 0 111.98 0V26h2.012z"
                    fill="#091334"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_10626_31907">
                    <Path fill="#fff" transform="translate(16 13)" d="M0 0H18V18H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default SvgComponent
