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
    Slider, TextInput
} from 'react-native';


import {
    SafeAreaView,
    SafeAreaProvider,
    SafeAreaInsetsContext,
    useSafeAreaInsets,
    initialWindowMetrics,
} from 'react-native-safe-area-context';

// import SpecialOfferBlock from './includes/SpecialOffer';
// import NavigationBottomMenu from '../../../includes/NavigationBottomMenu';

import {useSelector, useDispatch, } from 'react-redux';
import {closePakaleniPopUpInCatalogSelectPakaleniPage} from '../../../../../redux/actions/actions';


import Svg, {Defs, G, Path, Rect, Circle, ClipPath} from "react-native-svg";
import {useEffect, useState} from "react";
import CloseSvg from "../../../../../../assets/Svg/CloseSvg";


export default function App(props)
{
    // Redux
    const {is_open_marki_popup_in_catalog_select_mark_page} = useSelector(state => state.justDriveReducer);
    const dispatch = useDispatch();
    const handleClosePakaleniPopUpInCatalogSelectPakaleniPage = () => dispatch(closePakaleniPopUpInCatalogSelectPakaleniPage());

    const [marks_items, setMarksItems] = useState([
        { title: '1 поколение', date: '02.2018 - н.в', type: 'Мини 5 дверей'},
        { title: '2 поколение', date: '02.2018 - 05.2019', type: 'Мини 3 дверей'},
        { title: '3 поколение', date: '02.2018 - 05.2019', type: 'Мини 3 дверей'},
        { title: '4 поколение', date: '02.2018 - 05.2019', type: 'Мини 3 дверей'},
        { title: '5 поколение', date: '02.2018 - 05.2019', type: 'Мини 3 дверей'},
    ]);


    useEffect(() => {

    }, []);

    const renderPakaleni = () => {

        return (
            marks_items.map((item, index) => {
                return (
                    <TouchableOpacity key={index}  style={styles.newAutosWrapperItem}>
                        <View style={styles.newAutosWrapperItemImageWrapper}>
                            <Image style={styles.newAutosWrapperItemImage} source={require('../../../../../../assets/images/pakalenilist.png')}/>
                        </View>

                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.title2}>{item.date}</Text>
                        <Text style={styles.title3}>{item.type}</Text>

                    </TouchableOpacity>
                )
            })
        )

    }


    return (
      <View style={ styles.mainWrapper}>
          <Text style={styles.mainTitle}>3 поколения</Text>
          <View style={styles.itemsWrapper}>
              {renderPakaleni()}
          </View>
      </View>

    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
    },

    mainWrapper:{
        width: '100%',
        paddingHorizontal:16
    },
    header: {
        width: '100%',
        height: 56,
        // paddingHorizontal: 16,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal:16  ,
        borderBottomWidth: 1,
        borderBottomColor:'silver',
        paddingRight: 0
    },
    flex1: {
        flex:1
    },
    flex2: {
        flex:4,
        justifyContent:'center',
        alignItems:'center'
    },
    headerItem: {
        height: '100%',
    },
    headerItemRight: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'flex-end',
    },

    title: {
        color: '#091334',
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight:24
    },
    title2: {
        color: '#091334',
        fontSize: 14,
        lineHeight:24
    },
    title3: {
        color: '#091334',
        fontSize: 14,
        lineHeight:24
    },
    popupWrapper: {
        position:'absolute',
        bottom: 0,
        left:0,
        width: '100%',
        flex:1,
        height: '100%',
        zIndex: 10
    },
    searchWrapper: {
        width: '100%',
        paddingTop:8,
        paddingBottom:16,
        height: 68,
    },
    searchMainWrapper: {
        width:'100%',
        paddingHorizontal:16  ,
        borderBottomWidth: 1,
        borderBottomColor:'silver',
    },
    searchInput: {
        flex:1,
        height: 44,
        borderRadius:6,
        borderColor:'#C4C8D4',
        borderWidth: 1,
        paddingVertical:10,
        paddingLeft:10,
        paddingRight: 40,
    },
    searchSvg: {
        position: 'absolute',
        top: 20,
        right: 10
    },
    footer: {
        width: '100%',
        height: 72,
        borderTopWidth:1,
        borderTopColor: '#F0F1F4',
        paddingHorizontal: 16,
        paddingTop: 10
    },
    closePopUpButton: {
        width: '100%',
        height: 48,
        borderRadius:6,
        borderColor:'#C4C8D4',
        borderWidth: 1,
        paddingVertical:10,
        paddingHorizontal:10,
        justifyContent:'center',
        alignItems:'center'
    },
    closePopUpButtonText: {
        color: '#091334',
        fontSize: 16
    },
    itemsWrapper: {
        width: '100%',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
        // marginBottom: 24,
    },

    newAutosWrapperItem: {
        width: '48%',
        marginBottom: 16
    },

    newAutosWrapperItemImageWrapper: {
        width: '100%',
        height: 122,
        borderRadius: 8,
        overflow:'hidden',
        marginBottom:12
    },
    newAutosWrapperItemImage: {
        width: '100%',
        height: '100%',
        resizeMode:'cover'
    },
    scrollBlock: {
        flex:1,
        width:'100%',
        paddingHorizontal:16,
        paddingTop:24
    },

    mainTitle: {
        color: '#091334',
        fontSize: 22,
        marginBottom:22,
        fontWeight: 'bold'
    }

})
