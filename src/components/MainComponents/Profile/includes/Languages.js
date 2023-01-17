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
    Slider,
    TextInput
} from 'react-native';
import Svg, { Defs, G, Path, Rect, Circle, ClipPath } from "react-native-svg";

export default function App(props) {
    return (
        <View style={styles.container} >
            <Text style={styles.mobText} >Язык</Text>
            <TouchableOpacity
                onPress={props.onPress}
                style={styles.inputBlock} >
                <Text>Русский</Text>
                <Svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M1 1L8 8L1 15" stroke="#C4C8D4" stroke-width="2" stroke-linecap="round" />
                </Svg>
            </TouchableOpacity>
            <Text style={styles.descText} >
                Именно на этом языке вы будете получать все уведомления и информацию с нашего сайта.
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 15,
        paddingHorizontal: 16,
        marginBottom: 20
    },
    mobText: {
        fontWeight: '700',
        fontSize: 22,
        color: '#091334',
        // marginBottom: 10
    },
    inputBlock: {
        width: '100%',
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#C4C8D4',
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 44,
        paddingHorizontal: 16
    },
    descText: {
        fontSize: 14,
        color: '#6C7694',
        marginTop: 15
    }
})