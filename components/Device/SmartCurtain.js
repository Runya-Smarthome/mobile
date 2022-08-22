import { View, Text, StyleSheet, Image, Pressable} from 'react-native'
import { useState } from 'react'

import CardDevice from '../UI/CardDevice'
import CustomSwitch from '../UI/CustomSwitch'
import Colors from '../../constants/Colors'

export default function SmartCurtain() {

    return(
        <CardDevice>
            <Text style={styles.title}>Smart Curtains</Text>
            <View style={styles.content} >
                <Image
                    source={require('../../assets/Icons/curtains-icon.png')}
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