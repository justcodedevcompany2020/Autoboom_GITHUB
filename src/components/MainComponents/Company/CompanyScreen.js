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
import TopNavigation from '../../../../src/navigation/TopNavigation';
import CompanySearchBlock from './includes/CompanySearchBlock';
import DillersBlock from './includes/DillersBlock';
import NavigationBottomMenu from '../../includes/NavigationBottomMenu'
import CardAndFilter from './includes/Card&Filter'

export default function App(props) {
    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.header}>
                <View style={[styles.headerItem, styles.flex2]}>
                    <Text style={styles.appName}>Поиск компаний </Text>
                </View>
            </View>
            <TopNavigation navigation={props.navigation} />
            <ScrollView style={{ width: '100%', flex: 1 }} >
                <CompanySearchBlock />
                <DillersBlock navigation={props.navigation} />
                <CardAndFilter navigation={props.navigation} />
            </ScrollView>
            <NavigationBottomMenu navigation={props.navigation} active_page={'Search'} />
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
        // paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    appName: {
        fontSize: 18,
        fontWeight: 'bold'
    },
})