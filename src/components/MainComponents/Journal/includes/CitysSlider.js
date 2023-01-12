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
    const [menus, setMenus] = React.useState(props.menus);
    const [active_button, setActiveButton] = React.useState(1);

    return (
        <View>
            <ScrollView style={styles.scrollView} horizontal={true} >
                {menus.map((item, index) => {
                    return (
                        <TouchableOpacity
                            key={index}
                            onPress={() => {
                                setActiveButton(item.menuid);
                            }}
                            style={styles.menuTopButton}
                        >
                            <View style={[{ flexDirection: 'row', alignItems: 'center' }, active_button != item.menuid && { opacity: 0.5 }]} >
                                <Image
                                    style={{ width: 30, height: 20 }}
                                    source={require('../../../../../assets/images/flag.png')} />
                                <Text style={[styles.menuTopButtonText, active_button == item.menuid && styles.menuTopButtonTextActive]}>{item.title}</Text>
                            </View>
                            {active_button == item.menuid && <View style={styles.menuTopButtonActiveLine}></View>}

                        </TouchableOpacity>
                    )
                })}

            </ScrollView>
            <View style={styles.postsWrapper}>

                {props.data.map((item, index) => {
                    if (item.menuid == active_button) {
                        return (
                            <TouchableOpacity
                                onPress={() => props.navigation.navigate('JournalSinglePage')}
                                key={index}
                                style={[styles.Item, index == 2  && { borderBottomColor: 'white' }]}
                            >
                                <Image
                                    style={{ width: 120, height: 82, borderRadius: 8 }}
                                    source={item.image} />
                                <Text style={styles.title} >{item.date}</Text>
                            </TouchableOpacity>
                        )
                    }

                })}
                <TouchableOpacity style={styles.blueButton} >
                    <Text style={styles.blueButtonText} >Показать все статьи из категории</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        width: '100%',
        height: 40,
        marginLeft: 15,
        marginTop: 25
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
        fontSize: 16,
        marginLeft: 7
    },
    menuTopButtonTextActive: {
        color: '#091334'
    },
    menuTopButtonActiveLine: {
        width: '100%',
        height: 3,
        backgroundColor: '#2B65EE',
        position: 'absolute',
        bottom: -1,
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2
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
        width: '60%',
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '400',
        color: '#091334',
        marginLeft: 20
    },
    postsWrapper: {
        padding: 15,
    },
    blueButton: {
        width: '100%',
        height: 44,
        backgroundColor: '#E5F2FF',
        borderRadius: 6,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    blueButtonText: {
        color: '#2B65EE',
        fontSize: 16
    }
})