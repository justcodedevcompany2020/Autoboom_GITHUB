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
    Slider, TextInput
} from 'react-native';


import {
    SafeAreaView,
    SafeAreaProvider,
    SafeAreaInsetsContext,
    useSafeAreaInsets,
    initialWindowMetrics,
} from 'react-native-safe-area-context';

// import SpecialOfferBlock from './includes/SpecialOffer';
// import NavigationBottomMenu from '../../../includes/NavigationBottomMenu';

import { useSelector, useDispatch, } from 'react-redux';

import { closeSelectDonePopUpInCloseSelectDonePage } from '../../../../../redux/actions/actions'


import Svg, { Defs, G, Path, Rect, Circle, ClipPath } from "react-native-svg";
import { useEffect, useState } from "react";

import CloseSvg from "../../../../../../assets/Svg/CloseSvg";


let data = [
    { id: 1, firsText: 'A 250 e 1.3 Speed', secondText: '190 л.с., робот, бензин', price: '₪ 780 000 ' },
    { id: 2, firsText: 'A 250 e 1.3 Business', secondText: '190 л.с., робот, бензин', price: '₪ 180 000 ' },
    { id: 3, firsText: 'A 250 e 1.3 Superior', secondText: '190 л.с., автомат, дизель', price: '₪ 280 000 ' },
]

export default function App({ visible }) {
    // Redux
    const { is_open_select_done_popup_in_catalog_select_done_page } = useSelector(state => state.justDriveReducer);
    const dispatch = useDispatch();
    const handleCloseSelectDonePopUpInCloseSelectDonePage = () => dispatch(closeSelectDonePopUpInCloseSelectDonePage());

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.popupWrapper}>

                <View style={[styles.header]}>

                    <View style={[styles.headerItem, styles.flex1]}></View>

                    <View style={[styles.headerItem, styles.flex2]}>
                        <Text style={styles.title} numberOfLines={1}>
                            Предложения от диллеров
                        </Text>
                    </View>

                    <View style={[styles.headerItem, styles.flex1, styles.headerItemRight]}>

                        <TouchableOpacity
                            onPress={handleCloseSelectDonePopUpInCloseSelectDonePage}
                            style={{}}
                        >
                            <CloseSvg />
                        </TouchableOpacity>

                    </View>

                </View>

                <ScrollView style={styles.scrollBlock}>

                    <View style={styles.itemsWrapper}>
                        {data.map((res, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    style={styles.item}
                                >
                                    <View style={styles.firstDiv}>
                                        <Text style={styles.blueText} > {res.firsText}</Text>
                                        <Text style={styles.grayText} >{res.secondText}</Text>
                                    </View>
                                    <Text style={styles.greenText} >{res.price}</Text>
                                </TouchableOpacity>
                            )
                        })}


                    </View>

                </ScrollView>

                <View style={styles.footer}>

                    <TouchableOpacity
                        onPress={() => { handleCloseSelectDonePopUpInCloseSelectDonePage() }}
                        style={styles.closePopUpButton}
                    >
                        <Text style={styles.closePopUpButtonText}>Закрыть</Text>
                    </TouchableOpacity>

                </View>


            </View>
        </SafeAreaView>
    );
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
        height: 56,
        // paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'silver',
        paddingRight: 0
    },
    flex1: {
        flex: 1
    },
    flex2: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerItem: {
        height: '100%',
    },
    headerItemRight: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },

    title: {
        color: '#091334',
        fontSize: 18,
        fontWeight: 'bold'
    },
    popupWrapper: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        flex: 1,
        height: '100%',
        zIndex: 10
    },


    footer: {
        width: '100%',
        height: 72,
        borderTopWidth: 1,
        borderTopColor: '#F0F1F4',
        paddingHorizontal: 16,
        paddingTop: 10
    },
    closePopUpButton: {
        width: '100%',
        height: 48,
        borderRadius: 6,
        borderColor: '#C4C8D4',
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    closePopUpButtonText: {
        color: '#091334',
        fontSize: 16
    },
    itemsWrapper: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 24
    },

    newAutosWrapperItem: {
        width: '48%',
        marginBottom: 24
    },

    newAutosWrapperItemImageWrapper: {
        width: '100%',
        height: 122,
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 16
    },
    newAutosWrapperItemImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    scrollBlock: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 16,
        paddingTop: 24
    },
    komplektacii_item: {
        width: '100%',
        paddingVertical: 16,
        borderBottomColor: '#F0F1F4',
        borderBottomWidth: 1
    },
    komplektacii_item_text: {
        fontSize: 18,
        lineHeight: 24,
        color: '#2B65EE'
    },
    item: {
        padding: 15,
        width: '100%',
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#E2E4EA'
    },
    blueText: {
        fontSize: 18,
        color: '#1548C1',
        fontWeight: '700',
        lineHeight: 24
    },
    grayText: {
        fontSize: 14,
        color: '#091334',
        fontWeight: '400',
        lineHeight: 24,
        marginTop: 5
    },
    greenText: {
        fontSize: 16,
        color: '#009900',
        fontWeight: '400',
        lineHeight: 24
    },
})

