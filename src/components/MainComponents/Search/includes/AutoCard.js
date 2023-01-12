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

import Svg, { Defs, G, Path, Rect, Circle, ClipPath } from "react-native-svg";
import { useEffect, useState } from "react";

import HeartSvg from '../../../../../assets/Svg/search_component/HeartSvg'
import CompareSvg from '../../../../../assets/Svg/search_component/CompareSvg'
import OpenEyeSvg from '../../../../../assets/Svg/search_component/OpenEyeSvg'
import CloseEyeSvg from '../../../../../assets/Svg/search_component/CloseEyeSvg'
import NoteSvg from '../../../../../assets/Svg/search_component/NoteSvg'
import CrownSvg from '../../../../../assets/Svg/search_component/CrownSvg'
import LocationSvg from '../../../../../assets/Svg/search_component/LocationSvg'
import GlobusSvg from '../../../../../assets/Svg/search_component/GlobusSvg'
import BlueokSvg from '../../../../../assets/Svg/search_component/BlueokSvg'
import { ImageSlider } from "react-native-image-slider-banner";
import EyeIcon from '../../../../../assets/Svg/EyeIcon'
import CloseIcon from '../../../../../assets/Svg/CloseIcon'



export default function App(props) {

    const [data, setData] = useState(props.data)
    const [image, setImage] = useState([
        "https://source.unsplash.com/1024x768/?tree", // Network image
        require('../../../../../assets/images/new-autos2.png'),          // Local image
    ])

    const [heart, setHeart] = useState(false)
    const [compare, setCompare] = useState(false)
    const [note, setNote] = useState(false)
    const [cart_open, setCartOpen] = useState(true)



    useEffect(() => {

        // console.log('News ADS component loaded')

    }, []);


    if (!cart_open) {
        return (
            <View style={[styles.closed_wrapper]}>
                <View style={[styles.closed_cart]}>

                    <Text style={[styles.closed_cart_title]}>Mercedes-Benz, A-Class AMG</Text>

                    <TouchableOpacity onPress={() => { setCartOpen(true) }}>
                        <CloseEyeSvg />
                    </TouchableOpacity>

                </View>
            </View>
        );

    }


    return (

        <TouchableOpacity
            onPress={() => { props.navigation.navigate('SingleAdsComponent') }}
            style={styles.wrapper}
        >

            <View style={styles.imageWrapper}>
                <ImageSlider
                    preview={true}
                    data={[
                        { img: 'https://rg.ru/uploads/images/2022/10/04/8_9a9.jpeg' },
                        { img: 'https://media.autoexpress.co.uk/image/private/s--oSvWw2tM--/v1664984236/evo/2022/10/Audi%20RS4%20Competition%20review-9.jpg' },
                        { img: 'https://images.drive.ru/i/0/60cc2c1a745a9a38d75c2f8d.jpg' }
                    ]}
                    autoPlay={false}
                    onItemChanged={(item) => console.log("item", item)}
                    closeIconColor="#fff"
                    caroselImageStyle={{ resizeMode: 'cover', height: 200 }}
                />

            </View>
            {props.topButton ?
                <TouchableOpacity style={[styles.grayButton, { backgroundColor: '#FFF2DE' }]} >
                    <Text style={[styles.grayButtonText, { color: '#091334' }]} >Созвониться в понедельник и дого...</Text>
                    <CloseIcon />
                </TouchableOpacity>
                : ''}

            <View style={styles.actionsMainWrapper}>

                <View style={styles.priceWrapper}>
                    <Text style={styles.price}>₪ 60 000</Text>
                </View>

                <View style={styles.actionsWrapper}>

                    <TouchableOpacity onPress={() => { setHeart(!heart) }} style={styles.actionsItem}>
                        <HeartSvg active={heart} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { setCompare(!compare) }} style={styles.actionsItem}>
                        <CompareSvg active={compare} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.actionsItem} onPress={() => { setCartOpen(false) }}>
                        <OpenEyeSvg />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { setNote(!note) }} style={[styles.actionsItem, { marginRight: 0 }]}>
                        <NoteSvg active={note} />
                    </TouchableOpacity>

                </View>

            </View>

            <View style={styles.titleWrapper}>
                <Text style={styles.title}>
                    Тойота Ярис. III рестайлинг, XP130, 1.3 CVT
                </Text>
            </View>

            <ScrollView horizontal={true} style={{ width: '100%' }}>

                <View style={styles.infoWrapper}>

                    <Text style={styles.info_text}>2014</Text>

                    <Svg style={{ marginHorizontal: 6 }} width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Rect width={4} height={4} rx={2} fill="#C4C8D4" />
                    </Svg>

                    <Text style={styles.info_text}>142 000 km</Text>

                    <Svg style={{ marginHorizontal: 6 }} width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Rect width={4} height={4} rx={2} fill="#C4C8D4" />
                    </Svg>

                    <Text style={styles.info_text}>3rd hand</Text>

                </View>

            </ScrollView>

            <ScrollView horizontal={true} style={{ width: '100%' }}>
                <View style={styles.infoWrapper}>

                    <Text style={styles.info_text}>Gasoline</Text>

                    <Svg style={{ marginHorizontal: 6 }} width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Rect width={4} height={4} rx={2} fill="#C4C8D4" />
                    </Svg>

                    <Text style={styles.info_text}>2.0 l</Text>

                    <Svg style={{ marginHorizontal: 6 }} width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Rect width={4} height={4} rx={2} fill="#C4C8D4" />
                    </Svg>

                    <Text style={styles.info_text}>165 hp</Text>

                    <Svg style={{ marginHorizontal: 6 }} width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Rect width={4} height={4} rx={2} fill="#C4C8D4" />
                    </Svg>

                    <Text style={styles.info_text}>Automatic</Text>

                    <Svg style={{ marginHorizontal: 6 }} width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Rect width={4} height={4} rx={2} fill="#C4C8D4" />
                    </Svg>

                    <Text style={styles.info_text}>Front-wheel</Text>

                    <Svg style={{ marginHorizontal: 6 }} width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Rect width={4} height={4} rx={2} fill="#C4C8D4" />
                    </Svg>

                    <Text style={styles.info_text}>Front-wheel</Text>

                </View>
            </ScrollView>

            <ScrollView horizontal={true} style={{ width: '100%' }}>

                <View style={styles.infoWrapper}>
                    <CrownSvg />

                    <Svg style={{ marginHorizontal: 6 }} width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Rect width={4} height={4} rx={2} fill="#C4C8D4" />
                    </Svg>

                    <LocationSvg style={{ marginRight: 6 }} />
                    <Text style={styles.info_text}>Ришон-ле-Цион</Text>

                    <Svg style={{ marginHorizontal: 6 }} width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Rect width={4} height={4} rx={2} fill="#C4C8D4" />
                    </Svg>

                    <GlobusSvg style={{ marginRight: 6 }} />
                    <Text style={styles.info_text}>Ив Ру</Text>

                    <Svg style={{ marginHorizontal: 6 }} width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Rect width={4} height={4} rx={2} fill="#C4C8D4" />
                    </Svg>

                    <BlueokSvg style={{ marginRight: 6 }} />
                    <Text style={styles.info_text}>Трейд Кар</Text>

                </View>

            </ScrollView>


            <ScrollView horizontal={true} style={{ width: '100%', marginTop: 18 }}>

                <TouchableOpacity style={styles.yellowWrapper}>
                    <Text style={styles.yellowText}>Срочно</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.yellowWrapper}>
                    <Text style={styles.yellowText}>Правая рука</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.yellowWrapper}>
                    <Text style={styles.yellowText}>Идеальное состояние</Text>
                </TouchableOpacity>

            </ScrollView>
            {props.mercedess ?
                <TouchableOpacity style={styles.grayButton} >
                    <Text style={styles.grayButtonText} >Mercedes-Benz, A-Class AMG</Text>
                    <EyeIcon />
                </TouchableOpacity>
                :
                ''}
        </TouchableOpacity>
    );


}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        paddingHorizontal: 16,
        marginBottom: 20
    },
    actionsMainWrapper: {
        width: '100%',
        marginTop: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8
    },

    priceWrapper: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        backgroundColor: '#E6F2FF',
        borderRadius: 6
    },
    price: {
        fontSize: 20,
        color: '#2B65EE',
        fontWeight: 'bold'
    },
    actionsWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    actionsItem: {
        marginRight: 25
    },

    titleWrapper: {
        width: '100%',
        marginBottom: 8
    },
    title: {
        fontSize: 18,
        color: '#091334'
    },

    infoWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4
    },
    info_text: {
        fontSize: 14,
        color: '#091334'
    },

    yellowWrapper: {

        height: 28,
        paddingHorizontal: 8,
        backgroundColor: '#FFF2DE',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
        borderRadius: 6,

    },
    yellowText: {
        fontSize: 12,
        color: '#091334'
    },
    closed_wrapper: {
        width: '100%',
        paddingHorizontal: 16,
    },
    closed_cart: {
        width: '100%',
        backgroundColor: '#F0F1F4',
        height: 48,
        marginBottom: 24,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,

    },
    closed_cart_title: {
        fontSize: 14,
        color: '#6C7694'
    },

    imageWrapper: {
        width: '100%',
        height: 200,
        borderRadius: 8,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },

    grayButton: {
        width: '100%',
        height: 44,
        backgroundColor: '#F0F1F4',
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 12
    },
    grayButtonText: {
        fontSize: 14,
        color: '#6C7694'
    }

})
