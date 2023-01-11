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
import HeaderLine from '../../../../../../assets/Svg/journal/HeaderLine'

export default function App(props) {
    return (
        <View style={styles.container} >
            <View style={styles.descriptionDiv} >
                <Text style={styles.descBoldText} >
                    «Чтобы выполнить обещание о прорыве в продуктах, мы переосмыслим автомобиль в каждом аспекте за счёт потрясающего дизайна, инноваций и доступной цены»
                </Text>
                <Text style={styles.grayText} >Хенрик Фискер, основатель фирмы Fisker</Text>
                <View style={{ position: 'absolute', right: 15, top: 22 }} >
                    <HeaderLine />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        width: '100%',
        marginTop: 10
    },
    descriptionDiv: {
        borderLeftWidth: 4,
        borderLeftColor: '#FFC895',
        // height: 272,
        position: 'relative',
        paddingLeft: 24,

    },
    descBoldText: {
        lineHeight: 24,
        color: '#091334',
        fontSize: 18,
        width: '81%',
        marginTop: 15
    },
    grayText: {
        lineHeight: 24,
        color: '#091334',
        fontSize: 14,
        width: '81%',
        marginTop: 15
    }
})