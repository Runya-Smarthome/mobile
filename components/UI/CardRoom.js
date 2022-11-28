import { View, Text, StyleSheet, Image } from 'react-native' 

import Colors from '../../constants/Colors'

export default function CardRoom({title, icon, style}) {

    const formattedTitle = title.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());

    let images;

    if(icon === 'livingroom'){
        images = <Image
                        style={{width: 32, height: 32}}
                        source={require(`../../assets/room/livingroom.png`)}
                     />
    }

    if(icon === 'bedroom'){
        images = <Image
                        style={{width: 32, height: 32}}
                        source={require(`../../assets/room/bedroom.png`)}
                     />
    }

    if(icon === 'kitchen'){
        images = <Image
                        style={{width: 32, height: 32}}
                        source={require(`../../assets/room/kitchen.png`)}
                     />
    }
    
    if(icon === 'bathroom'){
        images = <Image
                        style={{width: 32, height: 32}}
                        source={require(`../../assets/room/bathroom.png`)}
                     />
    }

    if(icon === 'familyroom'){
        images = <Image
                        style={{width: 32, height: 32}}
                        source={require(`../../assets/room/familyroom.png`)}
                     />
    }

    if(icon === 'garden'){
        images = <Image
                        style={{width: 32, height: 32}}
                        source={require(`../../assets/room/garden.png`)}
                     />
    }


    return(
        <View style={[styles.outerCard,style]}>
            <View style={styles.innerCard}>
                {images}
                <Text style={styles.title}>
                    {formattedTitle}
                </Text>
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