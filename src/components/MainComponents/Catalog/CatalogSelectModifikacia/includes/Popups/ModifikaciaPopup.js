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
import {closeModifikaciaPopUpInCatalogSelectModifikaciaPage} from '../../../../../../redux/actions/actions';


import Svg, {Defs, G, Path, Rect, Circle, ClipPath} from "react-native-svg";
import {useEffect, useState} from "react";
import FilterSvg from "../../../../../../../assets/Svg/search_component/FilterSvg";
import SearchSvg from "../../../../../../../assets/Svg/SearchSvg";
import CloseSvg from "../../../../../../../assets/Svg/CloseSvg";


export default function App(props)
{
    // Redux
    const {is_open_modifikacia_popup_in_catalog_select_modifikacia_page} = useSelector(state => state.justDriveReducer);
    const dispatch = useDispatch();
    const handleCloseModifikaciaPopUpInCatalogSelectModifikaciaPage = () => dispatch(closeModifikaciaPopUpInCatalogSelectModifikaciaPage());

    const [marks_items, setMarksItems] = useState([
        { title: 'C40 Recharge'},
        { title: 'C40 Recharge'},
        { title: 'C40 Recharge'},
        { title: 'C40 Recharge'},
        { title: 'C40 Recharge'},
        { title: 'C40 Recharge'},
        { title: 'C40 Recharge'},
        { title: 'C40 Recharge'},
        { title: 'C40 Recharge'},
        { title: 'C40 Recharge'},
        { title: 'C40 Recharge'},
        { title: 'C40 Recharge'},
    ]);


    useEffect(() => {

    }, []);

    const renderModifikacii = () => {

        return (
          <View style={styles_mod.mainWrapper}>
              <View style={styles_mod.itemsWrapper}>

                  <Text style={styles_mod.mainTitle2}>Для Израиля</Text>
                  <TouchableOpacity onPress={() => {handleCloseModifikaciaPopUpInCatalogSelectModifikaciaPage(); props.navigation.navigate('CatalogSelectKomplektaciaComponent')}} style={styles_mod.item}>

                      <View style={styles_mod.itemLeft}>
                          <Text style={styles_mod.itemLeftText1}>
                              A 250 e 1.3 AT PHEV
                          </Text>
                          <Text style={styles_mod.itemLeftText2}>190 л.с., бензин</Text>
                          <Text style={styles_mod.itemLeftText3}>2 комплектации</Text>
                      </View>

                      <View style={styles_mod.itemRight}>
                          <Text style={[styles_mod.itemRightPrice, {color: '#009900'}]}>from ₪ 780 000 </Text>
                          <View style={styles_mod.itemRightButtonWrapper}>
                              <Text style={[styles_mod.itemRightButton, {backgroundColor: '#E0F7D4', color: '#009900'}]}>В продаже</Text>
                          </View>
                      </View>

                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {handleCloseModifikaciaPopUpInCatalogSelectModifikaciaPage(); props.navigation.navigate('CatalogSelectKomplektaciaComponent')}} style={styles_mod.item}>

                      <View style={styles_mod.itemLeft}>
                          <Text style={styles_mod.itemLeftText1}>
                              A 250 e 1.3 AT PHEV
                          </Text>
                          <Text style={styles_mod.itemLeftText2}>190 л.с., бензин</Text>
                          <Text style={styles_mod.itemLeftText3}>2 комплектации</Text>
                      </View>

                      <View style={styles_mod.itemRight}>
                          <Text style={[styles_mod.itemRightPrice, {color: '#FF7A00'}]}>from ₪ 780 000 </Text>
                          <View style={styles_mod.itemRightButtonWrapper}>
                              <Text style={[styles_mod.itemRightButton, {backgroundColor: '#FFF2DE', color: '#FF7A00'}]}>На заказ</Text>
                          </View>
                      </View>

                  </TouchableOpacity>

                  <Text style={[styles_mod.mainTitle2,{marginTop: 20}] }>Для других стран</Text>

                  <TouchableOpacity onPress={() => {handleCloseModifikaciaPopUpInCatalogSelectModifikaciaPage(); props.navigation.navigate('CatalogSelectKomplektaciaComponent')}} style={styles_mod.item}>

                      <View style={styles_mod.itemLeft}>
                          <Text style={styles_mod.itemLeftText1}>
                              A 250 e 1.3 AT PHEV
                          </Text>
                          <Text style={styles_mod.itemLeftText2}>190 л.с., бензин</Text>
                      </View>

                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {handleCloseModifikaciaPopUpInCatalogSelectModifikaciaPage(); props.navigation.navigate('CatalogSelectKomplektaciaComponent')}} style={styles_mod.item}>

                      <View style={styles_mod.itemLeft}>
                          <Text style={styles_mod.itemLeftText1}>
                              A 250 e 1.3 AT PHEV
                          </Text>
                          <Text style={styles_mod.itemLeftText2}>190 л.с., бензин</Text>
                      </View>


                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {handleCloseModifikaciaPopUpInCatalogSelectModifikaciaPage(); props.navigation.navigate('CatalogSelectKomplektaciaComponent')}} style={[styles_mod.item, {borderBottomWidth:0}]}>

                      <View style={styles_mod.itemLeft}>
                          <Text style={styles_mod.itemLeftText1}>
                              A 250 e 1.3 AT PHEV
                          </Text>
                          <Text style={styles_mod.itemLeftText2}>190 л.с., бензин</Text>
                      </View>


                  </TouchableOpacity>

              </View>
          </View>
        )

    }


    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.popupWrapper}>

                <View style={[styles.header]}>

                    <View style={[styles.headerItem, styles.flex1 ]}></View>

                    <View style={[styles.headerItem, styles.flex2 ]}>
                        <Text style={styles.title} numberOfLines={1}>
                            Модификации Паджеро Спорт
                        </Text>
                    </View>

                    <View style={[styles.headerItem, styles.flex1, styles.headerItemRight ]}>

                        <TouchableOpacity
                            onPress={() => {handleCloseModifikaciaPopUpInCatalogSelectModifikaciaPage()}}
                            style={{}}
                        >
                            <CloseSvg/>
                        </TouchableOpacity>

                    </View>

                </View>

                <ScrollView style={styles.scrollBlock}>

                    <View style={styles.itemsWrapper}>
                        {renderModifikacii()}
                    </View>

                </ScrollView>

                <View style={styles.footer}>

                    <TouchableOpacity onPress={() => {handleCloseModifikaciaPopUpInCatalogSelectModifikaciaPage()}} style={styles.closePopUpButton}>
                        <Text style={styles.closePopUpButtonText}>Закрыть</Text>
                    </TouchableOpacity>

                </View>


            </View>
        </SafeAreaView>
    );
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
        fontSize: 18,
        fontWeight: 'bold'
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
        marginBottom: 24
    },

    newAutosWrapperItem: {
        width: '48%',
        marginBottom: 24
    },

    newAutosWrapperItemImageWrapper: {
        width: '100%',
        height: 122,
        borderRadius: 8,
        overflow:'hidden',
        marginBottom:16
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
    }

})

const styles_mod = StyleSheet.create({
    mainWrapper:{
        width: '100%',
    },

    mainTitle: {
        color: '#091334',
        fontSize: 22,
        lineHeight:24,
        marginBottom:20,
        fontWeight: 'bold'
    },
    mainTitle2: {
        color: '#6C7693',
        fontSize: 16,
        lineHeight:24,
        marginBottom:4,
        fontWeight: 'bold'
    },
    itemsWrapper: {
        width: '100%',
    },

    item: {
        width:'100%',
        paddingVertical:12,
        borderBottomWidth:1,
        borderBottomColor:'#E2E4EA',
        flexDirection:'row',
        justifyContent:'space-between'
    },

    itemLeft: {
        flex:1
    },

    itemRight: {
        flex:1,
        alignItems: 'flex-end'
    },

    itemLeftText1: {
        fontSize:16,
        color:'#1548C1',
        lineHeight:24,
        fontWeight:'bold',
    },

    itemLeftText2: {
        lineHeight:24,
        fontSize:14,
        color:'#091334',
    },

    itemLeftText3: {
        lineHeight:24,
        fontSize:14,
        color:'#6C7693',
    },

    itemRightPrice: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom:8
    },

    itemRightButtonWrapper: {
        // width: 120,
        justifyContent:'center',
        alignItems:'center'
    },

    itemRightButton: {
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 100,
        paddingHorizontal: 10,
        height: 25,
        backgroundColor:'silver'
    },

    openButton: {
        width:'100%',
        height: 44,
        borderColor:'#C4C8D4',
        borderWidth: 1,
        borderRadius: 6,
        justifyContent:'center',
        alignItems:'center',
        marginTop:8,
        marginBottom:24
    },
    openButtonText: {
        color: '#091334',
        fontSize:16
    },

})
