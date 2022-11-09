import { View, Text, StyleSheet, Image } from 'react-native' 

import Colors from '../../constants/Colors'

export default function CardRoom({title, icon, style}) {

    let images;

    if(icon === 'livingroom'){
        images = <Image
                        style={{width: 32, height: 32}}
                        source={require(`../../assets/room/livingroom.png`)}
                     />
    }

    return(
        <View style={[styles.outerCard,style]}>
            <View style={styles.innerCard}>
                {images}
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    outerCard: {
        width: 150,
        height: 120,
        borderRadius: 8,
        backgroundColor: Colors.Green300,
        elevation: 12,
        marginBottom: 20
    },
    innerCard: {
        padding: 12,
        flex: 1,
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 20,
        color: 'white'
    }
})