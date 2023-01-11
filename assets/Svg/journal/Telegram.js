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
                d="M15.125 30c-8.285 0-15-6.715-15-15s6.715-15 15-15 15 6.715 15 15-6.715 15-15 15zM10.46 16.755l.02-.01 1.304 4.304c.168.467.4.551.68.512.282-.038.43-.189.615-.366l1.782-1.722 3.825 2.832c.699.386 1.201.186 1.375-.648l2.486-11.733c.274-1.092-.206-1.53-1.053-1.182l-14.6 5.64c-.995.399-.99.957-.18 1.204l3.746 1.17v-.001z"
                fill="#6C7694"
            />
        </Svg>
    )
}

export default SvgComponent