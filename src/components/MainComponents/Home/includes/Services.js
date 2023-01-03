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

    const [data, setData] = useState(props.data)

    useEffect(() => {

        console.log('Services component loaded')

    }, []);

    return (
       <View style={styles.wrapper}>

            <View style={styles.mainWrapper}>
                <Text style={styles.mainTitle}>Услуги</Text>

                <TouchableOpacity  style={styles.showAll}>

                    <Text style={styles.showAllText}>Все</Text>

                </TouchableOpacity>
            </View>
           <ScrollView horizontal={true} style={{width: '100%'}}>

               <View style={{width: 900, flexDirection:'row', flexWrap:'wrap'}}>

                   {data.map((item, index) => {
                       return (
                           <TouchableOpacity key={index} style={styles.Item}>

                               <Text style={styles.text}>{item.title}</Text>

                           </TouchableOpacity>
                       )
                   })}

               </View>



           </ScrollView>
       </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        paddingLeft: 16,
        // marginTop: 24,
        marginBottom: 14
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
        backgroundColor:'#F0F1F4',
        borderRadius: 100,
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginBottom: 16
    },
    text: {
        width: '100%',
        color: '#091334',
        fontSize: 16,
        textAlign:'center'
    },

    mainWrapper:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 16
    },
    showAll:{

    },
    showAllText:{
        fontSize: 16,
        color: '#2B65EE'
    },

})
