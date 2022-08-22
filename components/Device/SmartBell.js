import { View, Text, StyleSheet, Image, Pressable} from 'react-native'
import { useState } from 'react'

import CardDevice from '../UI/CardDevice'

export default function SmartBell({onPress}) {

    return(
        <CardDevice>
            <Text style={styles.title}>Smart Bell</Text>
            <View style={styles.content} >
                <Image
                    source={require('../../assets/Icons/bell-icon.png')}
                />
                <Pressable 
                    style={styles.buttonMore}
                    onPress={onPress}
                    >
                    <Text style={styles.buttonText}>See More </Text>
                    <Image
                        source={require('../../assets/Icons/arrowright-icon.png')}
                    />
                </Pressable>
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
    buttonMore: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
        marginBottom: 4
    },
    buttonText: {
        fontFamily: 'Inter_400Regular',
        fontSize: 10,
        color: 'white'
    }
})