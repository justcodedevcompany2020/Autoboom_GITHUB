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
    TextInput
} from 'react-native';


import {
    SafeAreaView,
    SafeAreaProvider,
    SafeAreaInsetsContext,
    useSafeAreaInsets,
    initialWindowMetrics,
} from 'react-native-safe-area-context';
// import DropShadow from "react-native-drop-shadow";

import Svg, {Defs, G, Path, Rect, Circle, ClipPath} from "react-native-svg";
import {useEffect, useState} from "react";
import CloseSvg from '../../../../../../assets/Svg/CloseSvg';
import SelectedSvg from '../../../../../../assets/Svg/SelectedSvg';

export default function App(props) {

    // const [data, setData] = useState(props.data)
    // const [data, setData] = useState([])

    const [priceFrom, setPriceFrom] = useState(null);
    const [priceTo, setPriceTo] = useState(null);
    const [activePrice, setActivePrice] = useState(null);
    const [show_price_filter, setShowPriceFilter] = useState(true)



    const onChangePriceFrom = async (price) => {
        setPriceFrom(price)
    }
    const onChangePriceTo = async (price) => {
        setPriceTo(price)
    }

    const onChangeActivePrice = async (price) => {
        setActivePrice(price)
    }


    useEffect(() => {

        console.log('PriceFilter component loaded')

    }, []);

    if (show_price_filter)
    {
        return (
            <View style={styles.mainWrapper}>
                <TouchableOpacity onPress={() => {setShowPriceFilter(false); props.onChange(); }} style={styles.closeSpaceButton}>

                </TouchableOpacity>

                <View style={styles.contentWrapper}>

                    <View style={styles.header}>
                        <Text style={styles.mainTitle}>Цена</Text>
                        <TouchableOpacity onPress={() => {props.onChange();setShowPriceFilter(false)}}>
                            <CloseSvg/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputWrapper}>

                        <TextInput
                            style={styles.priceInput}
                            onChangeText={onChangePriceFrom}
                            value={priceFrom}
                            placeholder="от 20 200 ₪"
                            keyboardType="numeric"
                        />
                        <TextInput
                            style={styles.priceInput}
                            onChangeText={onChangePriceTo}
                            value={priceTo}
                            placeholder="до 223 909 ₪"
                            keyboardType="numeric"
                        />
                    </View>

                    <ScrollView style={{width: '100%', flex:1}}>


                        <View style={styles.centerContentWrapper}>



                            <TouchableOpacity onPress={() => {onChangeActivePrice(0)}}  style={styles.item}>
                                <Text style={styles.itemText}>Менее 50 000 ₪</Text>

                                {activePrice == 0 &&  <SelectedSvg/>}
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => {onChangeActivePrice(1)}}  style={styles.item}>
                                <Text style={styles.itemText}>Более 50 000 ₪</Text>

                                {activePrice == 1 &&  <SelectedSvg/>}
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => {onChangeActivePrice(2)}}  style={styles.item}>
                                <Text style={styles.itemText}>Менее 100 000 ₪</Text>

                                {activePrice == 2 &&  <SelectedSvg/>}
                            </TouchableOpacity>
                            <TouchableOpacity  onPress={() => {onChangeActivePrice(3)}} style={styles.item}>
                                <Text style={styles.itemText}>Более 100 000 ₪</Text>

                                {activePrice == 3 &&  <SelectedSvg/>}
                            </TouchableOpacity>
                            <TouchableOpacity  onPress={() => {onChangeActivePrice(4)}} style={styles.item}>
                                <Text style={styles.itemText}>Менее 150 000 ₪</Text>

                                {activePrice == 4 &&  <SelectedSvg/>}
                            </TouchableOpacity>
                            <TouchableOpacity  onPress={() => {onChangeActivePrice(5)}} style={[styles.item, {marginBottom: 22}]}>
                                <Text style={styles.itemText}>Более 150 000 ₪</Text>

                                {activePrice == 5 &&  <SelectedSvg/>}
                            </TouchableOpacity>


                        </View>

                    </ScrollView>


                    <View style={styles.footer}>

                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Показать 325 объявлений</Text>
                        </TouchableOpacity>

                    </View>


                </View>

            </View>
        );
    }

}

const styles = StyleSheet.create({

    mainWrapper: {
        width: '100%',
        // flex:1,
        height: '100%',
        position:'absolute',
        bottom: 0,
        left: 0,
        // backgroundColor:'rgba(0,0,0,0.44)',
        zIndex: 5
    },
    closeSpaceButton: {
        flex:1 ,
        backgroundColor:'rgba(0,0,0,0.44)'
    },
    contentWrapper: {
        width: '100%',
        backgroundColor: 'white',
        position:'absolute',
        bottom: 0,
        left: 0,
        // height: 399,
        flex:1,
        maxHeight: 480,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    },
    header: {
        width: '100%',
        height: 56,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    mainTitle: {
        padding: 14,
        fontSize: 22,
        color: '#091334',
        fontWeight:'bold'
    },
    footer: {
        width: '100%',
        height: 72,
        paddingHorizontal: 16,
        justifyContent:"center",
        alignItems:'center',
        borderTopWidth:1,
        borderTopColor: '#F0F1F4'
    },
    button:{
        width: '100%',
        height: 48,
        backgroundColor:'#2B65EE',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6
    },
    buttonText: {
        color: 'white',
        fontSize: 16
    },


    inputWrapper: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 16,
        justifyContent:'space-between',
        marginBottom: 12
    },
    priceInput: {
        width: '49%',
        height: 44,
        borderColor: '#C4C8D4',
        borderWidth: 1,
        borderRadius: 6,
        paddingHorizontal: 12
    },

    centerContentWrapper: {
        width: '100%',
        paddingHorizontal: 16,
    },
    item: {
        width: '100%',
        height: 56,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomWidth: 1,
        borderBottomColor: '#F0F1F4'
    },
    itemText: {
        fontSize: 18,
        color: '#091334'
    }
})
