import { View, Text, StyleSheet, Image, Pressable} from 'react-native'
import { useState, useEffect } from 'react'
import Paho from 'paho-mqtt'

import CardDevice from '../UI/CardDevice'
import CustomSwitch from '../UI/CustomSwitch'
import IoTHelper from '../../helper/IoTHelper'
import '../../helper/IoTHelper'

export default function SmartLamp({topic, client}) {

    client.subscribe(topic)

    const connect = new IoTHelper(topic, client)

    function switchValueHandler(v){
        if( v === true){
            connect.SwitchHandler(topic, "ON")
        } else if(v === false){
            connect.SwitchHandler(topic, "OFF")
        }
    }

    return(
        <CardDevice>
            <Text style={styles.title}>Smart Lamp</Text>
            <View style={styles.content} >
                <Image
                    source={require('../../assets/Icons/lamp-icon.png')}
                />
                <CustomSwitch onSwitchValue={switchValueHandler}/>
            </View>
        </CardDevice>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Inter_600SemiBold',
        fontSize: 12,
        color: 'white',
        marginBottom: 8
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})