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

// import AutoserviceSvg from '../../../../assets/Svg/companies/autoservice'
// import AutosalonSvg from '../../../../assets/Svg/companies/autosalonSvg'
import Svg, {Defs, G, Path, Rect, Circle, ClipPath} from "react-native-svg";

import {useEffect, useState} from "react";

export default function App(props) {

    const [description, setDescription] = useState('Недостатков нет, достоинства все знают!)не ломается, ликвидный 100%,выглядит отлично,едет превосходно!авто в идеальном сосотянии,салон пахнет новым!С кучей допов, пленка спереди и сза Недостатков нет, достоинства все знают!)не ломается, ликвидный 100%,выглядит отлично,едет превосходно!авто в идеальном сосотянии,салон пахнет новым!С кучей допов, пленка спереди и сза')
    const [show_more, setShowMore] = useState(false)
    useEffect(() => {


    }, []);

    return (
       <View style={styles.wrapper}>

            <View style={styles.mainWrapper}>
                <Text style={styles.mainTitle}>Описание продавца</Text>

                <View style={styles.descriptionWrapper}>
                    <Text numberOfLines={show_more ? 1000 : 6}  style={styles.description}>{description}</Text>

                    {!show_more &&

                        <View style={styles.white}>

                        </View>

                    }
                </View>


                {show_more ?
                    <TouchableOpacity onPress={() => {setShowMore(false)}} style={styles.actionButton}>
                        <Text style={styles.actionText}>Свернуть</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={() => {setShowMore(true)}} style={styles.actionButton}>
                        <Text style={styles.actionText}>Читать полностью</Text>
                    </TouchableOpacity>
                }


            </View>


       </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        paddingHorizontal: 16,
        // marginTop: 24,
        marginBottom: 32
    },

    mainTitle: {
        color: '#091334',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20
    },
    Item: {
        justifyContent:'center',
        alignItems:'center',
        marginRight: 8,
        backgroundColor:'#E5F2FF',
        borderRadius: 100,
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginBottom: 16
    },
    text: {
        width: '100%',
        color: '#2B65EE',
        fontSize: 16,
        textAlign:'center'
    },

    mainWrapper:{
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingRight: 16
    },
    showAll:{

    },
    showAllText:{
        fontSize: 16,
        color: '#2B65EE'
    },

    descriptionWrapper: {

    },
    description: {
        lineHeight: 24
    },

    actionButton: {
        width: '100%',
        height:  48,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderWidth: 1,
        borderColor:'#C4C8D4',
        borderRadius: 6,
        marginTop: 8
    },
    actionText: {
        fontSize: 16,
        color: '#091334'
    },

    white: {
        width:'100%',
        height: 30,
        backgroundColor: 'rgba(255,255,255,0.74)',
        position:'absolute',
        bottom: 0,
        left: 0,

    }
})
