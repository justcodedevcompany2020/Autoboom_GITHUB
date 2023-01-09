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
            <Text style={styles.headetText} >Фискер Pear. «Груша» недорого</Text>
            <Image
                style={{ width: '100%', borderRadius: 8, marginTop: 10 }}
                source={require('../../../../../../assets/images/journaleauto.png')} />
            <Text style={styles.descText} >Компания Fisker анонсировала выход своей второй модели под названием Pear («Груша») и даже опубликовала первые фотографии прототипа. PEAR на самом деле расшифровывается как Personal Electric Automotive Revolution и к обычной груше никакого отношения не имеет. Хенрик Фискер обещает, что будущий электрокар Pear окажется «внеклассовой» моделью, но уже сейчас понятно, что это кроссовер, причем, недорогой: ориентировочная стоимость базовой версии заявлена на отметке 29 900 долларов. Для сравнения: самая простая версия первенца фирмы, Фискер Океан, оценивается в 37 499 долларов. Новая «Груша» хоть и будет стоить недорого, но обещает приличный запас хода — порядка 500 км.</Text>
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