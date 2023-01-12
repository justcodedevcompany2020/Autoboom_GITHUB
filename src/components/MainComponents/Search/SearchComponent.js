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

import SpecialOfferBlock from './includes/SpecialOffer';
import NavigationBottomMenu from '../../includes/NavigationBottomMenu';


import Svg, { Defs, G, Path, Rect, Circle, ClipPath } from "react-native-svg";
import { useEffect, useState } from "react";

import SearchSvg from '../../../../assets/Svg/search_component/SearchSvg';
import SortBySvg from '../../../../assets/Svg/search_component/SortBySvg';

import MarkSvg from '../../../../assets/Svg/search_component/MarkSvg';
import FilterSvg from '../../../../assets/Svg/search_component/FilterSvg';

import AutoCard from './includes/AutoCard';
import BecomePartnerBlock from '../includes/BecomePartner';
import SortByPopUp from './includes/SortByPopUp';
import PriceFilter from "../Home/includes/Filters/PriceFilter";
import TopNavigation from '../../../navigation/TopNavigation'
import { useRoute } from '@react-navigation/native';



export default function App(props) {
    const [active_top_tab1, setActiveTopTab1] = useState(true);
    const [active_top_tab2, setActiveTopTab2] = useState(false);
    const [active_top_tab3, setActiveTopTab3] = useState(false);

    const [see_ads, setSeeAds] = useState([
        { image: require('../../../../assets/images/car_photo.png'), title: 'Mercedes-Benz S c...', year: '2014', mileage: '142 000', price: '829 000' },
        { image: require('../../../../assets/images/car_photo.png'), title: 'Mercedes-Benz S c...', year: '2014', mileage: '142 000', price: '829 000' },
        { image: require('../../../../assets/images/car_photo.png'), title: 'Mercedes-Benz S c...', year: '2014', mileage: '142 000', price: '829 000' },
        { image: require('../../../../assets/images/car_photo.png'), title: 'Mercedes-Benz S c...', year: '2014', mileage: '142 000', price: '829 000' },
        { image: require('../../../../assets/images/car_photo.png'), title: 'Mercedes-Benz S c...', year: '2014', mileage: '142 000', price: '829 000' },
        { image: require('../../../../assets/images/car_photo.png'), title: 'Mercedes-Benz S c...', year: '2014', mileage: '142 000', price: '829 000' },
        { image: require('../../../../assets/images/car_photo.png'), title: 'Mercedes-Benz S c...', year: '2014', mileage: '142 000', price: '829 000' },
        { image: require('../../../../assets/images/car_photo.png'), title: 'Mercedes-Benz S c...', year: '2014', mileage: '142 000', price: '829 000' },
    ]);

    const [show_sort_popoup, setSortPopup] = useState(false)

    useEffect(() => {

    }, []);



    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>

                <View style={[styles.headerItem, styles.flex1]}>

                </View>


                <View style={[styles.headerItem, styles.flex2]}>
                    <Text style={styles.appName}>
                        Поиск объявлений
                    </Text>
                </View>

                <View style={[styles.headerItem, styles.flex1, styles.headerItemRight]}>
                    <TouchableOpacity>
                        <SearchSvg />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { setSortPopup(!show_sort_popoup) }}>
                        <SortBySvg />
                    </TouchableOpacity>

                </View>

            </View>
            <TopNavigation navigation={props.navigation} />
            <ScrollView style={{ width: '100%', flex: 1 }}>

                <View style={styles.tabsBeegMainWrapper}>
                    <View style={styles.tabsMainWrapper}>
                        <View style={styles.tabsWrapper}>

                            <TouchableOpacity
                                onPress={() => {
                                    setActiveTopTab1(true);
                                    setActiveTopTab2(false);
                                    setActiveTopTab3(false);
                                }}
                                style={[styles.flex1, styles.tabsItem, active_top_tab1 && styles.tabsItemActive]}
                            >
                                <Text style={[styles.tabsItemText, active_top_tab1 && styles.tabsItemTextActive]}>Все</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => {
                                    setActiveTopTab1(false);
                                    setActiveTopTab2(true);
                                    setActiveTopTab3(false);
                                }}
                                style={[styles.flex1, styles.tabsItem, active_top_tab2 && styles.tabsItemActive]}
                            >
                                <Text style={[styles.tabsItemText, active_top_tab2 && styles.tabsItemTextActive]}>С пробегом</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => {
                                    setActiveTopTab1(false);
                                    setActiveTopTab2(false);
                                    setActiveTopTab3(true);
                                }}
                                style={[styles.flex1, styles.tabsItem, active_top_tab3 && styles.tabsItemActive]}
                            >
                                <Text style={[styles.tabsItemText, active_top_tab3 && styles.tabsItemTextActive]}>Новые</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.markAndFilterWrapper}>

                    <TouchableOpacity style={styles.markFilterButton}>
                        <MarkSvg />
                        <Text style={styles.markFilterButtonText}>Марки</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.markFilterButton}>
                        <FilterSvg />
                        <Text style={styles.markFilterButtonText}>Фильтры</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.markList}>

                    <View style={styles.markListContainer}>

                        <View style={styles.markListItemWrapper}>
                            <TouchableOpacity style={styles.markListItemPress}>
                                <Text style={styles.markListItemPressText}>Киа</Text>
                            </TouchableOpacity>
                            <Text style={styles.markListItemPressTextNumber}>1671</Text>
                        </View>

                        <View style={styles.markListItemWrapper}>
                            <TouchableOpacity style={styles.markListItemPress}>
                                <Text style={styles.markListItemPressText}>Мазда</Text>
                            </TouchableOpacity>
                            <Text style={styles.markListItemPressTextNumber}>1671</Text>
                        </View>

                        <View style={styles.markListItemWrapper}>
                            <TouchableOpacity style={styles.markListItemPress}>
                                <Text style={styles.markListItemPressText}>Тойота</Text>
                            </TouchableOpacity>
                            <Text style={styles.markListItemPressTextNumber}>1671</Text>
                        </View>

                        <View style={styles.markListItemWrapper}>
                            <TouchableOpacity style={styles.markListItemPress}>
                                <Text style={styles.markListItemPressText}>Опель</Text>
                            </TouchableOpacity>
                            <Text style={styles.markListItemPressTextNumber}>1671</Text>
                        </View>
                    </View>
                    <View style={styles.markListContainer}>

                        <View style={styles.markListItemWrapper}>
                            <TouchableOpacity style={styles.markListItemPress}>
                                <Text style={styles.markListItemPressText}>Ниссан</Text>
                            </TouchableOpacity>
                            <Text style={styles.markListItemPressTextNumber}>1671</Text>
                        </View>

                        <View style={styles.markListItemWrapper}>
                            <TouchableOpacity style={styles.markListItemPress}>
                                <Text style={styles.markListItemPressText}>Мерседес-Бенц</Text>
                            </TouchableOpacity>
                            <Text style={styles.markListItemPressTextNumber}>1671</Text>
                        </View>

                        <View style={styles.markListItemWrapper}>
                            <TouchableOpacity style={styles.markListItemPress}>
                                <Text style={styles.markListItemPressText}>БМВ</Text>
                            </TouchableOpacity>
                            <Text style={styles.markListItemPressTextNumber}>1671</Text>
                        </View>

                        <View style={styles.markListItemWrapper}>
                            <TouchableOpacity style={styles.markListItemPress}>
                                <Text style={[styles.markListItemPressText, { color: '#6C7693' }]}>Показать все</Text>
                            </TouchableOpacity>
                        </View>

                    </View>


                </View>

                <AutoCard navigation={props.navigation} mercedess />
                <AutoCard navigation={props.navigation} topButton />
                <AutoCard navigation={props.navigation} />

                <SpecialOfferBlock data={see_ads} />
                <BecomePartnerBlock />

            </ScrollView>

            <NavigationBottomMenu navigation={props.navigation} active_page={'Search'} />


            {show_sort_popoup &&

                <SortByPopUp show={show_sort_popoup} onChange={() => { setSortPopup(!show_sort_popoup) }} />

            }

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
    scrollViewWrapper: {
        height: 36,
        width: '100%',
        paddingHorizontal: 16,
        borderBottomColor: 'rgba(0, 0, 0, 0.1)',
        borderBottomWidth: 1,
        marginBottom: 17
    },
    scrollView: {
        width: '100%',
        height: 36,
    },
    header: {
        width: '100%',
        height: 56,
        // paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    changeLanguageButton: {

    },
    appName: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    profileButton: {

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
    },
    headerItemRight: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    menuTopButtonWrapper: {
        width: '100%',
        height: 36,
        // backgroundColor:'silver',
        // marginBottom: 24,
        flexDirection: 'row'
    },

    menuTopButton: {
        flex: 1,
        marginRight: 24,
        height: 36,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    menuTopButtonText: {
        color: '#6C7693',
        fontSize: 16
    },

    menuTopButtonActive: {

    },
    menuTopButtonTextActive: {
        color: '#091334'
    },
    menuTopButtonActiveLine: {
        width: '100%',
        height: 3,
        backgroundColor: '#2B65EE',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2,
        zIndex: 2
    },
    tabsBeegMainWrapper: {
        paddingHorizontal: 16,
        marginBottom: 16
    },
    tabsMainWrapper: {
        width: '100%',
        padding: 4,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F1F4',
        borderRadius: 8,

    },
    tabsWrapper: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: '#F0F1F4',
    },
    tabsItem: {
        // height:'100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabsItemText: {
        textAlign: 'center',
        color: '#6C7693'
        // width: '100%',
        // height:'100%',
        // backgroundColor:'blue',
    },
    tabsItemActive: {
        borderRadius: 4,
        backgroundColor: 'white'
    },
    tabsItemTextActive: {
        color: '#091334'
    },
    markAndFilterWrapper: {
        width: '100%',
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16
    },
    markFilterButton: {
        width: '49%',
        height: 44,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#C4C8D4',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    markFilterButtonText: {
        fontSize: 16,
        color: '#091334',
        marginLeft: 12
    },


    markList: {
        width: '100%',
        paddingHorizontal: 16,
        flexDirection: 'row',
        marginBottom: 20
    },
    markListContainer: {
        flex: 1
    },
    markListItemWrapper: {
        width: '100%',
        height: 24,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    markListItemPress: {
        marginRight: 6
    },
    markListItemPressText: {
        fontSize: 14,
        color: '#2B65EE'
    },
    markListItemPressTextNumber: {
        fontSize: 12,
        color: '#759ABD'
    },


})
