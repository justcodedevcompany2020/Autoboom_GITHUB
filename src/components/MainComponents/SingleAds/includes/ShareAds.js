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

// import AutoserviceSvg from '../../../../assets/Svg/companies/autoservice'
// import AutosalonSvg from '../../../../assets/Svg/companies/autosalonSvg'
import Svg, {Defs, G, Path, Rect, Circle, ClipPath} from "react-native-svg";

import {useEffect, useState} from "react";

export default function App(props) {


    useEffect(() => {


    }, []);

    return (
       <View style={styles.wrapper}>

            <View style={styles.mainWrapper}>
                <Text style={styles.mainTitle}>Отправь объявление друзьям</Text>

                <View style={styles.iconsWrapper}>

                    <TouchableOpacity>
                        <Svg width={80} height={70} viewBox="0 0 80 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Rect width={80} height={70} rx={35} fill="#F0F1F4" />
                            <Path d="M25.006 50l2.028-7.452A14.931 14.931 0 0125 35c0-8.285 6.715-15 15-15s15 6.715 15 15-6.715 15-15 15a14.93 14.93 0 01-7.545-2.032L25.006 50zm9.58-22.038a1.44 1.44 0 00-.556.15 1.939 1.939 0 00-.441.342c-.18.17-.282.316-.392.459a4.093 4.093 0 00-.847 2.517c.003.735.195 1.45.495 2.12.614 1.353 1.623 2.785 2.956 4.113.322.319.635.64.972.939a14.172 14.172 0 005.76 3.069l.854.13c.277.015.555-.006.834-.02.437-.022.863-.14 1.25-.346.248-.132.366-.198.574-.33 0 0 .064-.042.188-.135.202-.15.327-.256.495-.432.124-.129.232-.28.314-.453.117-.245.234-.711.282-1.1.037-.297.026-.459.022-.559-.006-.16-.14-.327-.285-.398l-.873-.391s-1.306-.569-2.102-.931a.746.746 0 00-.265-.062.723.723 0 00-.567.19v-.003c-.008 0-.108.086-1.193 1.4a.525.525 0 01-.552.195 2.117 2.117 0 01-.287-.099c-.186-.078-.25-.108-.378-.163l-.007-.004a9.017 9.017 0 01-2.355-1.5c-.189-.164-.364-.344-.544-.518a9.445 9.445 0 01-1.53-1.903l-.089-.142a1.39 1.39 0 01-.153-.308c-.057-.22.092-.397.092-.397s.364-.399.533-.615a6.56 6.56 0 00.395-.56c.177-.284.233-.577.14-.803-.42-1.027-.855-2.048-1.303-3.062-.088-.201-.35-.345-.589-.373a6.658 6.658 0 00-.243-.024 5.08 5.08 0 00-.605.006v.001z" fill="#6C7694"/>
                        </Svg>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Svg width={80} height={70} viewBox="0 0 80 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Rect width={80} height={69.8185} rx={34.9092} fill="#F0F1F4" />
                            <Path d="M40 20c-8.285 0-15 6.715-15 15 0 7.486 5.485 13.692 12.657 14.819V39.334h-3.81V35h3.81v-3.305c0-3.759 2.238-5.835 5.666-5.835 1.64 0 3.356.293 3.356.293v3.69h-1.89c-1.864 0-2.445 1.157-2.445 2.343V35h4.16l-.664 4.335h-3.496v10.483C49.514 48.694 55 42.486 55 35c0-8.285-6.715-15-15-15z" fill="#6C7694"/>
                        </Svg>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Svg width={80} height={70} viewBox="0 0 80 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Rect width={80} height={70} rx={35} fill="#F0F1F4" />
                            <Rect x={25} y={20} width={30} height={30} rx={15} fill="#6B7593" />
                            <Path d="M48 30.043c-.6.265-1.236.44-1.886.516a3.292 3.292 0 001.444-1.815 6.563 6.563 0 01-2.085.796 3.283 3.283 0 00-5.593 2.992 9.325 9.325 0 01-6.766-3.428 3.28 3.28 0 001.016 4.38 3.271 3.271 0 01-1.487-.41v.04a3.28 3.28 0 002.633 3.218c-.484.13-.99.15-1.483.056a3.283 3.283 0 003.066 2.279A6.59 6.59 0 0132 40.025a9.29 9.29 0 005.031 1.475c6.039 0 9.341-4.999 9.341-9.334 0-.141-.004-.284-.01-.424A6.667 6.667 0 0048 30.044z" fill="#F0F1F4"/>
                        </Svg>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Svg width={80} height={70} viewBox="0 0 80 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Rect width={80} height={70} rx={35} fill="#F0F1F4" />
                            <Path d="M40 50c-8.285 0-15-6.715-15-15s6.715-15 15-15 15 6.715 15 15-6.715 15-15 15zm-4.665-13.245l.02-.01 1.305 4.305c.168.466.399.55.679.511.282-.038.43-.189.615-.366l1.782-1.722 3.825 2.832c.699.386 1.202.186 1.376-.648l2.485-11.733c.275-1.092-.205-1.53-1.053-1.182l-14.6 5.64c-.995.399-.99.957-.18 1.205l3.746 1.17v-.002z" fill="#6C7694"/>
                        </Svg>
                    </TouchableOpacity>

                </View>

            </View>


       </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        paddingHorizontal: 16,
        // marginTop: 24,
        marginBottom: 32
    },

    mainTitle: {
        color: '#091334',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20
    },
    Item: {
        justifyContent:'center',
        alignItems:'center',
        marginRight: 8,
        backgroundColor:'#E5F2FF',
        borderRadius: 100,
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginBottom: 16
    },
    text: {
        width: '100%',
        color: '#2B65EE',
        fontSize: 16,
        textAlign:'center'
    },

    mainWrapper:{
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    showAll:{

    },
    showAllText:{
        fontSize: 16,
        color: '#2B65EE'
    },

    iconsWrapper: {
        width: '100%',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    description: {
        lineHeight: 24
    },

    actionButton: {
        width: '100%',
        height:  48,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderWidth: 1,
        borderColor:'#C4C8D4',
        borderRadius: 6,
        marginTop: 8
    },
    actionText: {
        fontSize: 16,
        color: '#091334'
    },

    white: {
        width:'100%',
        height: 30,
        backgroundColor: 'rgba(255,255,255,0.74)',
        position:'absolute',
        bottom: 0,
        left: 0,

    }
})
