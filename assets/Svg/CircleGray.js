import * as React from "react"
import Svg, { Rect } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={4}
      height={4}
      viewBox="0 0 4 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={4} height={4} rx={2} fill="#C4C8D4" />
    </Svg>
  )
}

export default SvgComponent