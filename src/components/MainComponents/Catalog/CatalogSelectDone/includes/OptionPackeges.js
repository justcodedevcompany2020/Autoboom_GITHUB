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


const data = [
    {
        id: 1, key: 'Комфорт', headerText: 'Комфорт', price: '₪ 13 000', descText: [
            { id: 1, text: 'Тонированные стекла' },
            { id: 2, text: 'Отделка кожей рычага' },
            { id: 3, text: 'КПП Подогрев боковых зеркал' },
            { id: 4, text: 'Задние датчики парковки' },
            { id: 5, text: 'Электропривод зеркал' },
            { id: 6, text: 'Система доступа без ключа' },
            { id: 7, text: 'Цвет металлик' },
            { id: 8, text: 'Двухцветный кузов' },
            { id: 9, text: 'Задние светодиодные фонари' },
            { id: 10, text: 'Динамические стоп-сигналы' },
            { id: 11, text: 'Диски R17' },
        ]
    },
    {
        id: 1, key: 'Стиль', headerText: 'Стиль', price: '₪ 13 000', descText: [
            { id: 1, text: 'Тонированные стекла' },
            { id: 2, text: 'Отделка кожей рычага' },
            { id: 3, text: 'КПП Подогрев боковых зеркал' },
            { id: 4, text: 'Задние датчики парковки' },
        ]
    },
    {
        id: 1, key: 'Epic Edition', headerText: 'Epic Edition', price: '₪ 23 000', descText: [
            { id: 1, text: 'Тонированные стекла' },
            { id: 2, text: 'Отделка кожей рычага' },
            { id: 3, text: 'КПП Подогрев боковых зеркал' },
            { id: 4, text: 'Задние датчики парковки' },
            { id: 5, text: 'Электропривод зеркал' },
            { id: 6, text: 'Система доступа без ключа' },
            { id: 7, text: 'Цвет металлик' },
            { id: 8, text: 'Двухцветный кузов' },
            { id: 9, text: 'Задние светодиодные фонари' },
            { id: 10, text: 'Динамические стоп-сигналы' },
            { id: 11, text: 'Диски R17' },
        ]
    },
]

export default function App(props) {
    const [sortBy, onSortBy] = React.useState(null)
    return (
        <View style={styles.optionContainer} >
            <Text style={styles.optionHeaderText} >Пакеты опций</Text>
            {data.map((res) => {
                return (
                    <View key={res.key} style={{ marginTop: 15, paddingBottom: 30, borderBottomWidth: 1, borderBottomColor: '#F0F1F4' }}>
                        <View style={[styles.optionSelectText, { justifyContent: 'space-between' }]} >
                            <View style={styles.optionSelectText} >
                                <Text style={styles.headerBoldText} >{res.headerText}</Text>
                                <Text style={styles.greenText} >{res.price}</Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => onSortBy(res.key)}
                                style={styles.selectDiv} >
                                {sortBy == res.key &&
                                    <View style={styles.selectDivCircle} ></View>
                                }
                            </TouchableOpacity>
                        </View>
                        {res.descText.map((value, index) => {
                            return (
                                <Text key={index} style={styles.descriptionText} >{value.text}</Text>
                            )
                        })}

                    </View>
                )
            })}

        </View>
    )
}

const styles = StyleSheet.create({
    optionContainer: {
        width: '92%',
        height: 914,
        borderColor: '#C4C8D4',
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 15,
        alignSelf: 'center',
        padding: 24
    },
    optionHeaderText: {
        fontSize: 22,
        fontWeight: '700',
        color: '#091334'
        // marginTop:10
    },
    optionSelectText: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerBoldText: {
        fontSize: 18,
        fontWeight: '700',
        color: '#091334'
    },
    greenText: {
        fontSize: 16,
        fontWeight: '400',
        color: '#009900',
        marginLeft: 5
    },
    selectDiv: {
        width: 20,
        height: 20,
        backgroundColor: '#E6F2FF',
        borderWidth: 1,
        borderColor: '#2B65EE',
        borderRadius: 10,
        padding: 5
    },
    selectDivCircle: {
        width: 8,
        height: 8,
        backgroundColor: '#2B65EE',
        borderRadius: 4
    },
    descriptionText: {
        color: '#6C7694',
        fontSize: 14,
        lineHeight: 24,
        fontWeight: '400'
    }
})