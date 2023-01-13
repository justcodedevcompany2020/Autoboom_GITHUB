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


import {useSelector, useDispatch, } from 'react-redux';
import {openModifikaciaPopUpInCatalogSelectModifikaciaPage} from '../../../../../redux/actions/actions';

import {useEffect, useState} from "react";



export default function App(props)
{
    // Redux
    const {is_open_marki_popup_in_catalog_select_mark_page} = useSelector(state => state.justDriveReducer);
    const dispatch = useDispatch();
    const handleOpenModifikaciaPopUpInCatalogSelectModifikaciaPage = () => dispatch(openModifikaciaPopUpInCatalogSelectModifikaciaPage());

    const [marks_items, setMarksItems] = useState([
        { title: '1 поколение', date: '02.2018 - н.в', type: 'Мини 5 дверей'},
        { title: '2 поколение', date: '02.2018 - 05.2019', type: 'Мини 3 дверей'},
        { title: '3 поколение', date: '02.2018 - 05.2019', type: 'Мини 3 дверей'},
        { title: '4 поколение', date: '02.2018 - 05.2019', type: 'Мини 3 дверей'},
        { title: '5 поколение', date: '02.2018 - 05.2019', type: 'Мини 3 дверей'},
    ]);


    useEffect(() => {

    }, []);



    return (
      <View style={ styles.mainWrapper}>
          <Text style={styles.mainTitle}>Модификации</Text>

          <View style={styles.itemsWrapper}>


              <Text style={styles.mainTitle2}>Для Израиля</Text>

              <TouchableOpacity onPress={() => {props.navigation.navigate('CatalogSelectKomplektaciaComponent')}} style={styles.item}>

                  <View style={styles.itemLeft}>
                        <Text style={styles.itemLeftText1}>
                            A 250 e 1.3 AT PHEV
                        </Text>
                        <Text style={styles.itemLeftText2}>190 л.с., бензин</Text>
                        <Text style={styles.itemLeftText3}>2 комплектации</Text>
                  </View>

                  <View style={styles.itemRight}>
                        <Text style={[styles.itemRightPrice, {color: '#009900'}]}>from ₪ 780 000 </Text>
                        <View style={styles.itemRightButtonWrapper}>
                            <Text style={[styles.itemRightButton, {backgroundColor: '#E0F7D4', color: '#009900'}]}>В продаже</Text>
                        </View>
                  </View>

              </TouchableOpacity>
              <TouchableOpacity onPress={() => {props.navigation.navigate('CatalogSelectKomplektaciaComponent')}} style={styles.item}>

                  <View style={styles.itemLeft}>
                      <Text style={styles.itemLeftText1}>
                          A 250 e 1.3 AT PHEV
                      </Text>
                      <Text style={styles.itemLeftText2}>190 л.с., бензин</Text>
                      <Text style={styles.itemLeftText3}>2 комплектации</Text>
                  </View>

                  <View style={styles.itemRight}>
                      <Text style={[styles.itemRightPrice, {color: '#FF7A00'}]}>from ₪ 780 000 </Text>
                      <View style={styles.itemRightButtonWrapper}>
                          <Text style={[styles.itemRightButton, {backgroundColor: '#FFF2DE', color: '#FF7A00'}]}>На заказ</Text>
                      </View>
                  </View>

              </TouchableOpacity>


              <Text style={[styles.mainTitle2,{marginTop: 20}] }>Для других стран</Text>

              <TouchableOpacity onPress={() => {props.navigation.navigate('CatalogSelectKomplektaciaComponent')}} style={styles.item}>

                  <View style={styles.itemLeft}>
                      <Text style={styles.itemLeftText1}>
                          A 250 e 1.3 AT PHEV
                      </Text>
                      <Text style={styles.itemLeftText2}>190 л.с., бензин</Text>
                  </View>

              </TouchableOpacity>
              <TouchableOpacity onPress={() => {props.navigation.navigate('CatalogSelectKomplektaciaComponent')}} style={styles.item}>

                  <View style={styles.itemLeft}>
                      <Text style={styles.itemLeftText1}>
                          A 250 e 1.3 AT PHEV
                      </Text>
                      <Text style={styles.itemLeftText2}>190 л.с., бензин</Text>
                  </View>


              </TouchableOpacity>
              <TouchableOpacity onPress={() => {props.navigation.navigate('CatalogSelectKomplektaciaComponent')}} style={[styles.item, {borderBottomWidth:0}]}>

                  <View style={styles.itemLeft}>
                      <Text style={styles.itemLeftText1}>
                          A 250 e 1.3 AT PHEV
                      </Text>
                      <Text style={styles.itemLeftText2}>190 л.с., бензин</Text>
                  </View>


              </TouchableOpacity>


              <TouchableOpacity style={styles.openButton} onPress={() => {handleOpenModifikaciaPopUpInCatalogSelectModifikaciaPage()}}>
                  <Text style={styles.openButtonText}>Показать все модификации</Text>
              </TouchableOpacity>

          </View>
      </View>

    );
}

const styles = StyleSheet.create({

    mainWrapper:{
        width: '100%',
        paddingHorizontal:16
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
