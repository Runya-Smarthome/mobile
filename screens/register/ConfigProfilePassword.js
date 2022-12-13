import { View, Text, StyleSheet, Alert } from 'react-native'
import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Picker } from '@react-native-picker/picker'

import Logo from '../../components/UI/Logo'
import Title from '../../components/UI/Title'
import PrimaryButton from '../../components/UI/PrimaryButton'
import CustomDropdown from '../../components/UI/CustomDropdown'
import CustomTextInput from '../../components/UI/CustomTextInput'
import RegisterProfile from '../../API/RegisterProfile'
import LoginApi from '../../API/Login'
import LargeSpinner from '../../components/UI/LargeSpinner'


export default function ConfigProfilePassword({navigation, route}) {

    const [loading, isLoading] = useState(false);

    const [value, setValue] = useState(null);

    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')

    const updatePasswordState = (p) => {
        setPassword(p)
    }

    const updateRePasswordState = (p) => {
        setRePassword(p)
    }

    async function pressHandler() {
        //validation
        if(value === true){
            if(password === '' && rePassword === ''){
                Alert.alert(
                    "Failed to continue",
                    "Password should be added",
                    [{text: "OK"}],
                    [{cancelable: true}]
                );
                return;
            } else if(password !== rePassword){
                Alert.alert(
                    "Failed to continue",
                    "Password and rePassword did not match",
                    [{text: "OK"}],
                    [{cancelable: true}]
                );
                return;
            }
            let index = route.params.profile.findIndex((profiles)=>profiles.role==='owner')
            for(let i = 0; i < route.params.profile.length; i++){
                if(i === index){
                    route.params.profile[index].password = password
                }else{
                    route.params.profile[i].password = ''
                }
            }
            isLoading(true)
            const data = await RegisterProfile({
                method: "POST",
                body: {
                    email: route.params.email,
                    profiles: route.params.profile
                }
            })

            if(data.status === 201){
                isLoading(false)
                Alert.alert(
                    "Berhasil Masuk",
                    data.message,
                    [{text: "OK"}],
                    [{cancelable: true}]
                );
                
                isLoading(true)
                const dataLogin = await LoginApi({
                    method: "POST",
                    body: {
                        email: route.params.email,
                        password: route.params.password
                    }
                })
                
                await AsyncStorage.setItem(
                    '@MyTokenLogin:key',
                    dataLogin.loginResult
                );
                isLoading(false)
                navigation.navigate("PickProfile",{
                    email: route.params.email
                })

            } else{
                isLoading(false)
                Alert.alert(
                    "Failed to Sign In",
                    data.message,
                    [{text: "OK"}],
                    [{cancelable: true}]
                );
            }

        }else{
            for(let i = 0; i < route.params.profile.length; i++){
                route.params.profile[i].password = ''
            }
            isLoading(true)
            const data = await RegisterProfile({
                method: "POST",
                body: {
                    email: route.params.email,
                    profiles: route.params.profile
                }
            })

            if(data.status === 201){
                isLoading(false)
                Alert.alert(
                    "Berhasil Masuk",
                    data.message,
                    [{text: "OK"}],
                    [{cancelable: true}]
                );
                
                isLoading(true)
                const dataLogin = await LoginApi({
                    method: "POST",
                    body: {
                        email: route.params.email,
                        password: route.params.password
                    }
                })
                
                await AsyncStorage.setItem(
                    '@MyTokenLogin:key',
                    dataLogin.loginResult
                );
                isLoading(false)
                navigation.navigate("PickProfile",{
                    email: route.params.email
                })

            } else{
                isLoading(false)
                Alert.alert(
                    "Failed to Sign In",
                    data.message,
                    [{text: "OK"}],
                    [{cancelable: true}]
                );
            }
        }

    }

    console.log(route.params.profile);

    return(
        <View style={{flex: 1}}>
            <View style={styles.container}>
                <View style={{alignItems: "center"}}>
                    <Logo/>
                </View>
                <View style={{marginTop: 90}}>
                    <Title>Create Password</Title>
                    <Text style={{marginTop: 24, marginBottom: 16}}>Use password for owner role?</Text>
                    <View style={{elevation: 3, zIndex: 3}}>
                        <Picker
                            selectedValue={value}
                            mode={"dropdown"}
                            style={{width:160}}
                            onValueChange={(itemValue) =>
                                setValue(itemValue)
                            }>
                            <Picker.Item label="Pick Your Anwer" value={null} />
                            <Picker.Item label="Yes" value={true} />
                            <Picker.Item label="No" value={false} />
                        </Picker>
                    </View>
                    
                    {
                        value &&
                        <View>
                            <CustomTextInput 
                                style={{marginTop: 24, elevation: 1}} 
                                placeholder={"Password"}
                                secureTextEntry={true}
                                onChangeText={updatePasswordState}
                            />
                            <CustomTextInput 
                                style={{marginTop: 16, elevation: 1}} 
                                placeholder={"Re-password"}
                                secureTextEntry={true}
                                onChangeText={updateRePasswordState}    
                            />
                        </View>

                    }

                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton  
                        onPress={pressHandler}
                        disabled={value === null ? true : false}
                    >
                        Let's get started
                    </PrimaryButton>
                </View>
                
            </View>
            {loading && <LargeSpinner/>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginVertical: 20,
        minHeight: 700,
    },
    buttonContainer: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    }
})