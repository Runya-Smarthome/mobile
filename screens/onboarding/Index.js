import { View, Text, StyleSheet, Image } from 'react-native'

import Logo from '../../components/UI/Logo'
import SecondaryButton from '../../components/UI/SecondaryButton'
import Colors from '../../constants/Colors'

export default function Index({ navigation }) {

    return(
        <View style={styles.mainContainer}>
            <Image
                style={styles.roundRectangle}
                source={require('../../assets/object/Rectangle-6.png')}
            />
            <View style={styles.innerContainer}>
                <View>
                    <Logo/>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Welcome!</Text>
                    <Text style={styles.subTitle}>Let's make comfortable home</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <SecondaryButton style={styles.button} onPress={() => navigation.navigate('Register')}>Next</SecondaryButton>
                    <Image
                        style={styles.maskImage}
                        source={require('../../assets/object/maskgroup.png')}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 0,
        margin: 0,
        
    },
    innerContainer: {
        marginTop: 20,
        flex: 1,
        padding: 20
    },
    titleContainer: {
        marginTop: 36
    },
    title: {
        fontFamily: "Inter_700Bold",
        fontSize: 32,
        color: Colors.dark500
    },
    subTitle: {
        fontFamily: "Inter_300Light",
        fontSize: 24,
        color: Colors.dark300,
        maxWidth: 300
    },
    buttonContainer: {
        alignItems: "flex-end",
        flex: 1,
        justifyContent: "flex-end",
        marginBottom: 20,
        
    },
    button: {
        position: "absolute",
        zIndex: 2
    },
    roundRectangle: {
        width: 217,
        height: 193,
        resizeMode: 'contain',
        position:'absolute',
        right: -30,
    },
    maskImage: {
        width: 251,
        height: 410,
        position:"absolute",
        bottom: -40,
        left: -20,
        zIndex: 1
    }
})

