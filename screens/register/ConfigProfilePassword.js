import { View, Text, StyleSheet, Alert } from 'react-native'
import { useState } from 'react'

import Logo from '../../components/UI/Logo'
import Title from '../../components/UI/Title'
import PrimaryButton from '../../components/UI/PrimaryButton'
import CustomDropdown from '../../components/UI/CustomDropdown'
import CustomTextInput from '../../components/UI/CustomTextInput'
import RegisterProfile from '../../API/RegisterProfile'

export default function ConfigProfilePassword({route}) {

    

    const [value, setValue] = useState();
    const [items, setItems] = useState([
      {label: 'Yes', value: true},
      {label: 'No', value: false}
    ]);
    const [statusOpen, setStatusOpen] = useState(false)

    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')

    const updatePasswordState = (p) => {
        setPassword(p)
    }

    const updateRePasswordState = (p) => {
        setRePassword(p)
    }

    const dropdownOpenHandler = () => {
        setStatusOpen(true)
    }

    const dropdownCloseHandler = () => {
        setStatusOpen(false)
    }

    const selectedItemHandler = (v) => {
        setValue(v)
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
            
            const data = await RegisterProfile({
                method: "POST",
                body: {
                    email: route.params.email,
                    profiles: route.params.profile
                }
            })

            if(data.status === 201){
                Alert.alert(
                    "Berhasil Masuk",
                    data.message,
                    [{text: "OK"}],
                    [{cancelable: true}]
                );
            } else{
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
            console.log(route.params.profile)
            console.log("selesai tanpa password")
        }

    }

    return(
        <View style={styles.container}>
            <View style={{alignItems: "center"}}>
                <Logo/>
            </View>
            <View style={{marginTop: 90}}>
                <Title>Create Password</Title>
                <Text style={{marginTop: 24, marginBottom: 16}}>Use password for owner role?</Text>
                <View style={{elevation: 3, zIndex: 3}}>
                    <CustomDropdown
                        width={160}
                        placeholder={"Pick your answer"}
                        value={value}
                        items={items}
                        setValue={setValue}
                        setItems={setItems}
                        onChangeValue={selectedItemHandler}
                        onOpen={dropdownOpenHandler}
                        onClose={dropdownCloseHandler}
                    />
                </View>
                {
                    value === true ?
                    
                    <View>
                        <CustomTextInput 
                            style={{marginTop: 24, elevation: 1}} 
                            placeholder={"Password"}
                            editable={statusOpen === true ? false : true}
                            onChangeText={updatePasswordState}
                        />
                        <CustomTextInput 
                            style={{marginTop: 16, elevation: 1}} 
                            placeholder={"Re-password"}
                            editable={statusOpen === true ? false : true}
                            onChangeText={updateRePasswordState}    
                        />
                    </View>

                    : null
                }

            </View>
            <View style={styles.buttonContainer}>
                <PrimaryButton onPress={pressHandler}>Let's get started</PrimaryButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginVertical: 20
    },
    buttonContainer: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    }
})