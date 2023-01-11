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
import Svg, { Defs, G, Path, Rect, Circle, ClipPath } from "react-native-svg";
import SearchIcon from '../../../../../assets/Svg/Company/Search'

export default function App(props) {
    return (
        <View style={styles.container} >
            <TouchableOpacity>
                <Text style={styles.headerText} >Автомобильные компании в <Text style={[styles.headerText, { color: '#2B65EE' }]} >Израиле</Text></Text>
            </TouchableOpacity>
            <View style={styles.inputDiv} >
                <TextInput
                    style={styles.input}
                    placeholder={'Поиск по названию'}
                    placeholderTextColor={'#6C7693'}
                />
                <SearchIcon />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        width: '100%'
    },
    headerText: {
        fontSize: 22,
        lineHeight: 28,
        fontWeight: '700',
        color: '#091334'
    },
    inputDiv: {
        width: '100%',
        height: 44,
        borderColor: '#C4C8D4',
        borderWidth: 1,
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        padding: 10
    }
})