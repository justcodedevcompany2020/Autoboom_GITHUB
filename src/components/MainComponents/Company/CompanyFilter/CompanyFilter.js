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
import { SafeAreaView } from 'react-native-safe-area-context';
import CloseIcon from '../../../../../assets/Svg/CloseIcon'
import DillersBlock from './includes/DillersBlock'
import Arrow from '../../../../../assets/Svg/ArowGray'
import ServiceFilter from './Popup/PriceFilter'

let data = [
    { id: 1, text: 'Официальные дилеры', key: 'Официальные дилеры' },
    { id: 1, text: 'Авторизовано Минфином', key: 'Авторизовано Минфином' },
]

export default function App(props) {

    const [show_service_filter, setShowServiceFilter] = React.useState(false)

    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.header}>
                <TouchableOpacity style={[styles.headerItem]}>
                    <Text style={[styles.appName, { color: '#2B65EE', fontWeight: '400' }]}>очистить</Text>
                </TouchableOpacity>
                <View style={[styles.headerItem, styles.flex2]}>
                    <Text style={[styles.appName, { marginRight: 51 }]}>Фильтры</Text>
                </View>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('CompanyScreen')}
                    style={[styles.headerItem, styles.flex2]}>
                    <CloseIcon />
                </TouchableOpacity>
            </View>
            <ScrollView style={{ width: '100%', flex: 1, }} >

                <Text style={styles.boldText} >Специализации</Text>

                <DillersBlock />

                <Text style={[styles.boldText, { marginTop: -10 }]} >Услуга</Text>
                <View style={{ paddingHorizontal: 16 }} >
                    <TouchableOpacity
                        onPress={() => { setShowServiceFilter(true) }}
                        style={styles.input} >
                        <Text style={styles.inputColor} >Любая</Text>
                        <Arrow />
                    </TouchableOpacity>
                </View>
                <Text style={[styles.boldText, { marginTop: 25 }]} >Марка</Text>
                <View style={{ paddingHorizontal: 16, width: '100%' }} >
                    <TouchableOpacity style={styles.input} >
                        <Text style={styles.inputColor} >Любая</Text>
                        <Arrow />
                    </TouchableOpacity>
                </View>
                <View style={{ paddingHorizontal: 16, width: '100%', marginTop: 20 }} >
                    {data.map((value) => {
                        return (
                            <TouchableOpacity key={value.key} style={styles.selectDiv}>
                                <View style={styles.selectdisActiv} ></View>
                                <Text style={styles.selectDivText} >{value.text}</Text>
                            </TouchableOpacity>
                        )
                    })}

                </View>
            </ScrollView>
            <View style={styles.buttonsContainer} >
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('CompanyScreen')}
                    style={[styles.buttons, { backgroundColor: 'white', borderColor: '#C4C8D4', borderWidth: 1 }]}>
                    <Text style={[styles.text, { color: 'black' }]} >Закрыть</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('CompanyScreen')}
                    style={[styles.buttons,]}>
                    <Text style={[styles.text]} >Показать</Text>
                </TouchableOpacity>
            </View>
            {show_service_filter &&
                <ServiceFilter show={show_service_filter} onChange={() => { setShowServiceFilter(!show_service_filter) }} />
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
    },
    header: {
        width: '100%',
        height: 56,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop:25
    },
    appName: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    boldText: {
        paddingHorizontal: 16,
        marginTop: 20,
        fontSize: 24,
        color: '#091334',
        fontWeight: '700'
    },
    input: {
        width: '100%',
        marginTop: 15,
        borderWidth: 1,
        height: 44,
        paddingHorizontal: 16,
        borderRadius: 6,
        borderColor: '#C4C8D4',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    inputColor: {
        color: '#6C7693',
        fontSize: 16
    },
    selectDiv: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15
    },
    selectdisActiv: {
        width: 20,
        height: 20,
        borderColor: '#C4C8D4',
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: '#F0F1F4'
    },
    selectDivText: {
        color: '#6C7694',
        fontSize: 16,
        marginLeft: 5
    },
    buttons: {
        width: '48%',
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        backgroundColor: '#2B65EE'
    },
    text: {
        marginLeft: 5,
        fontSize: 16,
        color: 'white'
    },
    buttonsContainer: {
        width: '100%',
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        borderTopColor: '#F0F1F4',
        borderTopWidth: 1
    }
})