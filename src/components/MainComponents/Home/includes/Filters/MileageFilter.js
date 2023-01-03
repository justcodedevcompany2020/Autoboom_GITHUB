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

export default function App(props) {

    // const [data, setData] = useState(props.data)
    const [data, setData] = useState()
    const [show_mileage_filter, setShowMileageFilter] = useState(true)


    useEffect(() => {

        console.log('PriceFilter component loaded')

    }, []);

    if(show_mileage_filter)
    {
        return (
            <View style={styles.mainWrapper}>
                <TouchableOpacity
                    onPress={() => {
                        props.onChange();
                        setShowMileageFilter(false);
                    }}
                    style={styles.closeSpaceButton}>

                </TouchableOpacity>

                <View style={styles.contentWrapper}>

                    <View style={styles.header}>
                        <Text style={styles.mainTitle}>Пробег</Text>
                        <TouchableOpacity
                            onPress={() => {
                                props.onChange();
                                setShowMileageFilter(false);
                            }}
                        >
                            <CloseSvg/>
                        </TouchableOpacity>
                    </View>



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
        // height: 499,
        flex:1,
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
    }
})
