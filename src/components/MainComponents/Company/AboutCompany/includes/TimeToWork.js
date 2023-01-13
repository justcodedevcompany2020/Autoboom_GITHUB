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
import {
    SafeAreaView,
    SafeAreaProvider,
    SafeAreaInsetsContext,
    useSafeAreaInsets,
    initialWindowMetrics,
} from 'react-native-safe-area-context';
import UnionSvg from '../../../../../../assets/Svg/UnionSvg'
import GrayCircle from '../../../../../../assets/Svg/CircleGray'

let data = [
    { id: 1, img: require('../../../../../../assets/images/timecar1.png') },
    { id: 1, img: require('../../../../../../assets/images/timecar2.png') },
    { id: 1, img: require('../../../../../../assets/images/timecar3.png') },
    { id: 1, img: require('../../../../../../assets/images/timecar1.png') },
]

export default function App(props) {
    return (
        <View style={styles.conatinerServices}>
            <Text style={styles.headerText} >Часы работы</Text>
            <View style={styles.buttonDiv} >
                <Svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Circle cx="5" cy="5" r="5" fill="#009900" />
                </Svg>
                <Text style={[styles.descText, { marginLeft: 5, marginRight: 5 }]} >Открыто</Text>
                <GrayCircle />
                <Text style={[styles.descText, { marginLeft: 5, marginRight: 5 }]} >Закроется в 18:00</Text>
                <Svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M5.2 6.93333L1.2 1.6C0.705573 0.940764 1.17595 0 2 0H10C10.824 0 11.2944 0.940764 10.8 1.6L6.8 6.93333C6.4 7.46667 5.6 7.46667 5.2 6.93333Z" fill="#C4C8D4" />
                </Svg>
            </View>
            <Text style={styles.headerText} >Адрес</Text>
            <View style={styles.buttonDiv} >
                <Svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M12 7.10352C12 3.10352 8.5 1.10352 6 1.10352C3.5 1.10352 0 3.10352 0 7.10352C0 11.1798 3.98793 14.5915 5.46136 15.7129C5.78261 15.9574 6.21739 15.9574 6.53864 15.7129C8.01207 14.5915 12 11.1798 12 7.10352ZM6 9.10352C7.10457 9.10352 8 8.20809 8 7.10352C8 5.99895 7.10457 5.10352 6 5.10352C4.89543 5.10352 4 5.99895 4 7.10352C4 8.20809 4.89543 9.10352 6 9.10352Z" fill="#C4C8D4" />
                </Svg>

                <Text style={[styles.descText, { marginLeft: 5, marginRight: 5, color: '#1548C1' }]} >Кехилат Тцион 19, Афула, Израиль</Text>
            </View>
            <ScrollView horizontal={true} style={styles.scrollView} >
                {data.map((value, index) => {
                    return (
                        <Image
                            key={index}
                            style={{ width: 120, height: 90, borderRadius: 4, marginRight: 10 }}
                            source={value.img} />
                    )
                })}

            </ScrollView>
            <UnionSvg />
            <Text style={[styles.headerText, { marginTop: 10 }]} >О компании</Text>
            <View style={styles.buttonDiv}>
                <TouchableOpacity style={styles.button} >
                    <Text>Автосалон</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} >
                    <Text>Автосервис</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.descText} >
                Авто Плюс специализируется на продаже автомобилей более четырех десятилетий. Огромный выбор автомобилей из первых рук. Точная запись истории каждого автомобиля. Отличные условия кредитования и трейд-ин. Квалифицированный персонал делает упор на надежное и профессиональное обслуживание.
            </Text>
            <Text style={[styles.headerText, { marginTop: 10 }]} >Говорим на языках: <Text style={styles.descText} > Иврит, Английский </Text></Text>
            <Text style={[styles.headerText, { marginTop: 10 }]} >Соцсети и мессенджеры:</Text>
            <Text style={[styles.descText, { color: '#2B65EE' }]} >Facebook</Text>
            <Text style={[styles.headerText, { marginTop: 10 }]} >Телефоны: <Text style={styles.descText} > *8523, 072-3902493 </Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    conatinerServices: {
        width: '100%',
        borderRadius: 12,
        borderColor: '#C4C8D4',
        borderWidth: 1,
        minHeight: 164,
        padding: 16,
        marginTop: 20,
        marginBottom: 20
    },
    headerText: {
        color: '#091334',
        fontSize: 16,
        fontWeight: '700'
    },
    scrollView: {
        width: '100%',
        height: 100,
        marginTop: 10,
        marginBottom: 10
    },
    descText: {
        color: '#091334',
        fontSize: 16,
        fontWeight: '400'
    },
    buttonDiv: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 7,
        marginBottom: 7
    },
    button: {
        padding: 10,
        height: 44,
        minWidth: 101,
        backgroundColor: '#F0F1F4',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        marginRight: 5
    }
})