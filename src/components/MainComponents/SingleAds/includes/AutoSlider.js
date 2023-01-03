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
    Slider,
    Dimensions
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

const windowWidth = Dimensions.get('window').width;

export default function App(props) {

    const [images, setImages] = useState([
        require('../../../../../assets/images/car_photo_single.png'),
        require('../../../../../assets/images/new-autos2.png'),
        require('../../../../../assets/images/car_photo_single.png'),
        require('../../../../../assets/images/car_photo_single.png'),
    ])


    useEffect(() => {

        // console.log('News ADS component loaded')

    }, []);

    return (

       <ScrollView horizontal={true} style={styles.scrollViewWrapper} >
           <View style={styles.scrollViewContainer}>
               {images.map((item, index) => {

                   return (
                       <View key={index} style={styles.imageWrapper}>
                            <Image source={item} style={styles.image}/>
                       </View>
                   )

               })}
           </View>

       </ScrollView>

    );

}

const styles = StyleSheet.create({
    scrollViewWrapper: {
        width: '100%',
        paddingLeft: 16
    },
    scrollViewContainer: {
        marginRight: 25,
        width: '100%',
        flexDirection:'row'
    },
    imageWrapper: {
        width: windowWidth - 32,
        height: 200,
        marginRight: 8,
        borderRadius: 8,
        overflow:'hidden'
    },
    image: {
        width:'100%',
        height: '100%',
        resizeMode:'cover'
    }
})
