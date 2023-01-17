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
            <Text style={styles.mobText} >Дополнительные номера</Text>
            <TouchableOpacity style={styles.inputBlock} >
                <Text>055-4561245</Text>
                <Svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M1 1L8 8L1 15" stroke="#C4C8D4" stroke-width="2" stroke-linecap="round" />
                </Svg>
            </TouchableOpacity>
            <TouchableOpacity style={styles.inputBlock} >
                <Text>055-4561245</Text>
                <Svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M1 1L8 8L1 15" stroke="#C4C8D4" stroke-width="2" stroke-linecap="round" />
                </Svg>
            </TouchableOpacity>
            <TouchableOpacity style={styles.inputBlock} >
                <Text>055-4561245</Text>
                <Svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M1 1L8 8L1 15" stroke="#C4C8D4" stroke-width="2" stroke-linecap="round" />
                </Svg>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonBlue}
            >
                <Text style={styles.buttonText} >Добавить номер</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 25,
        paddingHorizontal: 16
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
    buttonBlue: {
        width: '100%',
        marginTop: 20,
        backgroundColor: '#E6F2FF',
        marginTop: 5,
        height: 44,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#2B65EE',
        fontSize:16
    }
})