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
import Svg, {Defs, G, Path, Rect, Circle, ClipPath} from "react-native-svg";

import {useEffect, useState} from "react";

export default function App(props) {

    const [open1tab, setOpen1tab] = useState(true);
    const [open2tab, setOpen2tab] = useState(true);
    const [open3tab, setOpen3tab] = useState(true);

    useEffect(() => {


    }, []);

    return (
       <View style={styles.wrapper}>

            <View style={styles.mainWrapper}>
                <Text style={styles.mainTitle}>Комплектация LX</Text>
            </View>


           <View style={styles.packageMainItemWrapper}>
               <TouchableOpacity style={styles.toggleButton} onPress={() => {setOpen1tab(!open1tab)}}>
                   <Text style={styles.toggleButtonText}>Безопасность и помощь</Text>

                   <Svg width={18} height={10} viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <Path d="M2 8.5l7-7 7 7" stroke="#6C7694" strokeWidth={2} strokeLinecap="round"/>
                   </Svg>
               </TouchableOpacity>

               {open1tab &&
                   <View>
                       <View style={styles.packageItemWrapper}>

                           <Text style={styles.packageItemTitle}>Подушки безопасности</Text>

                           <View style={styles.packageItemUlList}>

                               <View style={styles.packageItemUlItem}>
                                   <Svg width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><Rect width={4} height={4} rx={2} fill="#C4C8D4" /></Svg>
                                   <Text style={styles.packageItemUlItemText}>Подушка безопасности водителя</Text>
                               </View>
                               <View style={styles.packageItemUlItem}>
                                   <Svg width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><Rect width={4} height={4} rx={2} fill="#C4C8D4" /></Svg>
                                   <Text style={styles.packageItemUlItemText}>Подушка для переднего пассажира</Text>
                               </View>

                           </View>
                       </View>
                       <View style={styles.packageItemWrapper}>

                           <Text style={styles.packageItemTitle}>Безопасность</Text>

                           <View style={styles.packageItemUlList}>

                               <View style={styles.packageItemUlItem}>
                                   <Svg width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><Rect width={4} height={4} rx={2} fill="#C4C8D4" /></Svg>
                                   <Text style={styles.packageItemUlItemText}>Датчик давления в шинах</Text>
                               </View>

                           </View>
                       </View>
                       <View style={styles.packageItemWrapper}>

                           <Text style={styles.packageItemTitle}>Защита доступа</Text>

                           <View style={styles.packageItemUlList}>

                               <View style={styles.packageItemUlItem}>
                                   <Svg width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><Rect width={4} height={4} rx={2} fill="#C4C8D4" /></Svg>
                                   <Text style={styles.packageItemUlItemText}>Иммобилайзер</Text>
                               </View>

                           </View>
                       </View>
                       <View style={styles.packageItemWrapper}>

                           <Text style={styles.packageItemTitle}>Система Isofix</Text>

                           <View style={styles.packageItemUlList}>

                               <View style={styles.packageItemUlItem}>
                                   <Svg width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><Rect width={4} height={4} rx={2} fill="#C4C8D4" /></Svg>
                                   <Text style={styles.packageItemUlItemText}>Isofix для заднего ряда</Text>
                               </View>

                           </View>
                       </View>
                       <View style={styles.packageItemWrapper}>

                           <Text style={styles.packageItemTitle}>Помощь в вождении</Text>

                           <View style={styles.packageItemUlList}>

                               <View style={styles.packageItemUlItem}>
                                   <Svg width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><Rect width={4} height={4} rx={2} fill="#C4C8D4" /></Svg>
                                   <Text style={styles.packageItemUlItemText}>Антиблокировочная система (ABS)</Text>
                               </View>

                               <View style={styles.packageItemUlItem}>
                                   <Svg width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><Rect width={4} height={4} rx={2} fill="#C4C8D4" /></Svg>
                                   <Text style={styles.packageItemUlItemText}>Система стабилизации (ESP)</Text>
                               </View>
                               <View style={styles.packageItemUlItem}>
                                   <Svg width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><Rect width={4} height={4} rx={2} fill="#C4C8D4" /></Svg>
                                   <Text style={styles.packageItemUlItemText}>Система помощи при торможении (BAS, EBD, EBA)</Text>
                               </View>

                           </View>
                       </View>
                       <View style={styles.packageItemWrapper}>

                           <Text style={styles.packageItemTitle}>Система Isofix</Text>

                           <View style={styles.packageItemUlList}>

                               <View style={styles.packageItemUlItem}>
                                   <Svg width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><Rect width={4} height={4} rx={2} fill="#C4C8D4" /></Svg>
                                   <Text style={styles.packageItemUlItemText}>Isofix для заднего ряда</Text>
                               </View>

                           </View>
                       </View>
                   </View>
               }

           </View>

           <View style={styles.packageMainItemWrapper}>
               <TouchableOpacity style={styles.toggleButton} onPress={() => {setOpen2tab(!open2tab)}}>
                   <Text style={styles.toggleButtonText}>Мультимедиа</Text>

                   <Svg width={18} height={10} viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <Path d="M2 8.5l7-7 7 7" stroke="#6C7694" strokeWidth={2} strokeLinecap="round"/>
                   </Svg>
               </TouchableOpacity>

               {open2tab &&
                   <View>
                       <View style={styles.packageItemWrapper}>

                           <Text style={styles.packageItemTitle}>Подушки безопасности</Text>

                           <View style={styles.packageItemUlList}>

                               <View style={styles.packageItemUlItem}>
                                   <Svg width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><Rect width={4} height={4} rx={2} fill="#C4C8D4" /></Svg>
                                   <Text style={styles.packageItemUlItemText}>Подушка безопасности водителя</Text>
                               </View>
                               <View style={styles.packageItemUlItem}>
                                   <Svg width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><Rect width={4} height={4} rx={2} fill="#C4C8D4" /></Svg>
                                   <Text style={styles.packageItemUlItemText}>Подушка для переднего пассажира</Text>
                               </View>

                           </View>
                       </View>
                       <View style={styles.packageItemWrapper}>

                           <Text style={styles.packageItemTitle}>Безопасность</Text>

                           <View style={styles.packageItemUlList}>

                               <View style={styles.packageItemUlItem}>
                                   <Svg width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><Rect width={4} height={4} rx={2} fill="#C4C8D4" /></Svg>
                                   <Text style={styles.packageItemUlItemText}>Датчик давления в шинах</Text>
                               </View>

                           </View>
                       </View>
                       <View style={styles.packageItemWrapper}>

                           <Text style={styles.packageItemTitle}>Защита доступа</Text>

                           <View style={styles.packageItemUlList}>

                               <View style={styles.packageItemUlItem}>
                                   <Svg width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><Rect width={4} height={4} rx={2} fill="#C4C8D4" /></Svg>
                                   <Text style={styles.packageItemUlItemText}>Иммобилайзер</Text>
                               </View>

                           </View>
                       </View>
                       <View style={styles.packageItemWrapper}>

                           <Text style={styles.packageItemTitle}>Система Isofix</Text>

                           <View style={styles.packageItemUlList}>

                               <View style={styles.packageItemUlItem}>
                                   <Svg width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><Rect width={4} height={4} rx={2} fill="#C4C8D4" /></Svg>
                                   <Text style={styles.packageItemUlItemText}>Isofix для заднего ряда</Text>
                               </View>

                           </View>
                       </View>
                       <View style={styles.packageItemWrapper}>

                           <Text style={styles.packageItemTitle}>Помощь в вождении</Text>

                           <View style={styles.packageItemUlList}>

                               <View style={styles.packageItemUlItem}>
                                   <Svg width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><Rect width={4} height={4} rx={2} fill="#C4C8D4" /></Svg>
                                   <Text style={styles.packageItemUlItemText}>Антиблокировочная система (ABS)</Text>
                               </View>

                               <View style={styles.packageItemUlItem}>
                                   <Svg width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><Rect width={4} height={4} rx={2} fill="#C4C8D4" /></Svg>
                                   <Text style={styles.packageItemUlItemText}>Система стабилизации (ESP)</Text>
                               </View>
                               <View style={styles.packageItemUlItem}>
                                   <Svg width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><Rect width={4} height={4} rx={2} fill="#C4C8D4" /></Svg>
                                   <Text style={styles.packageItemUlItemText}>Система помощи при торможении (BAS, EBD, EBA)</Text>
                               </View>

                           </View>
                       </View>
                       <View style={styles.packageItemWrapper}>

                           <Text style={styles.packageItemTitle}>Система Isofix</Text>

                           <View style={styles.packageItemUlList}>

                               <View style={styles.packageItemUlItem}>
                                   <Svg width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><Rect width={4} height={4} rx={2} fill="#C4C8D4" /></Svg>
                                   <Text style={styles.packageItemUlItemText}>Isofix для заднего ряда</Text>
                               </View>

                           </View>
                       </View>
                   </View>
               }


           </View>

           <View style={styles.packageMainItemWrapper}>
               <TouchableOpacity style={styles.toggleButton} onPress={() => {setOpen3tab(!open3tab)}}>
                   <Text style={styles.toggleButtonText}>Прочее</Text>
                   <Svg width={18} height={10} viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <Path d="M2 8.5l7-7 7 7" stroke="#6C7694" strokeWidth={2} strokeLinecap="round"/>
                   </Svg>
               </TouchableOpacity>

               {open3tab &&
                   <View>
                       <View style={styles.packageItemWrapper}>

                           <Text style={styles.packageItemTitle}>Подушки безопасности</Text>

                           <View style={styles.packageItemUlList}>

                               <View style={styles.packageItemUlItem}>
                                   <Svg width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><Rect width={4} height={4} rx={2} fill="#C4C8D4" /></Svg>
                                   <Text style={styles.packageItemUlItemText}>Подушка безопасности водителя</Text>
                               </View>
                               <View style={styles.packageItemUlItem}>
                                   <Svg width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><Rect width={4} height={4} rx={2} fill="#C4C8D4" /></Svg>
                                   <Text style={styles.packageItemUlItemText}>Подушка для переднего пассажира</Text>
                               </View>

                           </View>
                       </View>
                       <View style={styles.packageItemWrapper}>

                           <Text style={styles.packageItemTitle}>Безопасность</Text>

                           <View style={styles.packageItemUlList}>

                               <View style={styles.packageItemUlItem}>
                                   <Svg width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><Rect width={4} height={4} rx={2} fill="#C4C8D4" /></Svg>
                                   <Text style={styles.packageItemUlItemText}>Датчик давления в шинах</Text>
                               </View>

                           </View>
                       </View>
                       <View style={styles.packageItemWrapper}>

                           <Text style={styles.packageItemTitle}>Защита доступа</Text>

                           <View style={styles.packageItemUlList}>

                               <View style={styles.packageItemUlItem}>
                                   <Svg width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><Rect width={4} height={4} rx={2} fill="#C4C8D4" /></Svg>
                                   <Text style={styles.packageItemUlItemText}>Иммобилайзер</Text>
                               </View>

                           </View>
                       </View>
                       <View style={styles.packageItemWrapper}>

                           <Text style={styles.packageItemTitle}>Система Isofix</Text>

                           <View style={styles.packageItemUlList}>

                               <View style={styles.packageItemUlItem}>
                                   <Svg width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><Rect width={4} height={4} rx={2} fill="#C4C8D4" /></Svg>
                                   <Text style={styles.packageItemUlItemText}>Isofix для заднего ряда</Text>
                               </View>

                           </View>
                       </View>
                       <View style={styles.packageItemWrapper}>

                           <Text style={styles.packageItemTitle}>Помощь в вождении</Text>

                           <View style={styles.packageItemUlList}>

                               <View style={styles.packageItemUlItem}>
                                   <Svg width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><Rect width={4} height={4} rx={2} fill="#C4C8D4" /></Svg>
                                   <Text style={styles.packageItemUlItemText}>Антиблокировочная система (ABS)</Text>
                               </View>

                               <View style={styles.packageItemUlItem}>
                                   <Svg width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><Rect width={4} height={4} rx={2} fill="#C4C8D4" /></Svg>
                                   <Text style={styles.packageItemUlItemText}>Система стабилизации (ESP)</Text>
                               </View>
                               <View style={styles.packageItemUlItem}>
                                   <Svg width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><Rect width={4} height={4} rx={2} fill="#C4C8D4" /></Svg>
                                   <Text style={styles.packageItemUlItemText}>Система помощи при торможении (BAS, EBD, EBA)</Text>
                               </View>

                           </View>
                       </View>
                       <View style={styles.packageItemWrapper}>

                           <Text style={styles.packageItemTitle}>Система Isofix</Text>

                           <View style={styles.packageItemUlList}>

                               <View style={styles.packageItemUlItem}>
                                   <Svg width={4} height={4} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><Rect width={4} height={4} rx={2} fill="#C4C8D4" /></Svg>
                                   <Text style={styles.packageItemUlItemText}>Isofix для заднего ряда</Text>
                               </View>

                           </View>
                       </View>

                   </View>
               }

           </View>

           <TouchableOpacity>
               <Text style={{fontSize:16, color: '#2B65EE'}}>Комплектация LX</Text>
           </TouchableOpacity>

       </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        paddingHorizontal: 16,
        // marginTop: 24,
        marginBottom: 14
    },

    mainTitle: {
        color: '#091334',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20
    },
    Item: {
        justifyContent:'center',
        alignItems:'center',
        marginRight: 8,
        backgroundColor:'#E5F2FF',
        borderRadius: 100,
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginBottom: 16
    },
    text: {
        width: '100%',
        color: '#2B65EE',
        fontSize: 16,
        textAlign:'center'
    },

    mainWrapper:{
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingRight: 16
    },
    showAll:{

    },
    showAllText:{
        fontSize: 16,
        color: '#2B65EE'
    },

    descriptionWrapper: {

    },
    description: {
        lineHeight: 24
    },

    actionButton: {
        width: '100%',
        height:  48,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderWidth: 1,
        borderColor:'#C4C8D4',
        borderRadius: 6,
        marginTop: 8
    },
    actionText: {
        fontSize: 16,
        color: '#091334'
    },

    white: {
        width:'100%',
        height: 30,
        backgroundColor: 'rgba(255,255,255,0.74)',
        position:'absolute',
        bottom: 0,
        left: 0,
    },
    toggleButton: {
        width: '100%',
        height: 24,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom: 12
    },
    toggleButtonText: {
        fontSize: 18,
        color: '#091334',
        fontWeight: 'bold'
    },
    packageMainItemWrapper: {
        width:'100%'
    },

    packageItemWrapper: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor:'#F0F1F4',
        marginBottom: 12
    },
    packageItemTitle: {
        lineHeight: 24,
        fontSize: 16,
        color: '#6C7694',
        marginBottom: 8
    },
    packageItemUlList: {
        width: '100%',
    },
    packageItemUlItem: {
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        marginBottom:12
    },
    packageItemUlItemText: {
        marginLeft:12,
        fontSize:18
    },
})
