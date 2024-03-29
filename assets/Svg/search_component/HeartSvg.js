import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={22}
            height={20}
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M19.04 1.567C16.27-.371 12.848.533 11 2.75 9.153.533 5.731-.382 2.96 1.567 1.49 2.6.567 4.344.504 6.186c-.147 4.177 3.464 7.525 8.974 12.661l.105.097a2.056 2.056 0 002.824-.01l.115-.108c5.51-5.125 9.11-8.474 8.974-12.651-.063-1.83-.986-3.575-2.456-4.608zm-7.935 15.676a.147.147 0 01-.21 0C5.9 12.603 2.603 9.534 2.603 6.423c0-2.154 1.575-3.769 3.674-3.769 1.498 0 2.96.916 3.609 2.224a.55.55 0 00.484.317h1.269a.55.55 0 00.485-.32c.641-1.307 2.102-2.22 3.6-2.22 2.099 0 3.673 1.614 3.673 3.767 0 3.112-3.296 6.18-8.292 10.821z"
                fill={props.active ? "#FF7A00" : "#C4C8D4"}
            />

        </Svg>
    )
}

export default SvgComponent
