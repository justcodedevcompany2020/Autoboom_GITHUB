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
    Slider
} from 'react-native';
import { useRoute } from '@react-navigation/native';



export default function App(props) {
    const route = useRoute();
    return (
        <View style={styles.scrollViewWrapper}>
            <ScrollView horizontal={true} style={styles.scrollView}>

                <TouchableOpacity
                    onPress={() => {
                        props.navigation.navigate('MyProfile')

                    }}
                    style={styles.menuTopButton}
                >
                    <Text style={[styles.menuTopButtonText, route.name === 'MyProfile' ? styles.menuTopButtonTextActive : null]}>Профиль</Text>
                    {route.name === 'MyProfile' && <View style={styles.menuTopButtonActiveLine}></View>}
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        props.navigation.navigate('MyAnnouncements')

                    }}
                    style={styles.menuTopButton}
                >
                    <Text style={[styles.menuTopButtonText, route.name == 'MyAnnouncements' ? styles.menuTopButtonTextActive : null]}>Мои объявления</Text>

                    {route.name === 'MyAnnouncements' && <View style={styles.menuTopButtonActiveLine}></View>}


                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        props.navigation.navigate('WalletScreen')

                    }}
                    style={styles.menuTopButton}
                >
                    <Text style={[styles.menuTopButtonText, route.name == 'WalletScreen' ? styles.menuTopButtonTextActive : null]}>Кошелёк</Text>
                    {route.name === 'WalletScreen' && <View style={styles.menuTopButtonActiveLine}></View>}
                </TouchableOpacity>
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    scrollViewWrapper: {
        height: 36,
        width: '100%',
        paddingHorizontal: 16,
        marginBottom: 17,
        marginTop: 25
    },
    scrollView: {
        width: '100%',
        height: 36,
    },
    menuTopButtonWrapper: {
        width: '100%',
        height: 36,
        flexDirection: 'row'
    },

    menuTopButton: {
        flex: 1,
        marginRight: 30,
        height: 36,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    menuTopButtonText: {
        color: '#6C7693',
        fontSize: 16
    },

    menuTopButtonActive: {

    },
    menuTopButtonTextActive: {
        color: '#091334'
    },
    menuTopButtonActiveLine: {
        width: '100%',
        height: 3,
        backgroundColor: '#2B65EE',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2,
        zIndex: 2
    },
})
