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
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Defs, G, Path, Rect, Circle, ClipPath } from "react-native-svg";
import Navigation from '../AboutCompany/includes/Navigation';
import Footer from '../AboutCompany/includes/Footer';
import Description from '../AboutCompany/includes/Description';


export default function App(props) {

    const descriptionData = [
        {
            id: 1,
            title: 'Выхлопная система',
            data: [
                { id: 1, secondText: 'Замена впускного коллектора' },
                { id: 2, secondText: 'Замена прокладки впускного-выпускного коллектора' },
                { id: 3, secondText: 'Замена глушителя' },
                { id: 4, secondText: 'Замена лямбда зонда' },
                { id: 5, secondText: 'Установка пламегасителя' }
            ]
        },
        {
            id: 2,
            title: 'Диагностика',
            data: [
                { id: 1, secondText: 'Замена впускного коллектора' },
                { id: 3, secondText: 'Замена глушителя' },
                { id: 5, secondText: 'Установка пламегасителя' }
            ]
        },
        {
            id: 2,
            title: 'Двигатель',
            data: [
                { id: 1, secondText: 'Замена впускного коллектора' },
                { id: 2, secondText: 'Замена прокладки впускного-выпускного коллектора' },
                { id: 3, secondText: 'Замена глушителя' },

            ]
        },
        {
            id: 2,
            title: 'Замена жидкостей',
            data: [
                { id: 1, secondText: 'Замена впускного коллектора' },
                { id: 4, secondText: 'Замена лямбда зонда' },
                { id: 5, secondText: 'Установка пламегасителя' }
            ]
        },
    ]



    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.header}>
                <View style={[styles.headerItem, styles.flex1]}>
                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate('CompanyMap')
                        }}
                        style={{}}
                    >
                        <Svg width={43} height={44} viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M25 15l-6.93 6.93a.1.1 0 000 .14L25 29" stroke="#091334" strokeWidth={2} strokeLinecap="round" />
                        </Svg>
                    </TouchableOpacity>
                </View>

                <View style={[styles.headerItem, styles.flex2]}>
                    <View style={styles.headerProf} >
                        <Text style={styles.appName} >Компании</Text>
                    </View>
                </View>
                <View style={[styles.headerItem, styles.flex1, styles.headerItemRight]}></View>
            </View>
            <ScrollView style={{ width: '100%', flex: 1 }} >
                <Navigation navigation={props.navigation} />
                <View style={{ paddingHorizontal: 16 }} >
                    <Text style={styles.blackText} >Наши услуги</Text>
                </View>
                {
                    descriptionData.map((value, index) => {
                        return (
                            <Description key={index} title={value.title} data={value.data} />
                        )
                    })
                }
            </ScrollView>
            <Footer />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
    },
    header: {
        width: '100%',
        height: 66,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#f1f1f1',
        marginBottom: 20
    },
    headerProf: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between'
    },
    appName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10
    },
    flex1: {
        flex: 1
    },
    flex2: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerItem: {
        height: '100%',
        justifyContent: 'center',
    },
    headerItemRight: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginRight: 15
    },
    blackText: {
        color: '#091334',
        fontWeight: '700',
        fontSize: 22
    }
})