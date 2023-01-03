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
import BlueokSvg from "../../../../../assets/Svg/search_component/BlueokSvg";
import GlobusSvg from "../../../../../assets/Svg/search_component/GlobusSvg";
import BlueChatIconSvg from "../../../../../assets/Svg/BlueChatIcon";
import PhoneSvg from "../../../../../assets/Svg/PhoneSvg";

export default function App(props) {


    useEffect(() => {


    }, []);

    return (
        <View style={styles.footer}>
            <View style={styles.footerTop}>

                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <BlueokSvg style={{marginRight:8}}/>
                    <Text>Lex Moritz</Text>
                </View>

                <Svg style={{marginHorizontal:10}} width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Rect width={4} height={4} rx={2} fill="#C4C8D4" />
                </Svg>

                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <GlobusSvg style={{marginRight:8}}/>
                    <Text>Ив Ру Анг</Text>
                </View>
            </View>

            <View style={styles.footerBottom}>

                <TouchableOpacity style={styles.chatButton}>
                    <BlueChatIconSvg/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.blueButton}>
                    <PhoneSvg/>
                    <Text style={styles.blueButtonText}>Показать телефон</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        minHeight: 106,
        backgroundColor:'white',
        paddingHorizontal:16,
        paddingTop:8,
        paddingBottom: 14,
        borderTopWidth:1,
        borderTopColor: '#F0F1F4'
    },
    footerTop: {
        width: '100%',
        flexDirection:'row',
        alignItems:'center',
        marginBottom: 12
    },

    footerBottom: {
        width: '100%',
        flexDirection:'row',
        alignItems:'center'
    },

    chatButton: {
        width: 48,
        height: 48,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#E5F2FF',
        borderRadius: 6
    },
    blueButton: {
        flex:1,
        height: 48,
        backgroundColor:'#2B65EE',
        marginLeft: 8,
        borderRadius: 6,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',

    },
    blueButtonText: {
        fontSize: 16,
        color: 'white',
        lineHeight: 24,
        marginLeft: 8,

    },

})
