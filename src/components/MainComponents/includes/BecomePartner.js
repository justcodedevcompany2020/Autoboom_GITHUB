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
    const [data, setData] = useState(props.data)

    useEffect(() => {

        console.log('Become component loaded')

    }, []);

    return (
       <View style={styles.wrapper}>


           <View style={{width: '100%'}}>
               <View style={styles.imageWrapper}>
                   <Image style={styles.image} source={require('../../../../assets/images/become-partner.png')}/>
               </View>

               <View style={styles.contentWrapper}>
                   <Text style={styles.text}>Автосалон?</Text>
                   <Text style={styles.text}>Твой путь к успеху начинается здесь</Text>

                   <View style={styles.becomePartnerWrapper}>
                       <TouchableOpacity style={styles.becomePartner}>
                           <Text style={styles.becomePartnerText}>Стать партнером</Text>
                       </TouchableOpacity>
                   </View>
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
        marginBottom: 30,
        justifyContent:'center',
        alignItems: 'center'
    },

    imageWrapper: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
        overflow:'hidden',
        marginBottom: 20,
        position:'absolute',
        top: 0,
        left: 0
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode:'cover',
    },
    contentWrapper: {
        padding: 24,

    },
    text: {
        color: 'white',
        fontSize: 24,
        lineHeight: 32,
        fontWeight: 'bold'
    },

    becomePartnerWrapper: {
        paddingRight: 16,
        alignItems:'flex-start',
        marginTop: 16
    },
    becomePartner: {
        height: 48,
        backgroundColor: '#E5F2FF',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 6,
        paddingHorizontal: 14,
        paddingVertical: 12
    },
    becomePartnerText: {
        fontSize: 16,
        color:'#2B65EE'
    },

})
