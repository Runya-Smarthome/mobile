import { View, Text, StyleSheet, Image, Pressable} from 'react-native'
import { useState } from 'react'

import CardDevice from '../UI/CardDevice'
import CustomSwitch from '../UI/CustomSwitch'
import '../../helper/IoTHelper'

export default function SmartCurtain({connect, topic}) {

    function switchValueHandler(v){
        if( v === true){
            connect.SwitchHandler(topic, "ON")
        } else if(v === false){
            connect.SwitchHandler(topic, "OF")
        }
    }


    return(
        <CardDevice>
            <Text style={styles.title}>Smart Curtains</Text>
            <View style={styles.content} >
                <Image
                    source={require('../../assets/Icons/curtains-icon.png')}
                />
                <CustomSwitch onSwitchValue={switchValueHandler} />
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
    }
})