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

import NavigationBottomMenu from '../../includes/NavigationBottomMenu';


import Svg, {Defs, G, Path, Rect, Circle, ClipPath} from "react-native-svg";
import {useEffect, useState} from "react";

import SearchSvg from '../../../../assets/Svg/search_component/SearchSvg';
import SortBySvg from '../../../../assets/Svg/search_component/SortBySvg';

import AutoCard from './includes/AutoCard'
import NotActiveRadioButtonSvg from '../../../../assets/Svg/NotActiveRadioButtonSvg'
import ActiveRadioButtonSvg from '../../../../assets/Svg/ActiveRadioButtonSvg'



export default function App(props)
{
    const [ads_tab, setAdsTab] = useState(true);
    const [search_tab, setSearchTab] = useState(false);

    const [ads, setAds] = useState([
        {image: require('../../../../assets/images/car_photo.png'), title: 'Mercedes-Benz S c...', year: '2014', mileage: '142 000', price: '829 000'},
        {image: require('../../../../assets/images/car_photo.png'), title: 'Mercedes-Benz S c...', year: '2014', mileage: '142 000', price: '829 000'},
        {image: require('../../../../assets/images/car_photo.png'), title: 'Mercedes-Benz S c...', year: '2014', mileage: '142 000', price: '829 000'},
    ]);

    const [search_ads_data, setSearchAdsData] = useState([
        { title: 'Mercedes-Benz, BMW, Audi, KIA, Lamborgini', },
        { title: 'Mercedes-Benz, BMW', },
        { title: 'Mercedes-Benz, BMW, Audi, KIA, Lamborgini, Toyota, Nissan', },
    ]);

    const [active_subscribe1, setActiveSubscribe1] = useState(false);
    const [active_subscribe2, setActiveSubscribe2] = useState(false);
    const [active_subscribe3, setActiveSubscribe3] = useState(false);

    const [show_subscribe_success, setShowSubscribeSuccess] = useState(false);

    useEffect(() => {

    }, []);


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>

                <View style={[styles.headerItem, styles.flex1 ]}>

                </View>


                <View style={[styles.headerItem, styles.flex2 ]}>
                    <Text style={styles.appName}>
                        Избранное
                    </Text>
                </View>

                <View style={[styles.headerItem, styles.flex1, styles.headerItemRight ]}>

                    <TouchableOpacity style={{marginRight:16}} >
                        <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <G clipPath="url(#clip0_10820_32430)" fill="#091334"><Rect x={11.0939} y={1} width={2} height={22} rx={1} /><Path d="M20.52 11.962a.3.3 0 01.3-.3h2.38a.3.3 0 01.3.3v.943a.3.3 0 01-.17.27l-2.38 1.144a.3.3 0 01-.43-.27v-2.087zM3.48 11.962a.3.3 0 00-.3-.3H.8a.3.3 0 00-.3.3v.943a.3.3 0 00.17.27l2.38 1.144a.3.3 0 00.43-.27v-2.087z" /><Path d="M7.87 3.8A5.05 5.05 0 002.91 7.893l-.867 4.493v7.138a1.65 1.65 0 103.298 0v-.7H9.3a.5.5 0 00.5-.5v-1.1a.5.5 0 00-.5-.5H4.144v-4.137l.83-4.296A2.95 2.95 0 017.87 5.9H9.3a.5.5 0 00.5-.5V4.3a.5.5 0 00-.5-.5H7.87zM16.474 3.8a5.05 5.05 0 014.959 4.092l.867 4.494v7.137a1.65 1.65 0 11-3.298 0v-.7h-3.958a.5.5 0 01-.5-.5v-1.1a.5.5 0 01.5-.5H20.2v-4.136l-.83-4.296A2.95 2.95 0 0016.474 5.9h-1.43a.5.5 0 01-.5-.5V4.3a.5.5 0 01.5-.5h1.43z" /></G><Defs><ClipPath id="clip0_10820_32430"><Path fill="#fff" transform="translate(.5 1)" d="M0 0H23.0001V22H0z"/></ClipPath></Defs>
                        </Svg>
                    </TouchableOpacity>

                </View>

            </View>

            <View style={styles.scrollViewWrapper}>

                    <TouchableOpacity
                        onPress={() => {
                            setAdsTab(true);
                            setSearchTab(false);
                        }}
                        style={styles.menuTopButton}
                    >
                        <Text style={[styles.menuTopButtonText,styles.menuTopButtonTextActive ]}>Объявления</Text>
                        {ads_tab &&  <View style={styles.menuTopButtonActiveLine}></View> }

                    </TouchableOpacity>


                    <TouchableOpacity
                        onPress={() => {
                            setSearchTab(true);
                            setAdsTab(false);
                        }}
                        style={styles.menuTopButton}
                    >
                        <Text style={[styles.menuTopButtonText ]}>Поиски</Text>
                        {search_tab &&  <View style={styles.menuTopButtonActiveLine}></View> }


                    </TouchableOpacity>


            </View>


            {ads_tab &&
                <ScrollView style={{width: '100%', flex:1, }}>
                    {ads.map((item, index) => {
                        return (
                            <View key={index} style={styles.adsItemWrapper}>
                                <AutoCard key={index} navigation={props.navigation}/>

                            </View>

                        )
                    })}
                </ScrollView>
            }

            {search_tab &&
                <ScrollView style={{width: '100%', flex:1}}>
                    {/*{search_ads_data.map((item, index) => {*/}
                    {/*    return (*/}
                    {/*        <View key={index} style={styles.searchItemWrapper}>*/}

                    {/*            <View style={styles.searchItemTop}>*/}
                    {/*                <TouchableOpacity>*/}
                    {/*                    <Text style={styles.searchItemTopText}>{item.title}</Text>*/}
                    {/*                </TouchableOpacity>*/}

                    {/*                <TouchableOpacity>*/}
                    {/*                    <Svg width={40} height={24} viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                    {/*                        <Path d="M27.14 6.5c-.188 0-.34.15-.34.337v10.901a1.997 1.997 0 01-1.998 1.998h-9.605A1.995 1.995 0 0113.2 17.74V6.837a.337.337 0 00-.34-.337h-.46a.9.9 0 110-1.8h15.2a.9.9 0 110 1.8h-.46zm-11.74 0a.5.5 0 00-.5.5v10.7a.5.5 0 00.5.5h9.2a.5.5 0 00.5-.5V7a.5.5 0 00-.5-.5h-9.2zm.35-4a.5.5 0 01.5-.5h7.5a.5.5 0 01.5.5v.8a.5.5 0 01-.5.5h-7.5a.5.5 0 01-.5-.5v-.8zm3.4 7.2a.5.5 0 01.5-.5h.7a.5.5 0 01.5.5V15a.5.5 0 01-.5.5h-.7a.5.5 0 01-.5-.5V9.7z" fill="#6C7694"/>*/}
                    {/*                    </Svg>*/}
                    {/*                </TouchableOpacity>*/}
                    {/*            </View>*/}

                    {/*            <View style={styles.infoLine}>*/}
                    {/*                <Text style={styles.infoText}>₪ 1 000 000 – ₪ 2 000 000</Text>*/}
                    {/*                <Svg style={{marginHorizontal:6}} width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                    {/*                    <Rect width={4} height={4} rx={2} fill="#C4C8D4" />*/}
                    {/*                </Svg>*/}
                    {/*                <Text style={styles.infoText}>Новый</Text>*/}
                    {/*            </View>*/}

                    {/*            <View style={styles.infoLine}>*/}
                    {/*                <Text style={styles.infoText}>Универсалы</Text>*/}
                    {/*                <Svg style={{marginHorizontal:6}} width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                    {/*                    <Rect width={4} height={4} rx={2} fill="#C4C8D4" />*/}
                    {/*                </Svg>*/}
                    {/*                <Text style={styles.infoText}>Передний</Text>*/}
                    {/*            </View>*/}

                    {/*            <View style={styles.subscribeToEmail}>*/}
                    {/*                <TouchableOpacity>*/}
                    {/*                    <NotActiveRadioButtonSvg/>*/}
                    {/*                </TouchableOpacity>*/}
                    {/*                <Text style={styles.subscribeToEmailText}>Получать уведомления на e-mail</Text>*/}
                    {/*            </View>*/}
                    {/*        </View>*/}
                    {/*    )*/}
                    {/*})}*/}

                    <View  style={styles.searchItemWrapper}>

                        <View style={styles.searchItemTop}>
                            <TouchableOpacity
                                onPress={() => {
                                    props.navigation.navigate('SingleAdsComponent')
                                }}
                            >
                                <Text style={styles.searchItemTopText}>Mercedes-Benz, BMW, Audi, KIA, Lamborgini</Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Svg width={40} height={24} viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M27.14 6.5c-.188 0-.34.15-.34.337v10.901a1.997 1.997 0 01-1.998 1.998h-9.605A1.995 1.995 0 0113.2 17.74V6.837a.337.337 0 00-.34-.337h-.46a.9.9 0 110-1.8h15.2a.9.9 0 110 1.8h-.46zm-11.74 0a.5.5 0 00-.5.5v10.7a.5.5 0 00.5.5h9.2a.5.5 0 00.5-.5V7a.5.5 0 00-.5-.5h-9.2zm.35-4a.5.5 0 01.5-.5h7.5a.5.5 0 01.5.5v.8a.5.5 0 01-.5.5h-7.5a.5.5 0 01-.5-.5v-.8zm3.4 7.2a.5.5 0 01.5-.5h.7a.5.5 0 01.5.5V15a.5.5 0 01-.5.5h-.7a.5.5 0 01-.5-.5V9.7z" fill="#6C7694"/>
                                </Svg>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.infoLine}>
                            <Text style={styles.infoText}>₪ 1 000 000 – ₪ 2 000 000</Text>
                            <Svg style={{marginHorizontal:6}} width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Rect width={4} height={4} rx={2} fill="#C4C8D4" />
                            </Svg>
                            <Text style={styles.infoText}>Новый</Text>
                        </View>

                        <View style={styles.infoLine}>
                            <Text style={styles.infoText}>Универсалы</Text>
                            <Svg style={{marginHorizontal:6}} width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Rect width={4} height={4} rx={2} fill="#C4C8D4" />
                            </Svg>
                            <Text style={styles.infoText}>Передний</Text>
                        </View>

                        <View style={styles.subscribeToEmail}>
                            <TouchableOpacity
                                onPress={() => {
                                    setActiveSubscribe1(true);
                                    setShowSubscribeSuccess(false);

                                    setShowSubscribeSuccess(true)
                                    setTimeout(() => {
                                        setShowSubscribeSuccess(false)
                                    }, 2000)
                                }}
                            >
                                {!active_subscribe1 ?
                                    <NotActiveRadioButtonSvg/>
                                    :
                                    <ActiveRadioButtonSvg/>
                                }

                            </TouchableOpacity>
                            <Text style={styles.subscribeToEmailText}>Получать уведомления на e-mail</Text>
                        </View>
                    </View>
                    <View  style={styles.searchItemWrapper}>

                        <View style={styles.searchItemTop}>
                            <TouchableOpacity
                                onPress={() => {
                                    props.navigation.navigate('SingleAdsComponent')
                                }}
                            >
                                <Text style={styles.searchItemTopText}>Mercedes-Benz, BMW</Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Svg width={40} height={24} viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M27.14 6.5c-.188 0-.34.15-.34.337v10.901a1.997 1.997 0 01-1.998 1.998h-9.605A1.995 1.995 0 0113.2 17.74V6.837a.337.337 0 00-.34-.337h-.46a.9.9 0 110-1.8h15.2a.9.9 0 110 1.8h-.46zm-11.74 0a.5.5 0 00-.5.5v10.7a.5.5 0 00.5.5h9.2a.5.5 0 00.5-.5V7a.5.5 0 00-.5-.5h-9.2zm.35-4a.5.5 0 01.5-.5h7.5a.5.5 0 01.5.5v.8a.5.5 0 01-.5.5h-7.5a.5.5 0 01-.5-.5v-.8zm3.4 7.2a.5.5 0 01.5-.5h.7a.5.5 0 01.5.5V15a.5.5 0 01-.5.5h-.7a.5.5 0 01-.5-.5V9.7z" fill="#6C7694"/>
                                </Svg>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.infoLine}>
                            <Text style={styles.infoText}>₪ 1 000 000 – ₪ 2 000 000</Text>
                            <Svg style={{marginHorizontal:6}} width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Rect width={4} height={4} rx={2} fill="#C4C8D4" />
                            </Svg>
                            <Text style={styles.infoText}>Новый</Text>
                        </View>

                        <View style={styles.infoLine}>
                            <Text style={styles.infoText}>Универсалы</Text>
                            <Svg style={{marginHorizontal:6}} width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Rect width={4} height={4} rx={2} fill="#C4C8D4" />
                            </Svg>
                            <Text style={styles.infoText}>Передний</Text>
                        </View>

                        <View style={styles.subscribeToEmail}>

                            <TouchableOpacity
                                onPress={() => {
                                    setActiveSubscribe2(true);
                                    setShowSubscribeSuccess(false);

                                    setShowSubscribeSuccess(true)
                                    setTimeout(() => {
                                        setShowSubscribeSuccess(false)
                                    }, 2000)
                                }}
                            >
                                {!active_subscribe2 ?
                                    <NotActiveRadioButtonSvg/>
                                    :
                                    <ActiveRadioButtonSvg/>
                                }
                            </TouchableOpacity>
                            <Text style={styles.subscribeToEmailText}>Получать уведомления на e-mail</Text>
                        </View>
                    </View>
                    <View  style={styles.searchItemWrapper}>

                        <View style={styles.searchItemTop}>
                            <TouchableOpacity
                                onPress={() => {
                                    props.navigation.navigate('SingleAdsComponent')
                                }}
                            >
                                <Text style={styles.searchItemTopText}>Mercedes-Benz, BMW, Audi, KIA, Lamborgini, Toyota, Nissan</Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Svg width={40} height={24} viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M27.14 6.5c-.188 0-.34.15-.34.337v10.901a1.997 1.997 0 01-1.998 1.998h-9.605A1.995 1.995 0 0113.2 17.74V6.837a.337.337 0 00-.34-.337h-.46a.9.9 0 110-1.8h15.2a.9.9 0 110 1.8h-.46zm-11.74 0a.5.5 0 00-.5.5v10.7a.5.5 0 00.5.5h9.2a.5.5 0 00.5-.5V7a.5.5 0 00-.5-.5h-9.2zm.35-4a.5.5 0 01.5-.5h7.5a.5.5 0 01.5.5v.8a.5.5 0 01-.5.5h-7.5a.5.5 0 01-.5-.5v-.8zm3.4 7.2a.5.5 0 01.5-.5h.7a.5.5 0 01.5.5V15a.5.5 0 01-.5.5h-.7a.5.5 0 01-.5-.5V9.7z" fill="#6C7694"/>
                                </Svg>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.infoLine}>
                            <Text style={styles.infoText}>₪ 1 000 000 – ₪ 2 000 000</Text>
                            <Svg style={{marginHorizontal:6}} width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Rect width={4} height={4} rx={2} fill="#C4C8D4" />
                            </Svg>
                            <Text style={styles.infoText}>Новый</Text>
                        </View>

                        <View style={styles.infoLine}>
                            <Text style={styles.infoText}>Универсалы</Text>
                            <Svg style={{marginHorizontal:6}} width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Rect width={4} height={4} rx={2} fill="#C4C8D4" />
                            </Svg>
                            <Text style={styles.infoText}>Передний</Text>
                        </View>

                        <View style={styles.subscribeToEmail}>
                            <TouchableOpacity
                                onPress={() => {
                                    setActiveSubscribe3(true);
                                    setShowSubscribeSuccess(false);

                                    setShowSubscribeSuccess(true)
                                    setTimeout(() => {
                                        setShowSubscribeSuccess(false)
                                    }, 2000)
                                }}
                            >
                                {!active_subscribe3 ?
                                    <NotActiveRadioButtonSvg/>
                                    :
                                    <ActiveRadioButtonSvg/>
                                }
                            </TouchableOpacity>
                            <Text style={styles.subscribeToEmailText}>Получать уведомления на e-mail</Text>
                        </View>
                    </View>

                </ScrollView>
            }


            {show_subscribe_success &&


                <View style={styles.subscribeSuccess}>

                    <Svg width={25} height={24} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Rect x={0.5} width={24} height={24} rx={12} fill="#E0F7D4" />
                        <Path d="M8 11.4l3.273 3.6L17 9" stroke="#060" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
                    </Svg>

                    <Text style={styles.subscribeSuccessText}>Подписка оформлена</Text>

                </View>

            }

            <NavigationBottomMenu navigation={props.navigation} active_page={'Favorite'}/>


            {/*{show_sort_popoup &&*/}

            {/*    <SortByPopUp show={show_sort_popoup} onChange={() => {setSortPopup(!show_sort_popoup)}}/>*/}

            {/*}*/}

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
        marginBottom: 4,
        flexDirection:'row'
    },
    scrollView: {
        width: '100%',
        height: 36,
    },
    header: {
        width: '100%',
        height: 56,
        // paddingHorizontal: 16,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    changeLanguageButton: {

    },
    appName: {
        fontSize:18,
        fontWeight:'bold'
    },
    profileButton: {

    },

    flex1: {
      flex:1
    },
    flex2: {
        flex:2,
        justifyContent:'center',
        alignItems:'center'
    },
    headerItem: {
        height: '100%',
    },
    headerItemRight: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'flex-end',
    },

    menuTopButtonWrapper: {
        width: '100%',
        height: 36,
        // backgroundColor:'silver',
        // marginBottom: 24,
        flexDirection:'row'
    },

    menuTopButton: {
        flex: 1,
        marginRight: 24,
        height: 35,
        // borderBottomWidth:1,
        // borderBottomColor: 'white',
        justifyContent:'flex-start',
        alignItems:'center',
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
        backgroundColor:'#2B65EE',
        position:'absolute',
        bottom: 0,
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2,
        zIndex: 2
    },
    searchItemWrapper: {
        paddingVertical: 20,
        width: '100%',
        paddingHorizontal: 16,
        borderBottomColor: '#E2E4EA',
        borderBottomWidth: 1
    },

    searchItemTop: {
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-start',
        marginBottom: 8
    },
    searchItemTopText: {
        color:'#2B65EE',
        fontWeight: 'bold',
        fontSize:18
    },
    infoLine: {
        width:'100%',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        marginBottom:8
    },
    infoText: {
        fontSize:14,
        color: '#6C7693'
    },
    subscribeToEmail: {
        width:'100%',
        flexDirection:'row',
        marginTop: 4,
        alignItems:'center'
    },
    subscribeToEmailText: {
        fontSize:16,
        color: '#091334',
        marginLeft: 12
    },
    subscribeSuccess: {
        width: '100%',
        height: 56,
        backgroundColor:'rgba(1,9,13,0.9)',
        position: 'absolute',
        bottom: 64,
        left: 0,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    subscribeSuccessText: {
        fontSize: 16,
        fontWeight:'bold',
        color: 'white',
        marginLeft: 12
    },

   adsItemWrapper: {
        paddingVertical: 20,
        width: '100%',
        borderBottomColor: '#E2E4EA',
        borderBottomWidth: 1
    },

})
