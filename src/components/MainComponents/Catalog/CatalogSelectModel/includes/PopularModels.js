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

import {useSelector, useDispatch, } from 'react-redux';
import {openModelPopUpInCatalogSelectModelPage} from '../../../../../redux/actions/actions';

import {
    SafeAreaView,
    SafeAreaProvider,
    SafeAreaInsetsContext,
    useSafeAreaInsets,
    initialWindowMetrics,
} from 'react-native-safe-area-context';

// import SpecialOfferBlock from './includes/SpecialOffer';
// import NavigationBottomMenu from '../../../includes/NavigationBottomMenu';


import Svg, {Defs, G, Path, Rect, Circle, ClipPath} from "react-native-svg";
import {useEffect, useState} from "react";



export default function App(props)
{
    // Redux
    const {is_open_marki_popup_in_catalog_select_mark_page} = useSelector(state => state.justDriveReducer);
    const dispatch = useDispatch();
    const handleOpenModelPopUpInCatalogSelectModelPage = () => dispatch(openModelPopUpInCatalogSelectModelPage());


    const [active_top_tab1, setActiveTopTab1] = useState(true);
    const [active_top_tab2, setActiveTopTab2] = useState(false);
    const [active_top_tab3, setActiveTopTab3] = useState(false);

    const [popular_marks_items, setPopularMarksList] = useState([
        { title: 'C40 Recharge',},
        { title: 'V60 Super Country31',},
        { title: 'S60',},
        { title: 'V90',},
        { title: 'S90',},
        { title: 'V90 Cross Country...',},
        { title: 'V90 Cross Country...',},
        { title: 'V120',},
        { title: 'C40 Recharge',},
        { title: 'V60 Super Country31',},
        { title: 'S990',},
        { title: 'Cross Country',},
        { title: 'C40 Recharge',},
        { title: 'V60 Super Country31',},
        { title: 'C40 Recharge',},
        { title: 'V60 Super Country31',},
        { title: 'V60',},
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
                        <TouchableOpacity key={index} style={styles.popularListItem}>
                            <Text style={styles.popularListItemText}>{item.title}</Text>
                        </TouchableOpacity>
                    )

                })}
            </View>

            <TouchableOpacity style={styles.openButton} onPress={() => {handleOpenModelPopUpInCatalogSelectModelPage()}}>
                <Text style={styles.openButtonText}>Показать все модели</Text>
            </TouchableOpacity>

            <View style={{width: '100%', height: 1, backgroundColor:'#f1f1f1', marginTop: 16}}>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    popularWrapper: {
        width: '100%',
        minHeight:15,
        paddingHorizontal: 16,
    },
    title: {
        color: '#091334',
        fontSize: 16,
        marginBottom: 16
    },
    popularList: {
        width: '100%',
        flexWrap:'wrap',
        flexDirection:'row'
    },
    popularListItem: {
        width: '48%',
        marginBottom:16
    },
    popularListItemText: {
        color: '#2B65EE',
        fontSize: 16
    },
    openButton: {
        width:'100%',
        height: 44,
        borderColor:'#C4C8D4',
        borderWidth: 1,
        borderRadius: 6,
        justifyContent:'center',
        alignItems:'center',
        marginTop:8
    },
    openButtonText: {
        color: '#091334',
        fontSize:16
    },


})
