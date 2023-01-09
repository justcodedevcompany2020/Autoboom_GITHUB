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
// import { useState } from 'react';
import OpenSelectMarkSvg from '../../../../../assets/Svg/OpenSelectMarkSvg';
import Svg, { Defs, G, Path, Rect, Circle, ClipPath } from "react-native-svg";
import SliderAndOptions from './includes/SliderAndOptions'
import NavigationBottomMenu from '../../../includes/NavigationBottomMenu'
import PriceStatistics from './includes/PriceStatistics'
import ColorSetDiv from './includes/ColorsSetDiv'
import Packages from './includes/Packages'
import Rating from './includes/Rating'
import PayYourCarBlock from './includes/PayYourCarBlock'
import Description from './includes/Description'
import SpecialOfferBlock from './includes/SpecialOffer'
import BecomePartner from '../../includes/BecomePartner'
import DillersBlock from './includes/DillersBlock'
import JournalBlock from './includes/JournalBlock'
import AdBanner from './includes/AdBanner'
import OptionPackages from './includes/OptionPackeges'
import DillerChangeBlock from './includes/DillerChangeBlock'
import DillerChangePopup from './Popup/DillerChangePopup'
import { openSelectDonePopUpInCloseSelectDonePage } from '../../../../redux/actions/actions'
import { useSelector, useDispatch, } from 'react-redux';

const descriptionData = [
    {
        id: 1,
        title: 'Главное',
        data: [
            { id: 1, firstText: 'Коробка передач', secondText: 'Автомат' },
            { id: 2, firstText: 'Количество передач', secondText: '8' },
            { id: 3, firstText: 'Привод', secondText: '4х4' },
            { id: 4, firstText: 'Максимальная скорость', secondText: '180 км/ч' },
            { id: 5, firstText: 'Разгон до 100', secondText: '6.9 с' }
        ]
    },
    {
        id: 2,
        title: 'Размеры',
        data: [
            { id: 1, firstText: 'Длина', secondText: '4784 мм' },
            { id: 2, firstText: 'Ширина', secondText: '1555 мм' },
            { id: 3, firstText: 'Высота', secondText: '1833мм' },
            { id: 4, firstText: 'Колесная база', secondText: '4784 мм' },
            { id: 5, firstText: 'Ширина передней колеи', secondText: '1833 мм' },
            { id: 6, firstText: 'Ширина задней колеи', secondText: '1833 мм' },
            { id: 7, firstText: 'Объем багажника, мин.', secondText: '529 л' },
            { id: 8, firstText: 'Объем багажника, макс.', secondText: '144 л' },
            { id: 9, firstText: 'Диаметр разворота', secondText: '11.3 м' },
            { id: 10, firstText: 'Размер колес', secondText: '215/55 Диски R18' }
        ]
    },
    {
        id: 2,
        title: 'Топливо',
        data: [
            { id: 1, firstText: 'Длина', secondText: '4784 мм' },
            { id: 2, firstText: 'Ширина', secondText: '1555 мм' },
            { id: 3, firstText: 'Высота', secondText: '1833мм' },
            { id: 4, firstText: 'Колесная база', secondText: '4784 мм' },
            { id: 5, firstText: 'Ширина передней колеи', secondText: '1833 мм' },
            { id: 6, firstText: 'Ширина задней колеи', secondText: '1833 мм' },
            { id: 7, firstText: 'Объем багажника, мин.', secondText: '529 л' },
            { id: 8, firstText: 'Объем багажника, макс.', secondText: '144 л' },
            { id: 9, firstText: 'Диаметр разворота', secondText: '11.3 м' },
            { id: 10, firstText: 'Размер колес', secondText: '215/55 Диски R18' }
        ]
    },
    {
        id: 2,
        title: 'Двигатель',
        data: [
            { id: 1, firstText: 'Максимальная мощность', secondText: '250 л.с. (184 кВт) при 5400-5700 об/мин' },
            { id: 2, firstText: 'Максимальный крутящий момент, НМ', secondText: '357 Н⋅м при 1800 – 4800 об/мин' },
        ]
    },
    {
        id: 2,
        title: 'Мощность',
        data: [
            { id: 1, firstText: 'Максимальная мощность', secondText: '250 л.с. (184 кВт) при 5400-5700 об/мин' },
            { id: 2, firstText: 'Максимальный крутящий момент, НМ', secondText: '357 Н⋅м при 1800 – 4800 об/мин' },
        ]
    },
    {
        id: 2,
        title: 'Подвеска и тормоза',
        data: [
            { id: 1, firstText: 'Максимальная мощность', secondText: '250 л.с. (184 кВт) при 5400-5700 об/мин' },
            { id: 2, firstText: 'Максимальный крутящий момент, НМ', secondText: '357 Н⋅м при 1800 – 4800 об/мин' },
        ]
    },
]



export default function App(props) {

    const [special_offers, setSpecialOffers] = React.useState([
        { image: require('../../../../../assets/images/car_photo.png'), title: 'Mercedes-Benz S c...', year: '2014', mileage: '142 000', price: '829 000' },
        { image: require('../../../../../assets/images/car_photo.png'), title: 'Mercedes-Benz S c...', year: '2014', mileage: '142 000', price: '829 000' },
        { image: require('../../../../../assets/images/car_photo.png'), title: 'Mercedes-Benz S c...', year: '2014', mileage: '142 000', price: '829 000' },
        { image: require('../../../../../assets/images/car_photo.png'), title: 'Mercedes-Benz S c...', year: '2014', mileage: '142 000', price: '829 000' },
        { image: require('../../../../../assets/images/car_photo.png'), title: 'Mercedes-Benz S c...', year: '2014', mileage: '142 000', price: '829 000' },
        { image: require('../../../../../assets/images/car_photo.png'), title: 'Mercedes-Benz S c...', year: '2014', mileage: '142 000', price: '829 000' },
    ]);

    const [journal_data, setJournalData] = React.useState([
        { image: require('../../../../../assets/images/car_photo.png'), title: 'Kia Picanto. Practical, affordable and compact vehicle', description: 'Well-made, well-equipped, practical and affordable Korean compact car. History of generations and distinctive features of modern models.' },
        { image: require('../../../../../assets/images/car_photo.png'), title: 'Kia Optima. Korean bestseller', description: 'Korean-inspired premium class. A popular car competing with the best European cars. Description, interesting technical characteristics. A brief history of generations and modern models.' },
        { image: require('../../../../../assets/images/car_photo.png'), title: 'Kia Picanto. Practical, affordable and compact vehicle', description: 'Well-made, well-equipped, practical and affordable Korean compact car. History of generations and distinctive features of modern models.' },
    ]);

    const { is_open_select_done_popup_in_catalog_select_done_page } = useSelector(state => state.justDriveReducer);
    const dispatch = useDispatch();
    const handleOpenSelectDonePopUpInCloseSelectDonePage = () => dispatch(openSelectDonePopUpInCloseSelectDonePage());


    if (is_open_select_done_popup_in_catalog_select_done_page) {
        return (
            <DillerChangePopup />
        )
    }



    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.header}>

                <View style={[styles.headerItem, styles.flex1]}>
                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate('CatalogSelectKomplektaciaComponent')
                        }}
                        style={{}}
                    >
                        <Svg width={43} height={44} viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M25 15l-6.93 6.93a.1.1 0 000 .14L25 29" stroke="#091334" strokeWidth={2} strokeLinecap="round" />
                        </Svg>
                    </TouchableOpacity>
                </View>

                <View style={[styles.headerItem, styles.flex2]}>
                    <Text style={styles.appName}>
                        Каталог
                    </Text>
                </View>

                <View style={[styles.headerItem, styles.flex1, styles.headerItemRight]}>

                    <TouchableOpacity style={{}}>
                        <OpenSelectMarkSvg />
                    </TouchableOpacity>

                </View>

            </View>
            <ScrollView style={{ width: '100%', flex: 1 }}>

                <View style={{ width: '100%', paddingHorizontal: 16, marginBottom: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold', lineHeight: 28, width: 300 }}>Ауди SQ8 Спортбэк e-tron I рестайлинг кроссовер купе, 02.2023 — н.в.</Text>
                    <Image
                        style={{ width: 44, height: 44 }}
                        source={require('../../../../../assets/images/audi.png')} />
                </View>


                <View style={styles.inputWrapper}>

                    <View style={styles.inputWrapperContainer}>

                        <Text style={styles.inputWrapperContainerTitle}>Модель</Text>

                        <View style={styles.inputWrapperContainer2}>
                            <Text style={styles.inputWrapperContainer2Text}>SQ8</Text>
                        </View>

                    </View>

                    <View style={styles.inputWrapperContainer}>
                        <Text style={styles.inputWrapperContainerTitle}>Поколение</Text>
                        <TouchableOpacity
                            // onPress={() => {handleOpenModifikaciaPopUpInCatalogSelectModifikaciaPage()}}
                            style={styles.inputWrapperContainer2}
                        >
                            <Text style={[styles.inputWrapperContainer2Text]}>I рестайлинг кр...</Text>
                        </TouchableOpacity>
                    </View>



                    <View style={{ width: '48%', marginTop: 12 }}>
                        <Text style={styles.inputWrapperContainerTitle}>Модификация</Text>
                        <TouchableOpacity
                            // onPress={() => {handleOpenKomplektaciaPopUpInCatalogSelectKomplektaciaPage()}}
                            style={[styles.inputWrapperContainer2, { flexDirection: 'row', justifyContent: 'space-between' }]}
                        >
                            <Text style={[styles.inputWrapperContainer2Text]}>1.5 T2 AT</Text>

                        </TouchableOpacity>
                    </View>

                    <View style={{ width: '48%', marginTop: 12 }}>
                        <Text style={styles.inputWrapperContainerTitle}>Комплектация</Text>
                        <TouchableOpacity
                            style={[styles.inputWrapperContainer2, { flexDirection: 'row', justifyContent: 'space-between' }]}
                        >
                            <Text style={[styles.inputWrapperContainer2Text]}>Core</Text>

                        </TouchableOpacity>
                    </View>
                </View>
                <SliderAndOptions />
                <View style={{ marginTop: 15, borderTopColor: '#E2E4EA', borderTopWidth: 1, width: '90%', padding: 15, alignSelf: 'center' }}></View>
                <PriceStatistics />
                <ColorSetDiv />
                <Packages />
                <Rating />
                <OptionPackages />
                <View style={{ marginBottom: 25 }} >
                    {
                        descriptionData.map((value, index) => {
                            return (
                                <Description key={index} title={value.title} data={value.data} />
                            )
                        })
                    }

                </View>
                <PayYourCarBlock />
                <SpecialOfferBlock data={special_offers} />
                <BecomePartner />
                <DillersBlock />
                <JournalBlock data={journal_data} />
                <AdBanner
                    textFirst={'Купить Ауди в Израиле'}
                    textSecond={'Салоны дилеров '}
                    numberFirst={'32'}
                    numberSecond={'432'}
                    textThird={'Ремонт и обслуживание '}
                />
                <DillerChangeBlock onPress={handleOpenSelectDonePopUpInCloseSelectDonePage} />
            </ScrollView>
            <NavigationBottomMenu navigation={props.navigation} active_page={''} />
        </SafeAreaView>
    )
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#f1f1f1',
        marginBottom: 20
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
        justifyContent: 'center',
    },
    headerItemRight: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
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

    autoTypesWrapper: {
        width: '100%',
        paddingLeft: 16,
        marginBottom: 24
    },
    autoTypesScrollView: {
        width: '100%',
    },
    autoTypesItem: {
        width: 144,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
        backgroundColor: '#F0F1F4',
        borderRadius: 8
    },
    autoTypesTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20
    },

    inputWrapper: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        paddingHorizontal: 16,
        marginBottom: 16
    },
    inputWrapperContainer: {
        width: '48%',
        minHeight: 30,
    },
    inputWrapperContainerTitle: {
        color: '#6C7694',
        fontSize: 14,
        marginBottom: 8
    },
    inputWrapperContainer2: {
        width: '100%',
        height: 44,
        borderColor: '#C4C8D4',
        borderWidth: 1,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 10
    },
    inputWrapperContainer2Text: {
        color: '#091334',
        fontSize: 16
    },

})