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


import {
    SafeAreaView,
    SafeAreaProvider,
    SafeAreaInsetsContext,
    useSafeAreaInsets,
    initialWindowMetrics,
} from 'react-native-safe-area-context';
// import DropShadow from "react-native-drop-shadow";

import Svg, {Defs, G, Path, Rect, Circle, ClipPath} from "react-native-svg";
import SearchSvg from '../../../../../assets/Svg/SearchSvg'
import {useEffect, useState} from "react";

export default function App(props) {

    const [data, setData] = useState(props.data)
    const [search_value, setSearchValue] = useState('');

    const onChangeSearchInput = async (text) => {
        setSearchValue(text)
    }

    useEffect(() => {

        console.log('Services component loaded')

    }, []);

    return (
       <View style={styles.wrapper}>

            <View style={styles.mainWrapper}>
                <Text style={styles.mainTitle}>Каталог</Text>

                <TouchableOpacity  style={styles.showAll}>

                    <Text style={styles.showAllText}>Все</Text>

                </TouchableOpacity>
            </View>

           <View style={[styles.searchWrapper, styles.shadowProp]}>


              <View style={styles.searInputWrapper}>
                  <TextInput
                      style={styles.searchInput}
                      onChangeText={onChangeSearchInput}
                      value={search_value}
                      placeholder="Services search"
                      // keyboardType="numeric"
                  />

                  <TouchableOpacity>
                      <SearchSvg/>
                  </TouchableOpacity>
              </View>

               <ScrollView horizontal={true} style={{width: '100%'}}>

                   <View style={{width: 644, flexDirection: 'row'}}>

                       <View style={styles.columnWrapper}>

                           <TouchableOpacity style={styles.columnItem}>
                                <Text style={styles.columnItemText}>
                                    Alfa Romeo
                                </Text>
                           </TouchableOpacity>


                           <TouchableOpacity style={styles.columnItem}>
                               <Text style={styles.columnItemText}>
                                   Aston Martin
                               </Text>
                           </TouchableOpacity>


                           <TouchableOpacity style={styles.columnItem}>
                               <Text style={styles.columnItemText}>
                                   Audi
                               </Text>
                           </TouchableOpacity>


                           <TouchableOpacity style={styles.columnItem}>
                               <Text style={styles.columnItemText}>
                                   Bentley
                               </Text>
                           </TouchableOpacity>


                           <TouchableOpacity style={styles.columnItem}>
                               <Text style={styles.columnItemText}>
                                   BMW
                               </Text>
                           </TouchableOpacity>


                           <TouchableOpacity style={[styles.columnItem, {borderBottomWidth: 0}]}>
                               <Text style={styles.columnItemText}>
                                   Cadillac
                               </Text>
                           </TouchableOpacity>

                       </View>

                       <View style={styles.columnWrapper}>

                           <TouchableOpacity style={styles.columnItem}>
                               <Text style={styles.columnItemText}>
                                   Alfa Romeo
                               </Text>
                           </TouchableOpacity>


                           <TouchableOpacity style={styles.columnItem}>
                               <Text style={styles.columnItemText}>
                                   Aston Martin
                               </Text>
                           </TouchableOpacity>


                           <TouchableOpacity style={styles.columnItem}>
                               <Text style={styles.columnItemText}>
                                   Audi
                               </Text>
                           </TouchableOpacity>


                           <TouchableOpacity style={styles.columnItem}>
                               <Text style={styles.columnItemText}>
                                   Bentley
                               </Text>
                           </TouchableOpacity>


                           <TouchableOpacity style={styles.columnItem}>
                               <Text style={styles.columnItemText}>
                                   BMW
                               </Text>
                           </TouchableOpacity>


                           <TouchableOpacity style={[styles.columnItem, {borderBottomWidth: 0}]}>
                               <Text style={styles.columnItemText}>
                                   Cadillac
                               </Text>
                           </TouchableOpacity>

                       </View>

                       <View style={styles.columnWrapper}>

                           <TouchableOpacity style={styles.columnItem}>
                               <Text style={styles.columnItemText}>
                                   Alfa Romeo
                               </Text>
                           </TouchableOpacity>


                           <TouchableOpacity style={styles.columnItem}>
                               <Text style={styles.columnItemText}>
                                   Aston Martin
                               </Text>
                           </TouchableOpacity>


                           <TouchableOpacity style={styles.columnItem}>
                               <Text style={styles.columnItemText}>
                                   Audi
                               </Text>
                           </TouchableOpacity>


                           <TouchableOpacity style={styles.columnItem}>
                               <Text style={styles.columnItemText}>
                                   Bentley
                               </Text>
                           </TouchableOpacity>


                           <TouchableOpacity style={styles.columnItem}>
                               <Text style={styles.columnItemText}>
                                   BMW
                               </Text>
                           </TouchableOpacity>


                           <TouchableOpacity style={[styles.columnItem, {borderBottomWidth: 0}]}>
                               <Text style={styles.columnItemText}>
                                   Cadillac
                               </Text>
                           </TouchableOpacity>

                       </View>

                   </View>

               </ScrollView>


           </View>


       </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        paddingHorizontal: 16,
        marginBottom: 20
    },

    mainTitle: {
        color: '#091334',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20
    },

    mainWrapper:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    showAll:{

    },
    showAllText:{
        fontSize: 16,
        color: '#2B65EE'
    },
    searchWrapper: {
        width: '100%',
        borderRadius: 8,
        backgroundColor: 'white',
        paddingVertical: 45,
        paddingHorizontal: 25,
        paddingBottom: 16
    },

    shadowProp: {
        hadowColor: "rgba(0,0,0,0.2)",
        shadowOffset: {
            width: 0,
            height: -120,
        },
        shadowOpacity: 0.58,
        shadowRadius: 88.00,

        elevation: 5,
    },

    searInputWrapper: {
        width: '100%',
        height: 44,
        borderRadius: 6,
        borderColor: '#C4C8D4',
        borderWidth: 1,
        paddingVertical: 12,
        paddingLeft: 12,
        paddingRight: 15,
        flexDirection: 'row',
        marginBottom: 16
    },
    searchInput: {
        flex:1,
        height: '100%',
        marginRight: 9
    },

    columnWrapper: {
        width: 204,
        marginRight: 16
    },
    columnItem: {
        width: '100%',
        height: 44,
        borderBottomColor: '#E2E4EA',
        borderBottomWidth: 1,
        justifyContent: 'center'
    },
    columnItemText: {

        color: '#1548C1',
        fontSize: 16

    },

})
