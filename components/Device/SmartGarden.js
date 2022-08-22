import { View, Text, StyleSheet, Image} from 'react-native'
import { useState } from 'react'

import CardDevice from '../UI/CardDevice'

export default function SmartGarden() {

    return(
        <CardDevice>
            <Text style={styles.title}>Smart Garden</Text>
            <View style={styles.content} >
                <Image
                    source={require('../../assets/Icons/garden-icon.png')}
                />
                <View style={styles.contentDeviceStatus} >
                    <Text style={styles.text}> Moistures : 50% </Text>
                    <Text style={styles.text}> Air Flow: On </Text>
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