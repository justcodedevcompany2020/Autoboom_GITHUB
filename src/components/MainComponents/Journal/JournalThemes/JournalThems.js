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
import Journale from '../includes/Journale'
import NavigationBottomMenu from '../../../includes/NavigationBottomMenu'

export default function App(props) {
    const [journale, setJournale] = React.useState([
        { title: 'Ниссан Джук совершенствуется', date: '28 Октября 2022', image: require('../../../../../assets/images/journaleauto.png'), menuid: 1 },
        { title: 'Новый Тойота Ленд Крузер 2023 года: ждите, скоро буду', date: '28 Октября 2022', image: require('../../../../../assets/images/journaleauto.png'), menuid: 1 },
        { title: 'Ниссан Джук совершенствуется', date: '28 Октября 2022', image: require('../../../../../assets/images/journaleauto.png'), menuid: 1 },
        { title: 'Новый Тойота Ленд Крузер 2023 года: ждите, скоро буду', date: '28 Октября 2022', image: require('../../../../../assets/images/journaleauto.png'), menuid: 1 },
        { title: 'Ниссан Джук совершенствуется', date: '28 Октября 2022', image: require('../../../../../assets/images/journaleauto.png'), menuid: 1 },
        { title: 'Новый Тойота Ленд Крузер 2023 года: ждите, скоро буду', date: '28 Октября 2022', image: require('../../../../../assets/images/journaleauto.png'), menuid: 1 },
    ]);
    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.header}>
                <View style={[styles.headerItem, styles.flex1]}>
                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate('JournalPage')
                        }}
                        style={{}}
                    >
                        <Svg width={43} height={44} viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M25 15l-6.93 6.93a.1.1 0 000 .14L25 29" stroke="#091334" strokeWidth={2} strokeLinecap="round" />
                        </Svg>
                    </TouchableOpacity>
                </View>

                <View style={[styles.headerItem, styles.flex2]}>
                    <View style={styles.headerProf} >
                        <Text style={styles.appName} >Журнал</Text>
                    </View>
                </View>
                <View style={[styles.headerItem, styles.flex1, styles.headerItemRight]}></View>
            </View>
            <ScrollView style={{ width: '100%', flex: 1 }}>
                <View style={styles.boldTextView}>
                    <View style={styles.borderView}>
                        <Text style={styles.boldText} >Бюджетные кроссоверы</Text>
                    </View>
                </View>
                <Journale navigation={props.navigation} data={journale} />
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
        height: 66,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#f1f1f1',
        marginBottom: 20
    },
    headerProf: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between'
    },
    appName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10
    },
    flex1: {
        flex: 1
    },
    flex2: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerItem: {
        height: '100%',
        justifyContent: 'center',
    },
    headerItemRight: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginRight: 15
    },
    boldTextView: {
        padding: 16,

    },
    boldText: {
        fontSize: 24,
        color: '#091334',
        fontWeight: '700'
    },
    borderView: {
        paddingBottom: 20,
        borderBottomWidth: 3
    }
})