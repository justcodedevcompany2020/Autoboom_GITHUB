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
import { useEffect, useState } from "react";
import CloseSvg from '../../../../../../assets/Svg/CloseSvg';
import SelectedSvg from '../../../../../../assets/Svg/SelectedSvg';
import AudiLogo from '../../../../../../assets/Svg/AudiLogo'

let data = [
    { id: 1, text: 'Любая', key: 'Любая', },
    { id: 2, text: 'Ауди', key: 'Ауди', alphavit: 'А', logo: <AudiLogo /> },
    { id: 3, text: 'Альфа Ромео', key: 'Альфа Ромео', logo: <AudiLogo /> },
    { id: 4, text: 'Айвейс', key: 'Айвейс', logo: <AudiLogo /> },
    { id: 5, text: 'Астон Мартин', key: 'Астон Мартин', logo: <AudiLogo /> },
    { id: 6, text: 'БМВ', key: 'БМВ', alphavit: 'Б', logo: <AudiLogo /> },
    { id: 7, text: 'Бентли', key: 'Бентли', logo: <AudiLogo /> },
    { id: 8, text: 'Вольво', key: 'Вольво', alphavit: 'В', logo: <AudiLogo /> },
    { id: 9, text: 'Винфаст', key: 'Винфаст', logo: <AudiLogo /> },
    { id: 10, text: 'Виллис', key: 'Виллис', logo: <AudiLogo /> },
    { id: 11, text: 'Виллис1', key: 'Виллис1', logo: <AudiLogo /> },
    { id: 12, text: 'Виллис2', key: 'Виллис2', logo: <AudiLogo /> },
    { id: 13, text: 'Виллис3', key: 'Виллис3', logo: <AudiLogo /> },
]

export default function App(props) {
    const [show_marks_filter, setShowMarksFilter] = useState(true)
    const [sortBy, setSortBy] = useState('')



    if (show_marks_filter) {
        return (
            <View style={styles.mainWrapper}>
                <TouchableOpacity onPress={() => { setShowMarksFilter(false); props.onChange(); }} style={styles.closeSpaceButton}>

                </TouchableOpacity>

                <View style={styles.contentWrapper}>

                    <View style={styles.header}>
                        <View></View>
                        <Text style={styles.mainTitle}>Выбор марки</Text>
                        <TouchableOpacity onPress={() => { props.onChange(); setShowMarksFilter(false) }}>
                            <CloseSvg />
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={{ width: '100%', flex: 1 }}>
                        <View style={styles.centerContentWrapper}>
                            {data.map((value) => {
                                return (
                                    <TouchableOpacity
                                        key={value.key}
                                        onPress={() => {
                                            setSortBy(value.key);
                                            setTimeout(() => {
    
                                                props.onChange(); setShowMarksFilter(false)
                                            }, 1000)

                                        }} style={styles.item}>

                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10, }} >
                                            <Text style={[styles.itemText, { fontWeight: '700' }]} >{value.alphavit}</Text>
                                            <View style={value.alphavit ? { marginLeft: 10 } : { marginLeft: 20 }}>
                                                {value.logo}
                                            </View>

                                            <Text style={[styles.itemText, !value.alphavit && !value.logo ? { marginLeft: 62 } : { marginLeft: 10 }]}>{value.text}</Text>
                                        </View>


                                        {sortBy === value.key && <SelectedSvg />}
                                    </TouchableOpacity>
                                )
                            })}

                        </View>
                    </ScrollView>
                    <View style={styles.footer}>
                        <TouchableOpacity
                            onPress={() => { setShowMarksFilter(false); props.onChange(); }}
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
        maxHeight: 680,
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
