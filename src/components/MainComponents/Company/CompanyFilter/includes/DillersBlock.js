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

// import UnionSvg from '../../../../../assets/Svg/UnionSvg'

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

    return (
        <View style={styles.dillersTop}>
            <View style={styles.dillersTopButtonWrapper}>
                <ScrollView
                    horizontal={true}
                    style={{ width: '100%', height: 40, marginLeft: 10 }}
                >
                    {dataButton.map((res, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                onPress={() => {
                                    setActiveButton(res.id);
                                }}
                                style={[styles.sliderBlock, activeButton === res.id ? { backgroundColor: '#E6F2FF', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' } : {}]} >
                                {
                                    activeButton === res.id &&
                                    <Svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M1.45454 5.175L6.21488 10.125L14.5455 1.875" stroke="#2B65EE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </Svg>
                                }

                                <Text style={[styles.nameButton, activeButton === res.id ? { color: '#2B65EE', marginLeft: 5 } : {}]}  >{res.title}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>

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
        marginTop: 25
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
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#C4C8D4'
    },
    showMoreButtonText: {
        fontSize: 16,
        color: '#091334'
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
    }
})
