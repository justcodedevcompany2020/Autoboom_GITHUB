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

import Svg, { Defs, G, Path, Rect, Circle, ClipPath } from "react-native-svg";
import { useEffect, useState } from "react";

import UnionSvg from '../../../../../../assets/Svg/UnionSvg'

const dataButton = [
    { title: 'Все', id: 1 },
    { title: 'Автосервис', id: 2 },
    { title: 'Автосалон', id: 3 },
    { title: 'Все', id: 4 },
    { title: 'Автосервис', id: 5 },
    { title: 'Автосалон', id: 6 },
]

export default function App(props) {
    const [last_search_active_button, setLastSearchActiveButton] = useState(0);
    const [activeButton, setActiveButton] = React.useState(1);
    const [autosalon, setAutosalon] = useState([
        { title: 'Митсубиси-Хундай Кирьят-Шмона', open: true, show_union: true, id: 1 },
        { title: 'Митсубиси-Хундай Кирьят-Шмона', open: false, show_union: false, id: 1 },
        { title: 'Митсубиси-Хундай Кирьят-Шмона', open: true, show_union: true, id: 1 },
        { title: 'Митсубиси-Хундай Кирьят-Шмона 2', open: true, show_union: true, id: 2 },
        { title: 'Митсубиси-Хундай Кирьят-Шмона 2', open: false, show_union: false, id: 2 },
        { title: 'Митсубиси-Хундай Кирьят-Шмона 2', open: true, show_union: true, id: 2 },
        { title: 'Митсубиси-Хундай Кирьят-Шмона 3', open: true, show_union: true, id: 3 },
        { title: 'Митсубиси-Хундай Кирьят-Шмона 3', open: false, show_union: false, id: 3 },
        { title: 'Митсубиси-Хундай Кирьят-Шмона 3', open: true, show_union: true, id: 3 },
    ]);
    const [autoservice, setAutoservice] = useState([
        { title: 'Митсубиси-Хундай Кирьят-Шмона 2', open: true, show_union: true },
        { title: 'Митсубиси-Хундай Кирьят-Шмона 2', open: false, show_union: false },
        { title: 'Митсубиси-Хундай Кирьят-Шмона 2', open: true, show_union: true },
    ]);




    const printDiller = (item, index) => {

        if (item.id === activeButton) {
            return (
                <TouchableOpacity style={styles.item} key={index}>
                    <View style={styles.topTitleWrapper}>

                        <Text style={styles.title}>{item.title}</Text>

                        {item.show_union &&
                            <UnionSvg />
                        }

                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity>
                            <Text style={[styles.text, { color: '#2B65EE' }]}>Официальный дилер</Text>
                        </TouchableOpacity>
                        <Svg style={{ marginHorizontal: 8 }} width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><Rect width={4} height={4} rx={2} fill="#C4C8D4" /></Svg>
                        <Text style={styles.text}>Автосалон</Text>
                        <Svg style={{ marginHorizontal: 8 }} width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><Rect width={4} height={4} rx={2} fill="#C4C8D4" /></Svg>
                        <Text style={styles.text}>Сервис</Text>
                    </View>

                    <View style={styles.locationWrapper}>

                        <Svg style={{ position: 'relative', top: 5 }} width={12} height={16} viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path fillRule="evenodd" clipRule="evenodd" d="M12 7.104c0-4-3.5-6-6-6s-6 2-6 6c0 4.076 3.988 7.487 5.461 8.609a.883.883 0 001.078 0C8.012 14.592 12 11.18 12 7.103zm-6 2a2 2 0 100-4 2 2 0 000 4z" fill="#C4C8D4" />
                        </Svg>

                        <Text style={styles.locationText}>
                            Генерал Пьер Кениг 43, Иерусалим, Израиль
                        </Text>

                    </View>

                    {item.open ?
                        <View style={styles.timeWrapper}>
                            <View style={{ marginRight: 8, width: 12, height: 12, backgroundColor: '#009900', borderRadius: 100 }}>

                            </View>
                            <Text style={{ color: '#009900' }}>Открыто</Text>
                            <Svg style={{ marginHorizontal: 8 }} width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><Rect width={4} height={4} rx={2} fill="#C4C8D4" /></Svg>
                            <Text>Закроется в 18:00</Text>
                        </View>
                        :
                        <View style={styles.timeWrapper}>
                            <View style={{ marginRight: 8, width: 12, height: 12, backgroundColor: '#E72A4A', borderRadius: 100 }}>

                            </View>
                            <Text style={{ color: '#E72A4A' }}>Закрыто</Text>
                            <Svg style={{ marginHorizontal: 8 }} width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><Rect width={4} height={4} rx={2} fill="#C4C8D4" /></Svg>
                            <Text>Откроется в 18:00</Text>
                        </View>

                    }


                </TouchableOpacity>
            )
        }


    }


    return (
        <View style={styles.dillersTop}>
            <Text style={styles.boldText} > Другие компании в{'\n'} Иерусалиме</Text>

            {last_search_active_button == 0 &&

                <View style={{ width: '100%', marginBottom: 0, paddingHorizontal: 16 }}>
                    {autosalon.map((item, index) => {

                        return (
                            printDiller(item, index)
                        )

                    })}
                </View>
            }



            {last_search_active_button == 1 &&

                <View style={{ width: '100%', marginBottom: 16, paddingHorizontal: 16 }}>

                    {autoservice.map((item, index) => {

                        return (
                            printDiller(item, index)
                        )

                    })}
                </View>
            }

            <View style={styles.showMoreButtonWrapper}>
                <TouchableOpacity style={styles.showMoreButton}>
                    <Text style={styles.showMoreButtonText}>Показать больше компаний</Text>
                </TouchableOpacity>

            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    dillersWrapper: {
        width: '100%',
        marginTop: 24
    },

    dillersTop: {
        width: '100%',
        // paddingHorizontal: 16,
        marginBottom: 16,
        marginTop: 20
    },
    dillersTopTitle: {
        color: '#091334',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20
    },
    dillersTopButtonWrapper: {
        width: '100%',
        height: 36,
        // backgroundColor:'silver',
        marginBottom: 20,
        flexDirection: 'row'
    },

    dillersTopButton: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    dillersTopButtonText: {
        color: '#6C7693',
        fontSize: 16
    },

    dillersTopButtonActive: {

    },
    dillersTopButtonTextActive: {
        color: '#091334'
    },
    dillersTopButtonActiveLine: {
        width: '100%',
        height: 3,
        backgroundColor: '#2B65EE',
        position: 'absolute',
        bottom: -1,
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2
    },

    dillersBottom: {
        width: '100%',
        height: 88,
        // backgroundColor: 'yellow',
        paddingLeft: 16
    },

    dillersBottomScrollItem: {
        width: 226,
        height: 88,
        backgroundColor: 'white',
        marginRight: 16,
        flexDirection: 'row',
        borderRadius: 8,
        overflow: 'hidden',
        borderColor: 'silver',
        borderWidth: 1
    },
    dillersBottomScrollItemLeft: {
        width: 80,
        height: '100%',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    dillersBottomScrollItemRight: {
        flex: 1,
        height: '100%',
        // backgroundColor:'green',
        paddingVertical: 16
    },
    dillersBottomScrollItemRightTopText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1548C1',
        marginBottom: 8
    },
    dillersBottomScrollItemRightBottomText: {
        color: '#091334',
        fontSize: 14
    },
    item: {
        padding: 16,
        width: '100%',
        minHeight: 16,
        borderColor: '#f1f0f0',
        borderWidth: 1,
        marginBottom: 16,
        borderRadius: 8
    },

    topTitleWrapper: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5
    },

    title: {
        color: '#091334',
        fontSize: 18,
        lineHeight: 24,
        flex: 1,
        fontWeight: 'bold'
    },
    text: {
        fontSize: 14,
        lineHeight: 24,
        color: '#091334'
    },
    locationText: {
        flex: 1,
        fontSize: 14,
        color: '#091334',
        lineHeight: 24,
        marginLeft: 8
    },
    locationWrapper: {
        flexDirection: 'row',
        marginTop: 8,
        marginBottom: 8
    },
    timeWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    showMoreButtonWrapper: {
        paddingHorizontal: 16,
        marginTop: 10
    },
    showMoreButton: {
        width: '100%',
        height: 48,
        backgroundColor: '#E6F2FF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        // borderWidth: 1,
        // borderColor: '#C4C8D4'
    },
    showMoreButtonText: {
        fontSize: 16,
        color: '#2B65EE'
    },
    sliderBlock: {
        backgroundColor: '#F0F1F4',
        padding: 6,
        height: 36,
        borderRadius: 20,
        paddingLeft: 20,
        paddingRight: 20,
        marginLeft: 6
    },
    nameButton: {
        color: '#6C7693',
        fontSize: 16
    },
    boldText: {
        paddingHorizontal: 16,
        marginTop: 20,
        marginBottom: 20,
        color: '#091334',
        fontSize: 22,
        fontWeight: '700'
    }
})
