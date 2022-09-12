import { View, Text, Image, StyleSheet, Pressable, Alert} from 'react-native'
import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import Logo from '../../components/UI/Logo'
import CustomTextInput from '../../components/UI/CustomTextInput'
import PrimaryButton from '../../components/UI/PrimaryButton'
import Title from '../../components/UI/Title'
import LoginApi from '../../API/Login'


export default function Login({navigation}) {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const updateState = (key, value) => {
        setUser(oldValue => ({
          ...oldValue,
          [key]: value,
        }));
    };

    async function onSubmitHandler(){
        const data = await LoginApi({
            method: "POST",
            body: {
                email: user.email,
                password: user.password
            }
        })

        if(data.status === 201){
            Alert.alert(
                "mantep",
                data.message,
                [{text: "OK"}],
                [{cancelable: true}]
            );

            await AsyncStorage.setItem(
                '@MyToken:key',
                data.loginResult
            );
            
            navigation.navigate("PickProfile",{
                email: user.email
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
    
    function signUpPageHandler(){
        navigation.navigate("Signup")
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
                <View>
                    <Title>Log In</Title>
                    <CustomTextInput 
                        style={{marginTop: 16}} 
                        placeholder={"Email"}
                        onChangeText={(text) => updateState('email', text)}
                    />
                    <CustomTextInput 
                        style={{marginVertical: 16}} 
                        placeholder={"Password"}
                        onChangeText={(text) => updateState('password', text)}
                        secureTextEntry={true}
                    />
                    <Pressable onPress={signUpPageHandler}>
                        <Text style={styles.textSmall}>Doesn't have an account?</Text>
                    </Pressable>
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