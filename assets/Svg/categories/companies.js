import * as React from "react"
import Svg, { Rect, G, Path, Defs, ClipPath } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={57}
            height={56}
            viewBox="0 0 57 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Rect x={0.5} width={56} height={56} rx={28} fill="#FFF2DE" />
            <G clipPath="url(#clip0_10498_6459)">
                <G clipPath="url(#clip1_10498_6459)">
                    <Path
                        d="M38.5 24.087l-.87 1.74-9.13-5.653-9.13 5.652-.87-1.739L28.5 18l10 6.087z"
                        fill="#7C7D7D"
                    />
                    <Path
                        d="M38.5 24.087l-.6 1.2-9.4-5.983-9.5 5.783-.5-1L28.5 18l10 6.087z"
                        fill="#919191"
                    />
                    <Path
                        d="M36.326 25.017V38h-3.043v-9.565h-9.566v6.087h-1.739V38h-1.304V25.017l7.826-4.843 7.826 4.843z"
                        fill="#E9964B"
                    />
                    <Path
                        d="M36.326 25.887V38h-3.043v-9.565h-9.566V38h-2.173V25.348l6.956-4.304 7.826 4.843z"
                        fill="#FFA552"
                    />
                    <Path d="M34.152 26.696H22.848v1.739h11.304v-1.74z" fill="#7C7D7D" />
                    <Path
                        d="M34.152 26.696v.87h-9.565a.87.87 0 01-.87-.87h10.435z"
                        fill="#919191"
                    />
                    <Path
                        d="M33.283 28.435V38h-7.827v-3.478h-1.739v-6.087h9.566z"
                        fill="#C98241"
                    />
                    <Path
                        d="M32.413 34.522V38h-8.696v-5.218h6.957a1.739 1.739 0 011.739 1.74z"
                        fill="#E9964B"
                    />
                    <Path
                        d="M28.065 32.783v-.87a.435.435 0 11.87 0v.87a.435.435 0 01-.87 0z"
                        fill="#7C7D7D"
                    />
                    <Path d="M33.283 28.435h-9.566v1.739h9.566v-1.74z" fill="#DAD7E5" />
                    <Path
                        d="M33.283 28.435v.87h-7.827a.87.87 0 01-.869-.87h8.696z"
                        fill="#EDEBF2"
                    />
                    <Path d="M33.283 30.174h-9.566v1.739h9.566v-1.74z" fill="#DAD7E5" />
                    <Path
                        d="M33.283 30.174v.87h-7.827a.87.87 0 01-.869-.87h8.696z"
                        fill="#EDEBF2"
                    />
                </G>
            </G>
            <Defs>
                <ClipPath id="clip0_10498_6459">
                    <Path fill="#fff" transform="translate(18.5 18)" d="M0 0H20V20H0z" />
                </ClipPath>
                <ClipPath id="clip1_10498_6459">
                    <Path fill="#fff" transform="translate(18.5 18)" d="M0 0H20V20H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default SvgComponent
