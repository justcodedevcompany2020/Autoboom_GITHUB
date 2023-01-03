import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={189}
            height={56}
            viewBox="0 0 189 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_10897_28330)">
                <Path
                    d="M23.707 17c10.528 0 11.471 2.829 11.471 7.386 1.414 0 1.572.314 1.572 1.414 0 1.414-1.415 1.729-1.415 1.729 0 9.114 0 11.471-2.986 11.471-1.57 0-2.514-1.1-2.67-3.143-1.415.314-3.458.472-5.972.472-2.515 0-4.558-.158-5.972-.472C17.421 37.9 16.635 39 15.064 39c-3.143 0-3.143-2.357-3.143-11.471 0 0-1.257-.315-1.257-1.729 0-1.1 0-1.414 1.414-1.414 0-4.557 1.1-7.386 11.629-7.386z"
                    fill="#2B65EE"
                />
                <Path
                    d="M14.907 33.029a1.414 1.414 0 100-2.83 1.414 1.414 0 000 2.83zM32.507 33.029a1.414 1.414 0 100-2.83 1.414 1.414 0 000 2.83zM23.707 19.043c-10.215 0-9.743 2.043-9.743 7.386 0 0 4.243-.629 9.743-.629s9.742.629 9.742.629c0-5.343.472-7.386-9.742-7.386z"
                    fill="#fff"
                />
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.75 32.895a.628.628 0 01.747-.48c3.527.766 6.893.766 10.419 0a.629.629 0 01.267 1.228c-3.702.805-7.25.805-10.953 0a.628.628 0 01-.48-.748z"
                    fill="#fff"
                />
            </G>
            <Path
                d="M47.194 34.844l1.31-3.031h6.237l1.33 3.03h2.483l-6.003-13.687h-1.799L44.75 34.844h2.445zm6.667-5.065h-4.497l2.249-5.2 2.248 5.2zm14.86 5.201a6.29 6.29 0 002.093-.342 5.892 5.892 0 001.808-1.026c.554-.456.991-1.079 1.31-1.868.32-.788.48-1.697.48-2.727v-7.86h-2.366v7.527c0 1.239-.28 2.23-.841 2.972-.56.743-1.388 1.115-2.483 1.115-1.082 0-1.962-.381-2.64-1.144-.678-.762-1.017-1.77-1.017-3.02v-7.45H62.7v7.742c0 1.93.577 3.425 1.73 4.488 1.154 1.062 2.585 1.593 4.293 1.593zm16.855-.136V23.385h4.595v-2.229H78.615v2.23h4.595v11.458h2.366zm14.47.156c1.955 0 3.61-.668 4.966-2.004 1.356-1.336 2.034-3.002 2.034-4.996 0-2.007-.675-3.676-2.024-5.006S102.014 21 100.046 21c-1.969 0-3.628.675-4.977 2.024-1.349 1.349-2.023 3.008-2.023 4.976 0 2.007.677 3.676 2.033 5.006C96.435 34.336 98.09 35 100.046 35zm0-2.268c-1.252 0-2.32-.443-3.207-1.33-.886-.886-1.33-2.02-1.33-3.402 0-1.395.444-2.532 1.33-3.412.886-.88 1.955-1.32 3.207-1.32 1.238 0 2.304.443 3.197 1.33.892.886 1.339 2.02 1.339 3.402 0 1.395-.434 2.532-1.3 3.412-.867.88-1.946 1.32-3.236 1.32zm17.636 2.112c1.669 0 2.979-.326 3.931-.978.951-.652 1.427-1.656 1.427-3.011 0-1.695-.704-2.764-2.112-3.207 1.095-.665 1.643-1.681 1.643-3.05 0-1.082-.365-1.926-1.095-2.532-.73-.607-1.956-.91-3.676-.91h-5.807v13.688h5.689zm.059-8.056h-3.383v-3.402h3.129c.978 0 1.662.14 2.053.42.391.28.587.72.587 1.32 0 .521-.209.928-.626 1.222-.417.293-1.004.44-1.76.44zm-.215 5.826h-3.168V28.94h3.324c1.03 0 1.77.143 2.22.43.449.287.674.736.674 1.349 0 .665-.241 1.147-.723 1.447-.482.3-1.258.45-2.327.45zM134.4 35c1.956 0 3.611-.668 4.967-2.004 1.356-1.336 2.033-3.002 2.033-4.996 0-2.007-.674-3.676-2.023-5.006-1.35-1.33-3.008-1.994-4.977-1.994-1.968 0-3.627.675-4.976 2.024-1.349 1.349-2.024 3.008-2.024 4.976 0 2.007.678 3.676 2.034 5.006C130.79 34.336 132.445 35 134.4 35zm0-2.268c-1.251 0-2.32-.443-3.206-1.33-.887-.886-1.33-2.02-1.33-3.402 0-1.395.443-2.532 1.33-3.412.886-.88 1.955-1.32 3.206-1.32 1.239 0 2.304.443 3.197 1.33.893.886 1.34 2.02 1.34 3.402 0 1.395-.434 2.532-1.301 3.412-.866.88-1.945 1.32-3.236 1.32zM152.624 35c1.955 0 3.611-.668 4.966-2.004 1.356-1.336 2.034-3.002 2.034-4.996 0-2.007-.675-3.676-2.024-5.006S154.592 21 152.624 21c-1.969 0-3.627.675-4.976 2.024-1.35 1.349-2.024 3.008-2.024 4.976 0 2.007.678 3.676 2.033 5.006 1.356 1.33 3.012 1.994 4.967 1.994zm0-2.268c-1.252 0-2.32-.443-3.207-1.33-.886-.886-1.329-2.02-1.329-3.402 0-1.395.443-2.532 1.329-3.412.887-.88 1.955-1.32 3.207-1.32 1.238 0 2.304.443 3.197 1.33.893.886 1.339 2.02 1.339 3.402 0 1.395-.433 2.532-1.3 3.412-.867.88-1.946 1.32-3.236 1.32zm14.313 2.112V25.34l4.262 5.455h.606l4.165-5.436v9.484h2.366V21.156h-2.073l-4.712 6.355-4.888-6.355h-2.092v13.688h2.366z"
                fill="#000"
            />
            <Defs>
                <ClipPath id="clip0_10897_28330">
                    <Path
                        fill="#fff"
                        transform="translate(10.664 17)"
                        d="M0 0H26.0857V22H0z"
                    />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default SvgComponent
