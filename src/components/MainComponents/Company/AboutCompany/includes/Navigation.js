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
    const [active_top_tab1, setActiveTopTab1] = React.useState(true);
    const [active_top_tab2, setActiveTopTab2] = React.useState(false);
    const [active_top_tab3, setActiveTopTab3] = React.useState(false);
    return (
        <View style={styles.tabsBeegMainWrapper}>
            <View style={styles.tabsMainWrapper}>
                <View style={styles.tabsWrapper}>

                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate('AboutCompany')
                        }}
                        style={[styles.flex1, styles.tabsItem, route.name === 'AboutCompany' && styles.tabsItemActive]}
                    >
                        <Text style={[styles.tabsItemText, active_top_tab1 && styles.tabsItemTextActive]}>О компании</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate('OurServices')
                        }}
                        style={[styles.flex1, styles.tabsItem, route.name === 'OurServices' && styles.tabsItemActive]}
                    >
                        <Text style={[styles.tabsItemText, active_top_tab2 && styles.tabsItemTextActive]}>Услуги</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            setActiveTopTab1(false);
                            setActiveTopTab2(false);
                            setActiveTopTab3(true);
                        }}
                        style={[styles.flex1, styles.tabsItem, active_top_tab3 && styles.tabsItemActive]}
                    >
                        <Text style={[styles.tabsItemText, active_top_tab3 && styles.tabsItemTextActive]}>Объявления</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    tabsBeegMainWrapper: {
        paddingHorizontal: 16,
        marginBottom: 16
    },
    flex1: {
        flex: 1
    },
    flex2: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabsMainWrapper: {
        width: '100%',
        padding: 4,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F1F4',
        borderRadius: 8,

    },
    tabsWrapper: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: '#F0F1F4',
    },
    tabsItem: {
        // height:'100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabsItemText: {
        textAlign: 'center',
        color: '#6C7693'
        // width: '100%',
        // height:'100%',
        // backgroundColor:'blue',
    },
    tabsItemActive: {
        borderRadius: 4,
        backgroundColor: 'white'
    },
    tabsItemTextActive: {
        color: '#091334'
    },
})