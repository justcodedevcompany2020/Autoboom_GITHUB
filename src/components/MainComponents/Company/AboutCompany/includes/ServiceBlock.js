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
import ServiceBlue from '../../../../../../assets/Svg/Company/ServiceBlue'
import CompanyOk from '../../../../../../assets/Svg/Company/CompanyOk'

export default function App(props) {
    return (
        <View style={styles.conatinerServices}>
            <View style={styles.header} >
                <Text style={styles.headerText}>
                    Сервисный центр BMW, Иерусалим
                </Text>
                <View style={{ marginTop: 5 }} >
                    <ServiceBlue />
                </View>
            </View>
            <Text style={styles.blueText} >Илан Кар Гласс</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }} >
                <CompanyOk />
                <Text style={styles.grayText} >Авторизовано Минфином</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    conatinerServices: {
        width: '100%',
        borderRadius: 12,
        borderColor: '#C4C8D4',
        borderWidth: 1,
        height: 164,
        padding: 16
    },
    header: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
    },
    headerText: {
        color: '#091334',
        fontSize: 22,
        fontWeight: '700'
    },
    blueText: {
        marginTop: 10,
        color: '#2B65EE',
        fontSize: 14
    },
    grayText: {
        color: '#6C7694',
        fontSize: 14,
        marginLeft: 5
    }
})