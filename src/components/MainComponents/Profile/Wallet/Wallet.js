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
import SettingsIcon from '../../../../../assets/Svg/my_profile/Settings'
import CloseIcon from '../../../../../assets/Svg/CloseSvg'
import ProfileNavigation from '../../../../navigation/ProfileNavigation'


export default function App(props) {
    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.header} >
                <TouchableOpacity>
                    <SettingsIcon />
                </TouchableOpacity>
                <Text style={styles.headerItem} >Профиль</Text>
                <TouchableOpacity style={{ marginRight: -18 }} >
                    <CloseIcon />
                </TouchableOpacity>
            </View>
            <ScrollView style={{ width: '100%', flex: 1 }} >
                <ProfileNavigation navigation={props.navigation} />
            </ScrollView>
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
        paddingTop: 25
    },
    headerItem: {
        color: '#091334',
        fontWeight: '700',
        fontSize: 18
    }
})