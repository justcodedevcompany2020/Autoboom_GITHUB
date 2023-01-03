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
import SpecialOfferSvg from '../../../../../assets/Svg/search_component/SpecialOfferSvg';

export default function App(props) {

    // const [data, setData] = useState(props.data)


    useEffect(() => {
        console.log('New autos ADS component loaded')
    }, []);

    return (

       <View style={styles.mainWrapper}>

           <View style={{flexDirection: 'row', justifyContent:'center'}}>
               <SpecialOfferSvg style={{marginRight: 12}}/>
               <Text style={styles.mainTitle}>Спецпредложения</Text>
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


       </View>
    );
}

const styles = StyleSheet.create({
    mainWrapper: {
        flex:1,
        marginHorizontal:16,
        // width: '100%',
        paddingHorizontal: 16,
        paddingTop: 16,
        marginBottom: 30,
        backgroundColor: '#F5F3FF',
        borderRadius: 8
    },
    newAutosWrapperItem: {
        width: '48%',
        marginBottom: 12
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
        marginBottom: 24,
        flexWrap:'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
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
