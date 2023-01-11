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
import Whatsapp from '../../../../../../assets/Svg/journal/Watsapp';
import Facebook from '../../../../../../assets/Svg/journal/Facebook';
import Twitter from '../../../../../../assets/Svg/journal/Twitter';
import Telegram from '../../../../../../assets/Svg/journal/Telegram';


const data = [
    { id: 1, icon: <Whatsapp /> },
    { id: 2, icon: <Facebook /> },
    { id: 3, icon: <Twitter /> },
    { id: 1, icon: <Telegram /> },
]

export default function App(props) {
    return (
        <View style={styles.container} >
            <Text style={styles.boldText} >Отправь статью друзьям</Text>
            <View style={styles.socialDiv} >
                {data.map((value, index) => {
                    return (
                        <TouchableOpacity
                            style={styles.sociality}
                            key={index}>
                            {value.icon}
                        </TouchableOpacity>
                    )
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 16,
        marginTop: 10
    },
    boldText: {
        fontWeight: '700',
        fontSize: 22,
        lineHeight: 28,
        color: '#091334'
    },
    socialDiv: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop:20
    },
    sociality: {
        width: 79,
        height: 70,
        backgroundColor: '#F0F1F4',
        borderRadius: 1000,
        alignItems: 'center',
        justifyContent: 'center'
    }
})