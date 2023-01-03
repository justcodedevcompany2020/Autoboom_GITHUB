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
    const [years, setYears] = useState([
        '2022','2021','2020','2019','2018','2017','2016','2015',
    ])

    useEffect(() => {

        console.log('Become component loaded')

    }, []);

    return (
       <View style={styles.wrapper}>

           <Text style={styles.title}>Годы выпуска</Text>

           <View style={styles.yearsWrapper}>

               {years.map((item, index)=>{

                   return (
                       <TouchableOpacity style={styles.years} key={index}>
                           <Text style={styles.yearsText}>{item}</Text>
                       </TouchableOpacity>
                   )

               })}

           </View>

           <View style={styles.showMoreButtonWrapper}>
               <TouchableOpacity style={styles.showMoreButton}>
                   <Text style={styles.showMoreButtonText}>Показать все года</Text>
               </TouchableOpacity>

           </View>

       </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        paddingHorizontal: 16,
        marginBottom: 24,
    },
    title: {
        fontSize:22,
        lineHeight:28,
        color: '#091334',
        fontWeight:'bold',
        marginBottom: 20
    },

    yearsWrapper: {
        width: '100%',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent: 'space-between'
    },
    years: {
        width: '24%',
        height: 44,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#E6F2FF',
        borderRadius:6,
        marginBottom:8
    },
    yearsText: {
        fontSize: 16,
        lineHeight: 24,
        color: '#2B65EE'
    },
    showMoreButtonWrapper: {

    },
    showMoreButton: {
        width: '100%',
        height: 48,
        // backgroundColor: '#E5F2FF',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 6,
        borderColor:'#C4C8D4',
        borderWidth:1
    },
    showMoreButtonText: {
        fontSize: 16,
        color:'#091334'
    },
})
