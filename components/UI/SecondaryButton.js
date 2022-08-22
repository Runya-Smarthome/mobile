import { View, Text, Pressable, StyleSheet } from 'react-native' 

import Colors from '../../constants/Colors'

export default function SecondaryButton({children, onPress, style}){
    return(
        <View style={[styles.buttonOuterContainer, style]}>
            <Pressable
                style={({pressed}) => 
                            pressed
                            ? [styles.buttonInnerContainer, styles.pressed]
                            : styles.buttonInnerContainer }
                onPress={onPress}
            >
                <Text style={styles.button}>
                    {children}
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        width: 165,
        height: 48,
        maxWidth: 320,
    },
    buttonInnerContainer: {
        height: '100%',
        backgroundColor: 'white',
        elevation: 6,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        fontSize: 16,
        fontFamily: 'Inter_500Medium',
        color: Colors.Green300,
    },
    pressed: {
        backgroundColor: '#F5F5F5'
    }
})