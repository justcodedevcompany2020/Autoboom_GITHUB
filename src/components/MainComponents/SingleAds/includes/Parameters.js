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
    Dimensions
} from 'react-native';

import {
    SafeAreaView,
    SafeAreaProvider,
    SafeAreaInsetsContext,
    useSafeAreaInsets,
    initialWindowMetrics,
} from 'react-native-safe-area-context';

import Svg, {Defs, G, Path, Rect, Circle, ClipPath} from "react-native-svg";
import {useEffect, useState} from "react";

const windowWidth = Dimensions.get('window').width;

export default function App(props) {

    const [params, setParams] = useState([
        {title: 'Год', value: '2004', link: false},
        {title: 'Пробег', value: '101 000 км', link: false},
        {title: 'Рука', value: '4-я рука, частная рука', link: false},
        {title: 'Тип кузова', value: 'Седан', link: false},
        {title: 'Двигатель', value: '1.6 л. / 110 л.с. / Бензин', link: true},
        {title: 'Коробка передач', value: 'Автомат', link: false},
        {title: 'Привод', value: 'Передний', link: false},
        {title: 'Марка', value: 'Сузуки', link: true},
        {title: 'Модель', value: 'Джимни', link: true},
        {title: 'Поколение', value: '3 поколение, рестайлинг 2', link: true},
        {title: 'Цвет кузова', value: 'Серебристый', link: false},
    ])


    useEffect(() => {

        // console.log('News ADS component loaded')

    }, []);

    return (

        <View  style={styles.wrapper} >

            <Text style={styles.title}>
                Параметры
            </Text>


            <View style={styles.paramsWrapper}>

                {params.map((item, index) => {

                    return (
                        <View key={index} style={styles.paramsItem}>
                            <View style={styles.paramsItemLeft}>
                                <Text style={styles.paramsItemLeftText}>{item.title}</Text>
                            </View>

                            <View style={styles.paramsItemRight}>
                                {item.link ?

                                    <TouchableOpacity>
                                        <Text style={[styles.paramsItemRightText, {color: '#2B65EE'}]}>{item.value}</Text>
                                    </TouchableOpacity>

                                    :

                                    <Text style={[styles.paramsItemRightText]}>{item.value}</Text>

                                }
                            </View>


                        </View>

                    )

                })}

            </View>

            <TouchableOpacity>
                <Text style={{fontSize: 16, color: '#2B65EE', marginTop:16}}>Параметры в каталоге Автобума</Text>
            </TouchableOpacity>
        </View>

    );

}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        paddingHorizontal: 16,
        marginBottom: 32
    },
    title: {
        fontSize: 22,
        color: '#091334',
        fontWeight:'bold',
    },
    paramsWrapper: {

    },
    paramsItem: {
        flexDirection:'row',
        alignItems:'center',
        height: 48,
        borderBottomColor:'silver',
        borderBottomWidth: 1
    },
    paramsItemLeft: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flex:1
    },
    paramsItemRight: {
        flexDirection:'row',
        justifyContent: 'flex-end',
    },
    paramsItemLeftText: {
        color: '#6C7693',
        fontSize: 16
    },
    paramsItemRightText: {
        fontSize:16,
        color: '#091334'
    },
})
