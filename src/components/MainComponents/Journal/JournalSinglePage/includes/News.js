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

export default function App() {
    return (
        <View style={styles.container} >
            <Text style={styles.headetText} >Что известно о «Груше»</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginTop: 15 }} >
                <Image
                    style={{ width: '49%', borderRadius: 8, height: 100 }}
                    source={require('../../../../../../assets/images/journaleauto.png')} />

                <Image
                    style={{ width: '49%', borderRadius: 8, height: 100 }}
                    source={require('../../../../../../assets/images/journaleauto.png')} />

            </View>
            <Text style={styles.descText} >
                На опубликованных фотографиях — компактный кроссовер с крупными колесами и ниспадающей крышей. Оформление передней части схоже с кроссовером Фискер Океан.
            </Text>
            <Image
                style={{ width: '100%', borderRadius: 8, marginTop: 10 }}
                source={require('../../../../../../assets/images/journaleauto.png')} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginTop: 10 }} >
                <Image
                    style={{ width: '49%', borderRadius: 8, height: 100 }}
                    source={require('../../../../../../assets/images/journaleauto.png')} />
                <TouchableOpacity
                    style={{ width: '49%', borderRadius: 8, height: 100 }}
                >
                    <Image
                        style={{ width: '100%', borderRadius: 8, height: 100 }}
                        source={require('../../../../../../assets/images/redcar.png')} />
                </TouchableOpacity>
            </View>
            <Text style={styles.descText} >Компания Fisker, организованная Хенриком Фискером в 2007 году, очень долго шла к своей цели. С момента дебюта первой модели — подключаемого гибридного спортивного седана Фискер Карма — прошло уже более 10 лет, за которые Fisker Automotive признана банкротом, продана китайцам и переименована в Karma Automotive. Fisker успела посудиться с Tesla, создать и забросить дорогой электро-седан EMotion, позаниматься суперконденсаторами на основе графена… Как вдруг, в середине ноября 2021 года, феникс, то есть, Фискер, возродился из пепла — компания таки довела до серийного производства электрический кроссовер Океан. Да еще какой — в топовой версии двухмоторный и полноприводный, с отдачей 558 л. с., разгоном до «сотни» за 3,9 секунды и запасом хода на одной зарядке около 630 км. Выпуск налажен на заводе Magna в Австрии. Пока объемы производства небольшие — до конца первого квартала 2023 года с конвейера сойдет только 300 машин. Но темп будет нарастать: в 2023 году Magna планирует выпустить уже 42 400 кроссоверов.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 17
    },
    headetText: {
        fontSize: 24,
        color: '#091334',
        fontWeight: '700',
        lineHeight: 32
    },
    descText: {
        fontSize: 16,
        color: '#091334',
        marginTop: 16,
        lineHeight: 24
    }
})