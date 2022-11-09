import { View, Image, Text, StyleSheet } from 'react-native'

export default function Avatar({name, color, owner, style}) {

    const displayName =   name.charAt(0).toUpperCase() + name.slice(1)
    
    let image;

    if(color === "yellow"){
        image = <Image 
                    style={[styles.image, style]}
                    source={require('../../assets/avatars/avatar-yellow.png')}
                />
    }else if(color === "blue"){
        image = <Image 
            style={styles.image}
            source={require('../../assets/avatars/avatar-blue.png')}
            />
    }else if(color === "red"){
        image = <Image 
            style={styles.image}
            source={require('../../assets/avatars/avatar-red.png')}
            />
    }else if(color === "green"){
        image = <Image 
            style={styles.image}
            source={require('../../assets/avatars/avatar-green.png')}
            />
    }
    
    return(
        <View style={styles.container}>
            {image}
            <Text style={name === "" ? {display:'none'} : styles.name}>{ name === "" ? '' : displayName}</Text>
            {
                owner === "owner" ? <Text>(Owner)</Text> : null
            }
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
        marginTop: 8,
    },
    image: {
        width: 100,
        height: 100
    }
})