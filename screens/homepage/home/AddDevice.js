import { View, StyleSheet, Pressable, Image, StatusBar, Text, Alert, FlatList } from 'react-native'
import { useEffect, useState } from 'react'
import { Picker } from '@react-native-picker/picker';

import Title from '../../../components/UI/Title'
import PrimaryButton from '../../../components/UI/PrimaryButton'
import SmallSpinner from '../../../components/UI/SmallSpinner'
import CustomTextInput from '../../../components/UI/CustomTextInput'
import addFeaturesApi from '../../../API/AddFeatures';
import GetRooms from '../../../API/GetRooms';

export default function Room({navigation, route}){

    const [loading, isLoading] = useState(false)

    const [features, setFeatures] = useState({
        topic: '',
        featureName: '',
        featureType: '',
        idRoom: ''
    })

    const [listRoom, setListRoom] = useState([])

    const updateState = (key, value) => {
        setFeatures(oldValue => ({
          ...oldValue,
          [key]: value,
        }));
    };

    useEffect(()=>{
        async function fetchDataRooms(){
            const data = await GetRooms({
                method: "GET",
                params: route.params.id
            })
            setListRoom(data.roomResult);
        }

        fetchDataRooms();
    },[])

    const buttonAddHandler = async () => {
        if(features.featureName == '' || features.topic == ''){
            Alert.alert(
                "Failed to Save Device",
                "data is required",
                [{text: "OK"}],
                [{cancelable: true}]
            );
            return
        } else if(features.featureName > 10 ){
            Alert.alert(
                "Failed to Save Device",
                "Device name can not more than 10 words",
                [{text: "OK"}],
                [{cancelable: true}]
            );
            return
        }

        isLoading(true)
        const data = await addFeaturesApi({
            method: "POST",
            params: features.idRoom,
            body: {
                topic: features.topic,
                featureName: features.featureName,
                featureType: features.featureType
            }
        })
        
        if(data.status === 201){
            isLoading(false)
            Alert.alert(
                "Add Device Success",
                data.message,
                [{text: "OK"}],
                [{cancelable: true}]
            );
        } else {
            isLoading(false)
            Alert.alert(
                "Add Device Failed",
                data.message,
                [{text: "OK"}],
                [{cancelable: true}]
            );
        }


        
    }

    return(
        <View style={styles.container}>
            <Title>
                Add New Device
            </Title>
            <View>
                <Text>Write Device Information</Text>
                    <CustomTextInput
                        style={{marginTop: 16}} 
                        placeholder={"Device Name"}
                        onChangeText={(text) => updateState('featureName', text)}
                    />
                    <CustomTextInput 
                        style={{marginVertical: 16}} 
                        placeholder={"Topic"}
                        onChangeText={(text) => updateState('topic', text)}
                    />
                    <Text>Device Type</Text>
                    <Picker
                        selectedValue={features.featureType}
                        mode={"dropdown"}
                        onValueChange={(itemValue) =>
                            updateState('featureType', itemValue)
                        }>
                        <Picker.Item label="Choose Type" value={""} />
                        <Picker.Item label="Lamp" value={"smartlamp"} />
                        <Picker.Item label="Temperature" value={"smarttemperature"} />
                        <Picker.Item label="Garden" value={"smartgarden"} />
                    </Picker>
                    <Text>Choose Room</Text>
                    <Picker
                        selectedValue={features.idRoom}
                        mode={"dropdown"}
                        onValueChange={(itemValue) =>
                            updateState('idRoom', itemValue)
                        }>
                        <Picker.Item label="Choose Type" value={""} />
                        {
                            listRoom.map(item=>{
                                return(
                                    <Picker.Item label={item.roomName} value={item.id} />
                                )
                            })
                        }
                    </Picker>
            </View>
            <View style={styles.buttonContainer}>
                <PrimaryButton onPress={buttonAddHandler}>Add</PrimaryButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingVertical: StatusBar.currentHeight + 20,
        paddingHorizontal: 24
    },
    header:{
        flexDirection: "row",
        alignItems: 'center',
        marginBottom: 24
    },
    buttonContainer: {
        flex: 1,
        justifyContent: "flex-end",
        alignSelf: 'center',
    }
})