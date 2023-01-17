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
import CloseSvg from '../../../../../assets/Svg/CloseSvg'
import SelectedSvg from '../../../../../assets/Svg/SelectedSvg'
import { useSelector, useDispatch, } from 'react-redux';
import { closeLanguagesPopupInMyProfile } from '../../../../redux/actions/actions'


let data = [
    { id: 1, languages: 'עברית', key: 'עברית' },
    { id: 1, languages: 'العربية', key: 'العربية' },
    { id: 1, languages: 'English', key: 'English' },
    { id: 1, languages: 'Francais', key: 'Francais' },
    { id: 1, languages: 'Русский', key: 'Русский' },
]

export default function App(props) {

    const [sortBy, setSortBy] = React.useState('')
    const { is_open_languages_popup_in_my_profile } = useSelector(state => state.justDriveReducer);
    const dispatch = useDispatch();
    const handeCloseLanguagesPopup = () => dispatch(closeLanguagesPopupInMyProfile())

    return (
        <SafeAreaView style={styles.mainWrapper} >
            <View style={styles.contentWrapper}>

                <View style={styles.header}>
                    <Text style={styles.mainTitle}>Язык</Text>
                    <TouchableOpacity
                        onPress={() => handeCloseLanguagesPopup()}
                    >
                        <CloseSvg />
                    </TouchableOpacity>
                </View>


                <ScrollView style={{ width: '100%', flex: 1 }}>


                    <View style={styles.centerContentWrapper}>

                        {data.map((value) => {
                            return (
                                <TouchableOpacity
                                    key={value.key}
                                    onPress={() => {
                                        setSortBy(value.key)
                                        setTimeout(() => {
                                            handeCloseLanguagesPopup()
                                        }, 1000)
                                    }
                                    }
                                    style={styles.item}>
                                    <Text
                                        key={value.key}
                                        style={styles.itemText}>{value.languages}</Text>
                                    {sortBy === value.key && <SelectedSvg />}
                                </TouchableOpacity>
                            )
                        })}
                    </View>

                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainWrapper: {
        width: '100%',
        flex: 1,
        height: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,0.44)',
        zIndex: 5
    },
    closeSpaceButton: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.44)'
    },
    contentWrapper: {
        width: '100%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        left: 0,
        // height: 399,
        flex: 1,
        maxHeight: 520,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    },
    header: {
        width: '100%',
        height: 56,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    mainTitle: {
        padding: 14,
        fontSize: 22,
        color: '#091334',
        fontWeight: 'bold'
    },
    footer: {
        width: '100%',
        height: 72,
        paddingHorizontal: 16,
        justifyContent: "center",
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#F0F1F4'
    },
    button: {
        width: '100%',
        height: 48,
        backgroundColor: '#2B65EE',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6
    },
    buttonText: {
        color: 'white',
        fontSize: 16
    },


    inputWrapper: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 16,
        justifyContent: 'space-between',
        marginBottom: 12
    },
    priceInput: {
        width: '49%',
        height: 44,
        borderColor: '#C4C8D4',
        borderWidth: 1,
        borderRadius: 6,
        paddingHorizontal: 12
    },

    centerContentWrapper: {
        width: '100%',
        paddingHorizontal: 16,
    },
    item: {
        width: '100%',
        height: 56,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#F0F1F4'
    },
    itemText: {
        fontSize: 18,
        color: '#091334'
    }
})