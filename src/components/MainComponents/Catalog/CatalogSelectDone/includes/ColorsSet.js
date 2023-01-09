import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button,
    TouchableOpacity,
    TouchableHighlight,
    ScrollView,
    Image,
    Slider
} from 'react-native';

import Svg, { Defs, G, Path, Rect, Circle, ClipPath } from "react-native-svg";

export default function App({ image, textWithIcon, text }) {
    return (
        <TouchableOpacity style={styles.colorBanner} >
            <Image
                style={{ width: 167, height: 37, borderRadius: 5 }}
                source={image} />
            {
                textWithIcon != null ? (
                    <View>
                        {textWithIcon.map((value, index) => {
                            return (
                                <View key={index} style={styles.textWithIcon}>
                                    <Svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Rect width="14" height="14" rx="7" fill="#C4C8D4" fill-opacity="0.4" />
                                        <Path d="M4.91016 9.5V5.75488H5.00293L6.66797 9.35352H7.32227L8.9873 5.75488H9.08008V9.5H9.9248V4.23633H8.94336L7.05371 8.31836H6.97559L5.09082 4.23633H4.07031V9.5H4.91016Z" fill="#091334" />
                                    </Svg>
                                    <Text style={styles.withIconText}>{value.text}</Text>
                                </View>
                            )
                        })}

                    </View>
                )
                    :
                    (
                        <Text style={[styles.withIconText, { marginLeft: 0 }]}>Синий манхэттен</Text>
                    )
            }


        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    colorBanner: {
        width: '45%',
        marginTop:10
    },
    textWithIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between'
        marginTop: 5
    },
    withIconText: {
        fontSize: 12,
        lineHeight: 20,
        color: '#091334',
        marginLeft: 5,
        fontWeight: '400'
    }
})