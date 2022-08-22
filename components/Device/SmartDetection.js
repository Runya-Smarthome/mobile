import { View, Text, StyleSheet, Image} from 'react-native'
import { useState } from 'react'

import CardDevice from '../UI/CardDevice'

export default function SmartDetection() {

    return(
        <CardDevice>
            <Text style={styles.title}>Smart Detection</Text>
            <View style={styles.content} >
                <Image
                    source={require('../../assets/Icons/detection-icon.png')}
                />
                <Text style={styles.text}> 1 Person </Text>
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