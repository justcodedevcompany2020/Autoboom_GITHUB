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

export default function App(props) {

    // const [data, setData] = useState(JSON.parse(props.data))
    const [data, setData] = useState([])

    useEffect(() => {

        console.log('Become component loaded')

    }, []);

    return (
       <View style={styles.wrapper}>
           <ScrollView horizontal={true} style={styles.scrollView}>

               <View style={{width: '100%', flexDirection:'row'}}>

                   <View style={styles.scrollviewItemWrapper}>
                       <Svg width={52} height={52} viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <Rect width={52} height={52} rx={8} fill="#F0F1F4" />
                           <G clipPath="url(#clip0_10991_25061)"><Path d="M17.5 32l6-6.02 4 4.007 8.5-9.575L34.59 19l-7.09 7.982-4-4.006-7.5 7.522L17.5 32z" fill="#6C7694"/></G>
                           <Defs><ClipPath id="clip0_10991_25061"><Path fill="#fff" transform="translate(16 19)" d="M0 0H20V13H0z" /></ClipPath></Defs>
                       </Svg>
                       <View style={styles.scrollviewItemRight}>
                           <Text style={styles.scrollviewItemText1}>Статистика цен</Text>
                           <Text style={styles.scrollviewItemText2}>Средняя цена ₪ 780 000</Text>
                       </View>
                   </View>

                   <View style={styles.scrollviewItemWrapper}>
                       <View style={styles.scrollviewItemRight}>
                           <Text style={styles.scrollviewItemText1}>Новые</Text>
                           <Text style={styles.scrollviewItemText2}>₪ 780 000 - ₪ 880 000</Text>
                       </View>
                   </View>

                   <View style={styles.scrollviewItemWrapper}>
                       <View style={styles.scrollviewItemRight}>
                           <Text style={styles.scrollviewItemText1}>С пробегом</Text>
                           <Text style={styles.scrollviewItemText2}>₪ 780 000 - ₪ 880 000</Text>
                       </View>
                   </View>

               </View>

           </ScrollView>

           <View style={styles.lineWrapper}>
               <View style={styles.line}>

               </View>
           </View>
       </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        paddingLeft: 16,
        // marginTop: 24,
        marginBottom: 24,
        justifyContent:'center',
        alignItems: 'center',
    },
    scrollView: {
        width: '100%',
        minHeight:20
    },
    lineWrapper: {
        width:'100%',
        paddingRight:16,

    },
    line: {
        width:'100%',
        height:1,
        backgroundColor: '#E2E4EA',
        marginTop:20
    },
    scrollviewItemWrapper: {
        flexDirection:'row',
        marginRight:40,
    },
    scrollviewItemRight: {
        justifyContent: 'space-between',
        marginLeft:16
    },

    scrollviewItemText1:{
        fontSize:16,
        lineHeight:24,
        color: '#6C7694'
    },

    scrollviewItemText2:{
        fontSize:16,
        lineHeight:24,
        color: '#1548C1'
    }



})
