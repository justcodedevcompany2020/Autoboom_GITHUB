import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={31}
            height={30}
            viewBox="0 0 31 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M15.625 0c-8.285 0-15 6.715-15 15 0 7.486 5.486 13.692 12.657 14.819V19.334h-3.81V15h3.81v-3.305c0-3.759 2.238-5.835 5.666-5.835 1.64 0 3.357.293 3.357.293v3.69h-1.89c-1.865 0-2.445 1.156-2.445 2.343V15h4.159l-.665 4.335H17.97v10.483C25.14 28.694 30.624 22.486 30.624 15c0-8.285-6.715-15-15-15z"
                fill="#6C7694"
            />
        </Svg>
    )
}

export default SvgComponent