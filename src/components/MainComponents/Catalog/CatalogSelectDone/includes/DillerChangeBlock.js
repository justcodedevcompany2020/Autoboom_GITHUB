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
    Modal
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Defs, G, Path, Rect, Circle, ClipPath } from "react-native-svg";
import { useSelector, useDispatch, } from 'react-redux';
import DillerChangePopup from '../Popup/DillerChangePopup'
import { openSelectDonePopUpInCloseSelectDonePage } from '../../../../../redux/actions/actions'

let data = [
    { id: 1, descText: 'Цена', price: '₪ 47 900', clear: null },
    { id: 1, descText: 'Регистрацияна', price: '₪ 4 900', clear: null },
    { id: 1, descText: 'Опции', price: '₪ 4 900', clear: 'Очистить' },
]

export default function App({onPress}) {
    // const { is_open_select_done_popup_in_catalog_select_done_page } = useSelector(state => state.justDriveReducer);
    // const dispatch = useDispatch();
    // const handleOpenSelectDonePopUpInCloseSelectDonePage = () => dispatch(openSelectDonePopUpInCloseSelectDonePage());


    // if (is_open_select_done_popup_in_catalog_select_done_page) {
    //     return (
    //         <DillerChangePopup />
    //     )
    // }


    return (
        <View style={styles.container} >
            <View style={styles.containerBlock}>
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText} > A6 Design 45 TFSI quattro Supreme 2... </Text>
                    <View style={{ transform: [{ rotate: '90 deg' }] }} >
                        <Svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M1 8.5L8 1.5L15 8.5" stroke="#6C7694" stroke-width="2" stroke-linecap="round" />
                        </Svg>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={onPress}
                    style={styles.buttonBlue} >
                    <Text style={[styles.buttonText, { color: '#2B65EE' }]} >Найти диллера</Text>
                </TouchableOpacity>
                <View style={{ marginTop: 20, padding: 5 }} >
                    {
                        data.map((value, index) => {
                            return (
                                <View key={index} style={styles.priceDiv} >
                                    <View style={styles.firstDiv} >
                                        <Text style={styles.boldText} >{value.descText}</Text>
                                        {value.clear != null &&
                                            <TouchableOpacity style={{ marginLeft: 5 }}>
                                                <Text style={styles.redText} >{value.clear}</Text>
                                            </TouchableOpacity>
                                        }

                                    </View>
                                    <Text style={styles.priceText} >{value.price}</Text>
                                </View>
                            )
                        })
                    }
                    <View style={styles.priceDiv} >
                        <Text style={styles.boldText} >Итого</Text>
                        <View style={styles.firstDiv} >
                            <Text style={styles.priceText} >₪ 457 900</Text>

                            <TouchableOpacity style={{ marginLeft: 7 }}>
                                <Text style={[styles.redText, { color: '#2B65EE' }]} >Скрыть</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderTopColor: '#F0F1F4',
        borderTopWidth: 1,
        marginTop: 25,
        marginBottom: 30
    },
    containerBlock: {
        width: '100%',
        padding: 20
    },
    button: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#C4C8D4',
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15
    },
    buttonText: {
        fontSize: 16,
        color: '#091334',
        fontWeight: '400'
    },
    buttonBlue: {
        backgroundColor: '#E5F2FF',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        marginTop: 20
    },
    priceDiv: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10
    },
    firstDiv: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    boldText: {
        color: '#091334',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 24
    },
    priceText: {
        color: '#091334',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24
    },
    redText: {
        color: '#E72A4A',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 24
    }
})