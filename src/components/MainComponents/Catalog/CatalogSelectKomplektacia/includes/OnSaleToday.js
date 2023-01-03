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

    const [data, setSpecialOffers] = useState([
        {image: require('../../../../../../assets/images/car_photo.png'), title: 'Mercedes-Benz S c...', year: '2014', mileage: '142 000', price: '829 000'},
        {image: require('../../../../../../assets/images/car_photo.png'), title: 'Mercedes-Benz S c...', year: '2014', mileage: '142 000', price: '829 000'},
        {image: require('../../../../../../assets/images/car_photo.png'), title: 'Mercedes-Benz S c...', year: '2014', mileage: '142 000', price: '829 000'},
        {image: require('../../../../../../assets/images/car_photo.png'), title: 'Mercedes-Benz S c...', year: '2014', mileage: '142 000', price: '829 000'},
        {image: require('../../../../../../assets/images/car_photo.png'), title: 'Mercedes-Benz S c...', year: '2014', mileage: '142 000', price: '829 000'},
        {image: require('../../../../../../assets/images/car_photo.png'), title: 'Mercedes-Benz S c...', year: '2014', mileage: '142 000', price: '829 000'},
    ]);

    useEffect(() => {
        console.log('See ADS component loaded')
    }, []);

    return (
        <View style={styles.newAdsMainWrapper}>
            <View style={styles.newAdsWrapper}>

                <View style={{flexDirection:'row'}}>
                    <Text style={styles.mainTitle}>Сегодня в продаже</Text>
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
                                <Text style={styles.yearAndVilage}>{item.year} - {item.mileage} km</Text>
                                <Text style={styles.price}>₪ {item.price}</Text>

                            </TouchableOpacity>

                        )
                    })}

                </ScrollView>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    newAdsWrapper: {
        width: '100%',
        marginBottom: 24,
        paddingLeft:16,
        paddingVertical:16,
        borderRadius: 8
    },
    newAdsMainWrapper: {
        width: '100%',
    },
    newAdsWrapperItem: {
        width: 150,
        marginRight: 12
    },

    newAdsWrapperItemImageWrapper: {
        width: '100%',
        height: 122,
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
        fontSize: 16
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
        color: '#091334',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20
    }
})
