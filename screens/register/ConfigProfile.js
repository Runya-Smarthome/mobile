import { View, Text, StyleSheet, Alert } from 'react-native'
import { useEffect, useState } from 'react'

import Logo from '../../components/UI/Logo'
import Title from '../../components/UI/Title'
import PrimaryButton from '../../components/UI/PrimaryButton'
import CustomDropdown from '../../components/UI/CustomDropdown'
import CustomTextInput from '../../components/UI/CustomTextInput'
import Colors from '../../constants/Colors'

export default function ConfigProfile({navigation, route}) {

    const [profiles, setProfiles] = useState([])
    
    const changeInputHandler = (event, index) => {
        const {target, text} = event.nativeEvent 
        const list= [...profiles];
        if(list[index] === undefined){
            list[index]= {
                username: text,
            };
            setProfiles(list);
        } else {
            list[index].username = text
            setProfiles(list);
        }
    }

    const [statusOpenTotalPerson, setStatusOpenTotalPerson] = useState(false)
    const [valueTotalPerson, setValueTotalPerson] = useState(0);
    const [itemsTotalPerson, setItemsTotalPerson] = useState([
      {label: '1 person', value: 1},
      {label: '2 person', value: 2},
      {label: '3 person', value: 3},
      {label: '4 person', value: 4},
    ]);

    
    const selectedItemTotalPersonHandler = (value) => {
        setValueTotalPerson(value)
    }

    const dropdownOpenHandler = () => {
        setStatusOpenTotalPerson(true)
    }

    const dropdownCloseHandler = () => {
        setStatusOpenTotalPerson(false)
    }

    const [itemsRole, setItemsRole] = useState([
      {label: 'owner', value: "owner"},
      {label: 'member', value: "member"},
    ]);

    const selectedItemRoleHandler = (event, index) => {

        const list= [...profiles];
        if(list[index] === undefined){
            list[index]= {
                role: event.value,
            };
            setProfiles(list);
        } else {
            list[index].role = event.value
            setProfiles(list);
        }

    }

    const checkTotalRole = (array) => {
        let counter = 0
        for (let item of array.flat()){
            if(item === "owner"){
                counter++
            }
        }
        return counter
    }

    function pressHandler() {
        //validation
        let role = []
        if(profiles.length > 0){
            for(let i = 0; i < valueTotalPerson; i++){
                if(profiles[i] === undefined){
                    Alert.alert(
                        "Failed to continue",
                        "data should not be empty",
                        [{text: "OK"}],
                        [{cancelable: true}]
                    );
                    return;
                }else if(profiles[i].role === undefined){
                    Alert.alert(
                        "Failed to continue",
                        "role should not be empty",
                        [{text: "OK"}],
                        [{cancelable: true}]
                    );
                    return;
                }else if(profiles[i].username === undefined){
                    Alert.alert(
                        "Failed to continue",
                        "username should not be empty",
                        [{text: "OK"}],
                        [{cancelable: true}]
                    );
                    return;
                }
                
                role.push(profiles[i].role)
            }
        }else{
            Alert.alert(
                "Failed to continue",
                "profile should be added",
                [{text: "OK"}],
                [{cancelable: true}]
            );
            return
        }
        
        let totalOwner = checkTotalRole(role);

        if(totalOwner === 0){
            Alert.alert(
                "Failed to continue",
                "Owner should be available",
                [{text: "OK"}],
                [{cancelable: true}]
            );
            return;
        }else{
            navigation.navigate("ConfigProfilePassword",{
                email: route.params.email,
                profile: profiles
            })
        }
        
        


    }

    return(
        <View style={styles.container}>
            <View style={{marginTop: 4, alignItems: "center"}}>
                <Logo/>
            </View>
            <View style={{marginTop: 90}}>
                <Title>Profile Configuration</Title>
                <View style={{marginTop: 24}}>
                    <Text style={styles.titleInput}>
                        Total Profile <Text style={styles.subTitleInput}>(max. 4 people)</Text>
                    </Text>
                    <View style={{marginTop: 12, elevation: 3,zIndex: 3}}>
                        <CustomDropdown
                            width={150}
                            placeholder={"Total Person"}
                            value={valueTotalPerson}
                            items={itemsTotalPerson}
                            setValue={setValueTotalPerson}
                            setItems={setItemsTotalPerson}
                            onChangeValue={selectedItemTotalPersonHandler}
                            onOpen={dropdownOpenHandler}
                            onClose={dropdownCloseHandler}
                        />
                    </View>
                    <Text style={[styles.titleInput,{marginTop: 12}]}>Create username and role</Text>
                    {
                        Array(valueTotalPerson).fill().map((_, i) => (
                            <View key={i} style={{marginTop: 12,flexDirection: 'row'}}>
                                <CustomTextInput 
                                    style={{width: "60%", marginRight: 22}} 
                                    placeholder={"username"}
                                    editable={statusOpenTotalPerson === true ? false : true}
                                    onChange={(e)=>changeInputHandler(e,i)}
                                />
                                <View style={{elevation: 4-i, zIndex: 4-i}}>
                                    <CustomDropdown
                                        width={105}
                                        placeholder={"Role"}
                                        items={itemsRole}
                                        value={profiles[i] === undefined ? "Role" : profiles[i].role }
                                        setItems={setItemsRole}
                                        onSelectItem={(e)=>selectedItemRoleHandler(e,i)}
                                    />
                                </View>
                            </View>
                        ))
                    }
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <PrimaryButton onPress={pressHandler}>Next</PrimaryButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    buttonContainer: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        marginBottom: 20
    },
    titleInput: {
        fontFamily: 'Inter_500Medium',
        fontSize: 14,
        color: Colors.dark500
    },
    subTitleInput: {
        fontFamily: "Inter_400Regular",
        fontSize: 10,
        color: Colors.dark300
    }
})