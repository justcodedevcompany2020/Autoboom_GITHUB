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
import SettingsIcon from '../../../../assets/Svg/my_profile/Settings'
import CloseIcon from '../../../../assets/Svg/CloseSvg'
import ProfileNavigation from '../../../navigation/ProfileNavigation'
import ProfilePhoto from './includes/ProfilePhoto'
import EmailBlock from './includes/EmailBlock'
import MobileBlock from './includes/MobileBlock'
import AnotherMob from './includes/AnotherMob'
import NavigationBottomMenu from '../../includes/NavigationBottomMenu'
import Languages from './includes/Languages'
import SmsBlock from './includes/SmsBlock'
import News from './includes/News'
import AccountType from './includes/AccountType'
import { useSelector, useDispatch, } from 'react-redux';
import { openLanguagesPopupInMyProfile, openAccaountEditPopupInMyProfile, openNameEditPopupInMyProfile, openEmailPopupInMyProfile } from '../../../redux/actions/actions'
import LanguagesPopup from './Popup/LanguagesPopup'
import AccountEditPopup from './Popup/AccountEditPopup'
import EditNamePopup from './Popup/EditNamePopup'
import EditEmailPopup from './Popup/EditEmail'

export default function App(props) {

    //laguages Popup
    const { is_open_languages_popup_in_my_profile, is_open_account_edit_popup, is_open_name_edit_popup, is_open_email_edit_popup } = useSelector(state => state.justDriveReducer);
    const dispatch = useDispatch();
    const handleOpenLanguagesPopup = () => dispatch(openLanguagesPopupInMyProfile())

    const handleOpenAccountEditPopup = () => dispatch(openAccaountEditPopupInMyProfile())
    const handleOpenNameEditPopup = () => dispatch(openNameEditPopupInMyProfile())

    const handleOpenEmailEditPopup = () => dispatch(openEmailPopupInMyProfile())

    if (is_open_name_edit_popup) {
        return (
            <EditNamePopup />
        )
    }

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
                <ProfilePhoto onPress={handleOpenNameEditPopup} />
                <EmailBlock onPress={handleOpenEmailEditPopup} />
                <MobileBlock />
                <AnotherMob />
                <Languages onPress={handleOpenLanguagesPopup} />
                <SmsBlock />
                <News />
                <AccountType onPress={handleOpenAccountEditPopup} />
            </ScrollView>
            <NavigationBottomMenu navigation={props.navigation} active_page={'Search'} />
            {is_open_languages_popup_in_my_profile ? <LanguagesPopup /> : ''}
            {is_open_account_edit_popup ? <AccountEditPopup /> : ''}
            {is_open_email_edit_popup ? <EditEmailPopup /> : ''}
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