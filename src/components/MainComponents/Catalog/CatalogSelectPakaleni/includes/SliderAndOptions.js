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
import { ImageSlider } from "react-native-image-slider-banner";
import Svg, { Defs, G, Path, Rect, Circle, ClipPath } from "react-native-svg";
import { useEffect, useState } from "react";
import UnionSvg from '../../../../../../assets/Svg/UnionSvg'

export default function App(props) {
    const [last_search_active_button, setLastSearchActiveButton] = useState(0);
    const [autosalon, setAutosalon] = useState([
        { title: 'Митсубиси-Хундай Кирьят-Шмона', open: true, show_union: true },
        { title: 'Митсубиси-Хундай Кирьят-Шмона', open: false, show_union: false },
        { title: 'Митсубиси-Хундай Кирьят-Шмона', open: true, show_union: true },
    ]);
    const [autoservice, setAutoservice] = useState([
        { title: 'Митсубиси-Хундай Кирьят-Шмона 2', open: true, show_union: true },
        { title: 'Митсубиси-Хундай Кирьят-Шмона 2', open: false, show_union: false },
        { title: 'Митсубиси-Хундай Кирьят-Шмона 2', open: true, show_union: true },
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
                    <Text style={[styles.optionsTextLarge, { color: '#2B65EE' }]}>3</Text>
                    <Text style={[styles.optionsText, { color: '#2B65EE' }]}>объявления на сайте</Text>
                </TouchableOpacity>

                <View style={styles.autoClass}>
                    <Text style={[styles.optionsTextLarge, { color: '#6C7694' }]}>B</Text>
                    <Text style={[styles.optionsText, { color: '#6C7694' }]}>класс авто</Text>
                </View>
            </View>

            <View style={styles.bottomActions}>
                <TouchableOpacity style={styles.shareButton}>
                    <Svg style={{ marginRight: 8 }} width={19} height={20} viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M11.12 15.022l-4.199-2.29a4 4 0 110-5.464l4.2-2.29A3.998 3.998 0 0116.367.24a4 4 0 11-4.285 6.494l-4.2 2.29a4.006 4.006 0 010 1.953l4.199 2.29a4 4 0 11-.96 1.754v.001zM4 12a2 2 0 100-4 2 2 0 000 4zm11-6a2 2 0 100-4 2 2 0 000 4zM15 18a2 2 0 100-4 2 2 0 000 4z" fill="#091334" />
                    </Svg>
                    <Text style={styles.shareButtonText}>Поделиться</Text>
                </TouchableOpacity>

            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        paddingHorizontal: 16
    },
    slider: {
        width: '100%',
        height: 200,
        backgroundColor: 'silver',
        borderRadius: 8,
        marginBottom: 8
    },
    options: {
        width: '100%',
        flexDirection: 'row'
    },
    adsOnSite: {
        height: 112,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#E6F2FF',
        marginRight: 8,
        borderRadius: 6,
    },
    optionsTextLarge: {
        fontSize: 32
    },
    optionsText: {
        fontSize: 16
    },
    autoClass: {
        width: 112,
        height: 112,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        borderColor: '#C4C8D4',
        borderWidth: 1
    },
    bottomActions: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    shareButton: {
        flex: 1,
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 12,
        borderColor: '#C4C8D4',
        borderWidth: 1,
        borderRadius: 6
    },
    shareButtonText: {

    },

})
