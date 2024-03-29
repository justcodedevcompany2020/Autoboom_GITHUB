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
import { openModelPopUpInCatalogSelectModelPage } from '../../../../../redux/actions/actions';

import { useEffect, useState } from "react";



export default function App(props) {
    // Redux
    const { is_open_marki_popup_in_catalog_select_mark_page } = useSelector(state => state.justDriveReducer);
    const dispatch = useDispatch();
    const handleOpenModelPopUpInCatalogSelectModelPage = () => dispatch(openModelPopUpInCatalogSelectModelPage());


    const [active_top_tab1, setActiveTopTab1] = useState(true);
    const [active_top_tab2, setActiveTopTab2] = useState(false);
    const [active_top_tab3, setActiveTopTab3] = useState(false);

    const [popular_marks_items, setPopularMarksList] = useState([
        { title: 'C40 Recharge', },
        { title: 'V60 Super Country31', },
        { title: 'S60', },
        { title: 'V90', },
        { title: 'S90', },
        { title: 'V90 Cross Country...' }
    ]);

    const [show_sort_popoup, setSortPopup] = useState(false)

    useEffect(() => {

    }, []);



    return (
        <View style={styles.popularWrapper}>
            <View style={styles.popularHeader} >
                <Text style={styles.boldText} >Ауди</Text>
                <Image
                    style={{ width: 44, height: 44 }}
                    source={require('../../../../../../assets/images/audi.png')} />
            </View>

            <Text style={styles.title}>
                Популярные марки
            </Text>

            <View style={styles.popularList}>

                {popular_marks_items.map((item, index) => {

                    return (
                        <TouchableOpacity onPress={() => { props.navigation.navigate('JournalSinglePage') }} key={index} style={styles.popularListItem}>
                            <Text style={styles.popularListItemText}>{item.title}</Text>
                        </TouchableOpacity>
                    )

                })}
            </View>

            <TouchableOpacity style={styles.openButton} onPress={() => { handleOpenModelPopUpInCatalogSelectModelPage() }}>
                <Text style={styles.openButtonText}>Показать все модели</Text>
            </TouchableOpacity>

            <View style={{ width: '100%', height: 1, backgroundColor: '#f1f1f1', marginTop: 16 }}>

            </View>
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
        fontSize: 16,
        marginBottom: 16
    },
    popularList: {
        width: '100%',
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    popularListItem: {
        width: '48%',
        marginBottom: 16
    },
    popularListItemText: {
        color: '#2B65EE',
        fontSize: 16
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
    boldText: {
        fontSize: 24,
        fontWeight: '700',
        color: '#091334'
    },
    popularHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})
