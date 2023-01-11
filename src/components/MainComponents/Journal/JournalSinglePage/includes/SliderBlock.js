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
import { ImageSlider } from "react-native-image-slider-banner";


export default function App(props) {
    return (
        <View style={styles.container} >
            <Text style={styles.boldText} >Галерея</Text>
            <ImageSlider
                preview={true}
                data={[
                    { img: 'https://rg.ru/uploads/images/2022/10/04/8_9a9.jpeg' },
                    { img: 'https://media.autoexpress.co.uk/image/private/s--oSvWw2tM--/v1664984236/evo/2022/10/Audi%20RS4%20Competition%20review-9.jpg' },
                    { img: 'https://images.drive.ru/i/0/60cc2c1a745a9a38d75c2f8d.jpg' }
                ]}
                autoPlay={false}
                onItemChanged={(item) => console.log("item", item)}
                closeIconColor="#fff"
                caroselImageStyle={{ resizeMode: 'cover', height: 200 }}
            />

            <View style={styles.containerBlock} >
                <View style={styles.descBlock} >
                    <View style={styles.minBlock} >
                        <Text style={styles.textDesc} >Сити Трансфор...</Text>
                    </View>
                    <View style={styles.minBlock} >
                        <Text style={styles.textDesc}>A3</Text>
                    </View>
                </View>
                <View style={styles.descBlock} >
                    <View style={styles.minBlock} >
                        <Text style={[styles.textDesc, { color: '#6C7694' }]} >Поколение</Text>
                    </View>
                    <View style={styles.minBlock} >
                        <Text style={[styles.textDesc, { color: '#6C7694' }]}>Кузов</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 10
    },
    boldText: {
        fontWeight: '700',
        fontSize: 22,
        lineHeight: 28,
        color: '#091334',
        padding: 16
    },
    containerBlock: {
        padding: 16,
        marginTop: 10
    },
    descBlock: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10
    },
    minBlock: {
        borderColor: '#C4C8D4',
        borderWidth: 1,
        borderRadius: 6,
        width: '49%',
        height: 44,
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 15
    },
    textDesc: {
        fontSize: 16,
        color: '#091334',
        lineHeight: 24
    }
})