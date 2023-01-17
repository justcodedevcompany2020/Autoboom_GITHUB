import * as React from "react"
import Svg, { Rect, G, Path, Defs, ClipPath } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={20} height={20} rx={10} fill="#F0F1F4" />
      <G clipPath="url(#clip0_11410_32362)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.529 6.468a.75.75 0 10-1.061 1.06L8.939 10l-2.471 2.472a.75.75 0 001.06 1.06L10 11.061l2.471 2.471a.75.75 0 001.061-1.06L11.061 10l2.471-2.471a.75.75 0 10-1.06-1.06L10 8.938 7.529 6.47z"
          fill="#6C7694"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_11410_32362">
          <Path
            fill="#fff"
            transform="translate(6.248 6.249)"
            d="M0 0H7.50334V7.50334H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgComponent