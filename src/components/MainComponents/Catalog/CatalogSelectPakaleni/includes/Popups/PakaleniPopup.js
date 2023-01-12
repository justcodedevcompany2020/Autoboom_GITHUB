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
import { closePakaleniPopUpInCatalogSelectPakaleniPage } from '../../../../../../redux/actions/actions';


import Svg, { Defs, G, Path, Rect, Circle, ClipPath } from "react-native-svg";
import { useEffect, useState } from "react";
import FilterSvg from "../../../../../../../assets/Svg/search_component/FilterSvg";
import SearchSvg from "../../../../../../../assets/Svg/SearchSvg";
import CloseSvg from "../../../../../../../assets/Svg/CloseSvg";


export default function App(props) {
    // Redux
    const { is_open_marki_popup_in_catalog_select_mark_page } = useSelector(state => state.justDriveReducer);
    const dispatch = useDispatch();
    const handleClosePakaleniPopUpInCatalogSelectPakaleniPage = () => dispatch(closePakaleniPopUpInCatalogSelectPakaleniPage());

    const [marks_items, setMarksItems] = useState([
        { title: 'C40 Recharge', cdate: '02.2018 - н.в ', desc: 'Мини 5 дверей' },
        { title: 'C40 Recharge', cdate: '02.2018 - н.в ', desc: 'Мини 5 дверей' },
        { title: 'C40 Recharge', cdate: '02.2018 - н.в ', desc: 'Мини 5 дверей' },
        { title: 'C40 Recharge', cdate: '02.2018 - н.в ', desc: 'Мини 5 дверей' },
        { title: 'C40 Recharge', cdate: '02.2018 - н.в ', desc: 'Мини 5 дверей' },
        { title: 'C40 Recharge', cdate: '02.2018 - н.в ', desc: 'Мини 5 дверей' },
        { title: 'C40 Recharge', cdate: '02.2018 - н.в ', desc: 'Мини 5 дверей' },
        { title: 'C40 Recharge', cdate: '02.2018 - н.в ', desc: 'Мини 5 дверей' },
        { title: 'C40 Recharge', cdate: '02.2018 - н.в ', desc: 'Мини 5 дверей' },
        { title: 'C40 Recharge', cdate: '02.2018 - н.в ', desc: 'Мини 5 дверей' },
        { title: 'C40 Recharge', cdate: '02.2018 - н.в ', desc: 'Мини 5 дверей' },
        { title: 'C40 Recharge', cdate: '02.2018 - н.в ', desc: 'Мини 5 дверей' },
    ]);


    useEffect(() => {

    }, []);

    const renderPakaleni = () => {

        return (
            marks_items.map((item, index) => {
                return (
                    <TouchableOpacity
                        key={index}
                        style={styles.newAutosWrapperItem}
                        onPress={() => {
                            handleClosePakaleniPopUpInCatalogSelectPakaleniPage();
                            props.navigation.navigate('CatalogSelectModifikaciaComponent')
                        }}>
                        <View style={styles.newAutosWrapperItemImageWrapper}>
                            <Image style={styles.newAutosWrapperItemImage} source={require('../../../../../../../assets/images/pakalenilist.png')} />
                        </View>

                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.cdate} >{item.cdate} </Text>
                        <Text style={styles.cdate} >{item.desc} </Text>

                    </TouchableOpacity>
                )
            })
        )

    }


    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.popupWrapper}>

                <View style={[styles.header]}>

                    <View style={[styles.headerItem, styles.flex1]}></View>

                    <View style={[styles.headerItem, styles.flex2]}>
                        <Text style={styles.title} numberOfLines={1}>
                            Поколения Паджеро Спорт
                        </Text>
                    </View>

                    <View style={[styles.headerItem, styles.flex1, styles.headerItemRight]}>

                        <TouchableOpacity
                            onPress={() => { handleClosePakaleniPopUpInCatalogSelectPakaleniPage() }}
                            style={{}}
                        >
                            <CloseSvg />
                        </TouchableOpacity>

                    </View>

                </View>

                <ScrollView style={styles.scrollBlock}>

                    <View style={styles.itemsWrapper}>
                        {renderPakaleni()}
                    </View>

                </ScrollView>

                <View style={styles.footer}>

                    <TouchableOpacity onPress={() => { handleClosePakaleniPopUpInCatalogSelectPakaleniPage() }} style={styles.closePopUpButton}>
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
    searchWrapper: {
        width: '100%',
        paddingTop: 8,
        paddingBottom: 16,
        height: 68,
    },
    searchMainWrapper: {
        width: '100%',
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'silver',
    },
    searchInput: {
        flex: 1,
        height: 44,
        borderRadius: 6,
        borderColor: '#C4C8D4',
        borderWidth: 1,
        paddingVertical: 10,
        paddingLeft: 10,
        paddingRight: 40,
    },
    searchSvg: {
        position: 'absolute',
        top: 20,
        right: 10
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
    cdate: {
        fontSize: 16,
        color: '#091334',
        marginTop: 5
    }

})
