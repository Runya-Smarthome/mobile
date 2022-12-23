import { View, Text, StyleSheet, Image} from 'react-native'
import { useState } from 'react'

import CardDevice from '../UI/CardDevice'
import IoTHelper from '../../helper/IoTHelper'
import '../../helper/IoTHelper'

export default function SmartGarden({topic, client}) {

    const [moisture, setMoisture] = useState()
    const [pumpFlowStatus, setPumpFlowStatus] = useState(false)

    client.subscribe(topic)

    const connect = new IoTHelper(topic, client)

    client.onMessageArrived = onMessage;

    function onMessage(message) {
        const value = connect.RetrieveHandler(topic, message)
        console.log(value)
        if(value !== 'nan' && value !== undefined){
            valueInt = parseInt(value)
            setMoisture(parseInt(valueInt))
            if(valueInt < 800){
                setPumpFlowStatus(true)
            }
        }
    }

    return(
        <CardDevice>
            <Text style={styles.title}>Smart Garden</Text>
            <View style={styles.content} >
                <Image
                    source={require('../../assets/Icons/garden-icon.png')}
                />
                <View style={styles.contentDeviceStatus} >
                    <Text style={styles.text}> Moist : {moisture} </Text>
                    <Text style={styles.text}> Pump: {pumpFlowStatus == true ? "ON" : "OFF"} </Text>
                </View>
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
    contentDeviceStatus: {
        justifyContent: 'flex-start',
    },
    text: {
        fontFamily: 'Inter_600SemiBold',
        fontSize: 12,
        color: 'white',
        marginBottom: 4,
        textAlign:'left'
    },
    
})