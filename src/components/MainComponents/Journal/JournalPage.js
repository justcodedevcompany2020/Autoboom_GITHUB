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
import TopNavigation from '../../../navigation/TopNavigation'
import NavigationBottomMenu from '../../includes/NavigationBottomMenu';
import PopularMarks from './includes/PopularMarks'
import Journale from './includes/Journale'
import CitySlider from './includes/CitysSlider'
import NewsBlock from './includes/NewsBlock'
import AllThemes from './includes/AllThemes'



export default function App(props) {

    const [journale, setJournale] = React.useState([
        { title: 'Ниссан Джук совершенствуется', date: '28 Октября 2022', image: require('../../../../assets/images/journaleauto.png'), menuid: 1 },
        { title: 'Новый Тойота Ленд Крузер 2023 года: ждите, скоро буду', date: '28 Октября 2022', image: require('../../../../assets/images/journaleauto.png'), menuid: 1 },
    ]);

    const [journal_menus, setJournalMenus] = React.useState([


        { title: 'США', menuid: 1 },
        { title: 'Корея', menuid: 2 },
        { title: 'Япония', menuid: 3 },
        { title: 'США', menuid: 4 },
        { title: 'США', menuid: 5 },
    ]);


    const [cityJournale, setCityJournale] = React.useState([
        { title: 'Ниссан Джук совершенствуется 1-1', date: 'Подводим итоги 2022 года. В израильских лидерах электрички и китайцы.', image: require('../../../../assets/images/journaleauto.png'), menuid: 1 },
        { title: 'Ниссан Джук совершенствуется 1-2', date: 'Форд Турнео кастом. 2-е поколение', image: require('../../../../assets/images/journaleauto.png'), menuid: 1 },
        { title: 'Ниссан Джук совершенствуется 2-1', date: 'Подводим итоги 2022 года. В израильских лидерах электрички и китайцы.', image: require('../../../../assets/images/journaleauto.png'), menuid: 1 },
        { title: 'Ниссан Джук совершенствуется 2-2', date: 'Подводим итоги 2022 года. В израильских лидерах электрички и китайцы.', image: require('../../../../assets/images/journaleauto.png'), menuid: 2 },
        { title: 'Ниссан Джук совершенствуется 3-1', date: 'Подводим итоги 2022 года. В израильских лидерах электрички и китайцы.', image: require('../../../../assets/images/journaleauto.png'), menuid: 2 },
        { title: 'Ниссан Джук совершенствуется 3-2', date: 'Подводим итоги 2022 года. В израильских лидерах электрички и китайцы.', image: require('../../../../assets/images/journaleauto.png'), menuid: 2 },
        { title: 'Ниссан Джук совершенствуется 4-1', date: 'Форд Турнео кастом. 2-е поколение', image: require('../../../../assets/images/journaleauto.png'), menuid: 3 },
        { title: 'Ниссан Джук совершенствуется 4-2', date: 'Форд Турнео кастом. 2-е поколение', image: require('../../../../assets/images/journaleauto.png'), menuid: 3 },
        { title: 'Ниссан Джук совершенствуется 5-1', date: 'Форд Турнео кастом. 2-е поколение', image: require('../../../../assets/images/journaleauto.png'), menuid: 3 },
        { title: 'Ниссан Джук совершенствуется 5-2', date: 'Форд Турнео кастом. 2-е поколение', image: require('../../../../assets/images/journaleauto.png'), menuid: 4 },
        { title: 'Ниссан Джук совершенствуется 5-2', date: 'Подводим итоги 2022 года. В израильских лидерах электрички и китайцы.', image: require('../../../../assets/images/journaleauto.png'), menuid: 4 },
        { title: 'Ниссан Джук совершенствуется 5-2', date: 'Подводим итоги 2022 года. В израильских лидерах электрички и китайцы.', image: require('../../../../assets/images/journaleauto.png'), menuid: 4 },

    ]);

    const [news, setNews] = React.useState([
        { title: 'Ниссан Джук совершенствуется 1-1', date: 'Подводим итоги 2022 года. В израильских лидерах электрички и китайцы.', image: require('../../../../assets/images/journaleauto.png'), menuid: 1 },
        { title: 'Ниссан Джук совершенствуется 1-2', date: 'Форд Турнео кастом. 2-е поколение', image: require('../../../../assets/images/journaleauto.png'), menuid: 1 },
        { title: 'Ниссан Джук совершенствуется 2-1', date: 'Подводим итоги 2022 года. В израильских лидерах электрички и китайцы.', image: require('../../../../assets/images/journaleauto.png'), menuid: 1 },
    ]);

    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.header}>
                <View style={[styles.headerItem, styles.flex2]}>
                    <Text style={styles.appName}>
                        Поиск статей
                    </Text>
                </View>
            </View>
            <TopNavigation navigation={props.navigation} />
            <ScrollView style={{ width: '100%', flex: 1 }} >
                <PopularMarks navigation={props.navigation} />
                <Journale navigation={props.navigation} data={journale} />
                <CitySlider navigation={props.navigation} data={cityJournale} menus={journal_menus} />
                <NewsBlock title={'Самые быстрые'} data={news} navigation={props.navigation} />
                <NewsBlock title={'Семейные'} data={news} navigation={props.navigation} />
                <NewsBlock title={'Супер экономичные'} data={news} navigation={props.navigation} />
                <AllThemes />
            </ScrollView>
            <NavigationBottomMenu navigation={props.navigation} active_page={'Search'} />
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
        // paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    appName: {
        fontSize: 18,
        fontWeight: 'bold'
    },


})