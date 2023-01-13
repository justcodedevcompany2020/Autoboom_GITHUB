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
                        props.navigation.navigate('SearchComponent')

                    }}
                    style={styles.menuTopButton}
                >
                    <Text style={[styles.menuTopButtonText, route.name === 'SearchComponent' ? styles.menuTopButtonTextActive : null]}>Объявления</Text>
                    {route.name === 'SearchComponent' && <View style={styles.menuTopButtonActiveLine}></View>}
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        props.navigation.navigate('CatalogSelectMarkComponent')

                    }}
                    style={styles.menuTopButton}
                >
                    <Text style={[styles.menuTopButtonText, route.name == 'CatalogSelectMarkComponent' ? styles.menuTopButtonTextActive : null]}>Каталог</Text>

                    {route.name === 'CatalogSelectMarkComponent' && <View style={styles.menuTopButtonActiveLine}></View>}


                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        props.navigation.navigate('JournalPage')

                    }}
                    style={styles.menuTopButton}
                >
                    <Text style={[styles.menuTopButtonText, route.name == 'JournalPage' ? styles.menuTopButtonTextActive : null]}>Журнал</Text>
                    {route.name === 'JournalPage' && <View style={styles.menuTopButtonActiveLine}></View>}
                </TouchableOpacity>


                <TouchableOpacity
                    onPress={() => props.navigation.navigate('CompanyScreen')}
                    style={styles.menuTopButton}
                >
                    <Text style={[styles.menuTopButtonText, route.name == 'CompanyScreen' || route.name === 'CompanyMap' ? styles.menuTopButtonTextActive : null]}>Компании</Text>
                    {route.name === 'CompanyScreen' || route.name === 'CompanyMap' ? <View style={styles.menuTopButtonActiveLine}></View> : ''}
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
        marginBottom: 17
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
        marginRight: 24,
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
