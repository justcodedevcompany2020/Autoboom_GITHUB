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

import HeartSvg from '../../../../../assets/Svg/search_component/HeartSvg'
import CompareSvg from '../../../../../assets/Svg/search_component/CompareSvg'
import OpenEyeSvg from '../../../../../assets/Svg/search_component/OpenEyeSvg'
import CloseEyeSvg from '../../../../../assets/Svg/search_component/CloseEyeSvg'
import NoteSvg from '../../../../../assets/Svg/search_component/NoteSvg'
import CrownSvg from '../../../../../assets/Svg/search_component/CrownSvg'
import LocationSvg from '../../../../../assets/Svg/search_component/LocationSvg'
import GlobusSvg from '../../../../../assets/Svg/search_component/GlobusSvg'
import BlueokSvg from '../../../../../assets/Svg/search_component/BlueokSvg'
// import { SliderBox } from "react-native-image-slider-box";

export default function App(props) {

    const [data, setData] = useState(props.data)
    const [image, setImage] = useState([
        "https://source.unsplash.com/1024x768/?tree", // Network image
        require('../../../../../assets/images/new-autos2.png'),          // Local image
    ])

    const [heart, setHeart] = useState(false)
    const [compare, setCompare] = useState(false)
    const [note, setNote] = useState(false)



    useEffect(() => {

        // console.log('News ADS component loaded')

    }, []);

    return (

        <View style={styles.wrapper}>

            <ScrollView horizontal={true} style={{width: '100%'}}>
               <View style={{width: '100%', height: 100, flexDirection:'row'}}>
                   <View style={styles.imageWrapper}>
                       <Image style={styles.image} source={require('../../../../../assets/images/car_photo3.png')}/>
                   </View>
                   <View style={styles.imageWrapper}>
                       <Image style={styles.image} source={require('../../../../../assets/images/car_photo3.png')}/>
                   </View>
                   <View style={styles.imageWrapper}>
                       <Image style={styles.image} source={require('../../../../../assets/images/car_photo3.png')}/>
                   </View>
                   <View style={styles.imageWrapper}>
                       <Image style={styles.image} source={require('../../../../../assets/images/car_photo3.png')}/>
                   </View>
               </View>
            </ScrollView>


            <View style={styles.actionsMainWrapper}>

                <View style={styles.priceWrapper}>
                    <Text style={styles.price}>₪ 60 000</Text>
                </View>

                <View style={styles.actionsWrapper}>

                    <TouchableOpacity onPress={() => {setHeart(!heart)}} style={styles.actionsItem}>
                        <HeartSvg active={heart}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {setCompare(!compare)}} style={styles.actionsItem}>
                        <CompareSvg active={compare}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {setNote(!note)}} style={[styles.actionsItem, {marginRight: 0}]}>
                        <NoteSvg active={note}/>
                    </TouchableOpacity>

                </View>

            </View>

            <TouchableOpacity
                onPress={() => {
                    props.navigation.navigate('SingleAdsComponent')
                }}
                style={styles.titleWrapper}
            >
                <Text style={styles.title}>
                    Тойота Ярис. III рестайлинг, XP130, 1.3 CVT
                </Text>
            </TouchableOpacity>

            <ScrollView horizontal={true} style={{width: '100%'}}>

                <View style={styles.infoWrapper}>

                    <Text style={styles.info_text}>2014</Text>

                    <Svg style={{marginHorizontal:6}} width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Rect width={4} height={4} rx={2} fill="#C4C8D4" />
                    </Svg>

                    <Text style={styles.info_text}>142 000 km</Text>

                    <Svg style={{marginHorizontal:6}} width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Rect width={4} height={4} rx={2} fill="#C4C8D4" />
                    </Svg>

                    <Text style={styles.info_text}>3rd hand</Text>

                </View>

            </ScrollView>

            <ScrollView horizontal={true} style={{width: '100%'}}>
                <View style={styles.infoWrapper}>

                    <Text style={styles.info_text}>Gasoline</Text>

                    <Svg style={{marginHorizontal:6}} width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Rect width={4} height={4} rx={2} fill="#C4C8D4" />
                    </Svg>

                    <Text style={styles.info_text}>2.0 l</Text>

                    <Svg style={{marginHorizontal:6}} width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Rect width={4} height={4} rx={2} fill="#C4C8D4" />
                    </Svg>

                    <Text style={styles.info_text}>165 hp</Text>

                    <Svg style={{marginHorizontal:6}} width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Rect width={4} height={4} rx={2} fill="#C4C8D4" />
                    </Svg>

                    <Text style={styles.info_text}>Automatic</Text>

                    <Svg style={{marginHorizontal:6}} width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Rect width={4} height={4} rx={2} fill="#C4C8D4" />
                    </Svg>

                    <Text style={styles.info_text}>Front-wheel</Text>

                    <Svg style={{marginHorizontal:6}} width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Rect width={4} height={4} rx={2} fill="#C4C8D4" />
                    </Svg>

                    <Text style={styles.info_text}>Front-wheel</Text>

                </View>
            </ScrollView>

            <ScrollView horizontal={true} style={{width: '100%'}}>

                <View style={styles.infoWrapper}>
                    <CrownSvg/>

                    <Svg style={{marginHorizontal:6}} width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Rect width={4} height={4} rx={2} fill="#C4C8D4" />
                    </Svg>

                    <LocationSvg style={{marginRight: 6}}/>
                    <Text style={styles.info_text}>Ришон-ле-Цион</Text>

                    <Svg style={{marginHorizontal:6}} width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Rect width={4} height={4} rx={2} fill="#C4C8D4" />
                    </Svg>

                    <GlobusSvg style={{marginRight: 6}}/>
                    <Text style={styles.info_text}>Ив Ру</Text>

                    <Svg style={{marginHorizontal:6}} width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Rect width={4} height={4} rx={2} fill="#C4C8D4" />
                    </Svg>

                    <BlueokSvg style={{marginRight: 6}}/>
                    <Text style={styles.info_text}>Трейд Кар</Text>

                </View>

            </ScrollView>




            {/*<ScrollView horizontal={true} style={{width: '100%'}}>*/}

            {/*    {data.map((item, index) => {*/}
            {/*          return (*/}
            {/*            <TouchableOpacity key={index} style={styles.newAdsWrapperItem}>*/}

            {/*                <View style={styles.newAdsWrapperItemImageWrapper}>*/}
            {/*                    <Image style={styles.newAdsWrapperItemImage} source={item.image}/>*/}
            {/*                    {item.icon}*/}
            {/*                </View>*/}

            {/*                <Text style={styles.title}>{item.title}</Text>*/}
            {/*                <Text style={styles.yearAndVilage}>{item.year} - {item.mileage} km</Text>*/}
            {/*                <Text style={styles.price}>₪ {item.price}</Text>*/}


            {/*            </TouchableOpacity>*/}
            {/*        )*/}
            {/*    })}*/}

            {/*</ScrollView>*/}
        </View>
    );


}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        // paddingHorizontal: 16,
        paddingLeft:16,
        // marginBottom: 20
    },
    actionsMainWrapper: {
        width: '100%',
        marginTop: 12,
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom: 8,
        paddingRight: 16
    },

    priceWrapper: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        backgroundColor:'#E6F2FF',
        borderRadius: 6
    },
    price: {
        fontSize: 20,
        color: '#2B65EE',
        fontWeight: 'bold'
    },
    actionsWrapper: {
        flexDirection: 'row',
        alignItems:'center',
    },

    actionsItem: {
        marginRight: 25
    },

    titleWrapper: {
        width: '100%',
        marginBottom:8
    },
    title: {
        fontSize: 18,
        color: '#091334',
        paddingRight:17
    },

    infoWrapper: {
        flexDirection:'row',
        alignItems: 'center',
        marginBottom: 4
    },
    info_text: {
        fontSize:14,
        color:'#091334'
    },

    yellowWrapper: {

        height: 28,
        paddingHorizontal: 8,
        backgroundColor: '#FFF2DE',
        justifyContent: 'center',
        alignItems:'center',
        marginRight: 8,
        borderRadius: 6,

    },
    yellowText: {
        fontSize:12,
        color: '#091334'
    },
    closed_wrapper: {
        width: '100%',
        paddingHorizontal:16,
    },
    closed_cart: {
        width: '100%',
        backgroundColor:'#F0F1F4',
        height: 48,
        marginBottom: 24,
        borderRadius: 8,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:16,

    },
    closed_cart_title: {
        fontSize: 14,
        color: '#6C7694'
    },

    imageWrapper: {
        width: 167,
        height: 100,
        borderRadius: 8,
        overflow:'hidden',
        marginRight:8
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode:'cover'
    },



})
