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

// Svg - s
import AnnouncementSvg from '../../../../assets/Svg/categories/announcement';
import CatalogSvg from '../../../../assets/Svg/categories/catalog';
import JournalSvg from '../../../../assets/Svg/categories/journal';
import CompaniesSvg from '../../../../assets/Svg/categories/companies';

import HyundaiSvg from '../../../../assets/Svg/marks/hyundai';
import MiniSvg from '../../../../assets/Svg/auto_types/mini'
import AllMarksSvg from '../../../../assets/Svg/searched_before/all_marks';


// import AutoserviceSvg from '../../../../assets/Svg/companies/autoserviceSvg'
import AutosalonSvg from '../../../../assets/Svg/companies/autosalonSvg'

// Components
import NewADSBlock from './includes/NewADS';
import SeeADSBlock from './includes/SeeADS';
import CompaniesBlock from './includes/Companies';
import ServicesBlock from './includes/Services';
import JournaleBlock from './includes/Journale';
import BecomePartnerBlock from '../includes/BecomePartner';
import NewAutosBlock from './includes/NewAutos';
import CatalogSearchBlock from './includes/CatalogSearch';

// filters
import PriceFilter from './includes/Filters/PriceFilter';
import HandFilter from './includes/Filters/HandFilter';
import MileageFilter from './includes/Filters/MileageFilter';
import NavigationBottomMenu from "../../includes/NavigationBottomMenu";


export default function App(props) {

    const [marks, setMark] = useState([
        {icon: <HyundaiSvg/>},
        {icon: <HyundaiSvg/>},
        {icon: <HyundaiSvg/>},
        {icon: <HyundaiSvg/>},
        {icon: <HyundaiSvg/>},
        {icon: <HyundaiSvg/>},
        {icon: <HyundaiSvg/>},
        {icon: <HyundaiSvg/>},
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

    const [searched_before, setSearchedBefore] = useState([
        {icon: <AllMarksSvg/>, title: 'Мини'},
        {icon: <AllMarksSvg/>, title: 'Мини'},
        {icon: <AllMarksSvg/>, title: 'Мини'},
        {icon: <AllMarksSvg/>, title: 'Мини'},
        {icon: <AllMarksSvg/>, title: 'Мини'},
    ]);


    const [favorites, setFavorites] = useState([
        {icon: <AllMarksSvg/>, title: 'Мини1'},
        {icon: <AllMarksSvg/>, title: 'Мини1'},
        {icon: <AllMarksSvg/>, title: 'Мини1'},
        {icon: <AllMarksSvg/>, title: 'Мини1'},
        {icon: <AllMarksSvg/>, title: 'Мини1'},
        {icon: <AllMarksSvg/>, title: 'Мини1'},
        {icon: <AllMarksSvg/>, title: 'Мини1'},
        {icon: <AllMarksSvg/>, title: 'Мини1'},
    ]);

    const [new_ads, setNewAds] = useState([
        {image: require('../../../../assets/images/car_photo.png'), title: 'Mercedes-Benz S c...', year: '2014', mileage: '142 000', price: '829 000'},
        {image: require('../../../../assets/images/car_photo.png'), title: 'Mercedes-Benz S c...', year: '2014', mileage: '142 000', price: '829 000'},
        {image: require('../../../../assets/images/car_photo.png'), title: 'Mercedes-Benz S c...', year: '2014', mileage: '142 000', price: '829 000'},
        {image: require('../../../../assets/images/car_photo.png'), title: 'Mercedes-Benz S c...', year: '2014', mileage: '142 000', price: '829 000'},
        {image: require('../../../../assets/images/car_photo.png'), title: 'Mercedes-Benz S c...', year: '2014', mileage: '142 000', price: '829 000'},
        {image: require('../../../../assets/images/car_photo.png'), title: 'Mercedes-Benz S c...', year: '2014', mileage: '142 000', price: '829 000'},
        {image: require('../../../../assets/images/car_photo.png'), title: 'Mercedes-Benz S c...', year: '2014', mileage: '142 000', price: '829 000'},
        {image: require('../../../../assets/images/car_photo.png'), title: 'Mercedes-Benz S c...', year: '2014', mileage: '142 000', price: '829 000'},
    ]);

    const [see_ads, setSeeAds] = useState([
        {image: require('../../../../assets/images/car_photo.png'), title: 'Mercedes-Benz S c...', year: '2014', mileage: '142 000', price: '829 000'},
        {image: require('../../../../assets/images/car_photo.png'), title: 'Mercedes-Benz S c...', year: '2014', mileage: '142 000', price: '829 000'},
        {image: require('../../../../assets/images/car_photo.png'), title: 'Mercedes-Benz S c...', year: '2014', mileage: '142 000', price: '829 000'},
        {image: require('../../../../assets/images/car_photo.png'), title: 'Mercedes-Benz S c...', year: '2014', mileage: '142 000', price: '829 000'},
        {image: require('../../../../assets/images/car_photo.png'), title: 'Mercedes-Benz S c...', year: '2014', mileage: '142 000', price: '829 000'},
        {image: require('../../../../assets/images/car_photo.png'), title: 'Mercedes-Benz S c...', year: '2014', mileage: '142 000', price: '829 000'},
        {image: require('../../../../assets/images/car_photo.png'), title: 'Mercedes-Benz S c...', year: '2014', mileage: '142 000', price: '829 000'},
        {image: require('../../../../assets/images/car_photo.png'), title: 'Mercedes-Benz S c...', year: '2014', mileage: '142 000', price: '829 000'},
    ]);


    const [companies, setCompanies] = useState([
        {icon: <AutosalonSvg/>, title: 'Автосалон'  },
        {icon: <AutosalonSvg/>, title: 'Автосалон'  },
        {icon: <AutosalonSvg/>, title: 'Автосалон'  },
        {icon: <AutosalonSvg/>, title: 'Автосалон'  },
        {icon: <AutosalonSvg/>, title: 'Автосалон'  },
        {icon: <AutosalonSvg/>, title: 'Автосалон'  },
        {icon: <AutosalonSvg/>, title: 'Автосалон'  },
        {icon: <AutosalonSvg/>, title: 'Автосалон'  },
    ]);

    const [services, setServices] = useState([
        {title: 'Кондиционеры и отопление'  },
        {title: 'Рулевое управление'  },
        {title: 'Выхлопная система'  },
        {title: 'Диагностика'  },
        {title: 'Кузовной ремонт и покраска'  },
        {title: 'Подвеска'  },
        {title: 'Рулевое управление'  },
        {title: 'Техническое обслуживание'  },
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
    const [journal_menus, setJournalMenus] = useState([
        {title: 'Полезные статьи', menuid: 1},
        {title: 'Самые быстрые', menuid: 2},
        {title: 'Большие джипы', menuid: 3},
        {title: 'Семейные', menuid: 4},
        {title: 'Электрокары', menuid: 5},
    ]);
    const [catalog_search_autos_types, setCatalogSearchAutosTypes] = useState([
        {title: 'Полезные статьи'},
        {title: 'Самые быстрые'},
        {title: 'Большие джипы'},
        {title: 'Семейные'},
        {title: 'Электрокары'},
    ]);



    const [last_search_active_button, setLastSearchActiveButton] = useState(0);

    const [show_price_filter, setShowPriceFilter] = useState(false)
    const [show_hand_filter, setShowHandFilter] = useState(false)
    const [show_mileage_filter, setShowMileageFilter] = useState(false)

    useEffect(() => {

    }, []);


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>

                <TouchableOpacity style={styles.changeLanguageButton}>
                    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><G clipPath="url(#clip0_10498_15216)" stroke="#6C7694" strokeWidth={1.6}><Circle cx={10} cy={10} r={9.2} /><Path d="M13.486 10.167c0 2.538-.466 4.885-1.19 6.569-.363.843-.775 1.483-1.193 1.9-.415.414-.787.564-1.103.564-.316 0-.688-.15-1.103-.564-.418-.417-.83-1.057-1.193-1.9-.724-1.684-1.19-4.03-1.19-6.57 0-2.538.466-4.974 1.195-6.747.366-.889.782-1.572 1.204-2.02C9.337.951 9.704.8 10 .8c.296 0 .663.151 1.086.6.423.447.839 1.13 1.205 2.019.729 1.773 1.195 4.209 1.195 6.748zM1.094 9.59h18" /></G><Defs><ClipPath id="clip0_10498_15216"><Path fill="#fff" d="M0 0H20V20H0z" /></ClipPath></Defs></Svg>
                </TouchableOpacity>

                <Text style={styles.appName}>
                    <Svg width={135} height={14} viewBox="0 0 135 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M2.944 13.844l1.31-3.031h6.238l1.33 3.03h2.483L8.302.157h-1.8L.5 13.844h2.444zm6.668-5.065H5.115l2.248-5.2 2.249 5.2zm14.86 5.201c.743 0 1.44-.114 2.092-.342a5.891 5.891 0 001.809-1.026c.554-.457.99-1.079 1.31-1.868.32-.788.479-1.697.479-2.727V.157h-2.366v7.527c0 1.239-.28 2.23-.84 2.972-.561.743-1.389 1.115-2.484 1.115-1.082 0-1.962-.381-2.64-1.144-.677-.762-1.016-1.77-1.016-3.02V.156H18.45v7.742c0 1.93.576 3.426 1.73 4.488 1.154 1.062 2.584 1.593 4.292 1.593zm16.855-.136V2.385h4.595V.156H34.366v2.23h4.595v11.458h2.366zm14.47.156c1.954 0 3.61-.668 4.966-2.004C62.118 10.66 62.796 8.994 62.796 7c0-2.007-.675-3.676-2.024-5.006S57.764 0 55.796 0 52.17.675 50.82 2.024C49.47 3.373 48.796 5.032 48.796 7c0 2.007.678 3.676 2.034 5.006C52.185 13.336 53.84 14 55.796 14zm0-2.268c-1.252 0-2.321-.443-3.208-1.33-.886-.886-1.33-2.02-1.33-3.402 0-1.395.444-2.532 1.33-3.412.887-.88 1.956-1.32 3.207-1.32 1.239 0 2.304.443 3.197 1.33.893.886 1.34 2.02 1.34 3.402 0 1.395-.434 2.532-1.3 3.412-.868.88-1.946 1.32-3.237 1.32zm17.636 2.112c1.668 0 2.978-.326 3.93-.978.952-.652 1.427-1.656 1.427-3.011 0-1.695-.703-2.764-2.111-3.207 1.095-.665 1.642-1.682 1.642-3.05 0-1.082-.365-1.926-1.095-2.532-.73-.607-1.955-.91-3.676-.91h-5.807v13.688h5.69zm.059-8.056h-3.383V2.385h3.128c.978 0 1.662.14 2.053.42.392.281.587.721.587 1.32 0 .522-.209.93-.626 1.223-.417.293-1.003.44-1.76.44zm-.216 5.826H70.11V7.94h3.324c1.03 0 1.77.143 2.22.43.449.286.674.736.674 1.349 0 .665-.241 1.147-.724 1.447-.482.3-1.258.45-2.326.45zM90.151 14c1.955 0 3.61-.668 4.966-2.004C96.473 10.66 97.151 8.994 97.151 7c0-2.007-.675-3.676-2.024-5.006C93.777.664 92.12 0 90.151 0s-3.627.675-4.976 2.024C83.825 3.373 83.15 5.032 83.15 7c0 2.007.678 3.676 2.033 5.006C86.54 13.336 88.195 14 90.151 14zm0-2.268c-1.252 0-2.32-.443-3.207-1.33-.886-.886-1.33-2.02-1.33-3.402 0-1.395.444-2.532 1.33-3.412.886-.88 1.955-1.32 3.207-1.32 1.238 0 2.304.443 3.197 1.33.893.886 1.34 2.02 1.34 3.402 0 1.395-.434 2.532-1.301 3.412-.867.88-1.946 1.32-3.236 1.32zM108.374 14c1.956 0 3.611-.668 4.967-2.004 1.355-1.336 2.033-3.002 2.033-4.996 0-2.007-.674-3.676-2.023-5.006C112.001.664 110.343 0 108.374 0c-1.968 0-3.627.675-4.976 2.024-1.349 1.349-2.024 3.008-2.024 4.976 0 2.007.678 3.676 2.034 5.006 1.356 1.33 3.011 1.994 4.966 1.994zm0-2.268c-1.251 0-2.32-.443-3.206-1.33-.887-.886-1.33-2.02-1.33-3.402 0-1.395.443-2.532 1.33-3.412.886-.88 1.955-1.32 3.206-1.32 1.239 0 2.304.443 3.197 1.33.893.886 1.34 2.02 1.34 3.402 0 1.395-.434 2.532-1.301 3.412-.867.88-1.945 1.32-3.236 1.32zm14.313 2.112V4.34l4.263 5.455h.606l4.165-5.436v9.484h2.366V.156h-2.073l-4.712 6.355-4.889-6.355h-2.092v13.688h2.366z" fill="#000"/>
                    </Svg>
                </Text>

                <TouchableOpacity style={styles.profileButton} onPress={() => {props.navigation.navigate('AuthComponent')}}>
                    <Svg width={16} height={22} viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M16 20.5a1 1 0 11-2 0v-1a3 3 0 00-3-3H5a3 3 0 00-3 3v1a1 1 0 11-2 0v-1a5 5 0 015-5h6a5 5 0 015 5v1zm-8-8A6 6 0 118 .499 6 6 0 018 12.5zm0-2a4 4 0 100-8 4 4 0 000 8z" fill="#6C7694"/>
                    </Svg>
                </TouchableOpacity>

            </View>

            <ScrollView style={{width: '100%'}}>

                <View style={styles.searchBlockWrapper}>

                    <View style={styles.categoryItemWrapper}>

                        <TouchableOpacity style={styles.categoryItem}>
                            <AnnouncementSvg/>
                            <Text style={styles.categoryItemText}>Объявления</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {
                                props.navigation.navigate('CatalogSelectMarkComponent')
                            }}
                            style={styles.categoryItem}
                        >
                            <CatalogSvg/>
                            <Text style={styles.categoryItemText}>Каталог</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.categoryItem}>
                            <JournalSvg/>
                            <Text style={styles.categoryItemText}>Журнал</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.categoryItem}>
                            <CompaniesSvg/>
                            <Text style={styles.categoryItemText}>Компании</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.borderFilterWrapper}>

                        <View style={styles.autoMarksWrapper}>
                            <ScrollView horizontal={true} style={styles.autoMarksScrollView}>

                                {marks.map((item, index) => {
                                    return (
                                        <TouchableOpacity key={index} style={styles.autoMarksItem}>
                                            {item.icon}
                                        </TouchableOpacity>
                                    )
                                })}

                            </ScrollView>
                        </View>

                        <View style={styles.fiktivInputWrapper}>

                            <TouchableOpacity onPress={() => {setShowPriceFilter(true)}} style={styles.fiktivInput}>
                                <Text style={styles.fiktivInputText}>Цена</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => {setShowHandFilter(true)}} style={styles.fiktivInput}>
                                <Text style={styles.fiktivInputText}>Рука</Text>
                            </TouchableOpacity>


                            <TouchableOpacity onPress={() => {setShowMileageFilter(true)}} style={styles.fiktivInput}>
                                <Text style={styles.fiktivInputText}>Пробег</Text>
                            </TouchableOpacity>

                        </View>

                        <View style={styles.searchBlueButtonWrapper}>

                            <TouchableOpacity
                                onPress={() => {
                                    props.navigation.navigate('SearchComponent')
                                }}
                                style={styles.searchBlueButton}
                            >
                                <Text style={styles.searchBlueButtonText}>Показать 1325 объявлений</Text>
                            </TouchableOpacity>

                        </View>

                    </View>

                </View>
                <View style={styles.autoTypesWrapper}>

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
                <View style={styles.lastSearchWrapper}>

                    <View style={styles.lastSearchTop}>

                        <Text style={styles.lastSearchTopTitle}>
                            Последние поиски
                        </Text>

                        <View style={styles.lastSearchTopButtonWrapper}>

                            <TouchableOpacity
                                onPress={() => {
                                    setLastSearchActiveButton(0)
                                }}
                                style={styles.lastSearchTopButton}
                            >
                                <Text style={[styles.lastSearchTopButtonText, last_search_active_button == 0 && styles.lastSearchTopButtonTextActive ]}>Искали ранее</Text>

                                {last_search_active_button == 0 && <View style={styles.lastSearchTopButtonActiveLine}></View>}

                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => {
                                    setLastSearchActiveButton(1)
                                }}
                                style={styles.lastSearchTopButton}
                            >
                                <Text style={[styles.lastSearchTopButtonText, last_search_active_button == 1 && styles.lastSearchTopButtonTextActive]}>Избранные</Text>

                                {last_search_active_button == 1 && <View style={styles.lastSearchTopButtonActiveLine}></View>}

                            </TouchableOpacity>

                        </View>

                    </View>


                    <View style={styles.lastSearchBottom}>

                        {/*<View style={styles.autoMarksWrapper}>*/}

                        {last_search_active_button == 0 &&

                            <ScrollView horizontal={true} style={{width: '100%'}}>

                            {searched_before.map((item, index) => {
                                return (
                                    <TouchableOpacity key={index} style={styles.lastSearchBottomScrollItem}>

                                        <View style={styles.lastSearchBottomScrollItemLeft}>
                                            {item.icon}
                                        </View>

                                        <View style={styles.lastSearchBottomScrollItemRight}>
                                            <Text style={styles.lastSearchBottomScrollItemRightTopText}>{item.title}</Text>
                                            <Text style={styles.lastSearchBottomScrollItemRightBottomText}>5 параметров</Text>
                                        </View>

                                    </TouchableOpacity>
                                )
                            })}

                        </ScrollView>

                        }

                        {last_search_active_button == 1 &&

                            <ScrollView horizontal={true} style={{width: '100%'}}>

                            {favorites.map((item, index) => {
                                return (
                                    <TouchableOpacity key={index} style={styles.lastSearchBottomScrollItem}>

                                        <View style={styles.lastSearchBottomScrollItemLeft}>
                                            {item.icon}
                                        </View>

                                        <View style={styles.lastSearchBottomScrollItemRight}>
                                            <Text style={styles.lastSearchBottomScrollItemRightTopText}>{item.title}</Text>
                                            <Text style={styles.lastSearchBottomScrollItemRightBottomText}>5 параметров</Text>
                                        </View>

                                    </TouchableOpacity>
                                )
                            })}

                        </ScrollView>

                        }


                        {/*</View>*/}

                    </View>

                </View>

                <NewADSBlock data={new_ads}/>
                <SeeADSBlock data={see_ads}/>
                <CompaniesBlock data={companies}/>
                <ServicesBlock data={services}/>
                <JournaleBlock data={journale} menus={journal_menus}/>
                <BecomePartnerBlock/>
                <NewAutosBlock/>
                <CatalogSearchBlock data={catalog_search_autos_types} />

            </ScrollView>

            <NavigationBottomMenu navigation={props.navigation} active_page={''}/>


            {/*  Filters - start */}


            {show_price_filter &&
                <PriceFilter show={show_price_filter} onChange={() => {setShowPriceFilter(!show_price_filter)}}/>
            }
            {show_hand_filter &&
                <HandFilter show={show_hand_filter} onChange={() => {setShowHandFilter(!show_hand_filter)}}/>
            }

            {show_mileage_filter &&
                <MileageFilter show={show_mileage_filter} onChange={() => {setShowMileageFilter(!show_mileage_filter)}}/>
            }


            {/*  Filters - end*/}
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
        paddingHorizontal: 17,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    changeLanguageButton: {

    },
    appName: {

    },
    profileButton: {

    },
    searchBlockWrapper: {
        width: '100%',
        paddingHorizontal: 16,
        paddingTop: 15
    },

    categoryItemWrapper: {
        width: '100%',
        marginBottom: 24,
        flexDirection: 'row',
        // backgroundColor:'blue',
        justifyContent:'space-between'
    },
    categoryItem: {
        alignItems:'center'
    },
    categoryItemText: {
        fontSize: 12,
        color: '#091334',
        marginTop: 8
    },
    borderFilterWrapper: {
        width: '100%',
        paddingVertical: 16,
        backgroundColor:'white',
        borderRadius: 8,
        marginBottom: 24,
        borderColor: 'silver',
        borderWidth: 1
    },
    autoMarksWrapper: {
        width:'100%',
        paddingLeft: 16,
        minHeight: 36,
        // backgroundColor:'blue',
        marginBottom: 20
    },
    autoMarksScrollView: {
        width: '100%',
        // backgroundColor: 'green'
    },
    autoMarksItem: {
        marginRight: 24
    },

    fiktivInputWrapper: {
        width: '100%',
        paddingHorizontal: 10,
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom: 16
    },
    fiktivInput: {
        flex:1,
        height: 48,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 6,
        borderWidth: 1,
        borderColor:'#C4C8D4',
        marginHorizontal: 4
    },
    fiktivInputText: {
      color: '#6C7694',
      fontSize:16
    },
    searchBlueButtonWrapper: {
        width: '100%',
        paddingHorizontal:16,
    },
    searchBlueButton: {
        width: '100%',
        height: 44,
        backgroundColor:'#2B65EE',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 6
    },
    searchBlueButtonText: {
        color:'white',
        fontSize: 16
    },
    autoTypesWrapper: {
        width: '100%',
        paddingLeft: 16,
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

    lastSearchWrapper: {
        width: '100%',
        marginTop: 24
    },

    lastSearchTop: {
        width: '100%',
        paddingHorizontal: 16,
        marginBottom: 24
    },
    lastSearchTopTitle: {
        color:'#091334',
        fontSize: 22,
        fontWeight:'bold',
        marginBottom: 20
    },
    lastSearchTopButtonWrapper: {
        width: '100%',
        height: 36,
        // backgroundColor:'silver',
        // marginBottom: 24,
        flexDirection:'row'
    },

    lastSearchTopButton: {
        flex: 1,
        borderBottomWidth:1,
        borderBottomColor: 'white',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    lastSearchTopButtonText: {
        color: '#6C7693',
        fontSize: 16
    },

    lastSearchTopButtonActive: {

    },
    lastSearchTopButtonTextActive: {
        color: '#091334'
    },
    lastSearchTopButtonActiveLine: {
        width: '100%',
        height: 3,
        backgroundColor:'#2B65EE',
        position:'absolute',
        bottom: -1,
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2
    },




    lastSearchBottom: {
        width: '100%',
        height: 88,
        // backgroundColor: 'yellow',
        paddingLeft: 16
    },

    lastSearchBottomScrollItem: {
        width: 226,
        height: 88,
        backgroundColor:'white',
        marginRight: 16,
        flexDirection:'row',
        borderRadius:8,
        overflow:'hidden',
        borderColor:'silver',
        borderWidth: 1
    },
    lastSearchBottomScrollItemLeft: {
        width: 80,
        height: '100%',
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'
    },
    lastSearchBottomScrollItemRight: {
        flex:1,
        height: '100%',
        // backgroundColor:'green',
        paddingVertical: 16
    },
    lastSearchBottomScrollItemRightTopText: {
        fontSize: 16,
        fontWeight: 'bold',
        color:'#1548C1',
        marginBottom:8
    },
    lastSearchBottomScrollItemRightBottomText: {
        color:'#091334',
        fontSize: 14
    },
})
