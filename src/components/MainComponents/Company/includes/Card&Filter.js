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
import FilterSvg from '../../../../../assets/Svg/search_component/FilterSvg'
import MapIcon from '../../../../../assets/Svg/Map'



export default function App(props) {
    return (
        <View
            style={styles.container}
        >
            <TouchableOpacity

                style={styles.buttons}>
                <MapIcon />
                <Text style={styles.text} >На карте</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => props.navigation.navigate('CompanyFilter')}
                style={[styles.buttons, { backgroundColor: 'white', borderColor: '#C4C8D4', borderWidth: 1 }]}>
                <FilterSvg />
                <Text style={[styles.text, { color: '#091334' }]} >Фильтры</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20
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
    }
})