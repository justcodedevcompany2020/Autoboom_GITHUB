import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button,
    TouchableOpacity,
    TouchableHighlight,
    ScrollView,
    SafeAreaView,
    Image,
    ImageBackground,
} from 'react-native';
import Svg, { Defs, G, Path, Rect, Circle, ClipPath } from "react-native-svg";

export default function App({ textFirst, textSecond, textThird, numberFirst, numberSecond }) {
    return (
        <View style={styles.banner} >
            <View style={styles.imageBanner}>
                <Image
                    source={require('../../../../../../assets/images/imageadbanner.png')}
                    style={{ width: '92%', borderTopRightRadius: 8, borderTopLeftRadius: 8, height: 170, position: 'relative' }}
                />
                <Image
                    source={require('../../../../../../assets/images/banner.png')}
                    style={{ position: 'absolute', bottom: 0 }}
                />
                <Image
                    source={require('../../../../../../assets/images/logo_audi.png')}
                    style={{ position: 'absolute', bottom: 0, width:68.7, height:24.35 }}
                />
            </View>
            <View style={styles.adbanner} >
                <View style={styles.linkDiv}>
                    <Text style={styles.textStyles} >
                        {textFirst}
                    </Text>
                    <TouchableOpacity>
                        <Svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M0.898444 7.92196H17.9341L13.5497 12.4211C13.1993 12.7807 13.1993 13.3708 13.5497 13.7303C13.9 14.0899 14.4661 14.0899 14.8165 13.7303L20.7372 7.65459C21.0876 7.29503 21.0876 6.71419 20.7372 6.35463L14.8254 0.269674C14.4751 -0.0898913 13.909 -0.0898913 13.5586 0.269674C13.2082 0.629239 13.2082 1.21008 13.5586 1.56964L17.9341 6.07804H0.898444C0.4043 6.07804 0 6.49292 0 7C0 7.50708 0.4043 7.92196 0.898444 7.92196Z" fill="#C4C8D4" />
                        </Svg>
                    </TouchableOpacity>
                </View>
                <View style={styles.linkDiv}>
                    <Text style={styles.textStyles} >
                        {textSecond}
                        <Text style={{ color: '#C4C8D4' }}>{numberFirst}</Text>
                    </Text>
                    <TouchableOpacity>
                        <Svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M0.898444 7.92196H17.9341L13.5497 12.4211C13.1993 12.7807 13.1993 13.3708 13.5497 13.7303C13.9 14.0899 14.4661 14.0899 14.8165 13.7303L20.7372 7.65459C21.0876 7.29503 21.0876 6.71419 20.7372 6.35463L14.8254 0.269674C14.4751 -0.0898913 13.909 -0.0898913 13.5586 0.269674C13.2082 0.629239 13.2082 1.21008 13.5586 1.56964L17.9341 6.07804H0.898444C0.4043 6.07804 0 6.49292 0 7C0 7.50708 0.4043 7.92196 0.898444 7.92196Z" fill="#C4C8D4" />
                        </Svg>
                    </TouchableOpacity>
                </View>
                <View style={[styles.linkDiv, {borderBottomColor:'white'}]}>
                    <Text style={styles.textStyles} >
                        {textThird} <Text style={{ color: '#C4C8D4' }} >{numberSecond}</Text>
                    </Text>
                    <TouchableOpacity>
                        <Svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M0.898444 7.92196H17.9341L13.5497 12.4211C13.1993 12.7807 13.1993 13.3708 13.5497 13.7303C13.9 14.0899 14.4661 14.0899 14.8165 13.7303L20.7372 7.65459C21.0876 7.29503 21.0876 6.71419 20.7372 6.35463L14.8254 0.269674C14.4751 -0.0898913 13.909 -0.0898913 13.5586 0.269674C13.2082 0.629239 13.2082 1.21008 13.5586 1.56964L17.9341 6.07804H0.898444C0.4043 6.07804 0 6.49292 0 7C0 7.50708 0.4043 7.92196 0.898444 7.92196Z" fill="#C4C8D4" />
                        </Svg>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    banner: {
        width: '100%',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 25
    },
    imageBanner: {
        width: '100%',
        alignItems: 'center',
        height: 170
    },
    adbanner: {
        height: 210,
        borderWidth: 1,
        borderColor: '#09133429',
        width: '92%',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        padding: 15,
        borderTopColor: 'white'
    },
    linkDiv: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#C4C8D4',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15
    },
    textStyles: {
        fontSize: 18,
        color: '#2B65EE',
        fontWeight: '400'
    }
})