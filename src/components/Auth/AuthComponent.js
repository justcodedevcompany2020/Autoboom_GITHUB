// import * as React from 'react';
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
import {useEffect, useState, useRef} from "react";

import LogoSvg from '../../../assets/Svg/LogoSvg';
import ErrorInfSvg from '../../../assets/Svg/ErrorInfSvg';

export default function App(props) {

    const [phone, setPhone] = useState('');
    const [phone_error, setPhoneError] = useState(false);
    const [valid_phone, setValidPhone] = useState(false);


    const [call_code_popup, setCallCodePopup] = useState(false);

    const [call_code1, setCallCode1] = useState('');
    const [call_code1_field_error, setCallCode1FieldError] = useState(false);
    const [call_code1_field_valid, setCallCode1FieldValid] = useState(true);

    const [call_code2, setCallCode2] = useState('');
    const [call_code2_field_error, setCallCode2FieldError] = useState(false);
    const [call_code2_field_valid, setCallCode2FieldValid] = useState(true);

    const [call_code3, setCallCode3] = useState('');
    const [call_code3_field_error, setCallCode3FieldError] = useState(false);
    const [call_code3_field_valid, setCallCode3FieldValid] = useState(true);

    const [call_code4, setCallCode4] = useState('');
    const [call_code4_field_error, setCallCode4FieldError] = useState(false);
    const [call_code4_field_valid, setCallCode4FieldValid] = useState(true);
    const [call_popup_countdown_timer_number, setCallPopupCountdownTimerNumber] = useState(5);

    const [show_timer_for_call_popup, setShowTimerForCallPopup] = useState(true);



    const [message_code_popup, setMessageCodePopup] = useState(false);
    const [show_timer_for_message_popup, setShowTimerForMessagePopup] = useState(true);
    const [message_popup_countdown_timer_number, setMessagePopupCountdownTimerNumber] = useState(5);


    const [message_code1, setMessageCode1] = useState('');
    const [message_code1_field_error, setMessageCode1FieldError] = useState(false);
    const [message_code1_field_valid, setMessageCode1FieldValid] = useState(true);

    const [message_code2, setMessageCode2] = useState('');
    const [message_code2_field_error, setMessageCode2FieldError] = useState(false);
    const [message_code2_field_valid, setMessageCode2FieldValid] = useState(true);

    const [message_code3, setMessageCode3] = useState('');
    const [message_code3_field_error, setMessageCode3FieldError] = useState(false);
    const [message_code3_field_valid, setMessageCode3FieldValid] = useState(true);


    const [message_code4, setMessageCode4] = useState('');
    const [message_code4_field_error, setMessageCode4FieldError] = useState(false);
    const [message_code4_field_valid, setMessageCode4FieldValid] = useState(true)




    const call_firstInput_ref = useRef(null)
    const call_secondInput_ref = useRef(null)
    const call_thirdInput_ref = useRef(null)
    const call_fourthInput_ref = useRef(null)

    useEffect(() => {


    }, []);

    const onChangePhoneInput = async (value) =>
    {
        setPhone(value)
        if (value.length > 5)
        {
            setValidPhone(true)
        } else {
            setValidPhone(false)
        }
    }

    const callToNumber = async () =>
    {
        setCallCodePopup(true)


        // call api
        startCallpopupInterval()


    }


    const startCallpopupInterval = async () => {
        setCallPopupCountdownTimerNumber(5)
        setCallCodePopup(true)
        setShowTimerForCallPopup(true)

        let interval = setInterval(() => {

            setCallPopupCountdownTimerNumber((prevState) => {
                console.log('dwd')
                if (prevState > 0) {
                    return prevState -1;
                } else {
                    clearInterval(interval);
                    return 0;
                }
            });

        }, 1000);


    }


    const messageToNumber = async () => {
        setMessagePopupCountdownTimerNumber(5)
        setCallCodePopup(false)
        setMessageCodePopup(true)

        let interval = setInterval(() => {

            setMessagePopupCountdownTimerNumber((prevState) => {
                console.log('dwd')
                if (prevState > 0) {
                    return prevState -1;
                } else {
                    clearInterval(interval);
                    return 0;
                }
            });


            // show_timer_for_call_popup(false)

            // let f = setCallPopupCountdownTimerNumber((t) => t - 1)


        }, 1000);
    }


    const changeFirstCodeInput =  (value) => {
        if (value.length < 2) {

            setCallCode1(value)

            if (value.length == 1) {
                setCallCode1FieldError(false)
                setCallCode1FieldValid(true)
                call_secondInput_ref.current.focus()
            } else {
                setCallCode1FieldError(false)
                setCallCode1FieldValid(false)
            }
        }
    }
    const changeSecondCodeInput =  (value) =>
    {
        if (value.length < 2) {

            setCallCode2(value)

            if (value.length == 1) {
                setCallCode2FieldError(false)
                setCallCode2FieldValid(true)

                call_thirdInput_ref.current.focus()

            }

            if (value.length == 0) {
                setCallCode2FieldError(false)
                setCallCode2FieldValid(false)
                call_firstInput_ref.current.focus()

            }
        }
    }
    const changeThirdCodeInput =  (value) =>
    {
        if (value.length < 2) {

            setCallCode3(value)


            if (value.length == 1) {
                setCallCode3FieldError(false)
                setCallCode3FieldValid(true)
                call_fourthInput_ref.current.focus()

            }

            if (value.length == 0) {
                setCallCode3FieldError(false)
                setCallCode3FieldValid(false)
                call_secondInput_ref.current.focus()

            }
        }
    }
    const changeFourthCodeInput =  (value) =>
    {
        if (value.length < 2) {

            setCallCode4(value)

            if (value.length == 1) {
                setCallCode4FieldError(false)
                setCallCode4FieldValid(true)
                // this.refs.fifthInput.focus();
            }
            if (value.length == 0) {
                setCallCode4FieldError(false);
                setCallCode4FieldValid(false);
                call_thirdInput_ref.current.focus()
            }
        }
    }






    if(call_code_popup)
    {
        return (

            <SafeAreaView style={styles.container}>

                <View style={[styles.header, {marginBottom: 24}]}>

                    <View style={{flex:1}}>
                        <TouchableOpacity onPress={() => {setCallCodePopup(false)}}>
                            <Svg width={43} height={44} viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M25 15l-6.93 6.93a.1.1 0 000 .14L25 29" stroke="#091334" strokeWidth={2} strokeLinecap="round"/>
                            </Svg>
                        </TouchableOpacity>
                    </View>
                    <LogoSvg/>
                    <View style={{flex:1, alignItems:'flex-end'}}>

                    </View>

                </View>

                <Text style={styles.title5}>Введите <Text style={styles.title6}>последние 4 цфиры</Text> входящего номера</Text>

                <View style={styles.call_code_inputs_wrapper}>
                    <TextInput
                        ref={call_firstInput_ref}
                        style={[styles.code_input_field,  {borderWidth: 1, borderColor:call_code1_field_error ? "#A4223C" :  "#C4C8D4"} ]}
                        onChangeText={(value) => {changeFirstCodeInput(value)}}
                        value={call_code1}
                        placeholderTextColor="#000000"
                        keyboardType="numeric"

                    />
                    <TextInput
                        ref={call_secondInput_ref}
                        style={[styles.code_input_field,  {borderWidth: 1, borderColor:call_code2_field_error ? "#A4223C" :  "#C4C8D4"} ]}
                        onChangeText={(value) => {changeSecondCodeInput(value)}}

                        value={call_code2}
                        keyboardType="numeric"
                    />
                    <TextInput
                        ref={call_thirdInput_ref}
                        style={[styles.code_input_field,  {borderWidth: 1, borderColor:call_code3_field_error ? "#A4223C" :  "#C4C8D4"} ]}
                        onChangeText={(value) => {changeThirdCodeInput(value)}}
                        value={call_code3}
                        keyboardType="numeric"
                    />
                    <TextInput
                        ref={call_fourthInput_ref}
                        style={[styles.code_input_field,  {borderWidth: 1, borderColor:call_code4_field_error ? "#A4223C" :  "#C4C8D4"} ]}
                        onChangeText={(value) => {changeFourthCodeInput(value)}}
                        value={call_code4}
                        keyboardType="numeric"
                    />

                </View>

                <View style={{flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 12}}>


                    {show_timer_for_call_popup && call_popup_countdown_timer_number > 0
                        ?
                        <Text style={styles.timer_text}>Звонок поступит в течение 0:{call_popup_countdown_timer_number}</Text>
                        :
                        <TouchableOpacity style={styles.call_not_received} onPress={() => {messageToNumber()}} ><Text style={styles.call_not_received_text}>Звонок не поступил?</Text></TouchableOpacity>

                    }
                    {call_code1_field_error && call_code2_field_error && call_code3_field_error && call_code4_field_error &&
                        <Text style={styles.call_popup_mistake_numbers_error}>Цифры неверны</Text>
                    }
                </View>

            </SafeAreaView>

        )
    }



    if(message_code_popup)
    {
        return (

            <SafeAreaView style={styles.container}>

                <View style={[styles.header, {marginBottom: 24}]}>

                    <View style={{flex:1}}>
                        <TouchableOpacity onPress={() => {setMessageCodePopup(false) }}>
                            <Svg width={43} height={44} viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M25 15l-6.93 6.93a.1.1 0 000 .14L25 29" stroke="#091334" strokeWidth={2} strokeLinecap="round"/>
                            </Svg>
                        </TouchableOpacity>
                    </View>
                    <LogoSvg/>
                    <View style={{flex:1, alignItems:'flex-end'}}>

                    </View>

                </View>

                <Text style={styles.title5}>Мы отправили вам SMS. Пожалуйста, введите <Text style={styles.title6}>код из 5 цифр</Text></Text>

                <View style={styles.call_code_inputs_wrapper}>
                    <TextInput
                        ref={call_firstInput_ref}
                        style={[styles.code_input_field,  {borderWidth: 1, borderColor:message_code1_field_error ? "#A4223C" :  "#C4C8D4"} ]}
                        onChangeText={(value) => {changeFirstCodeInput(value)}}
                        value={call_code1}
                        placeholderTextColor="#000000"
                        keyboardType="numeric"

                    />
                    <TextInput
                        ref={call_secondInput_ref}
                        style={[styles.code_input_field,  {borderWidth: 1, borderColor:message_code2_field_error ? "#A4223C" :  "#C4C8D4"} ]}
                        onChangeText={(value) => {changeSecondCodeInput(value)}}

                        value={call_code2}
                        keyboardType="numeric"
                    />
                    <TextInput
                        ref={call_thirdInput_ref}
                        style={[styles.code_input_field,  {borderWidth: 1, borderColor:message_code3_field_error ? "#A4223C" :  "#C4C8D4"} ]}
                        onChangeText={(value) => {changeThirdCodeInput(value)}}
                        value={call_code3}
                        keyboardType="numeric"
                    />
                    <TextInput
                        ref={call_fourthInput_ref}
                        style={[styles.code_input_field,  {borderWidth: 1, borderColor:message_code4_field_error ? "#A4223C" :  "#C4C8D4"} ]}
                        onChangeText={(value) => {changeFourthCodeInput(value)}}
                        value={call_code4}
                        keyboardType="numeric"
                    />

                </View>

                <View style={{flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 12}}>


                    {show_timer_for_message_popup && message_popup_countdown_timer_number > 0
                        ?
                        <Text style={styles.timer_text}>SMS поступит в течение 0:{message_popup_countdown_timer_number}</Text>
                        :
                        <TouchableOpacity style={styles.call_not_received}
                              onPress={() => {
                                  startCallpopupInterval()
                              }}
                        >
                            <Text style={styles.call_not_received_text}>SMS не пришло?</Text>
                        </TouchableOpacity>

                    }
                    {message_code1_field_error && message_code2_field_error && message_code3_field_error && message_code4_field_error &&
                    <Text style={styles.call_popup_mistake_numbers_error}>Код неверный</Text>

                    }
                </View>

            </SafeAreaView>

        )
    }


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={{flex:1}}></View>
                <LogoSvg/>
                <View style={{flex:1, alignItems:'flex-end'}}>
                    <TouchableOpacity>
                        <Svg width={48} height={44} viewBox="0 0 48 44" fill="none" xmlns="http://www.w3.org/2000/svg"><G clipPath="url(#clip0_10897_28344)"><Path fillRule="evenodd" clipRule="evenodd" d="M17.707 14.293a1 1 0 00-1.414 1.414L22.586 22l-6.293 6.293a1 1 0 001.414 1.414L24 23.414l6.293 6.293a1 1 0 001.414-1.414L25.414 22l6.293-6.293a1 1 0 00-1.414-1.414L24 20.586l-6.293-6.293z" fill="#091334"/></G><Defs><ClipPath id="clip0_10897_28344"><Path fill="#fff" transform="translate(16 14)" d="M0 0H16V16H0z" /></ClipPath></Defs></Svg>
                    </TouchableOpacity>
                </View>

            </View>

            <ScrollView style={styles.scrollView}>

                <View style={styles.scrollTop}>
                    <Text style={styles.title1}>
                        Вход на сайт
                    </Text>

                    <Text style={styles.title2}>
                        Укажите ваш номер телефона. Мы позвоним или отправим SMS для его подтверждения
                    </Text>

                    <View style={styles.phoneInputWrapper}>
                        <View style={{width: '100%'}}>
                            <TextInput
                                style={[styles.phoneInput, phone_error && styles.phoneErrorBorder]}
                                onChangeText={onChangePhoneInput}
                                value={phone}
                                placeholder="Номер телефона"
                                // keyboardType="numeric"
                                keyboardType={'phone-pad'}
                            />

                            {phone_error &&

                                <TouchableOpacity style={styles.errorInfButton}>
                                    <ErrorInfSvg/>
                                </TouchableOpacity>

                            }
                        </View>


                        {phone_error &&

                            <Text style={styles.phoneErrorText}>
                                Укажите израильский мобильный номер
                            </Text>
                        }

                    </View>


                    {!valid_phone  ?

                        <View style={[styles.continueButton, {backgroundColor: '#F0F1F4'}]}>
                            <Text style={[styles.continueButtonText, {color: '#C4C8D4'}]}>Продолжить</Text>
                        </View>
                        :

                        <TouchableOpacity onPress={() => {callToNumber()}} style={[styles.continueButton, {backgroundColor: '#2B65EE'}]}>
                            <Text style={[styles.continueButtonText, {color: 'white'}]}>Продолжить</Text>
                        </TouchableOpacity>
                    }


                    <View style={{width: '100%', flexDirection: 'row', flexWrap:'wrap', marginBottom:24}}>
                        <Text style={{color: '#091334', fontSize:12}}>Отправляя форму вы принимаете</Text>
                        <TouchableOpacity>
                            <Text style={{color: '#2B65EE', fontSize:12}}>пользовательское соглашение</Text>
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={styles.scrollBottom}>

                    <Text style={styles.title3}>
                        Зарегистрируйся и испробуй новый функционал
                    </Text>

                    <View style={styles.scrollBottomItem}>
                        <Svg width={48} height={48} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M16 18.135c3.5-4.5 8 1 8 1s4.5-5.5 8-1c4 5-5 11.5-8 13.5-3-2-12-8.5-8-13.5z" stroke="#6C7694" strokeWidth={2}/>
                            <Rect x={0.5} y={0.5} width={47} height={47} rx={23.5} stroke="#DADDE6" />
                        </Svg>
                        <Text style={styles.scrollBottomItemText}>
                            Сохраняй интересные объявления и настройки поиска
                        </Text>
                    </View>


                    <View style={styles.scrollBottomItem}>
                        <Svg width={48} height={48} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <G clipPath="url(#clip0_10897_5154)" fill="#6C7694"><Rect x={23.094} y={13} width={2} height={22} rx={1} /><Path d="M32.521 23.962a.3.3 0 01.3-.3h2.38a.3.3 0 01.3.3v.943a.3.3 0 01-.17.27l-2.38 1.144a.3.3 0 01-.43-.27v-2.087zM15.48 23.962a.3.3 0 00-.3-.3H12.8a.3.3 0 00-.3.3v.943a.3.3 0 00.17.27l2.38 1.144a.3.3 0 00.43-.27v-2.087z" /><Path d="M19.87 15.8a5.05 5.05 0 00-4.959 4.093l-.867 4.493v7.138a1.65 1.65 0 103.298 0v-.7H21.3a.5.5 0 00.5-.5v-1.1a.5.5 0 00-.5-.5h-5.156v-4.137l.83-4.296A2.95 2.95 0 0119.87 17.9h1.43a.5.5 0 00.5-.5v-1.1a.5.5 0 00-.5-.5h-1.43zM28.474 15.8a5.05 5.05 0 014.958 4.092l.868 4.494v7.137a1.65 1.65 0 11-3.298 0v-.7h-3.958a.5.5 0 01-.5-.5v-1.1a.5.5 0 01.5-.5H32.2v-4.136l-.83-4.296a2.95 2.95 0 00-2.896-2.391h-1.43a.5.5 0 01-.5-.5v-1.1a.5.5 0 01.5-.5h1.43z" /></G>
                            <Rect x={0.5} y={0.5} width={47} height={47} rx={23.5} stroke="#DADDE6" />
                            <Defs><ClipPath id="clip0_10897_5154"><Path fill="#fff" transform="translate(12.5 13)" d="M0 0H23.0001V22H0z"/></ClipPath></Defs>
                        </Svg>
                        <Text style={styles.scrollBottomItemText}>
                            Сравнивай характиристики автомобилей между собой
                        </Text>
                    </View>


                    <View style={styles.scrollBottomItem}>
                        <Svg width={48} height={48} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <G clipPath="url(#clip0_10897_6500)"><Path fillRule="evenodd" clipRule="evenodd" d="M24 13.5c-5.799 0-10.5 4.701-10.5 10.5S18.201 34.5 24 34.5c1.7 0 3.308-.405 4.73-1.124.264.092.635.213 1.066.334.85.238 2.008.5 3.07.5h.284l.242-.15a1.44 1.44 0 00.612-.793 1.586 1.586 0 00.073-.424V32.815c0-.001 0-.002-1-.002h1v-.475l-.368-.3c-.045-.036-.163-.171-.33-.459a8.956 8.956 0 01-.448-.901c-.113-.26-.212-.509-.29-.712A10.456 10.456 0 0034.5 24c0-5.799-4.701-10.5-10.5-10.5zm5.019 17.854h-.003v-.001l-.442-.172-.413.232A8.5 8.5 0 1132.5 24c0 1.957-.66 3.757-1.77 5.194l-.327.422.17.507.948-.318-.948.318v.003l.003.007.008.023.03.084a18.3 18.3 0 00.486 1.238c.077.178.163.366.256.555a14.46 14.46 0 01-1.018-.249 17.343 17.343 0 01-1.233-.397l-.07-.027-.015-.006zm-9.124-6.181a1.173 1.173 0 100-2.346 1.173 1.173 0 000 2.346zm4.105 0a1.173 1.173 0 100-2.346 1.173 1.173 0 000 2.346zM29.278 24a1.173 1.173 0 11-2.346 0 1.173 1.173 0 012.346 0z" fill="#6C7694"/></G>
                            <Rect x={0.5} y={0.5} width={47} height={47} rx={23.5} stroke="#DADDE6" />
                            <Defs><ClipPath id="clip0_10897_6500"><Path fill="#fff" transform="translate(13.5 13.5)" d="M0 0H20.9991V20.9991H0z"/></ClipPath></Defs>
                        </Svg>
                        <Text style={styles.scrollBottomItemText}>
                            Общайся с другими пользователями
                        </Text>
                    </View>

                </View>

            </ScrollView>

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
        width:'100%',
        height: 56,
        flexDirection:'row',
        alignItems: 'center',
    },
    scrollView: {
        width: '100%',
        flex:1,
        backgroundColor:'#F0F1F4'
    },
    scrollTop: {
        width: '100%',
        paddingHorizontal: 20,
        backgroundColor: 'white',
        paddingTop:24,

    },
    scrollBottom: {
        width: '100%',
        paddingHorizontal: 20,
        backgroundColor: '#F0F1F4',
        minHeight: 50,
        paddingTop: 24,
    },
    title1: {
        color: '#091334',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign:'center',
        marginBottom: 8
    },
    title2: {
        lineHeight:24,
        color: '#6C7694',
        fontSize: 14,
        textAlign:'center',
        marginBottom: 20
    },
    phoneInputWrapper: {
        width: '100%',
        marginBottom: 16
    },

    phoneInput: {
        width: '100%',
        height: 44,
        borderColor:'#C4C8D4',
        borderWidth: 1,
        borderRadius: 6,
        paddingHorizontal:12,
        paddingVertical: 10,
        color: '#091334'
    },
    phoneErrorText: {
        marginTop:8,
        color: '#E72A4A',
        fontSize: 14
    },
    phoneErrorBorder: {
        borderWidth: 1,
        borderColor: '#E72A4A'
    },

    errorInfButton: {
        position:'absolute',
        right: 12,
        top: 12
    },

    continueButton: {
        width: '100%',
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        marginBottom:8
    },
    continueButtonText: {
        fontSize: 16
    },
    title3: {
        lineHeight:24,
        color: '#091334',
        fontSize: 18,
        marginBottom: 24
    },
    scrollBottomItem: {
        width: '100%',
        flexDirection: 'row',
        justifyContent:'space-between',
        marginBottom: 16
    },
    scrollBottomItemText: {
        flex:1,
        marginLeft:16,
        lineHeight:24,
        fontSize: 16,
        color:'#6C7694'
    },

    title5: {
        fontSize: 18,
        lineHeight: 24,
        textAlign:'center',
        maxWidth: 320,
    },
    title6: {
        fontWeight: 'bold'
    },

    call_code_inputs_wrapper: {
        width: '100%',
        flexDirection:'row',
        paddingHorizontal: 20,
        justifyContent:'space-between',
        marginTop: 24
    },
    code_input_field: {
        width: '23%',
        height: 44,
        borderRadius: 6,
        color: '#091334',
        textAlign:'center',
        fontSize: 18,
        fontWeight: 'bold'
    },
    timer_text: {
        color: '#6C7694',
        fontSize: 14,
        fontWeight: '400',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
    },

    call_not_received: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
    },
    call_not_received_text: {
        color: '#2B65EE',
        fontSize: 14,
        fontWeight: '400',

    },

    call_popup_mistake_numbers_error: {
        color: '#E72A4A',
        fontSize: 14,
        fontWeight: '400',
    }
})
