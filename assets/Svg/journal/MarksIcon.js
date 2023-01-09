import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={23}
      height={22}
      viewBox="0 0 23 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M.45 17.336h0v.001c0 .967.135 1.862.535 2.546.448.768 1.168 1.167 2.024 1.167.58 0 1.154-.158 1.622-.566.462-.404.716-.958.838-1.542a.059.059 0 01.058-.046h10.678c.031 0 .053.022.058.046.122.584.376 1.138.838 1.542.469.408 1.041.566 1.622.566.856 0 1.577-.4 2.024-1.167.4-.684.535-1.58.535-2.546V12.95c0-.29-.006-.58-.02-.868-.024-.563-.61-.905-1.163-.79-.46.094-.826.488-.807.951.01.236.014.471.014.707v4.387c0 .828-.126 1.279-.25 1.492-.076.129-.16.191-.242.214a.346.346 0 01-.256-.04.78.78 0 01-.363-.491c-.202-.97-1.034-1.657-1.99-1.657H5.527c-.956 0-1.788.687-1.99 1.657-.04.192-.19.399-.363.491a.346.346 0 01-.256.04c-.082-.023-.166-.085-.241-.214-.124-.213-.251-.664-.251-1.492v-.029c0-3.791 0-7.33 1.283-10.955a2.158 2.158 0 012.025-1.457h5.833c.475 0 .86-.367.952-.811.124-.604-.317-1.23-.961-1.23H5.734C4 2.855 2.448 3.97 1.853 5.652h0C.618 9.329.548 12.659.465 16.617v.003h0l-.015.717zM17.988.95c-2.035 0-3.717 1.562-3.717 3.527s1.682 3.527 3.717 3.527c.601 0 1.171-.137 1.677-.38l1.542 1.457a.81.81 0 001.117-.011.747.747 0 00-.012-1.083l-1.405-1.326a3.395 3.395 0 00.798-2.184c0-1.965-1.682-3.527-3.717-3.527zm-2.136 3.527c0-1.087.939-1.998 2.136-1.998s2.136.911 2.136 1.998c0 1.086-.939 1.998-2.136 1.998s-2.136-.912-2.136-1.998zM7.25 13.029c0-.455-.133-.872-.405-1.175-.273-.305-.68-.49-1.216-.49-.536 0-.943.185-1.216.49-.272.303-.405.72-.405 1.175 0 .456.133.873.405 1.176.273.304.68.49 1.216.49.536 0 .943-.186 1.216-.49.272-.303.405-.72.405-1.176zm10.476 0c0-.455-.134-.872-.405-1.175-.273-.305-.68-.49-1.216-.49-.536 0-.943.185-1.216.49-.272.303-.406.72-.406 1.175 0 .456.134.873.406 1.176.273.304.68.49 1.216.49.536 0 .943-.186 1.216-.49.271-.303.405-.72.405-1.176z"
        fill="#091334"
        stroke="#091334"
        strokeWidth={0.1}
      />
    </Svg>
  )
}

export default SvgComponent