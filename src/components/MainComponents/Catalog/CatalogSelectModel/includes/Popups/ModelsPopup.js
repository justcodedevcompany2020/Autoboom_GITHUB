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
    Slider, TextInput
} from 'react-native';


import {
    SafeAreaView,
    SafeAreaProvider,
    SafeAreaInsetsContext,
    useSafeAreaInsets,
    initialWindowMetrics,
} from 'react-native-safe-area-context';

import {useSelector, useDispatch, } from 'react-redux';
import {closeModelPopUpInCatalogSelectModelPage} from '../../../../../../redux/actions/actions';

import {useEffect, useState} from "react";

import CloseSvg from "../../../../../../../assets/Svg/CloseSvg";


export default function App(props)
{
    // Redux
    const {is_open_marki_popup_in_catalog_select_mark_page} = useSelector(state => state.justDriveReducer);
    const dispatch = useDispatch();
    const handleCloseModelPopUpInCatalogSelectModelPage = () => dispatch(closeModelPopUpInCatalogSelectModelPage());

    const [marks_items, setMarksItems] = useState([
        { title: 'C40 Recharge'},
        { title: 'C40 Recharge'},
        { title: 'C40 Recharge'},
        { title: 'C40 Recharge'},
        { title: 'C40 Recharge'},
        { title: 'C40 Recharge'},
        { title: 'C40 Recharge'},
        { title: 'C40 Recharge'},
        { title: 'C40 Recharge'},
        { title: 'C40 Recharge'},
        { title: 'C40 Recharge'},
        { title: 'C40 Recharge'},
    ]);


    useEffect(() => {

    }, []);

    const renderModels = () => {

        return (
            marks_items.map((item, index) => {
                return (
                    <TouchableOpacity key={index}  style={styles.newAutosWrapperItem}>
                        <View style={styles.newAutosWrapperItemImageWrapper}>
                            <Image style={styles.newAutosWrapperItemImage} source={require('../../../../../../../assets/images/new-autos2.png')}/>
                        </View>

                        <Text style={styles.title}>{item.title}</Text>

                    </TouchableOpacity>
                )
            })
        )

    }


    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.popupWrapper}>

                <View style={[styles.header]}>

                    <View style={[styles.headerItem, styles.flex1 ]}></View>

                    <View style={[styles.headerItem, styles.flex2 ]}>
                        <Text style={styles.title}>
                            Модели Ауди
                        </Text>
                    </View>

                    <View style={[styles.headerItem, styles.flex1, styles.headerItemRight ]}>

                        <TouchableOpacity
                            onPress={() => {handleCloseModelPopUpInCatalogSelectModelPage()}}
                            style={{}}
                        >
                            <CloseSvg/>
                        </TouchableOpacity>

                    </View>

                </View>

                <ScrollView style={styles.scrollBlock}>

                    <View style={styles.itemsWrapper}>
                        {renderModels()}
                    </View>

                </ScrollView>

                <View style={styles.footer}>

                    <TouchableOpacity onPress={() => {handleCloseModelPopUpInCatalogSelectModelPage()}} style={styles.closePopUpButton}>
                        <Text style={styles.closePopUpButtonText}>Закрыть</Text>
                    </TouchableOpacity>

                </View>


            </View>
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
        // paddingHorizontal: 16,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal:16  ,
        borderBottomWidth: 1,
        borderBottomColor:'silver',
        paddingRight: 0
    },
    flex1: {
        flex:1
    },
    flex2: {
        flex:3,
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

    title: {
        color: '#091334',
        fontSize: 18,
        fontWeight: 'bold'
    },
    popupWrapper: {
        position:'absolute',
        bottom: 0,
        left:0,
        width: '100%',
        flex:1,
        height: '100%',
        zIndex: 10
    },
    searchWrapper: {
        width: '100%',
        paddingTop:8,
        paddingBottom:16,
        height: 68,
    },
    searchMainWrapper: {
        width:'100%',
        paddingHorizontal:16  ,
        borderBottomWidth: 1,
        borderBottomColor:'silver',
    },
    searchInput: {
        flex:1,
        height: 44,
        borderRadius:6,
        borderColor:'#C4C8D4',
        borderWidth: 1,
        paddingVertical:10,
        paddingLeft:10,
        paddingRight: 40,
    },
    searchSvg: {
        position: 'absolute',
        top: 20,
        right: 10
    },
    footer: {
        width: '100%',
        height: 72,
        borderTopWidth:1,
        borderTopColor: '#F0F1F4',
        paddingHorizontal: 16,
        paddingTop: 10
    },
    closePopUpButton: {
        width: '100%',
        height: 48,
        borderRadius:6,
        borderColor:'#C4C8D4',
        borderWidth: 1,
        paddingVertical:10,
        paddingHorizontal:10,
        justifyContent:'center',
        alignItems:'center'
    },
    closePopUpButtonText: {
        color: '#091334',
        fontSize: 16
    },
    itemsWrapper: {
        width: '100%',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
        marginBottom: 24
    },

    newAutosWrapperItem: {
        width: '48%',
        marginBottom: 24
    },

    newAutosWrapperItemImageWrapper: {
        width: '100%',
        height: 122,
        borderRadius: 8,
        overflow:'hidden',
        marginBottom:16
    },
    newAutosWrapperItemImage: {
        width: '100%',
        height: '100%',
        resizeMode:'cover'
    },
    scrollBlock: {
        flex:1,
        width:'100%',
        paddingHorizontal:16,
        paddingTop:24
    }

})
