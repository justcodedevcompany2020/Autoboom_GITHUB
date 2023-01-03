import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={19}
            height={20}
            viewBox="0 0 19 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_10657_33169)">
                <Path
                    d="M16.761 5.389a.931.931 0 01-1.862 0V2.4h-8.38v3.75a1 1 0 01-1 1H1.861V17.6H14.9v-2.688a.931.931 0 111.862 0v3.646c0 .25-.098.49-.271.666a.915.915 0 01-.654.276H.925a.915.915 0 01-.657-.283.953.953 0 01-.268-.674V6.61a1 1 0 01.286-.7l5.01-5.11A1 1 0 016.01.5h9.818c.514 0 .933.432.933.942V5.39zm-.1 2.217a1 1 0 011.332-.086l.129.101a1 1 0 01.096 1.487L12.051 15.4a1 1 0 01-.716.3h-.663a.5.5 0 01-.494-.428l-.062-.424a1 1 0 01.276-.845l6.269-6.396z"
                    fill={props.active ? "#FF7A00" : "#C4C8D4"}
                />
            </G>
            <Defs>
                <ClipPath id="clip0_10657_33169">
                    <Path fill="#fff" transform="translate(0 .5)" d="M0 0H19V19H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default SvgComponent
