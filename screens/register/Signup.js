import { View, Text, Image, StyleSheet, Alert, Pressable} from 'react-native'
import { useState } from 'react'

import signupApi from '../../API/Signup'
import Logo from '../../components/UI/Logo'
import CustomTextInput from '../../components/UI/CustomTextInput'
import PrimaryButton from '../../components/UI/PrimaryButton'
import Title from '../../components/UI/Title'


export default function Login({navigation}) {

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        rePassword: '',
        idDevice: ''
    })
    
    const updateState = (key, value) => {
        setUser(oldUser => ({
          ...oldUser,
          [key]: value,
        }));
    };

    function loginPageHandler() {
        navigation.navigate("Login")
    }

    async function submitHandler(){

        const data = await signupApi({
            method: "POST",
            body: {
                username : user.username,
                email: user.email,
                password: user.password,
                rePassword: user.rePassword,
                idDevice: user.idDevice
            }
        }) 
                
        if(data.status === 201){
            navigation.navigate("ConfigProfile",{
                email: user.email,
                password: user.password
            })
            
        } else{
            Alert.alert(
                "Failed to Sign In",
                data.message,
                [{text: "OK"}],
                [{cancelable: true}]
            );
        }

    }

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
                    <Title>Sign Up</Title>
                    <CustomTextInput
                        style={{marginTop: 16}} 
                        placeholder={"Id Device"}
                        onChangeText={(text) => updateState('idDevice', text)}
                        value={user.idDevice}
                    />
                    <CustomTextInput
                        style={{marginTop: 16}} 
                        placeholder={"Username"}
                        onChangeText={(text) => updateState('username', text)}
                        value={user.username}
                    />
                    <CustomTextInput
                        style={{marginVertical: 16}} 
                        placeholder={"Email"}
                        onChangeText={(text) => updateState('email', text)}
                        value={user.email}
                    />
                    <CustomTextInput
                        placeholder={"Password"}
                        onChangeText={(text) => updateState('password', text)}
                        value={user.password}
                        secureTextEntry={true}
                    />
                    <CustomTextInput
                        style={{marginVertical: 16}} 
                        placeholder={"Re-password"}
                        onChangeText={(text) => updateState('rePassword', text)}
                        value={user.rePassword}
                        secureTextEntry={true}
                    />
                    <Pressable onPress={loginPageHandler}>
                        <Text style={styles.textSmall}>Have an account?</Text>
                    </Pressable>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={submitHandler}>Sign Up</PrimaryButton>
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