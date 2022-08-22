import { View, Text, StyleSheet, Image} from 'react-native'
import { useState } from 'react'

import CardDevice from '../UI/CardDevice'
import CustomSwitch from '../UI/CustomSwitch'

export default function AirConditioner() {

    return(
        <CardDevice>
            <Text style={styles.title}>Air Conditioner</Text>
            <View style={styles.content} >
                <Image
                    source={require('../../assets/Icons/conditioner-icon.png')}
                />
                <CustomSwitch/>
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