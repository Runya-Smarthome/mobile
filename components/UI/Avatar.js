import { View, Image, Text, StyleSheet } from 'react-native'

export default function Avatar({name, color, owner}) {

    return(
        <View style={styles.container}>
            <Image 
                style={{width: 100, height: 100}}
                source={require('../../assets/avatars/avatar-yellow.png')}
            />
            <Text style={styles.name}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems:"center"
    },
    name: {
        fontFamily: "Inter_500Medium",
        fontSize: 20,
        width: 100,
        textAlign: "center",
        marginTop: 8
    }
})