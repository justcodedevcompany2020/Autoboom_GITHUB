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


const data = [
    { id: 1, text: 'Оказаться действительно недорогой!', key: 'Оказаться действительно недорогой!', width: '40%', },
    { id: 2, text: 'Выйти в намеченные сроки', key: 'Выйти в намеченные сроки', width: '30%' },
    { id: 3, text: 'Оправдать надежды создателей', key: 'Оправдать надежды создателей', width: '20%' },
    { id: 4, text: 'Приехать к нам в Израиль!', key: 'Приехать к нам в Израиль!', width: '10%' }
]

export default function App(props) {
    const [sortBy, onSortBy] = React.useState(null)
    const [show, setShow] = React.useState(false)

    const setTime = () => {
        setTimeout(() => {
            setShow(true)
        }, 1000)
    }

    return (
        <View style={styles.container} >
            <Text style={styles.boldText} >Ваши пожелания будущей «Груше»</Text>

            {
                show !== true ?
                    <View style={{ marginTop: 10 }}>
                        {data.map((res) => {
                            return (
                                <TouchableOpacity
                                    key={res.key}
                                    onPress={() => {
                                        onSortBy(res.key);
                                        setTime()
                                    }}
                                    style={styles.div}
                                >
                                    <View style={styles.selectedBlock} >
                                        <Text style={styles.selectText} >{res.text}</Text>
                                        <View style={[styles.selectView, sortBy === res.key ? { borderColor: '#2B65EE', backgroundColor: '#E5F2FF' } : { borderColor: '#D3D5DE', backgroundColor: 'white' }]} >
                                            {sortBy === res.key && <View style={styles.select} ></View>}
                                        </View>
                                    </View>

                                </TouchableOpacity>
                            )
                        })}
                    </View>
                    :
                    <View style={{ marginTop: 10 }}>

                        {data.map((res, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                        
                                    style={styles.div}
                                >
                                    <View style={styles.selectedBlock} >
                                        <Text style={styles.selectText} >{res.text}</Text>
              
                                        <Text style={styles.selectText} > {res.width} </Text>
                                    </View>
                                    <View style={styles.range} >
                                        <View style={[styles.rangeBlue, { width: res.width }]} ></View>
                                    </View>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
            }



        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 16,
    },
    boldText: {
        fontWeight: '700',
        fontSize: 22,
        lineHeight: 28,
        color: '#091334'
    },
    selectView: {

        borderWidth: 1,
        width: 20,
        height: 20,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    select: {
        backgroundColor: '#2B65EE',
        width: 8,
        height: 8,
        borderRadius: 20,
        alignSelf: 'center',

    },
    div: {

        // padding: 10,
        borderBottomColor: '#F0F1F4',
        borderBottomWidth: 1,
        paddingBottom: 15,
        marginTop: 15
    },
    selectedBlock: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    selectText: {
        color: '#091334',
        fontSize: 16,
        lineHeight: 24
    },
    range: {
        width: '100%',
        height: 8,
        backgroundColor: '#F0F1F4',
        borderRadius: 100,
        marginTop: 15,
        justifyContent: 'center',
        paddingLeft: 2,
        paddingRight: 2
    },
    rangeBlue: {
        width: 20,
        height: 5,
        borderRadius: 100,
        backgroundColor: '#2B65EE',

    }
})