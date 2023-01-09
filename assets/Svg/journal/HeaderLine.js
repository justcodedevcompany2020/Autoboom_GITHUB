import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={24}
            height={22}
            viewBox="0 0 24 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M24 0v7.064c0 2.72-.431 5.24-1.294 7.563-.928 2.321-2.487 4.61-4.676 6.865l-3.88-2.885c1.459-1.592 2.52-3.085 3.183-4.478.664-1.327 1.062-2.653 1.194-3.98h-4.676V-.001H24zM10.15 0v7.064c0 2.72-.432 5.24-1.294 7.563-.929 2.321-2.488 4.61-4.677 6.865L.3 18.607c1.459-1.592 2.52-3.085 3.184-4.478.663-1.327 1.06-2.653 1.194-3.98H0V-.001h10.15z"
                fill="#6B7185"
            />
        </Svg>
    )
}

export default SvgComponent