import { View, Text, StyleSheet, Image } from 'react-native'
import { useState } from 'react'

import CardDevice from '../UI/CardDevice'
import IoTHelper from '../../helper/IoTHelper'
import '../../helper/IoTHelper'

export default function SmartTemperature({topic, client, name}) {

    const formattedName = name.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());

    const [tempValue, setTempValue] = useState()

    client.subscribe(topic)

    const connect = new IoTHelper(topic, client)

    client.onMessageArrived = onMessage;

    function onMessage(message) {
        const value = connect.RetrieveHandler(topic, message)
        if(value !== 'nan' && value !== undefined){
            setTempValue(parseInt(value))
        }
    }

    return(
        <CardDevice>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>{formattedName}</Text>
                <Image
                    source={require('../../assets/Icons/temperature-icon.png')}
                />
            </View>
            <Text style={styles.tempValue}>{tempValue} &#8451;</Text>
        </CardDevice>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
    },
    headerTitle: {
        fontFamily: 'Inter_600SemiBold',
        fontSize: 12,
        color: 'white',

    },
    tempValue: {
        fontFamily: 'Inter_400Regular',
        fontSize: 32,
        color: 'white',
        marginTop: 8
    }
})