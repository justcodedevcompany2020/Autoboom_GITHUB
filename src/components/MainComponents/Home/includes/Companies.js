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

    // const [data, setData] = useState(JSON.parse(props.data))
    const [data, setData] = useState(props.data)
    // const [data, setData] = useState([
    //     {title: 'Автосалон', icon: <AutosalonSvg/> },
    //     {title: 'Автосалон', icon: <AutosalonSvg/> },
    //     {title: 'Автосалон', icon: <AutosalonSvg/> },
    //     {title: 'Автосалон', icon: <AutosalonSvg/> },
    //     {title: 'Автосалон', icon: <AutosalonSvg/> },
    //     {title: 'Автосалон', icon: <AutosalonSvg/> },
    //     {title: 'Автосалон', icon: <AutosalonSvg/> },
    //     {title: 'Автосалон', icon: <AutosalonSvg/> },
    // ])

    useEffect(() => {

        console.log('Companies component loaded')


    }, []);

    return (
       <View style={styles.wrapper}>

           <Text style={styles.mainTitle}>Компании</Text>

           <ScrollView horizontal={true} style={{width: '100%'}}>

               {data.map((item, index) => {
                   return (
                       <TouchableOpacity key={index} style={styles.Item}>

                           {item.icon}

                           <Text style={styles.text}>{item.title}</Text>

                       </TouchableOpacity>
                   )
               })}

           </ScrollView>
       </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        paddingLeft: 16,
        // marginTop: 24,
        marginBottom: 30
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
        width: 140,
        height: 104,
        marginRight: 8,
        backgroundColor:'#F0F1F4',
        borderRadius: 8
    },
    text: {
        width: '100%',
        marginTop: 12,
        color: '#091334',
        fontSize: 16,
        textAlign:'center'
    },

})
