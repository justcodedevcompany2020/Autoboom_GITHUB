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
import { closeAccaountEditPopupInMyProfile } from '../../../../redux/actions/actions'
import SearchIcon from '../../../../../assets/Svg/Company/Search'

export default function App(props) {

    // const [sortBy, setSortBy] = React.useState('')
    const { is_open_account_edit_popup } = useSelector(state => state.justDriveReducer);
    const dispatch = useDispatch();
    const handeCloseAccaountEditPopupInMyProfile = () => dispatch(closeAccaountEditPopupInMyProfile())

    return (
        <SafeAreaView style={styles.mainWrapper} >
            <View style={styles.contentWrapper}>

                <View style={styles.header}>
                    <View>

                    </View>
                    <Text style={styles.mainTitle}>Смена типа аккаунта</Text>
                    <TouchableOpacity
                        onPress={() => handeCloseAccaountEditPopupInMyProfile()}
                    >
                        <CloseSvg />
                    </TouchableOpacity>
                </View>


                <ScrollView style={{ width: '100%', flex: 1 }}>
                    <View style={styles.centerContentWrapper}>
                        <View style={styles.inputDiv} >
                            <TextInput
                                style={styles.input}
                                placeholder={'Поиск по названию'}
                                placeholderTextColor={'#6C7693'}
                            />
                            <SearchIcon />
                        </View>
                        <Text style={styles.textDesc} >Широкие возможности для менеджеров компаний</Text>
                        <TouchableOpacity>
                            <Text style={[styles.textDesc, { marginTop: 10, color: '#2B65EE' }]} >Не нашел свою компанию</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
                <View style={styles.footer} >
                    <TouchableOpacity style={styles.button} >
                        <Text style={{ color: '#C4C8D4' }} >Отправить</Text>
                    </TouchableOpacity>
                </View>
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
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: 25
    },
    centerContentWrapper: {
        width: '100%',
        paddingHorizontal: 16,
        marginBottom: 20
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
        // marginTop: 20,
        padding: 10,
        marginBottom: 10
    },
    textDesc: {
        color: '#6C7694',
        fontSize: 14
    },
    button: {
        width: '92%',
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F1F4',
        marginTop: 15,
        borderRadius: 6
    },
    footer: {
        height: 80,
        borderTopColor: '#F0F1F4',
        borderTopWidth: 1,
        alignItems: 'center'
    }
})