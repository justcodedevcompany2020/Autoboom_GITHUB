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

import Svg, {Defs, G, Path, Rect, Circle, ClipPath} from "react-native-svg";
import {useEffect, useState} from "react";

// import CompareSvg from '../../../../assets/Svg/search_component/CompareSvg'
// import OpenEyeSvg from '../../../../assets/Svg/search_component/OpenEyeSvg'
// import CloseEyeSvg from '../../../../assets/Svg/search_component/CloseEyeSvg'
// import NoteSvg from '../../../../assets/Svg/search_component/NoteSvg'
// import CrownSvg from '../../../../assets/Svg/search_component/CrownSvg'
// import LocationSvg from '../../../../assets/Svg/search_component/LocationSvg'
// import GlobusSvg from '../../../../assets/Svg/search_component/GlobusSvg'
// import BlueokSvg from '../../../../assets/Svg/search_component/BlueokSvg'
// // import { SliderBox } from "react-native-image-slider-box";


import BackarrowSvg from '../../../../assets/Svg/BackarrowSvg';
import BeegShareSvg from '../../../../assets/Svg/BeegShareSvg';
import ArrowGreenDownSvg from '../../../../assets/Svg/ArrowGreenDownSvg';
import OpenEyeSvg from '../../../../assets/Svg/search_component/OpenEyeSvg';
import CloseSvg from '../../../../assets/Svg/CloseSvg';

import HeartSvg from '../../../../assets/Svg/search_component/HeartSvg'


import AutoSliderBlock from "./includes/AutoSlider";
import ParametersBlock from "./includes/Parameters";
import AskToSellerBlock from "./includes/AskToSeller";
import SellerDescriptionBlock from "./includes/SellerDescription";
import PackagesBlock from "./includes/Packages";
import ShareAdsBlock from "./includes/ShareAds";
import InterestingOffersBlock from "./includes/InterestingOffers";
import BecomePartnerBlock from "../includes/BecomePartner";
import JournaleBlock from './includes/Journale';
import SpecialOffersBlock from './includes/SpecialOffers';
import Footer from './includes/Footer';
import OptionsPopup from './includes/OptionsPopup';
import SortByPopUp from "../Search/includes/SortByPopUp";

export default function App(props) {

    const [show_top_panel_hidden_title, setShowTopPanelHiddenTitle] = useState(false)

    const [interesting_offers, setInterestingOffers] = useState([
        {image: require('../../../../assets/images/car_photo.png'), title: 'Mercedes-Benz S c...', year: '2014', mileage: '142 000', price: '829 000'},
        {image: require('../../../../assets/images/car_photo.png'), title: 'Mercedes-Benz S c...', year: '2014', mileage: '142 000', price: '829 000'},
        {image: require('../../../../assets/images/car_photo.png'), title: 'Mercedes-Benz S c...', year: '2014', mileage: '142 000', price: '829 000'},
        {image: require('../../../../assets/images/car_photo.png'), title: 'Mercedes-Benz S c...', year: '2014', mileage: '142 000', price: '829 000'},
        {image: require('../../../../assets/images/car_photo.png'), title: 'Mercedes-Benz S c...', year: '2014', mileage: '142 000', price: '829 000'},
        {image: require('../../../../assets/images/car_photo.png'), title: 'Mercedes-Benz S c...', year: '2014', mileage: '142 000', price: '829 000'},
        {image: require('../../../../assets/images/car_photo.png'), title: 'Mercedes-Benz S c...', year: '2014', mileage: '142 000', price: '829 000'},
        {image: require('../../../../assets/images/car_photo.png'), title: 'Mercedes-Benz S c...', year: '2014', mileage: '142 000', price: '829 000'},
    ]);

    const [journale, setJournale] = useState([
        {title: 'Ниссан Джук совершенствуется 1-1', date: '28 Октября 2022' ,image: require('../../../../assets/images/journaleauto.png'), menuid: 1 },
        {title: 'Ниссан Джук совершенствуется 1-2', date: '28 Октября 2022' ,image: require('../../../../assets/images/journaleauto.png'), menuid: 1 },
        {title: 'Ниссан Джук совершенствуется 2-1', date: '28 Октября 2021' ,image: require('../../../../assets/images/journaleauto.png'), menuid: 2 },
        {title: 'Ниссан Джук совершенствуется 2-2', date: '28 Октября 2021' ,image: require('../../../../assets/images/journaleauto.png'), menuid: 2 },
        {title: 'Ниссан Джук совершенствуется 3-1', date: '28 Октября 2020' ,image: require('../../../../assets/images/journaleauto.png'), menuid: 3 },
        {title: 'Ниссан Джук совершенствуется 3-2', date: '28 Октября 2020' ,image: require('../../../../assets/images/journaleauto.png'), menuid: 3 },
        {title: 'Ниссан Джук совершенствуется 4-1', date: '28 Октября 2019' ,image: require('../../../../assets/images/journaleauto.png'), menuid: 4 },
        {title: 'Ниссан Джук совершенствуется 4-2', date: '28 Октября 2019' ,image: require('../../../../assets/images/journaleauto.png'), menuid: 4 },
        {title: 'Ниссан Джук совершенствуется 5-1', date: '28 Октября 2018' ,image: require('../../../../assets/images/journaleauto.png'), menuid: 5 },
        {title: 'Ниссан Джук совершенствуется 5-2', date: '28 Октября 2018' ,image: require('../../../../assets/images/journaleauto.png'), menuid: 5 },
    ]);

    const [show_options_popoup, setOptionsPopup] = useState(false)

    useEffect(() => {

        // console.log('News ADS component loaded')

    }, []);


    const changeTopPanelAfterScroll = async (event)=>
    {
        if (event.nativeEvent.contentOffset.y > 40) {
            setShowTopPanelHiddenTitle(true)
        } else {
            setShowTopPanelHiddenTitle(false)
        }
    }

    return (

        <SafeAreaView style={styles.container}>

            <View style={[styles.header1,  show_top_panel_hidden_title && { borderBottomWidth:1, borderBottomColor: '#F0F1F4'}]}>

                <TouchableOpacity style={{flex:1}} onPress={() => {props.navigation.navigate('SearchComponent')}}>
                    <BackarrowSvg/>
                </TouchableOpacity>

                {show_top_panel_hidden_title &&

                    <View style={{flex:2, alignItems:'center'}}>
                        <Text numberOfLines={1} style={{fontSize: 12, }}>Тойота Сиенна III рестайл</Text>
                        <Text style={{fontSize: 12, fontWeight: 'bold'}}>₪ 50 000</Text>
                    </View>

                }

                {!show_top_panel_hidden_title ?

                    <TouchableOpacity>
                        <BeegShareSvg/>
                    </TouchableOpacity>

                    :

                    <View style={{flexDirection:'row', flex:1, height:'100%', alignItems:'center', justifyContent:'flex-end'}}>
                        <TouchableOpacity>
                            <Svg width={53} height={44} viewBox="0 0 53 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M34.54 13.567c-2.77-1.938-6.192-1.034-8.04 1.184-1.847-2.218-5.269-3.133-8.04-1.184-1.47 1.033-2.393 2.777-2.456 4.619-.147 4.177 3.464 7.526 8.974 12.661l.105.097a2.056 2.056 0 002.824-.01l.115-.108c5.51-5.125 9.11-8.474 8.974-12.651-.063-1.83-.986-3.575-2.456-4.608zm-7.935 15.676a.147.147 0 01-.21 0c-4.996-4.64-8.291-7.709-8.291-10.82 0-2.154 1.574-3.769 3.673-3.769 1.498 0 2.96.916 3.61 2.224a.55.55 0 00.483.317h1.269a.55.55 0 00.485-.32c.641-1.307 2.102-2.22 3.6-2.22 2.099 0 3.673 1.614 3.673 3.767 0 3.112-3.296 6.18-8.292 10.821z" fill="#091334"/>
                            </Svg>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {setOptionsPopup(true)}}>
                            <Svg width={48} height={44} viewBox="0 0 48 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <G clipPath="url(#clip0_10820_40424)"><Path fillRule="evenodd" clipRule="evenodd" d="M20 22a2 2 0 11-4 0 2 2 0 014 0zm6 0a2 2 0 11-4 0 2 2 0 014 0zm4 2a2 2 0 100-4 2 2 0 000 4z" fill="#091334"/></G><Defs><ClipPath id="clip0_10820_40424"><Path fill="#fff" transform="translate(16 20)" d="M0 0H16V4H0z" /></ClipPath></Defs>
                            </Svg>
                        </TouchableOpacity>

                    </View>
                }


            </View>



            <ScrollView
                style={{width: '100%'}}
                onScroll={event => {changeTopPanelAfterScroll(event)}}
            >

                <Text style={styles.autoTitle}>
                    Тойота Сиенна III рестайлинг 2 3.5 AT
                </Text>

                <View style={styles.priceWrapper}>

                    <Text style={styles.autoPrice}>₪ 50 000  </Text>

                    <ArrowGreenDownSvg style={{marginLeft: 0, marginRight: 10}}/>

                    <TouchableOpacity style={styles.actually}>
                        <Text style={styles.actuallyText}>Акутально</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.block3}>

                    <View style={styles.block3Left}>

                        <View style={styles.viewed}>
                            <OpenEyeSvg/>
                            <Text style={styles.viewedText}>964</Text>
                        </View>

                        <View style={styles.date}>
                            <Text style={styles.dateText}>24 Ноября 2022</Text>
                        </View>

                        <View style={styles.number}>
                            <Text style={styles.numberText}>№ 463562</Text>
                        </View>

                    </View>

                    <View style={styles.block3Right}>


                    </View>

                </View>

                <AutoSliderBlock/>


                <ScrollView  horizontal={true} style={styles.actionsWrapper} >

                    <View style={styles.actionsWrapperContainer}>

                        <TouchableOpacity style={styles.actionItem}>
                            <Svg width={21} height={20} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M18.54 1.567C15.77-.371 12.348.533 10.5 2.75 8.653.533 5.231-.382 2.46 1.567.99 2.6.067 4.344.004 6.186c-.147 4.177 3.464 7.525 8.974 12.661l.105.097a2.056 2.056 0 002.824-.01l.115-.108c5.51-5.125 9.11-8.474 8.974-12.651-.063-1.83-.986-3.575-2.456-4.608zm-7.935 15.676a.147.147 0 01-.21 0C5.4 12.603 2.104 9.534 2.104 6.423c0-2.154 1.574-3.769 3.673-3.769 1.498 0 2.96.916 3.61 2.224a.55.55 0 00.483.317h1.269a.55.55 0 00.485-.32c.641-1.307 2.102-2.22 3.6-2.22 2.099 0 3.673 1.614 3.673 3.767 0 3.112-3.296 6.18-8.292 10.821z" fill="#091334"/>
                            </Svg>
                            <Text style={styles.actionItemText}>Сохранить</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.actionItem}>
                            <Svg width={23} height={22} viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Rect x={10.5939} width={2} height={22} rx={1} fill="#091334" />
                                <Path d="M20.02 10.962a.3.3 0 01.3-.3h2.38a.3.3 0 01.3.3v.943a.3.3 0 01-.17.27l-2.38 1.144a.3.3 0 01-.43-.27v-2.087zM2.98 10.962a.3.3 0 00-.3-.3H.3a.3.3 0 00-.3.3v.943a.3.3 0 00.17.27l2.38 1.144a.3.3 0 00.43-.27v-2.087z" fill="#091334"/>
                                <Path d="M7.37 2.8A5.05 5.05 0 002.41 6.893l-.867 4.493v7.138a1.65 1.65 0 103.298 0v-.7H8.8a.5.5 0 00.5-.5v-1.1a.5.5 0 00-.5-.5H3.644v-4.137l.83-4.296A2.95 2.95 0 017.37 4.9H8.8a.5.5 0 00.5-.5V3.3a.5.5 0 00-.5-.5H7.37zM15.974 2.8a5.05 5.05 0 014.959 4.092l.867 4.494v7.137a1.65 1.65 0 11-3.298 0v-.7h-3.958a.5.5 0 01-.5-.5v-1.1a.5.5 0 01.5-.5H19.7v-4.136l-.83-4.296A2.95 2.95 0 0015.974 4.9h-1.43a.5.5 0 01-.5-.5V3.3a.5.5 0 01.5-.5h1.43z" fill="#091334"/>
                            </Svg>
                            <Text style={styles.actionItemText}>Сравнить</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.actionItem}>
                            <Svg
                                width={19}
                                height={20}
                                viewBox="0 0 19 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <G clipPath="url(#clip0_10715_2085)">
                                    <Path
                                        d="M16.761 5.389a.931.931 0 01-1.862 0V2.4h-8.38v3.75a1 1 0 01-1 1H1.861V17.6H14.9v-2.688a.931.931 0 011.862 0v3.646c0 .25-.098.49-.271.666a.915.915 0 01-.654.276H.925a.915.915 0 01-.657-.283.953.953 0 01-.268-.674V6.61a1 1 0 01.286-.7l5.01-5.11A1 1 0 016.01.5h9.818c.514 0 .933.432.933.942V5.39zm-.1 2.217a1 1 0 011.332-.086l.129.101a1 1 0 01.096 1.487L12.051 15.4a1 1 0 01-.716.3h-.663a.5.5 0 01-.494-.428l-.062-.424a1 1 0 01.276-.845l6.269-6.396z"
                                        fill="#091334"
                                    />
                                </G>
                                <Defs>
                                    <ClipPath id="clip0_10715_2085">
                                        <Path fill="#fff" transform="translate(0 .5)" d="M0 0H19V19H0z" />
                                    </ClipPath>
                                </Defs>
                            </Svg>
                            <Text style={styles.actionItemText}>Заметка</Text>
                        </TouchableOpacity>



                    </View>

                </ScrollView>


                <View style={styles.noteMainWrapper}>

                    <View style={styles.noteWrapper}>

                        <Text style={styles.noteText}>
                            Позвонить и отправить подтвер...
                        </Text>

                        <TouchableOpacity>
                            <CloseSvg/>

                        </TouchableOpacity>
                    </View>

                </View>

                {/*Параметры*/}
                <ParametersBlock/>

                {/*Спросите у продавца в чате*/}
                <AskToSellerBlock/>

                {/*Описание продавца*/}
                <SellerDescriptionBlock/>

                {/*Комплектация LX*/}
                <PackagesBlock/>

                {/*Отправь объявление друзьям*/}
                <ShareAdsBlock/>

                {/*Интересные предложения*/}
                <InterestingOffersBlock data={interesting_offers}/>

                <BecomePartnerBlock/>


                {/*Спецпредложения*/}
                <SpecialOffersBlock/>

                <JournaleBlock data={journale}/>


            </ScrollView>


            <Footer/>

            {show_options_popoup &&

              <OptionsPopup show={show_options_popoup} onChange={() => {setOptionsPopup(!show_options_popoup)}}/>
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

    header1: {
        width: '100%',
        height: 56,
        flexDirection:'row',
        justifyContent: 'space-between'
    },

    autoTitle: {
        width: '100%',
        fontSize: 23,
        paddingHorizontal: 16,
        color: '#091334',
        marginBottom: 8
    },

    priceWrapper: {
        width:'100%',
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },

    autoPrice: {
        fontWeight:'bold',
        color: '#091334',
        fontSize: 22,
    },
    actually: {
        width: 95   ,
        height: 28,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#D9F2D9',
        borderRadius: 4
    },
    actuallyText: {
        fontSize: 14,
        color: '#091334'
    },

    block3: {
        width:'100%',
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        marginBottom: 22
    },
    viewed: {
        flexDirection:'row',
        alignItems: 'center',
    },
    viewedText: {
        marginLeft: 8,
        color: '#091334',
        fontSize: 14
    },

    block3Left: {
        flex:1,
        flexDirection:'row',
        alignItems: 'center',
    },
    block3Right: {
      flex:1
    },

    date: {
        flexDirection:'row',
        alignItems: 'center',
    },
    dateText: {
        marginLeft: 8,
        color: '#091334',
        fontSize: 14
    },

    number: {
        flexDirection:'row',
        alignItems: 'center',
    },
    numberText: {
        marginLeft: 8,
        color: '#091334',
        fontSize: 14
    },

    actionsWrapper: {
        width: '100%',
        paddingLeft: 16,
        marginTop:20,
        marginBottom:16
    },

    actionsWrapperContainer:{
        marginRight: 25,
        width: '100%',
        flexDirection:'row'
    },

    actionItem: {
       height: 40,
        paddingHorizontal:14,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#C4C8D4',
        marginRight: 8
    },
    actionItemText: {
        marginLeft: 8,
        color: '#091334',
        fontSize: 16
    },

    noteMainWrapper: {
        width: '100%',
        paddingHorizontal: 16,
        height: 48,
        marginBottom: 32
    },
    noteWrapper: {
        width: '100%',
        height: '100%',
        backgroundColor:'#FFF2DE',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft: 16,
        borderRadius: 8
    },
    noteText: {
        fontSize:16,
        color: '#091334'
    },


})
