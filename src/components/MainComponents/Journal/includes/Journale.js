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
        <View style={styles.postsWrapper}>

            {data.map((item, index) => {

                return (
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('JournalSinglePage')}
                        key={index} style={styles.Item}>

                        <View style={styles.postsWrapperImageWrapper}>
                            <Image style={styles.postsWrapperImage} source={item.image} />
                            {item.icon}
                        </View>

                        <Text style={styles.text}>{item.title}</Text>
                        <View style={{ width: '100%' }} >
                            <Text style={styles.descText}>Кроссовер второго поколения сегодня продается в Израиле, но уже на подходе его обновленная версия. Изучаем с лупой, что в нем поменялось.</Text>
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

    );
}

const styles = StyleSheet.create({

    Item: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        borderRadius: 8,
        marginTop: 25,
    },
    text: {
        width: '100%',
        color: '#091334',
        fontSize: 22,
        lineHeight: 28,
        textAlign: 'left',
        fontWeight: 'bold',
        marginBottom: 8,
        alignSelf: 'flex-start'
    },

    postsWrapper: {
        width: '100%',
        padding: 15

    },
    descText: {
        color: '#091334',
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 10

    },
    postsWrapperImageWrapper: {
        width: '100%',
        height: 213,
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
