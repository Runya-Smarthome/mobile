import { View, Text, StyleSheet, Image, Pressable} from 'react-native'
import { useState } from 'react'

import CardDevice from '../UI/CardDevice'
import CustomSwitch from '../UI/CustomSwitch'

export default function SmartLamp({onSwitchLampValueHandler}) {

    function switchValueHandler(v){
        onSwitchLampValueHandler(v);
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