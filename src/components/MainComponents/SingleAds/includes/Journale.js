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


import {
    SafeAreaView,
    SafeAreaProvider,
    SafeAreaInsetsContext,
    useSafeAreaInsets,
    initialWindowMetrics,
} from 'react-native-safe-area-context';

// import AutoserviceSvg from '../../../../assets/Svg/companies/autoservice'
// import AutosalonSvg from '../../../../assets/Svg/companies/autosalonSvg'
import Svg, { Defs, G, Path, Rect, Circle, ClipPath } from "react-native-svg";

import { useEffect, useState } from "react";

export default function App(props) {

    // const [data, setData] = useState(JSON.parse(props.data))
    const [data, setData] = useState(props.data);
    const [active_button, setActiveButton] = useState(1);

    useEffect(() => {

        console.log('Journale component loaded')

    }, []);

    return (
        <View style={styles.wrapper}>

            <Text style={styles.mainTitle}>Журнал</Text>


            <View style={styles.postsWrapper}>

                {data.map((item, index) => {

                    return (
                        <TouchableOpacity key={index} style={styles.Item}>
                            <View style={styles.postsWrapperImageWrapper}>
                                <Image style={styles.postsWrapperImage} source={item.image} />
                                {item.icon}
                            </View>

                            <Text style={styles.text}>{item.title}</Text>
                            <View style={{ width: '100%' }} >
                                <Text style={styles.description}>Кроссовер второго поколения сегодня продается в Израиле, но уже на подходе его обновленная версия. Изучаем с лупой, что в нем поменялось.</Text>
                            </View>
                            <View style={styles.reviewWrapper}>
                                <Text style={styles.reviewText}>
                                    Обзоры
                                </Text>
                                <Svg style={{ marginHorizontal: 8 }} width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><Rect width={4} height={4} rx={2} fill="#C4C8D4" /></Svg>
                                <Text style={styles.reviewText}>
                                    {item.date}
                                </Text>
                            </View>

                        </TouchableOpacity>
                    )

                })}
            </View>

            <View style={styles.showMoreButtonWrapper}>
                <TouchableOpacity style={styles.showMoreButton}>
                    <Text style={styles.showMoreButtonText}>Смотреть больше статей</Text>
                </TouchableOpacity>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        paddingLeft: 16,
        marginBottom: 30
    },

    scrollView: {
        width: '100%',
        height: 36,
        borderBottomColor: 'silver',
        borderBottomWidth: 1,
        marginBottom: 24
    },

    mainTitle: {
        color: '#091334',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20
    },
    Item: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        borderRadius: 8,
        marginBottom: 20,
        overflow: 'hidden',
    },
    text: {
        width: '100%',
        color: '#091334',
        fontSize: 22,
        textAlign: 'left',
        fontWeight: 'bold',
        marginBottom: 8
    },

    menuWrapper: {
        width: '100%',
        marginTop: 24
    },

    menuTop: {
        width: '100%',
        paddingHorizontal: 16,
        marginBottom: 24
    },
    menuTopTitle: {
        color: '#091334',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20
    },
    menuTopButtonWrapper: {
        width: '100%',
        height: 36,
        // backgroundColor:'silver',
        // marginBottom: 24,
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
        bottom: -1,
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2
    },
    postsWrapper: {
        width: '100%',
        paddingRight: 16
    },
    postsWrapperImageWrapper: {
        width: '100%',
        height: 193,
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 20
    },
    postsWrapperImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 8
    },
    reviewText: {
        textAlign: "left",
        fontSize: 16,
        color: '#6C7694'
    },
    reviewWrapper: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },

    showMoreButtonWrapper: {
        paddingRight: 16
    },
    showMoreButton: {
        width: '100%',
        height: 48,
        backgroundColor: '#E5F2FF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6
    },
    showMoreButtonText: {
        fontSize: 16,
        color: '#2B65EE'
    },

})
