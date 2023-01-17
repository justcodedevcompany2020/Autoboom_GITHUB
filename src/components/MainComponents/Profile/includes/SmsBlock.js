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

    const [active_top_tab1, setActiveTopTab1] = React.useState(true);
    const [active_top_tab2, setActiveTopTab2] = React.useState(false);
    const [active_top_tab3, setActiveTopTab3] = React.useState(false);
    return (
        <View style={styles.tabsBeegMainWrapper}>
            <Text style={styles.smsText} >Уведомления о сообщениях</Text>
            <View style={styles.tabsMainWrapper}>
                <View style={styles.tabsWrapper}>

                    <TouchableOpacity
                        onPress={() => {
                            setActiveTopTab1(true);
                            setActiveTopTab2(false);
                            setActiveTopTab3(false);
                        }}
                        style={[styles.flex1, styles.tabsItem, active_top_tab1 && styles.tabsItemActive]}
                    >
                        <Text style={[styles.tabsItemText, active_top_tab1 && styles.tabsItemTextActive]}>По SMS</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            setActiveTopTab1(false);
                            setActiveTopTab2(true);
                            setActiveTopTab3(false);
                        }}
                        style={[styles.flex1, styles.tabsItem, active_top_tab2 && styles.tabsItemActive]}
                    >
                        <Text style={[styles.tabsItemText, active_top_tab2 && styles.tabsItemTextActive]}>По звонку</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            setActiveTopTab1(false);
                            setActiveTopTab2(false);
                            setActiveTopTab3(true);
                        }}
                        style={[styles.flex1, styles.tabsItem, active_top_tab3 && styles.tabsItemActive]}
                    >
                        <Text style={[styles.tabsItemText, active_top_tab3 && styles.tabsItemTextActive]}>Не получать</Text>
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
    smsText:{
        color: '#091334', 
        fontSize:16,
        fontWeight:'700' ,
        marginBottom:20
    }
})