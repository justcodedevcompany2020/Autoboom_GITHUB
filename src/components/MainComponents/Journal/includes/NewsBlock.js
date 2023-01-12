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

export default function App(props) {
    return (
        <View style={styles.container} >
            <View style={styles.containerHeader} >
                <Text style={styles.boldText} >{props.title}</Text>
                <TouchableOpacity
                    onPress={() => { props.navigation.navigate('JournalThemes') }}
                >
                    <Text style={styles.blueText} >Все</Text>
                </TouchableOpacity>
            </View>
            {props.data.map((item, index) => {
                return (
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('JournalSinglePage')}
                        key={index}
                        style={[styles.Item, index == 2 && { borderBottomColor: 'white' }]}>
                        <Image
                            style={{ width: 120, height: 82, borderRadius: 8 }}
                            source={item.image} />
                        <Text style={styles.title} >{item.date}</Text>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        width: '100%',
        marginTop: 15
    },
    containerHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 15,
        borderBottomWidth: 2,
        borderBottomColor: '#091334'
    },
    boldText: {
        color: '#091334',
        fontSize: 22,
        fontWeight: '700'
    },
    blueText: {
        color: '#2B65EE',
        fontSize: 16,
        fontWeight: '700'
    },
    Item: {
        paddingBottom: 15,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        borderBottomColor: '#F0F1F4',
        borderBottomWidth: 1,
        marginTop: 15
    },
    title: {
        width: '70%',
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '400',
        color: '#091334',
        marginLeft: 20
    },
    postsWrapper: {
        padding: 15,
    }
})