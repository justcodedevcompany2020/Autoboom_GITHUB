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


import {
    SafeAreaView,
    SafeAreaProvider,
    SafeAreaInsetsContext,
    useSafeAreaInsets,
    initialWindowMetrics,
} from 'react-native-safe-area-context';
// import DropShadow from "react-native-drop-shadow";

import Svg, { Defs, G, Path, Rect, Circle, ClipPath } from "react-native-svg";
import { useEffect, useState } from "react";
import CloseSvg from '../../../../../../assets/Svg/CloseSvg';
import SelectedSvg from '../../../../../../assets/Svg/SelectedSvg';


let data = [
    { id: 1, text: 'Любая', key: 'Любая' },
    { id: 2, text: 'Выхлопная система', key: 'Выхлопная система' },
    { id: 3, text: 'Детейлинг', key: 'Детейлинг' },
    { id: 4, text: 'Диагностика', key: 'Диагностика' },
    { id: 5, text: 'Замена жидкостей', key: 'Замена жидкостей' },
    { id: 6, text: 'Мойка и полировка', key: 'Мойка и полировка' },
    { id: 7, text: 'Рулевое управление', key: 'Рулевое управление' },
    { id: 8, text: 'Стекла и зеркала', key: 'Стекла и зеркала' },
    { id: 9, text: 'Техническое обслуживание', key: 'Техническое обслуживание' },
    { id: 10, text: 'Любая', key: 'Любая1' },
    { id: 11, text: 'Выхлопная', key: 'Любая2' },
    { id: 12, text: 'Мойка', key: 'Любая3' },
    { id: 13, text: 'Рулевое', key: 'ЛюбаРулевоея' },
]

export default function App(props) {
    const [show_service_filter, setShowServiceFilter] = useState(true)
    const [sortBy, setSortBy] = useState('')

    if (show_service_filter) {
        return (
            <View style={styles.mainWrapper}>
                <TouchableOpacity onPress={() => { setShowServiceFilter(false); props.onChange(); }} style={styles.closeSpaceButton}>

                </TouchableOpacity>

                <View style={styles.contentWrapper}>

                    <View style={styles.header}>
                        <View></View>
                        <Text style={styles.mainTitle}>Выбор услуги</Text>
                        <TouchableOpacity onPress={() => { props.onChange(); setShowServiceFilter(false) }}>
                            <CloseSvg />
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={{ width: '100%', flex: 1 }}>
                        <View style={styles.centerContentWrapper}>
                            {data.map((value) => {
                                return (
                                    <TouchableOpacity
                                        key={value.key}
                                        onPress={() => { setSortBy(value.key) }} style={styles.item}>
                                        <Text style={styles.itemText}>{value.text}</Text>

                                        {sortBy === value.key && <SelectedSvg />}
                                    </TouchableOpacity>
                                )
                            })}

                        </View>
                    </ScrollView>
                    <View style={styles.footer}>
                        <TouchableOpacity
                            onPress={() => { setShowServiceFilter(false); props.onChange(); }}
                            style={styles.button}>
                            <Text style={styles.buttonText}>Закрыть</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({

    mainWrapper: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        bottom: 0,
        zIndex: 5
    },
    closeSpaceButton: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.44)'
    },
    contentWrapper: {
        width: '100%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        left: 0,
        flex: 1,
        maxHeight: 720,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    },
    header: {
        width: '100%',
        height: 56,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    mainTitle: {
        padding: 14,
        fontSize: 18,
        color: '#091334',
        fontWeight: '700',
        textAlign: 'center',
        marginLeft: 65
    },
    footer: {
        width: '100%',
        height: 72,
        paddingHorizontal: 16,
        justifyContent: "center",
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#F0F1F4'
    },
    button: {
        width: '100%',
        height: 48,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#C4C8D4'
    },
    buttonText: {
        color: 'black',
        fontSize: 16
    },
    inputWrapper: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 16,
        justifyContent: 'space-between',
        marginBottom: 12
    },
    priceInput: {
        width: '49%',
        height: 44,
        borderColor: '#C4C8D4',
        borderWidth: 1,
        borderRadius: 6,
        paddingHorizontal: 12
    },

    centerContentWrapper: {
        width: '100%',
        paddingHorizontal: 16,
    },
    item: {
        width: '100%',
        height: 56,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#F0F1F4'
    },
    itemText: {
        fontSize: 18,
        color: '#091334'
    }
})
