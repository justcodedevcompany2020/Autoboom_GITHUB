import { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button,
    TouchableOpacity,
    TouchableHighlight,
    ScrollView,
    Image,
} from 'react-native';
import Svg, { Defs, G, Path, Rect, Circle, ClipPath } from "react-native-svg";


export default function App({ title, firstText, secondText, data }) {
    const [open, setOpen] = useState(false)
    return (
        <View style={styles.banner}>
            <TouchableOpacity
                onPress={() => { setOpen(!open) }}
                style={styles.dropdown} >
                <Text style={styles.title}>{title}</Text>
                <View style={open ? { transform: [{ rotate: '360 deg' }] } : { transform: [{ rotate: '180 deg' }] }} >
                    <Svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M1 8.5L8 1.5L15 8.5" stroke="#6C7694" stroke-width="2" stroke-linecap="round" />
                    </Svg>
                </View>
            </TouchableOpacity>
            {
                open &&
                <View style={styles.listDiv} >
                    {data?.map((value, index) => {
                        return (
                            <View key={index} style={styles.list} >
                                <Text style={styles.grayText}>{value.firstText}</Text>
                                <Text style={styles.blackText} >{value.secondText}</Text>
                            </View>
                        )
                    })}

                </View>
            }

        </View>
    )
}


const styles = StyleSheet.create({
    dropdown: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
 
    },
    banner: {
        width: '100%',
        padding: 15,
   
    },
    title: {
        color: '#091334',
        fontSize: 22,
        fontWeight: '700'
    },
    list: {
        paddingTop: 25,
        paddingBottom: 15,
        borderBottomColor: '#F0F1F4',
        borderBottomWidth: 1
    },
    grayText: {
        color: '#6C7693',
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 24
    },
    blackText: {
        color: '#091334',
        fontSize: 18,
        fontWeight: '400',
        lineHeight: 24,
        marginTop: 10
    }
})