import {View, Text, Pressable, StyleSheet } from 'react-native'
import { useState } from 'react'

import Colors from '../../constants/Colors'

export default function CustomSwitch ({onSwitchValue}) {

    const [value, setValue] = useState(false)

    function changeValue() {
        setValue(!value);
        onSwitchValue(value);
    }

    return(
        <View style={ 
            value === true 
                ? [styles.switchContainerActive, 
                    styles.switchContainerPassive]
                : styles.switchContainerActive} >
            <Pressable 
                style={styles.switch}
                onPress={changeValue}
            >

            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    switchContainerActive: {
        width: 60,
        height: 30, 
        borderRadius: 25,
        backgroundColor: Colors.Yellow,
        justifyContent: 'center',
        padding: 4,
        alignSelf: 'flex-end',
        alignItems: 'flex-end'
    },
    switch: {
        width: 24,
        height: 24,
        borderRadius: 25,
        backgroundColor: 'white',
        elevation: 7
    },
    switchContainerPassive: {
        backgroundColor: Colors.dark300,
        alignItems: 'flex-start'
    },
})