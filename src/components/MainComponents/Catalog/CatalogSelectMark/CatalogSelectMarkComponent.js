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
//
// import SearchSvg from '../../../../assets/Svg/search_component/SearchSvg';
// import SortBySvg from '../../../../assets/Svg/search_component/SortBySvg';
//
// import MarkSvg from '../../../../assets/Svg/search_component/MarkSvg';
import FilterSvg from '../../../../../assets/Svg/search_component/FilterSvg';
//
// import AutoCard from './includes/AutoCard';
// import BecomePartnerBlock from '../includes/BecomePartner';
// import SortByPopUp from './includes/SortByPopUp';
// import PriceFilter from "../Home/includes/Filters/PriceFilter";

import PopularMarksBlock from "./includes/PopularMarks";
import MarksPopup from "./includes/Popups/MarksPopup";
import NewADSBlock from "./includes/NewADS";
import CategoriesBlock from "./includes/CategoriesBlock";
import ThemesBlock from "./includes/ThemesBlock";
import PayYourCarBlock from "./includes/PayYourCarBlock";
import MiniSvg from "../../../../../assets/Svg/auto_types/mini";
import SpecialOfferBlock from "./includes/SpecialOffer";
import BecomePartner from "../../includes/BecomePartner";
import JournalBlock from "./includes/JournalBlock";

export default function App(props)
{

    // Redux
    const {is_open_marki_popup_in_catalog_select_mark_page} = useSelector(state => state.justDriveReducer);
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
    if(is_open_marki_popup_in_catalog_select_mark_page)
    {
        return (
            <MarksPopup/>
        )
    }


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>

                <View style={[styles.headerItem, styles.flex1 ]}>

                </View>

                <View style={[styles.headerItem, styles.flex2 ]}>
                    <Text style={styles.appName}>
                        Поиск в каталоге
                    </Text>
                </View>

                <View style={[styles.headerItem, styles.flex1, styles.headerItemRight ]}>

                    <TouchableOpacity  style={{marginRight:16}}>
                        <FilterSvg/>
                    </TouchableOpacity>


                </View>

            </View>

            <View style={styles.scrollViewWrapper}>
                <ScrollView horizontal={true} style={styles.scrollView}>

                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate('SearchComponent')

                        }}
                        style={styles.menuTopButton}
                    >
                        <Text style={[styles.menuTopButtonText,]}>Объявления</Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {}}
                        style={styles.menuTopButton}
                    >
                        <Text style={[styles.menuTopButtonText ,styles.menuTopButtonTextActive ]}>Каталог</Text>
                        <View style={styles.menuTopButtonActiveLine}></View>

                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {}}
                        style={styles.menuTopButton}
                    >
                        <Text style={[styles.menuTopButtonText ]}>Журнал</Text>

                    </TouchableOpacity>


                    <TouchableOpacity
                        onPress={() => {}}
                        style={styles.menuTopButton}
                    >
                        <Text style={[styles.menuTopButtonText ]}>Компании</Text>

                    </TouchableOpacity>


                </ScrollView>

            </View>


            <ScrollView style={{width: '100%', flex:1}}>

                <PopularMarksBlock navigation={props.navigation}/>
                <NewADSBlock data={new_ads}/>
                <View style={styles.autoTypesWrapper}>

                    <Text style={styles.autoTypesTitle}>Тип кузова</Text>

                    <ScrollView horizontal={true} style={styles.autoTypesScrollView}>

                        {auto_types.map((item, index) => {
                            return (
                                <TouchableOpacity key={index} style={styles.autoTypesItem}>
                                    {item.icon}
                                    <Text>{item.title}</Text>
                                </TouchableOpacity>
                            )
                        })}

                    </ScrollView>

                </View>
                <View style={styles.autoTypesWrapper}>
                    <Text style={styles.autoTypesTitle}>Тип двигателя</Text>
                    <ScrollView horizontal={true} style={styles.autoTypesScrollView}>

                        {engines_type.map((item, index) => {
                            return (
                                <TouchableOpacity key={index} style={styles.autoTypesItem}>
                                    <Svg width={24} height={30} viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg"><G clipPath="url(#clip0_10991_22617)" stroke="#6C7694" strokeWidth={1.86206} strokeMiterlimit={10}><Path d="M17.63 16.205a.448.448 0 00-.531-.34.44.44 0 00-.347.522c.033.149.06.296.086.442a6.147 6.147 0 01-1.328 5.229 7.363 7.363 0 01-3.317 2.147.439.439 0 00.142.857.456.456 0 00.141-.022 8.273 8.273 0 003.717-2.413 7 7 0 001.525-5.944 12.095 12.095 0 00-.093-.478h.005z" /><Path d="M19.71 24.883a10.165 10.165 0 01-7.67 3.32 10.281 10.281 0 01-7.75-3.357 8.121 8.121 0 01-1.801-6.889c1.11-6.416 7.929-14.214 9.51-15.954 1.581 1.74 8.4 9.535 9.507 15.954a8.157 8.157 0 01-1.798 6.926h.002zm.686.57a8.999 8.999 0 001.998-7.642c-1.297-7.493-9.71-16.39-10.069-16.765a.472.472 0 00-.655 0c-.36.376-8.772 9.27-10.067 16.765a8.947 8.947 0 002.001 7.604 11.179 11.179 0 008.433 3.67 11.081 11.081 0 008.356-3.633h.003z" /></G><Defs><ClipPath id="clip0_10991_22617"><Path fill="#fff" transform="translate(.5)" d="M0 0H23V30H0z" /></ClipPath></Defs></Svg>
                                    <Text style={{fontSize:16,marginTop:15}}>{item.title}</Text>
                                </TouchableOpacity>
                            )
                        })}

                    </ScrollView>

                </View>
                <ThemesBlock data={themes}/>
                <CategoriesBlock/>
                <PayYourCarBlock/>
                <SpecialOfferBlock data={special_offers}/>
                <BecomePartner/>
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
