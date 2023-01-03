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

    return (
       <View style={styles.wrapper}>

          <View style={styles.imageWrapper}>
              <Image style={styles.image} source={require('../../../../../../assets/images/payyourcar.png')}/>
          </View>

          <View style={styles.titleWrapper}>
              <Text style={styles.title1}>Продай {'\n'}свой автомобиль</Text>
              <Text style={styles.title2}>бесплатно и быстро</Text>
          </View>

           <TouchableOpacity style={styles.startWrapper}>
               <Text style={styles.startText}>Начать!</Text>
           </TouchableOpacity>
       </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: 300,
        paddingHorizontal:16,
        marginBottom:24
    },
    imageWrapper: {
        borderRadius: 18,
        overflow:'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    titleWrapper: {
      position:'absolute',
      top:24,
      left:40
    },
    title1:{
        fontSize:26,
        fontWeight:'bold',
        lineHeight:34
    },
    title2: {
        fontSize:26,
        lineHeight:34
    },
    startWrapper: {
        width: 106,
        height: 48,
        borderRadius: 6,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FF7A00',
        position: 'absolute',
        right: 40,
        bottom:24
    },
    startText: {
        fontSize: 18,
        lineHeight:24,
        color:'white'
    },
})
