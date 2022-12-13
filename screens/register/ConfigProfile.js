import { View, Text, StyleSheet, Alert} from 'react-native'
import { useState } from 'react'
import { Picker } from '@react-native-picker/picker';

import Logo from '../../components/UI/Logo'
import Title from '../../components/UI/Title'
import PrimaryButton from '../../components/UI/PrimaryButton'
import Colors from '../../constants/Colors'
import ListProfileConfiguration from '../../components/ListProfileConfiguration';

export default function ConfigProfile({navigation, route}) {

    const [profiles, setProfiles] = useState([])
    
    const textInputHandler = (event, index) => {
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

    const [totalPerson, setTotalPerson] = useState(1)

    const selectItemHandler = (event, index) => {
        const list= [...profiles];
        if(list[index] === undefined){
            list[index]= {
                role: event,
            };
            setProfiles(list);
        } else {
            list[index].role = event
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
            for(let i = 0; i < totalPerson; i++){
                if(profiles[i] === undefined){
                    Alert.alert(
                        "Failed to continue",
                        "data should not be empty",
                        [{text: "OK"}],
                        [{cancelable: true}]
                    );
                    return;
                }else if(profiles[i].role === undefined || profiles[i].role === ""){
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
        } else if(totalOwner > 1){
            Alert.alert(
                "Failed to continue",
                "Owner should be just 1",
                [{text: "OK"}],
                [{cancelable: true}]
            );
        } else{
            navigation.navigate("ConfigProfilePassword",{
                email: route.params.email,
                password: route.params.password,
                profile: profiles
            })
        }
        
    }

    return(
        <View style={styles.container}>
            <View style={{marginTop: 4, alignItems: "center"}}>
                <Logo/>
            </View>
            <View style={{marginTop: 20}}>
                <Title>Profile Configuration</Title>
                <View style={{marginTop: 24}}>
                    <Text style={styles.titleInput}>
                        Total Profile <Text style={styles.subTitleInput}>(max. 4 people)</Text>
                    </Text>
                    <View style={{marginTop: 12, elevation: 3,zIndex: 3}}>
                        <Picker
                            selectedValue={totalPerson}
                            mode={"dropdown"}
                            style={{width:100}}
                            onValueChange={(itemValue) =>
                                setTotalPerson(itemValue)
                            }>
                            <Picker.Item label="1" value={1} />
                            <Picker.Item label="2" value={2} />
                            <Picker.Item label="3" value={3} />
                            <Picker.Item label="4" value={4} />
                        </Picker>
                    </View>
                    <Text style={[styles.titleInput,{marginTop: 12}]}>Create username and role</Text>
                    {
                        Array(totalPerson).fill().map((_, i) => (
                            <ListProfileConfiguration
                                key={i}
                                index={i}
                                profiles={profiles}
                                onTextInput={textInputHandler}
                                onSelectItem={selectItemHandler}
                            />
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
        minHeight: 700
    },
    buttonContainer: {
        flex: 1,
        justifyContent: "flex-end",
        alignSelf: 'center',
        marginBottom: 20,
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