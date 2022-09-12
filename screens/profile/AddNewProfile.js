import { View, Text, StyleSheet, Image, TextInput, Button, Pressable } from 'react-native'
import { useState } from 'react' 

import Title from '../../components/UI/Title'
import Avatar from '../../components/UI/Avatar'
import Logo from '../../components/UI/Logo'
import PrimaryButton from '../../components/UI/PrimaryButton'
import CustomTextInput from '../../components/UI/CustomTextInput'
import CustomDropdown from '../../components/UI/CustomDropdown'

export default function AddNewProfile({navigation}) {

    function backButtonHandler(){
        navigation.navigate('ManageProfile')
    };


    const [value, setValue] = useState();
    const [items, setItems] = useState([
        {label: 'Owner', value: 'owner'},
        {label: 'Member', value: 'member'}
    ]);

    return(
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <View style={styles.backButton}>
                    <Pressable onPress={backButtonHandler}>
                        <Image
                            source={require('../../assets/Icons/arrow-left-icon.png')}
                        />
                    </Pressable>
                </View>
                <Title>Add New Profile</Title>
            </View>
            <View style={styles.innerContainer}>         
                <View style={styles.formContainer}>
                    
                    <View style={styles.textDropdownContainer}>
                        <CustomTextInput 
                            style={styles.textInput}
                            placeholder={"Username"}
                        />
                        <CustomDropdown
                            width={105}
                            placeholder={"Role"}
                            value={value}
                            items={items}
                            setValue={setValue}
                            setItems={setItems}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <PrimaryButton>Add Profile</PrimaryButton>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    innerContainer: {
        flex: 1,
        padding: 22,
    },
    formContainer: {
        justifyContent: "center",
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50
    },
    textDropdownContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textInput: {
        width: '65%',
        marginRight: 22
    },
    dropdown: {
        width: '70%',
        marginRight: 20,
        borderColor: '#cccccc'
    },
    titleContainer: {
        justifyContent: 'flex-start',
        marginTop: 72,
        flexDirection: 'row',
    },
    backButton: {
        marginRight: 15.5,
        marginLeft: 20,
        justifyContent: 'center'
    },
})