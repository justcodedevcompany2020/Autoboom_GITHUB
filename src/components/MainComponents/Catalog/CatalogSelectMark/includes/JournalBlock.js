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
import SpecialOfferSvg from '../../../../../../assets/Svg/search_component/SpecialOfferSvg';

export default function App(props) {

    const [data, setData] = useState(props.data)


    useEffect(() => {
        console.log('See ADS component loaded')
    }, []);

    return (
        <View style={styles.wrapper}>

                <View style={styles.mainTitleWrapper}>
                    <Text style={styles.mainTitle}> Журнал</Text>
                </View>

                <View style={{width: '100%'}}>

                    {data.map((item, index) => {

                        return (

                            <TouchableOpacity key={index} style={styles.item}>

                                <Text style={styles.review_text}>Обзоры</Text>
                                <Text style={styles.title}>{item.title}</Text>

                                <View style={{flexDirection:'row'}}>
                                    <Text style={styles.description}>{item.description}</Text>
                                    <View style={styles.imageWrapper}>
                                        <Image style={styles.image} source={item.image}/>
                                    </View>
                                </View>

                            </TouchableOpacity>

                        )
                    })}

                </View>

                <View style={styles.showMoreButtonWrapper}>
                    <TouchableOpacity style={styles.showMoreButton}>
                        <Text style={styles.showMoreButtonText}>Смотреть больше статей</Text>
                    </TouchableOpacity>

                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        marginBottom: 16,
        borderRadius: 8,
        paddingHorizontal:16
    },
    mainTitle: {
        lineHeight:32,
        fontSize:24,
        fontWeight:'bold',
        marginBottom: 8
    },
    mainTitleWrapper: {
        borderBottomColor:'black',
        borderBottomWidth:2
    },
    item: {
        width: '100%',
        marginBottom: 16
    },
    review_text: {
        color: '#6C7694',
        fontSize: 14,
        marginTop:16,
        marginBottom: 8
    },
    title: {
        fontSize:18,
        fontWeight: 'bold',
        lineHeight: 24,
        marginBottom: 6
    },
    description: {
        flex:1,
        lineHeight: 20,
        fontSize: 14
    },

    imageWrapper: {
        width: 120,
        height: 76,
        borderRadius: 8,
        overflow:'hidden',

    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode:'cover',
        borderRadius: 8,
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
