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
import { SafeAreaView } from 'react-native-safe-area-context';
import CloseSvg from '../../../../../assets/Svg/CloseSvg'
import SelectedSvg from '../../../../../assets/Svg/SelectedSvg'
import { useSelector, useDispatch, } from 'react-redux';
import { closeNameEditPopupInMyProfile } from '../../../../redux/actions/actions'
import CloseIcon from '../../../../../assets/Svg/my_profile/Close'

export default function App(props) {
    const [value, setValue] = React.useState('Иммануил')
    const { is_open_name_edit_popup } = useSelector(state => state.justDriveReducer);
    const dispatch = useDispatch();
    const handeCloseditNamePopup = () => dispatch(closeNameEditPopupInMyProfile())


    return (
        <SafeAreaView style={styles.mainWrapper} >
            <View style={styles.header}>
                <View></View>
                <Text style={styles.mainTitle}>Мое имя</Text>
                <TouchableOpacity
                    onPress={() => handeCloseditNamePopup()}
                >
                    <CloseSvg />
                </TouchableOpacity>
            </View>
            <ScrollView style={{ width: '100%', flex: 1 }}>
                <View style={styles.centerContentWrapper}>
                    <View style={{ marginTop: 15 }} >
                        <Text style={styles.textName} >Меня зовут</Text>
                        <View style={styles.inputDiv} >
                            <TextInput
                                value={value}
                            />
                            <TouchableOpacity>
                                <CloseIcon />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={styles.boldText} >Мое имя на разных языках</Text>
                    <View style={{ marginTop: 15 }} >
                        <Text style={styles.textName} >Иврит</Text>
                        <View style={styles.inputDiv} >
                            <TextInput
                                value={'Не указано'}
                                style={{ color: '#6B7185' }}
                            />
                            <TouchableOpacity>

                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 15 }} >
                        <Text style={styles.textName} >Русский</Text>
                        <View style={styles.inputDiv} >
                            <TextInput
                                value={'Илья'}
                            // style={{color:'#6B7185'}}
                            />
                            <TouchableOpacity>
                                <CloseIcon />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 15 }} >
                        <Text style={styles.textName} >Арабский</Text>
                        <View style={styles.inputDiv} >
                            <TextInput
                                value={'Не указано'}
                                style={{ color: '#6B7185' }}
                            />
                            <TouchableOpacity>

                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 15 }} >
                        <Text style={styles.textName} >Французский</Text>
                        <View style={styles.inputDiv} >
                            <TextInput
                                value={'Не указано'}
                                style={{ color: '#6B7185' }}
                            />
                            <TouchableOpacity>

                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 15 }} >
                        <Text style={styles.textName} >Английский</Text>
                        <View style={styles.inputDiv} >
                            <TextInput
                                value={'Не указано'}
                                style={{ color: '#6B7185' }}
                            />
                            <TouchableOpacity>

                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.footer} >
                    <TouchableOpacity 
                    onPress={() => handeCloseditNamePopup()}
                    style={styles.button} >
                        <Text style={{ color: '#091334' }} >Закрыть</Text>
                    </TouchableOpacity>
                </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainWrapper: {
        width: '100%',
        flex: 1,
        height: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: 'white',
        zIndex: 5
    },
    closeSpaceButton: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.44)'
    },
    header: {
        width: '100%',
        height: 56,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        borderBottomColor: '#F0F1F4',
        borderBottomWidth: 1
    },
    mainTitle: {
        padding: 14,
        fontSize: 22,
        color: '#091334',
        fontWeight: 'bold',
        marginRight: -40
    },
    centerContentWrapper: {
        width: '100%',
        paddingHorizontal: 16,
    },
    inputDiv: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 10,
        borderBottomColor: '#F0F1F4',
        borderBottomWidth: 1,
        marginTop: 10
    },
    textName: {
        fontSize: 14,
        color: '#6C7693'
    },
    boldText: {
        marginTop: 25,
        fontWeight: '700',
        fontSize: 16
    },
    button: {
        width: '92%',
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: 15,
        borderRadius: 6,
        borderColor:'#C4C8D4',
        borderWidth:1
    },
    footer: {
        height: 80,
        borderTopColor: '#F0F1F4',
        borderTopWidth: 1,
        alignItems: 'center'
    }
})