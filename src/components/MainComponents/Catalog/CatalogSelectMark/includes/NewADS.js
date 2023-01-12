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

    const [data, setData] = useState(props.data)



    useEffect(() => {
        console.log('News ADS component loaded')

    }, []);


    return (
       <View style={styles.newAdsWrapper}>

           <View style={{width:'100%', flexDirection:'row'}}>
               <Svg width={34} height={32} viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <Path fillRule="evenodd" clipRule="evenodd" d="M2.812 5.84a2.087 2.087 0 001.666-1.751l.55-3.825a.308.308 0 01.61 0l.55 3.823c.127.88.794 1.586 1.666 1.763l2.557.518a.32.32 0 01-.003.627l-2.553.499c-.871.17-1.54.872-1.666 1.75l-.551 3.825a.308.308 0 01-.61 0l-.55-3.824a2.087 2.087 0 00-1.666-1.751l-2.54-.496a.337.337 0 010-.662l2.54-.496zm10.964 8.271a5.425 5.425 0 004.185-4.364L19.609.328a.397.397 0 01.782 0l1.648 9.419a5.425 5.425 0 004.185 4.364l6.784 1.484a.414.414 0 010 .81l-6.784 1.484a5.425 5.425 0 00-4.185 4.364l-1.62 9.26a.588.588 0 01-1.16-.014l-1.376-9.168a5.378 5.378 0 00-4.169-4.456l-6.722-1.47a.414.414 0 010-.81l6.784-1.484zM7.35 24.667a1.585 1.585 0 01-1.247 1.34l-1.885.393a.273.273 0 000 .535l1.885.392a1.585 1.585 0 011.247 1.34l.423 3.135a.229.229 0 00.454 0l.423-3.135c.09-.666.59-1.203 1.247-1.34l1.897-.395a.259.259 0 00.002-.506l-1.899-.41a1.6 1.6 0 01-1.247-1.35l-.423-3.134a.229.229 0 00-.454 0l-.423 3.135z" fill="#FF7A00" fillOpacity={0.7}/>
               </Svg>
               <Text style={styles.mainTitle}>Автомобильные новинки</Text>
           </View>

           <ScrollView horizontal={true} style={{width: '100%'}}>

               {data.map((item, index) => {
                   return (
                       <TouchableOpacity key={index} style={styles.newAdsWrapperItem}>

                           <View style={styles.newAdsWrapperItemImageWrapper}>
                               <Image style={styles.newAdsWrapperItemImage} source={item.image}/>
                               {item.icon}
                           </View>

                           <Text style={styles.title}>{item.title}</Text>
                           <Text style={styles.yearAndVilage}>{item.subtitle}</Text>


                       </TouchableOpacity>
                   )
               })}

           </ScrollView>
       </View>
    );
}

const styles = StyleSheet.create({
    newAdsWrapper: {
        width: '100%',
        paddingLeft: 16,
        marginTop: 24,
        marginBottom: 30
    },
    newAdsWrapperItem: {
        width: 265,
        marginRight: 24
    },

    newAdsWrapperItemImageWrapper: {
        width: '100%',
        height: 151,
        borderRadius: 8,
        overflow:'hidden'
    },
    newAdsWrapperItemImage: {
        width: '100%',
        height: '100%',
        resizeMode:'cover'
    },

    title: {
        width: '100%',
        marginTop: 12,
        color: '#091334',
        fontSize: 16,
        fontWeight:'700'
    },
    yearAndVilage: {
        color: '#6C7694',
        marginTop: 3,
        fontSize: 16
    },
    price: {
        color: '#091334',
        fontSize: 16,
        fontWeight:'bold'
    },

    mainTitle: {
        color: '#FF7A00',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        marginLeft:8
    }
})
