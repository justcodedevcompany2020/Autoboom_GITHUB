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
import {useSelector, useDispatch, } from 'react-redux';
import {} from '../../../../redux/actions/actions';

// import SpecialOfferBlock from './includes/SpecialOffer';
import NavigationBottomMenu from '../../../includes/NavigationBottomMenu';


import Svg, {Defs, G, Path, Rect, Circle, ClipPath} from "react-native-svg";
import {useEffect, useState} from "react";
import FilterSvg from '../../../../../assets/Svg/search_component/FilterSvg';

import PopularModelsBlock from "./includes/PopularModels";
import ModelsPopup from "./includes/Popups/ModelsPopup";
import SelectedMarkModel from "./includes/SelectedMarkModel";
import PayYourCarBlock from "./includes/PayYourCarBlock";
import MiniSvg from "../../../../../assets/Svg/auto_types/mini";
import SpecialOfferBlock from "./includes/SpecialOffer";
import BecomePartner from "../../includes/BecomePartner";
import JournalBlock from "./includes/JournalBlock";
import DillersBlock from "./includes/DillersBlock";

export default function App(props)
{
    // Redux
    const {is_open_model_popup_in_catalog_select_model_page} = useSelector(state => state.justDriveReducer);
    const dispatch = useDispatch();
    // const handleAddToAddressDataRedux = (to_address_data) => dispatch(addToAddressDataRedux(to_address_data));

    const [active_top_tab1, setActiveTopTab1] = useState(true);
    const [active_top_tab2, setActiveTopTab2] = useState(false);
    const [active_top_tab3, setActiveTopTab3] = useState(false);

    const [new_ads, setNewAds] = useState([
        {image: require('../../../../../assets/images/new-autos2.png'), title: 'Mercedes-Benz S c...', subtitle: 'March 2021'},
        {image: require('../../../../../assets/images/new-autos2.png'), title: 'Mercedes-Benz S c...', subtitle: 'March 2021'},
        {image: require('../../../../../assets/images/new-autos2.png'), title: 'Mercedes-Benz S c...', subtitle: 'March 2021'},
        {image: require('../../../../../assets/images/new-autos2.png'), title: 'Mercedes-Benz S c...', subtitle: 'March 2021'},
    ]);

    const [auto_types, setAutoTypes] = useState([
        {icon: <MiniSvg/>, title: 'Мини'},
        {icon: <MiniSvg/>, title: 'Мини'},
        {icon: <MiniSvg/>, title: 'Мини'},
        {icon: <MiniSvg/>, title: 'Мини'},
        {icon: <MiniSvg/>, title: 'Мини'},
        {icon: <MiniSvg/>, title: 'Мини'},
        {icon: <MiniSvg/>, title: 'Мини'},
    ]);

    const [engines_type, setEnginesType] = useState([
        {icon: '', title: 'Бензин'},
        {icon: '', title: 'Дизель'},
        {icon: '', title: 'Гибрид'},
        {icon: '', title: 'Бензин'},
        {icon: '', title: 'Дизель'},
        {icon: '', title: 'Гибрид'},
    ]);

    const [themes, setThemes] = useState([
        {title: 'США'  },
        {title: 'Корея'  },
        {title: 'Япония'  },
        {title: 'Группа VAG'  },
        {title: 'Немцы'  },
        {title: 'Французы'  },
        {title: 'Группа FCA'  },
        {title: 'Группа PSA'  },
    ]);


    const [special_offers, setSpecialOffers] = useState([
        {image: require('../../../../../assets/images/car_photo.png'), title: 'Mercedes-Benz S c...', year: '2014', mileage: '142 000', price: '829 000'},
        {image: require('../../../../../assets/images/car_photo.png'), title: 'Mercedes-Benz S c...', year: '2014', mileage: '142 000', price: '829 000'},
        {image: require('../../../../../assets/images/car_photo.png'), title: 'Mercedes-Benz S c...', year: '2014', mileage: '142 000', price: '829 000'},
        {image: require('../../../../../assets/images/car_photo.png'), title: 'Mercedes-Benz S c...', year: '2014', mileage: '142 000', price: '829 000'},
        {image: require('../../../../../assets/images/car_photo.png'), title: 'Mercedes-Benz S c...', year: '2014', mileage: '142 000', price: '829 000'},
        {image: require('../../../../../assets/images/car_photo.png'), title: 'Mercedes-Benz S c...', year: '2014', mileage: '142 000', price: '829 000'},
    ]);

    const [journal_data, setJournalData] = useState([
        {image: require('../../../../../assets/images/car_photo.png'), title: 'Kia Picanto. Practical, affordable and compact vehicle', description: 'Well-made, well-equipped, practical and affordable Korean compact car. History of generations and distinctive features of modern models.'},
        {image: require('../../../../../assets/images/car_photo.png'), title: 'Kia Optima. Korean bestseller', description: 'Korean-inspired premium class. A popular car competing with the best European cars. Description, interesting technical characteristics. A brief history of generations and modern models.'},
        {image: require('../../../../../assets/images/car_photo.png'), title: 'Kia Picanto. Practical, affordable and compact vehicle', description: 'Well-made, well-equipped, practical and affordable Korean compact car. History of generations and distinctive features of modern models.'},
    ]);


    const [show_sort_popoup, setSortPopup] = useState(false)




    useEffect(() => {

    }, []);


    // Попап выбора марки, открывается от Redux
    if(is_open_model_popup_in_catalog_select_model_page)
    {
        return (
            <ModelsPopup/>
        )
    }


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>

                <View style={[styles.headerItem, styles.flex1 ]}>
                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate('CatalogSelectMarkComponent')
                        }}
                        style={{}}
                    >
                        <Svg width={43} height={44} viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M25 15l-6.93 6.93a.1.1 0 000 .14L25 29" stroke="#091334" strokeWidth={2} strokeLinecap="round"/>
                        </Svg>
                    </TouchableOpacity>
                </View>

                <View style={[styles.headerItem, styles.flex2 ]}>
                    <Text style={styles.appName}>
                        Каталог
                    </Text>
                </View>

                <View style={[styles.headerItem, styles.flex1, styles.headerItemRight ]}>

                    <TouchableOpacity  style={{marginRight:16}}>
                        <FilterSvg/>
                    </TouchableOpacity>


                </View>

            </View>


            <ScrollView style={{width: '100%', flex:1}}>

                <View style={{width:'100%', paddingHorizontal:16, marginBottom:16}}>
                    <Text style={{fontSize:22, fontWeight:'bold', lineHeight:28}}>Ауди</Text>
                </View>

                <PopularModelsBlock/>


                <View style={{padding: 16}}>
                    <Text style={{borderBottomWidth:1, borderColor: '#f1f1f1', width: '100%', paddingBottom: 16, lineHeight:24, color:'#091334'}}>
                        Ауди - это не просто стиль, роскошь, вкус, комфорт, безопасность, качество и надёжность. Это - самая настоящая легенда! Бренд «Mercedes-Benz» оценивается в 60,355 млрд долларов, что вывело его на первое место рейтинга самых дорогих автомобильных брендов в 2019 году.
                    </Text>
                </View>

                <SelectedMarkModel/>
                <PayYourCarBlock/>
                <SpecialOfferBlock data={special_offers}/>
                <BecomePartner/>

                <DillersBlock/>
                <JournalBlock data={journal_data}/>
            </ScrollView>

            <NavigationBottomMenu navigation={props.navigation} active_page={''}/>


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
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth:1,
        borderColor: '#f1f1f1',
        marginBottom:20
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
        justifyContent:'center',
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
        height: 36,
        borderBottomWidth:1,
        borderBottomColor: 'white',
        justifyContent:'flex-start',
        alignItems:'center'
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
    tabsBeegMainWrapper: {
        paddingHorizontal: 16,
        marginBottom: 16
    },
    tabsMainWrapper: {
        width:'100%',
        padding:4,
        height:40,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:'#F0F1F4',
        borderRadius: 8,

    },
    tabsWrapper: {
        width: '100%',
        height: '100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 8,
        backgroundColor:'#F0F1F4',
    },
    tabsItem: {
        // height:'100%',
        height: '100%',
        alignItems:'center',
        justifyContent:'center',
    },
    tabsItemText: {
        textAlign:'center',
        color:'#6C7693'
        // width: '100%',
        // height:'100%',
        // backgroundColor:'blue',
    },
    tabsItemActive: {
        borderRadius:4,
        backgroundColor:'white'
    },
    tabsItemTextActive: {
        color: '#091334'
    },
    markAndFilterWrapper: {
        width: '100%',
        paddingHorizontal: 16 ,
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom: 16
    },
    markFilterButton: {
        width: '49%',
        height: 44,
        borderRadius:8,
        borderWidth: 1,
        borderColor:'#C4C8D4',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    markFilterButtonText: {
        fontSize:16,
        color: '#091334',
        marginLeft: 12
    },


    markList: {
        width: '100%',
        paddingHorizontal: 16,
        flexDirection:'row',
        marginBottom: 20
    },
    markListContainer: {
        flex:1
    },
    markListItemWrapper: {
        width: '100%',
        height: 24,
        flexDirection:'row',
        alignItems:'center',
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

    autoTypesWrapper: {
        width: '100%',
        paddingLeft: 16,
        marginBottom:24
    },
    autoTypesScrollView: {
        width: '100%',
    },
    autoTypesItem: {
        width: 144,
        height: 100,
        justifyContent:'center',
        alignItems:'center',
        marginRight: 8,
        backgroundColor:'#F0F1F4',
        borderRadius: 8
    },
    autoTypesTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20
    }
})
