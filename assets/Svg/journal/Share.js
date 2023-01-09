import * as React from "react"
import Svg, { Path } from "react-native-svg"

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
      <Path
        d="M11.12 15.022l-4.199-2.29a4 4 0 110-5.464l4.2-2.29A3.998 3.998 0 0116.367.24a4 4 0 11-4.285 6.494l-4.2 2.29a4.006 4.006 0 010 1.953l4.199 2.29a4 4 0 11-.96 1.754v.001zM4 12a2 2 0 100-4 2 2 0 000 4zm11-6a2 2 0 100-4 2 2 0 000 4zM15 18a2 2 0 100-4 2 2 0 000 4z"
        fill="#091334"
      />
    </Svg>
  )
}

export default SvgComponent