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
import { ImageSlider } from "react-native-image-slider-banner";
import UnionSvg  from '../../../../../../assets/Svg/UnionSvg'

export default function App(props) {
    const [last_search_active_button, setLastSearchActiveButton] = useState(0);
    const [autosalon, setAutosalon] = useState([
        {title: 'Митсубиси-Хундай Кирьят-Шмона', open: true, show_union: true},
        {title: 'Митсубиси-Хундай Кирьят-Шмона', open: false, show_union: false},
        {title: 'Митсубиси-Хундай Кирьят-Шмона', open: true, show_union: true},
    ]);
    const [autoservice, setAutoservice] = useState([
        {title: 'Митсубиси-Хундай Кирьят-Шмона 2', open: true, show_union: true},
        {title: 'Митсубиси-Хундай Кирьят-Шмона 2', open: false, show_union: false},
        {title: 'Митсубиси-Хундай Кирьят-Шмона 2', open: true, show_union: true},
    ]);



    return (
        <View style={styles.wrapper}>

<View style={{ borderRadius: 10, width: '100%', height: 200, overflow: 'hidden', marginBottom: 10 }} >
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

            <View style={styles.options}>
                <TouchableOpacity style={styles.adsOnSite}>
                    <Text style={[styles.optionsTextLarge, {color: '#2B65EE'}]}>3</Text>
                    <Text style={[styles.optionsText, {color: '#2B65EE'}]}>объявления на сайте</Text>
                </TouchableOpacity>

                <View style={styles.autoClass}>
                    <Text style={[styles.optionsTextLarge, {color: '#6C7694'}]}>B</Text>
                    <Text style={[styles.optionsText, {color: '#6C7694'}]}>класс авто</Text>
                </View>
            </View>

            <View style={styles.bottomActions}>

                <TouchableOpacity style={styles.sravnenieButton}>

                    <Svg style={{marginRight: 8}} width={23} height={22} viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Rect x={10.5939} width={2} height={22} rx={1} fill="#091334" />
                        <Path d="M20.02 10.962a.3.3 0 01.3-.3h2.38a.3.3 0 01.3.3v.943a.3.3 0 01-.17.27l-2.38 1.144a.3.3 0 01-.43-.27v-2.087zM2.98 10.962a.3.3 0 00-.3-.3H.3a.3.3 0 00-.3.3v.943a.3.3 0 00.17.27l2.38 1.144a.3.3 0 00.43-.27v-2.087z" fill="#091334"/>
                        <Path d="M7.37 2.8A5.05 5.05 0 002.41 6.892l-.867 4.494v7.137a1.65 1.65 0 103.298 0v-.7H8.8a.5.5 0 00.5-.5v-1.1a.5.5 0 00-.5-.5H3.644v-4.136l.83-4.296A2.95 2.95 0 017.37 4.9H8.8a.5.5 0 00.5-.5V3.3a.5.5 0 00-.5-.5H7.37zM15.974 2.8a5.05 5.05 0 014.959 4.092l.867 4.494v7.137a1.65 1.65 0 11-3.298 0v-.7h-3.958a.5.5 0 01-.5-.5v-1.1a.5.5 0 01.5-.5H19.7v-4.136l-.83-4.296A2.95 2.95 0 0015.974 4.9h-1.43a.5.5 0 01-.5-.5V3.3a.5.5 0 01.5-.5h1.43z" fill="#091334"/>
                    </Svg>
                    <Text style={styles.sravnenieButtonText}>Сравнить</Text>
                </TouchableOpacity>


                <TouchableOpacity style={[styles.shareButton, ]}>
                    <Svg  width={19} height={20} viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M11.12 15.022l-4.199-2.29a4 4 0 110-5.464l4.2-2.29A3.998 3.998 0 0116.367.24a4 4 0 11-4.285 6.494l-4.2 2.29a4.006 4.006 0 010 1.953l4.199 2.29a4 4 0 11-.96 1.754v.001zM4 12a2 2 0 100-4 2 2 0 000 4zm11-6a2 2 0 100-4 2 2 0 000 4zM15 18a2 2 0 100-4 2 2 0 000 4z" fill="#091334"/>
                    </Svg>
                </TouchableOpacity>

            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        paddingHorizontal:16
    },
    slider: {
        width: '100%',
        height:200,
        backgroundColor:'silver',
        borderRadius:8,
        marginBottom:8
    },
    options: {
      width:'100%',
      flexDirection:'row'
    },
    adsOnSite: {
        height: 112,
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        backgroundColor: '#E6F2FF',
        marginRight:8,
        borderRadius: 6,
    },
    optionsTextLarge: {
        fontSize:32
    },
    optionsText: {
        fontSize:16
    },
    autoClass: {
        width:112,
        height: 112,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 6,
        borderColor:'#C4C8D4',
        borderWidth:1
    },
    bottomActions: {
        width:'100%',
        flexDirection: 'row',
        justifyContent:'space-between'
    },

    shareButton: {
        width: 112,
        height: 44,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:12,
        borderColor: '#C4C8D4',
        borderWidth: 1,
        borderRadius:6
    },
    shareButtonText: {

    },

    sravnenieButton: {
        flex:1,
        height: 44,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:12,
        borderColor: '#C4C8D4',
        borderWidth: 1,
        borderRadius:6,
        marginRight: 8
    },
    sravnenieButtonText: {

    },

})
