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

    // const [data, setData] = useState(props.data)


    useEffect(() => {
        console.log('New autos ADS component loaded')
    }, []);

    return (

       <View style={styles.mainWrapper}>

           <Text style={styles.mainTitle}>Автомобильные новинки</Text>

           <View style={styles.itemsWrapper}>

               <TouchableOpacity  style={styles.newAutosWrapperItem}>
                   <View style={styles.newAutosWrapperItemImageWrapper}>
                       <Image style={styles.newAutosWrapperItemImage} source={require('../../../../../assets/images/new-autos.png')}/>
                   </View>

                   <Text style={styles.title}>Mercedes-Benz C-Class AMG</Text>
                   <Text style={styles.subtitle}>March 2021</Text>

               </TouchableOpacity>

               <TouchableOpacity  style={styles.newAutosWrapperItem}>
                   <View style={styles.newAutosWrapperItemImageWrapper}>
                       <Image style={styles.newAutosWrapperItemImage} source={require('../../../../../assets/images/new-autos.png')}/>
                   </View>

                   <Text style={styles.title}>Mercedes-Benz C-Class AMG</Text>
                   <Text style={styles.subtitle}>March 2021</Text>

               </TouchableOpacity>

           </View>
           <View style={styles.itemsWrapper}>

               <TouchableOpacity  style={[styles.newAutosWrapperItem, {width: '100%'}]}>
                   <View style={[styles.newAutosWrapperItemImageWrapper, {height: 200}]}>
                       <Image style={styles.newAutosWrapperItemImage} source={require('../../../../../assets/images/new-autos2.png')}/>
                   </View>

                   <Text style={styles.title}>Mercedes-Benz C-Class AMG</Text>
                   <Text style={styles.subtitle}>March 2021</Text>

               </TouchableOpacity>

           </View>
           <View style={styles.itemsWrapper}>

               <TouchableOpacity  style={styles.newAutosWrapperItem}>
                   <View style={styles.newAutosWrapperItemImageWrapper}>
                       <Image style={styles.newAutosWrapperItemImage} source={require('../../../../../assets/images/new-autos.png')}/>
                   </View>

                   <Text style={styles.title}>Mercedes-Benz C-Class AMG</Text>
                   <Text style={styles.subtitle}>March 2021</Text>

               </TouchableOpacity>

               <TouchableOpacity  style={styles.newAutosWrapperItem}>
                   <View style={styles.newAutosWrapperItemImageWrapper}>
                       <Image style={styles.newAutosWrapperItemImage} source={require('../../../../../assets/images/new-autos.png')}/>
                   </View>

                   <Text style={styles.title}>Mercedes-Benz C-Class AMG</Text>
                   <Text style={styles.subtitle}>March 2021</Text>

               </TouchableOpacity>

           </View>

           <View style={styles.showMoreButtonWrapper}>
               <TouchableOpacity style={styles.showMoreButton}>
                   <Text style={styles.showMoreButtonText}>Смотреть больше новинок</Text>
               </TouchableOpacity>

           </View>
       </View>
    );
}

const styles = StyleSheet.create({
    mainWrapper: {
        width: '100%',
        paddingHorizontal: 16,
        marginBottom: 30
    },
    newAutosWrapperItem: {
        width: '48%',
        marginRight: 12
    },

    newAutosWrapperItemImageWrapper: {
        width: '100%',
        height: 122,
        borderRadius: 8,
        overflow:'hidden',

    },
    newAutosWrapperItemImage: {
        width: '100%',
        height: '100%',
        resizeMode:'cover'
    },

    title: {
        width: '100%',
        marginTop: 16,
        color: '#091334',
        fontSize: 18,
        fontWeight: 'bold'
    },
    subtitle: {
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
        color: '#091334',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20
    },
    itemsWrapper: {
        width: '100%',
        flexDirection:'row',
        marginBottom: 24
    },
    showMoreButtonWrapper: {
    },
    showMoreButton: {
        width: '100%',
        height: 48,
        backgroundColor: '#E5F2FF',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 6
    },
    showMoreButtonText: {
        fontSize: 16,
        color:'#2B65EE'
    },
})
