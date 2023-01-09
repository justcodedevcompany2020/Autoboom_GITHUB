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

import {
    SafeAreaView,
    SafeAreaProvider,
    SafeAreaInsetsContext,
    useSafeAreaInsets,
    initialWindowMetrics,
} from 'react-native-safe-area-context';

import ColorsSet from './ColorsSet'

const imageData = [
    {
        id: 1, image: require('../../../../../../assets/images/black.png'),
        textWithIcon: [
            { id: 1, text: 'Серый манхэттен' },
            { id: 2, text: 'Черный миф' },
        ],
        textData: null
    },
    {
        id: 2, image: require('../../../../../../assets/images/gray.png'),
        textWithIcon: [
            { id: 1, text: 'Серый манхэттен' },
        ],
        textData: null
    },
    {
        id: 3, image: require('../../../../../../assets/images/red.png'),
        textWithIcon: null,
        textData: [
            { id: 1, text: 'Красный тиоман' },
        ],
    },
    {
        id: 4, image: require('../../../../../../assets/images/blue.png'),
        textWithIcon: null,
        textData: [
            { id: 1, text: 'Синий манхэттен' },
        ],
    },
    {
        id: 5, image: require('../../../../../../assets/images/white.png'),
        textWithIcon: [
            { id: 1, text: 'Белый манхэттен' },
        ],
        textData: null
    },
    {
        id: 5, image: require('../../../../../../assets/images/blackmatt.png'),
        textWithIcon: [
            { id: 1, text: 'Серый манхэттен' },
            { id: 2, text: 'Черный миф' },
        ],
        textData: null
    },
]


export default function App(props) {


    return (
        <View style={styles.container} >
            <Text style={styles.textColor} >Доступные цвета</Text>
            <View style={styles.colorsDiv}>
                {imageData.map((value, index) => {
                    return (
                        <ColorsSet key={index} image={value.image} textWithIcon={value.textWithIcon} />
                    )
                })}
            </View>
            <TouchableOpacity style={styles.button} >
                <Text style={styles.buttonText} >Показать ещё цвета</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    colorsDiv: {
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    textColor: {
        color: '#091334',
        fontSize: 22,
        lineHeight: 28,
        fontWeight: '700',
        marginBottom:5
    },
    container: {
        padding: 15,
        width:'100%'
    },
    button: {
        width: '100%',
        alignSelf: 'center',
        backgroundColor: 'white',
        borderColor: '#C4C8D4',
        borderWidth: 1,
        height: 44,
        marginTop:25,
        borderRadius:6,
        alignItems:'center',
        justifyContent:'center'
    },
    buttonText:{
        color: '#091334',
        fontSize:16,
        fontWeight:'400',
        lineHeight:24
    }
})