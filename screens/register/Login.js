import { View, Text, Image, StyleSheet} from 'react-native'

import Logo from '../../components/UI/Logo'
import CustomTextInput from '../../components/UI/CustomTextInput'
import PrimaryButton from '../../components/UI/PrimaryButton'
import Title from '../../components/UI/Title'

export default function Login({navigation}) {

    return(
        <View style={styles.container}>
            <Image
                style={styles.objectTop}
                source={require("../../assets/object/Rectangle-7.png")}
            />
            <View style={styles.innerContainer}>
                <View style={styles.logoContainer}>
                    <Logo/>
                </View>
                <View style={styles.formContainer}>
                    <Title>Log In</Title>
                    <CustomTextInput 
                        style={{marginTop: 16}} 
                        placeholder={"Email"}
                        onChangeText={setEmail}
                    />
                    <CustomTextInput 
                        style={{marginVertical: 16}} 
                        placeholder={"Password"}
                        onChangeText={setPassword}
                    />
                    <Text style={styles.textSmall}>Doesn't have an account?</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={onSubmitHandler}>Log In</PrimaryButton>
                </View>
            </View>
            <Image
                style={styles.objectBottom}
                source={require("../../assets/object/Ellipse-1.png")}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    objectTop: {
        width: 217,
        height: 193,
        resizeMode: 'contain',
        position: "absolute",
        left: -73
    },
    objectBottom: {
        width: 245,
        height: 245,
        resizeMode: 'contain',
        position: "absolute",
        bottom: 0,
        right: -23,
        zIndex: -5
    },  
    innerContainer: {
        flex: 1,
        padding: 20,
        justifyContent: "space-between",
        alignItems: "center"
    },
    logoContainer: {
        marginTop: 4
    },
    buttonContainer: {
        marginBottom: 20
    },
    textSmall: {
        fontFamily: "Inter_500Medium",
        fontSize: 12
    },
})