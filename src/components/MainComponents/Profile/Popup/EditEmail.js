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
import { closeEmailPopupInMyProfile } from '../../../../redux/actions/actions'
import SearchIcon from '../../../../../assets/Svg/Company/Search'

export default function App(props) {

    const [editEmail, setEditEmail] = React.useState(false)
    const { is_open_email_edit_popup } = useSelector(state => state.justDriveReducer);
    const dispatch = useDispatch();
    const handeCloseEmailPopupInMyProfile = () => dispatch(closeEmailPopupInMyProfile())

    return (
        <SafeAreaView style={styles.mainWrapper} >
            <View style={styles.contentWrapper}>
                <View style={styles.header}>
                    <View></View>
                    <Text style={styles.mainTitle}>Электронная почта</Text>
                    <TouchableOpacity
                        onPress={() => handeCloseEmailPopupInMyProfile()}
                    >
                        <CloseSvg />
                    </TouchableOpacity>
                </View>


                <ScrollView style={{ width: '100%', flex: 1 }}>
                    <View style={styles.centerContentWrapper}>
                        <View style={[styles.inputDiv, editEmail && { backgroundColor: 'white' }]} >
                            <TextInput
                                style={[styles.input]}
                                placeholder={!editEmail ? 'autoboom@gmail.com' : 'Укажите ваш e-mail'}
                                placeholderTextColor={'#6C7693'}
                                pointerEvents={!editEmail && 'none'}
                            />
                        </View>
                        {editEmail && <Text style={styles.textDesc} >Мы отправим проверочный код вам на почту</Text>}

                    </View>

                </ScrollView>
                <View style={styles.footer} >
                    
                    <TouchableOpacity
                        onPress={() => setEditEmail(true)}
                        style={styles.button} >
                        <Text>Изменить почту</Text>
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
        backgroundColor: '#F0F1F4',
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
        backgroundColor: 'white',
        marginTop: 15,
        borderRadius: 6,
        borderColor: '#C4C8D4',
        borderWidth: 1
    },
    footer: {
        height: 80,
        borderTopColor: '#F0F1F4',
        borderTopWidth: 1,
        alignItems: 'center'
    }
})