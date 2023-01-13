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
import TopNavigation from '../../../../navigation/TopNavigation'
import NavigationBottomMenu from '../../../includes/NavigationBottomMenu'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import DillersBlock from './includes/DillersBlock'
import FilterSvg from '../../../../../assets/Svg/search_component/FilterSvg'
import ListIcon from '../../../../../assets/Svg/Company/ListIcon'
import PriceFilter from './Popup/PriceFilter'

export default function App(props) {
    const [is_open_popup, setIsOpenPopup] = React.useState(false)
    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.header}>
                <View style={[styles.headerItem, styles.flex2]}>
                    <Text style={styles.appName}>Поиск компаний </Text>
                </View>
            </View>
            <TopNavigation navigation={props.navigation} />
            {is_open_popup ?
                <PriceFilter show={is_open_popup} onChange={() => { setIsOpenPopup(!is_open_popup) }} />
                :
                <ScrollView style={{ width: '100%', flex: 1 }} >

                    <View style={{ width: '100%', position: 'relative' }} >
                        <MapView
                            onPress={e => console.log(e.nativeEvent)}
                            style={{ flex: 1, width: '100%', height: 600 }}
                            mapType='standard'
                            showsScale
                            showsCompass
                            showsPointsOfInterest
                            showsBuildings
                            provider={PROVIDER_GOOGLE}
                            loadingEnabled={true}
                            scrollEnabled={true}
                        />
                        <DillersBlock navigation={props.navigation} />
                        <View
                            style={styles.buttonContainer}
                        >
                            <TouchableOpacity
                                
                                style={styles.buttons}>
                                <ListIcon />
                                <Text style={styles.texts} >Список</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => { setIsOpenPopup(true); console.log(is_open_popup) }}
                                style={[styles.buttons, { backgroundColor: 'white', borderColor: '#C4C8D4', borderWidth: 1 }]}>
                                <FilterSvg />
                                <Text style={[styles.texts, { color: '#091334' }]} >Фильтры</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            }
            {
                !is_open_popup &&

                <NavigationBottomMenu navigation={props.navigation} active_page={'Search'} />
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
        // paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    appName: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonContainer: {
        width: '100%',
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // marginTop: 20
        position: 'absolute',
        bottom: 0
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
    texts: {
        marginLeft: 5,
        fontSize: 16,
        color: 'white'
    }
})