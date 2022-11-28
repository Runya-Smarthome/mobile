import { View, Text, StyleSheet, Image} from 'react-native'
import { useState } from 'react'

import CardDevice from '../UI/CardDevice'
import '../../helper/IoTHelper'

export default function SmartDetection({connect,topic, client}) {

    const [totalPerson, setTotalPerson] = useState()

    client.onMessageArrived = onMessage;

    function onMessage(message) {
        setTotalPerson(connect.RetrieveHandler(topic, message))
    }

    return(
        <CardDevice>
            <Text style={styles.title}>Smart Detection</Text>
            <View style={styles.content} >
                <Image
                    source={require('../../assets/Icons/detection-icon.png')}
                />
                <Text style={styles.text}> {totalPerson} </Text>
            </View>
        </CardDevice>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Inter_600SemiBold',
        fontSize: 12,
        color: 'white',
        marginBottom: 16
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        fontFamily: 'Inter_600SemiBold',
        fontSize: 12,
        color: 'white',
        alignSelf: 'flex-end',
        marginBottom: 4
    }
})