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
import Share from '../../../../../assets/Svg/journal/Share'
import Publish from './includes/Publish'
import Description from './includes/Description'
import CarsNews from './includes/CarsNews'
import News from './includes/News'

export default function App(props) {
    return (
        <SafeAreaView
            style={styles.container}
        >
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
                        <Image
                            style={{ width: 24, height: 24 }}
                            source={require('../../../../../assets/images/proficon.png')} />
                        <Text style={styles.appName} >Рахим Фарт</Text>
                    </View>
                    <Text style={styles.desc} >
                        9 декабря 2022
                    </Text>
                </View>

                <View style={[styles.headerItem, styles.flex1, styles.headerItemRight]}>
                    <TouchableOpacity style={{}}>
                        <Share />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView style={{ width: '100%', flex: 1 }} >
                <Publish />
                <Description />
                <CarsNews />
                <News />
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
    profileButton: {

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
    desc: {
        color: '#6C7693',
        fontSize: 12,
        marginTop: 5
    }
})