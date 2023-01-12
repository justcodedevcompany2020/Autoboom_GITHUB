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

import { useSelector, useDispatch, } from 'react-redux';
import { openMarkiPopUpInCatalogSelectMarkPage } from '../../../../../redux/actions/actions';

import {
    SafeAreaView,
    SafeAreaProvider,
    SafeAreaInsetsContext,
    useSafeAreaInsets,
    initialWindowMetrics,
} from 'react-native-safe-area-context';

// import SpecialOfferBlock from './includes/SpecialOffer';
// import NavigationBottomMenu from '../../../includes/NavigationBottomMenu';


import Svg, { Defs, G, Path, Rect, Circle, ClipPath } from "react-native-svg";
import { useEffect, useState } from "react";



export default function App(props) {
    // Redux
    const { is_open_marki_popup_in_catalog_select_mark_page } = useSelector(state => state.justDriveReducer);
    const dispatch = useDispatch();
    const handleOpenMarkiPopUpInCatalogSelectMarkPage = () => dispatch(openMarkiPopUpInCatalogSelectMarkPage());


    const [active_top_tab1, setActiveTopTab1] = useState(true);
    const [active_top_tab2, setActiveTopTab2] = useState(false);
    const [active_top_tab3, setActiveTopTab3] = useState(false);

    const [popular_marks_items, setPopularMarksList] = useState([
        { title: 'Ауди', },
        { title: 'Митсубиши', },
        { title: 'Фольксваген', },
        { title: 'Вольво', },
        { title: 'Дачия', },
        { title: 'Мерседес', },
        { title: 'Дачия', },
        { title: 'Ситроен', },
        { title: 'Джип', },
        { title: 'Ситроен', },
        { title: 'Ауди', },
        { title: 'Митсубиши', },
        { title: 'Джип', },
        { title: 'Кадиллак', },
        { title: 'Дачия', },
        { title: 'Фольксваген', },
        { title: 'Ниссан', },
        { title: 'Митсубиши', },
        { title: 'Фольксваген', },
        { title: 'Митсубиши', },
    ]);

    const [show_sort_popoup, setSortPopup] = useState(false)

    useEffect(() => {

    }, []);



    return (
        <View style={styles.popularWrapper}>

            <Text style={styles.title}>
                Популярные марки
            </Text>


            <View style={styles.popularList}>

                {popular_marks_items.map((item, index) => {

                    return (
                        <TouchableOpacity
                            onPress={() => {
                                props.navigation.navigate('CatalogSelectModelComponent')
                            }}
                            key={index} style={styles.popularListItem}
                        >
                            <Text style={styles.popularListItemText}>{item.title}</Text>
                        </TouchableOpacity>
                    )

                })}
            </View>

            <TouchableOpacity style={styles.openButton} onPress={() => { handleOpenMarkiPopUpInCatalogSelectMarkPage() }}>
                <Text style={styles.openButtonText}>Показать все марки</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({

    popularWrapper: {
        width: '100%',
        minHeight: 15,
        paddingHorizontal: 16,
    },
    title: {
        color: '#091334',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 16
    },
    popularList: {
        width: '100%',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    popularListItem: {
        width: 100,
        marginBottom: 16,
        marginLeft:5
        // alignItems:'center',
        // justifyContent:'center'
    },
    popularListItemText: {
        color: '#2B65EE',
        fontSize: 16,
        textAlign: 'left',
        // paddingLeft:20
    },
    openButton: {
        width: '100%',
        height: 44,
        borderColor: '#C4C8D4',
        borderWidth: 1,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8
    },
    openButtonText: {
        color: '#091334',
        fontSize: 16
    },


})
