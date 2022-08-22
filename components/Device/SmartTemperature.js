import { View, Text, StyleSheet, Image } from 'react-native'

import CardDevice from '../UI/CardDevice'

export default function SmartTemperature() {
    return(
        <CardDevice>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Temperature</Text>
                <Image
                    source={require('../../assets/Icons/temperature-icon.png')}
                />
            </View>
            <Text style={styles.tempValue}>31</Text>
        </CardDevice>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
    },
    headerTitle: {
        fontFamily: 'Inter_600SemiBold',
        fontSize: 12,
        color: 'white',

    },
    tempValue: {
        fontFamily: 'Inter_400Regular',
        fontSize: 32,
        color: 'white',
        marginTop: 8
    }
})