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
import { useSelector, useDispatch, } from 'react-redux';
import { closeNameEditPopupInMyProfile } from '../../../../redux/actions/actions'

export default function App(props) {
    return (
        <View style={styles.container}   >
            <Text style={styles.emailText} >Адрес электронной почты</Text>
            <TouchableOpacity
                style={styles.buttonBlue}
                onPress={props.onPress}
            >
                <Text style={styles.buttonText} >Добавить e-mail</Text>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 15,
        paddingHorizontal: 16
    },
    emailText: {
        fontWeight: '700',
        fontSize: 22,
        color: '#091334',
        marginBottom:10
    },
    buttonBlue: {
        width: '100%',
        // marginTop: 20,
        backgroundColor: '#E6F2FF',
        marginTop: 5,
        height: 44,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#2B65EE',
        fontSize:16
    }
})