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


let data = [
    { id: 1, name: 'Экономичные кроссоверы' },
    { id: 2, name: 'Гибриды' },
    { id: 3, name: 'Недорогие седаны' },
    { id: 4, name: 'Электрокары' },
    { id: 5, name: 'Городские пикапы' },
    { id: 6, name: 'Большие джипы' },
    { id: 7, name: 'Экономичные хэтчбеки' },
]


export default function App(props) {
    return (
        <View style={styles.container} >
            <Text style={styles.boldText} >Все темы</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }} >
                {data.map((value, index) => {
                    return (
                        <TouchableOpacity
                            key={index}
                            style={styles.blueBotton}
                        >
                            <Text style={styles.blueText} >{value.name}</Text>
                        </TouchableOpacity>
                    )
                })}


            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16
    },
    boldText: {
        fontSize: 22,
        fontWeight: '700',
        color: '#091334',
        marginBottom:15
    },
    blueBotton: {
        backgroundColor: '#E6F2FF',
        alignItems: 'center',
        padding: 16,
        // height: 36,
        borderRadius: 100,
        marginTop: 10
    },
    blueText: {
        color: '#2B65EE',
        fontSize: 16
    }
})