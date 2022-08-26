import { View, Image, StyleSheet, ImageBackground } from 'react-native'

import Logo from '../../components/UI/Logo'
import PrimaryButton from '../../components/UI/PrimaryButton'

export default function Register({navigation}) {
    return(
        <ImageBackground
            source={require('../../assets/backgroundregister.png')}
            resizeMode={'cover'}
            style={styles.container}
        >
            <View style={styles.innerContainer}>
                <Logo/>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={() => navigation.navigate('Login')}>Log In</PrimaryButton>
                    <PrimaryButton onPress={() => navigation.navigate('Signup')} style={{marginTop:20}}>Sign Up</PrimaryButton>
                </View>
            </View>
        </ImageBackground>
    )
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        padding: 20,
        justifyContent: "space-between",
        marginTop: 24,
        alignItems: "center"
    },
    buttonContainer:{
        flex: 1,
        justifyContent: "flex-end",
        marginBottom: 20
    }

})