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

export default function App(props) {
    return (
        <View style={styles.container} >
            <View>
                <Image
                    style={{ width: 97, height: 97, borderRadius: 1000, position: 'relative' }}
                    source={require('../../../../../assets/images/profilePicture.png')} />
                <TouchableOpacity

                    activeOpacity={0.7} >
                    <Image
                        style={{ width: 40, height: 40, position: 'absolute', bottom: 0, right: 0 }}
                        source={require('../../../../../assets/images/Frame1883.png')}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.userName} >Иммануил</Text>
                <TouchableOpacity
                    onPress={props.onPress}
                >
                    <Text style={styles.editProfileLink} >Изменить имя</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    userName: {
        fontWeight: '700',
        fontSize: 22,
        color: '#091334'
    },
    editProfileLink: {
        color: '#2B65EE',
        textAlign: 'center',
    }
})