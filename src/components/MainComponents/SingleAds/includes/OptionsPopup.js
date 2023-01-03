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
    Slider,
    TextInput
} from 'react-native';


import {
    SafeAreaView,
    SafeAreaProvider,
    SafeAreaInsetsContext,
    useSafeAreaInsets,
    initialWindowMetrics,
} from 'react-native-safe-area-context';
// import DropShadow from "react-native-drop-shadow";

import Svg, {Defs, G, Path, Rect, Circle, ClipPath} from "react-native-svg";
import {useEffect, useState} from "react";
import CloseSvg    from '../../../../../assets/Svg/CloseSvg';
import SelectedSvg from '../../../../../assets/Svg/SelectedSvg';

export default function App(props) {

    const [activeSort, setActiveSort] = useState(null);
    const [show_sort_popoup, setSortPopup] = useState(true)


    const onChangeActiveSort = async (sort) => {
        setActiveSort(sort)
    }


    useEffect(() => {

        console.log('PriceFilter component loaded')

    }, []);

    if (show_sort_popoup)
    {
        return (
            <View style={styles.mainWrapper}>
                <TouchableOpacity onPress={() => {setSortPopup(false); props.onChange(); }} style={styles.closeSpaceButton}>

                </TouchableOpacity>

                <View style={styles.contentWrapper}>

                    <View style={styles.header}>
                        <Text style={styles.mainTitle}>Тойота Сиенна III реста...</Text>
                        <TouchableOpacity onPress={() => {props.onChange();setSortPopup(false)}}>
                            <CloseSvg/>
                        </TouchableOpacity>
                    </View>

                    <ScrollView style={{width: '100%', flex:1}}>

                        <View style={styles.centerContentWrapper}>

                            <TouchableOpacity   style={styles.item}>
                                <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><Path d="M4 6.135c3.5-4.5 8 1 8 1s4.5-5.5 8-1c4 5-5 11.5-8 13.5-3-2-12-8.5-8-13.5z" stroke="#091334" strokeWidth={2}/></Svg>
                                <Text style={styles.itemText}>Сохранить в избранное</Text>
                            </TouchableOpacity>

                            <TouchableOpacity   style={styles.item}>
                                <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <G clipPath="url(#clip0_10820_32430)" fill="#091334"><Rect x={11.0939} y={1} width={2} height={22} rx={1} /><Path d="M20.52 11.962a.3.3 0 01.3-.3h2.38a.3.3 0 01.3.3v.943a.3.3 0 01-.17.27l-2.38 1.144a.3.3 0 01-.43-.27v-2.087zM3.48 11.962a.3.3 0 00-.3-.3H.8a.3.3 0 00-.3.3v.943a.3.3 0 00.17.27l2.38 1.144a.3.3 0 00.43-.27v-2.087z" /><Path d="M7.87 3.8A5.05 5.05 0 002.91 7.893l-.867 4.493v7.138a1.65 1.65 0 103.298 0v-.7H9.3a.5.5 0 00.5-.5v-1.1a.5.5 0 00-.5-.5H4.144v-4.137l.83-4.296A2.95 2.95 0 017.87 5.9H9.3a.5.5 0 00.5-.5V4.3a.5.5 0 00-.5-.5H7.87zM16.474 3.8a5.05 5.05 0 014.959 4.092l.867 4.494v7.137a1.65 1.65 0 11-3.298 0v-.7h-3.958a.5.5 0 01-.5-.5v-1.1a.5.5 0 01.5-.5H20.2v-4.136l-.83-4.296A2.95 2.95 0 0016.474 5.9h-1.43a.5.5 0 01-.5-.5V4.3a.5.5 0 01.5-.5h1.43z" /></G><Defs><ClipPath id="clip0_10820_32430"><Path fill="#fff" transform="translate(.5 1)" d="M0 0H23.0001V22H0z"/></ClipPath></Defs>
                                </Svg>
                                <Text style={styles.itemText}>Добавить к сравнению</Text>
                            </TouchableOpacity>

                            <TouchableOpacity   style={styles.item}>
                                <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <G clipPath="url(#clip0_10820_32454)"><Path d="M12 3c4.82 0 8.927 2.999 10.5 7.203a5.142 5.142 0 010 3.594C20.928 18.001 16.82 21 12 21s-8.927-2.999-10.5-7.203a5.142 5.142 0 010-3.594C3.072 5.999 7.18 3 12 3zm0 16a9.253 9.253 0 005.707-1.965 9.04 9.04 0 002.402-2.862 4.638 4.638 0 00-.003-4.345 9.039 9.039 0 00-2.402-2.858A9.253 9.253 0 0012 5.009 9.253 9.253 0 006.296 6.97a9.04 9.04 0 00-2.403 2.858 4.638 4.638 0 00-.002 4.345 9.039 9.039 0 002.402 2.862A9.252 9.252 0 0012 19zm0-2.5a4.614 4.614 0 01-3.235-1.318A4.463 4.463 0 017.425 12c0-1.194.482-2.338 1.34-3.182A4.614 4.614 0 0112 7.5c1.213 0 2.377.474 3.235 1.318A4.463 4.463 0 0116.575 12a4.463 4.463 0 01-1.34 3.182A4.614 4.614 0 0112 16.5zm0-2c.674 0 1.32-.263 1.797-.732A2.48 2.48 0 0014.542 12a2.48 2.48 0 00-.745-1.768A2.563 2.563 0 0012 9.5c-.674 0-1.32.263-1.797.732A2.48 2.48 0 009.458 12c0 .663.268 1.299.745 1.768A2.564 2.564 0 0012 14.5z" fill="#091334"/></G>
                                    <Defs><ClipPath id="clip0_10820_32454"><Path fill="#fff" transform="translate(1 3)" d="M0 0H22V18H0z" /></ClipPath></Defs>
                                </Svg>
                                <Text style={styles.itemText}>Скрыть объявление</Text>
                            </TouchableOpacity>


                            <TouchableOpacity   style={styles.item}>
                                <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M13.62 17.022l-4.199-2.29a4 4 0 110-5.464l4.2-2.29a3.998 3.998 0 015.245-4.738 4 4 0 11-4.285 6.494l-4.2 2.29a4.006 4.006 0 010 1.953l4.199 2.29a4 4 0 11-.96 1.754v.001zM6.5 14a2 2 0 100-4 2 2 0 000 4zm11-6a2 2 0 100-4 2 2 0 000 4zM17.5 20a2 2 0 100-4 2 2 0 000 4z" fill="#091334"/>
                                </Svg>
                                <Text style={styles.itemText}>Поделиться</Text>
                            </TouchableOpacity>

                            <TouchableOpacity   style={styles.item}>
                                <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><G clipPath="url(#clip0_10820_32500)"><Rect x={10.8888} y={7.55542} width={2.22222} height={5.55556} rx={1.11111} fill="#091334"/><Rect x={10.8888} y={14.2224} width={2.22222} height={2.22222} rx={1.11111} fill="#091334"/><Circle cx={12} cy={12} r={9} stroke="#091334" strokeWidth={2} strokeLinejoin="round"/></G><Defs><ClipPath id="clip0_10820_32500"><Path fill="#fff" transform="translate(2 2)" d="M0 0H20V20H0z" /></ClipPath></Defs></Svg>
                                <Text style={styles.itemText}>Пожаловаться</Text>
                            </TouchableOpacity>


                        </View>

                    </ScrollView>


                    {/*<View style={styles.footer}>*/}

                    {/*    <TouchableOpacity style={styles.button}>*/}
                    {/*        <Text style={styles.buttonText}>Показать 325 объявлений</Text>*/}
                    {/*    </TouchableOpacity>*/}

                    {/*</View>*/}


                </View>

            </View>
        );
    }

}

const styles = StyleSheet.create({

    mainWrapper: {
        width: '100%',
        // flex:1,
        height: '100%',
        position:'absolute',
        bottom: 0,
        left: 0,
        // backgroundColor:'rgba(0,0,0,0.44)',
        zIndex: 5
    },
    closeSpaceButton: {
        flex:1 ,
        backgroundColor:'rgba(0,0,0,0.44)'
    },
    contentWrapper: {
        width: '100%',
        backgroundColor: 'white',
        position:'absolute',
        bottom: 0,
        left: 0,
        // height: 399,
        flex:1,
        maxHeight: 480,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    },
    header: {
        width: '100%',
        height: 56,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    mainTitle: {
        padding: 14,
        fontSize: 22,
        color: '#091334',
        fontWeight:'bold'
    },
    footer: {
        width: '100%',
        height: 72,
        paddingHorizontal: 16,
        justifyContent:"center",
        alignItems:'center',
        borderTopWidth:1,
        borderTopColor: '#F0F1F4'
    },
    button:{
        width: '100%',
        height: 48,
        backgroundColor:'#2B65EE',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6
    },
    buttonText: {
        color: 'white',
        fontSize: 16
    },


    inputWrapper: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 16,
        justifyContent:'space-between',
        marginBottom: 12
    },
    centerContentWrapper: {
        width: '100%',
        paddingHorizontal: 16,
    },
    item: {
        width: '100%',
        height: 56,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        borderBottomWidth: 1,
        borderBottomColor: '#F0F1F4'
    },
    itemText: {
        fontSize: 18,
        color: '#091334',
        marginLeft:12
    }
})
