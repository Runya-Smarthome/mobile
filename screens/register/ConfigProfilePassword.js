import { View, Text, StyleSheet } from 'react-native'
import { useState } from 'react'

import Logo from '../../components/UI/Logo'
import Title from '../../components/UI/Title'
import PrimaryButton from '../../components/UI/PrimaryButton'
import CustomDropdown from '../../components/UI/CustomDropdown'
import CustomTextInput from '../../components/UI/CustomTextInput'

export default function ConfigProfilePassword() {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState();
    const [items, setItems] = useState([
      {label: 'Yes', value: true},
      {label: 'No', value: false}
    ]);
    const [statusOpen, setStatusOpen] = useState(false)

    const dropdownOpenHandler = () => {
        setStatusOpen(true)
    }

    const dropdownCloseHandler = () => {
        setStatusOpen(false)
    }

    const selectedItemHandler = (value) => {
        //total person handler
        console.log(value)
    }

    return(
        <View style={styles.container}>
            <View style={{alignItems: "center"}}>
                <Logo/>
            </View>
            <View style={{marginTop: 90}}>
                <Title>Create Password</Title>
                <Text style={{marginTop: 24, marginBottom: 16}}>Use password for owner role?</Text>
                <View style={{elevation: 3}}>
                    <CustomDropdown
                        width={160}
                        placeholder={"Pick your answer"}
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        onItemValueSelected={selectedItemHandler}
                        onOpen={dropdownOpenHandler}
                        onClose={dropdownCloseHandler}
                    />
                </View>
                { value === true ?
                    <View>
                        <CustomTextInput 
                            style={{marginTop: 24}} 
                            placeholder={"Password"}
                            editable={statusOpen === true ? false : true}    
                        />
                        <CustomTextInput 
                            style={{marginTop: 16}} 
                            placeholder={"Re-password"}
                            editable={statusOpen === true ? false : true}    
                        />
                    </View>
                    : null
                }
            </View>
            <View style={styles.buttonContainer}>
                <PrimaryButton>Let's get started</PrimaryButton>
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