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

const firstData = [
    { id: 1, number: 0, color: '#9B3637', width: 33, height: 24 },
    { id: 2, number: 1, color: '#E06436', width: 33, height: 24 },
    { id: 3, number: 2, color: '#F8CC47', width: 33, height: 24 },
    { id: 4, number: 3, color: '#59B490', width: 33, height: 24 },
    { id: 5, number: 4, color: '#4A889E', width: 33, height: 24 },
    { id: 6, number: 5, color: '#448BC6', width: 33, height: 24 },
    { id: 7, number: 6, color: '#346FB2', width: 33, height: 30 },
    { id: 8, number: 7, color: '#4B71B2', width: 33, height: 24 },
    { id: 9, number: 8, color: '#475FA5', width: 33, height: 24 },

]
const secondData = [
    { id: 1, number: 1, color: '#22522D', width: 19, height: 24 },
    { id: 2, number: 2, color: '#22522D', width: 19, height: 24 },
    { id: 3, number: 3, color: '#22522D', width: 19, height: 24 },
    { id: 4, number: 4, color: '#54784C', width: 19, height: 24 },
    { id: 5, number: 5, color: '#54784C', width: 19, height: 24 },
    { id: 6, number: 6, color: '#61AA56', width: 19, height: 24 },
    { id: 7, number: 7, color: '#61AA56', width: 19, height: 24 },
    { id: 8, number: 8, color: '#FEF151', width: 19, height: 24 },
    { id: 9, number: 9, color: '#FEF151', width: 19, height: 24 },
    { id: 10, number: 10, color: '#E7CB44', width: 19, height: 24 },
    { id: 11, number: 11, color: '#E7CB44', width: 19, height: 24 },
    { id: 12, number: 12, color: '#E57F3A', width: 19, height: 24 },
    { id: 13, number: 13, color: '#E57F3A', width: 19, height: 32 },
    { id: 14, number: 14, color: '#AF312D', width: 19, height: 24 },
    { id: 15, number: 15, color: '#AF312D', width: 19, height: 24 },

]

export default function App(props) {
    return (
        <View style={styles.ratingBanner} >
            <View style={styles.ratingDiv}>
                <Text style={styles.ratingText} >Рейтинги</Text>
                <View style={{ marginTop: 10 }} >
                    <Text style={styles.textHeader} >Безопасность</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                        {firstData.map((value, index) => {
                            return (
                                <View key={index} style={{ backgroundColor: value.color, width: value.width, height: value.height, marginLeft: 2, alignItems: 'center', justifyContent: 'center' }} >
                                    <Text style={styles.squareText} >{value.number}</Text>
                                </View>
                            )
                        })}
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, justifyContent: 'space-between' }} >
                        <Text style={styles.descText} >Менее безопасный</Text>
                        <Text style={styles.descText} >Более безопасный</Text>
                    </View>
                    <Text style={styles.descriptionText} >
                        Уровень безопасности автомобиля указан на основе данных, предоставленных производителем.
                    </Text>

                </View>
                <View style={{ marginTop: 10 }} >
                    <Text style={styles.textHeader} >Загрязнение воздуха</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                        {secondData.map((value, index) => {
                            return (
                                <View key={index} style={{ backgroundColor: value.color, width: value.width, height: value.height, marginLeft: 2, alignItems: 'center', justifyContent: 'center' }} >
                                    <Text style={styles.squareText} >{value.number}</Text>
                                </View>
                            )
                        })}
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, justifyContent: 'space-between' }} >
                        <Text style={styles.descText} >Более чистый</Text>
                        <Text style={styles.descText} >Менее чистый</Text>
                    </View>
                    <Text style={styles.descriptionText} >
                        Показатель рассчитывается по нормам чистого воздуха (данные о загрязнении воздуха от двигателя в рекламе), 2009 г.
                    </Text>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ratingBanner: {
        width: '100%',
        padding: 15,
        marginTop: 15
    },
    ratingDiv: {
        backgroundColor: '#131415',
        width: '100%',
        borderRadius: 8,
        height: 480,
        padding: 24
    },
    ratingText: {
        color: '#FFFFFF',
        fontSize: 22,
        fontWeight: '700'
    },
    textHeader: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '700'
    },
    squareText: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '400'
    },
    descText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '400'
    },
    descriptionText: {
        color: '#C4C8D4',
        fontSize: 14,
        fontWeight: '400',
        marginTop: 10,
        lineHeight: 24
    }
})