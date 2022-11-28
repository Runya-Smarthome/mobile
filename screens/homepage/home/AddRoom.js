import { useState } from 'react'
import { View, Text, StyleSheet, StatusBar, Image, Pressable, Alert } from 'react-native'


import CustomTextInput from '../../../components/UI/CustomTextInput'
import CustomDropdown from '../../../components/UI/CustomDropdown'
import Title from '../../../components/UI/Title'
import PrimaryButton from '../../../components/UI/PrimaryButton'
import AddRoomApi from '../../../API/AddRoom'

export default function AddRoom({navigation, route}){

    const [value, setValue] = useState();
    const [items, setItems] = useState([
      {label: 'Bedroom', value: 'bedroom'},
      {label: 'Living Room', value: 'livingroom'},
      {label: 'Kitchen', value: 'kitchen'},
      {label: 'Garden', value: 'garden'},
      {label: 'Bathroom', value: 'bathroom'},
      {label: 'Family Room', value: 'familyroom'},
    ]);

    const [statusOpen, setStatusOpen] = useState(false)

    const [ room, setRoom ] = useState({
        roomName: '',
        roomType: ''
    })

    const updateState = (key, value) => {
        setRoom(oldValue => ({
          ...oldValue,
          [key]: value,
        }));
    };

    const dropdownOpenHandler = () => {
        setStatusOpen(true)
    }

    const dropdownCloseHandler = () => {
        setStatusOpen(false)
    }

    const saveHandler = async () => {
        if(room.roomName == '' || room.roomType == ''){
            Alert.alert(
                "Failed to Save Room",
                "data is required",
                [{text: "OK"}],
                [{cancelable: true}]
            );
            return
        } else if(room.roomName.length > 12 ){
            Alert.alert(
                "Failed to Save Room",
                "room name can not more than 10 words",
                [{text: "OK"}],
                [{cancelable: true}]
            );
            return
        }

        const data = await AddRoomApi({
            method: "POST",
            params: route.params.idProfile,
            body: {
                roomName: room.roomName,
                roomType: room.roomType
            }
        })

        if(data.status === 201){
            Alert.alert(
                "Add Room Success",
                data.message,
                [{text: "OK"}],
                [{cancelable: true}]
            );
        } else {
            Alert.alert(
                "Add Room Failed",
                data.message,
                [{text: "OK"}],
                [{cancelable: true}]
            );
        }


        
    }

    function backButtonHandler(){
        navigation.goBack()
    }

    return(
        <View style={styles.container}>
            <Pressable onPress={backButtonHandler}>
                <View style={styles.header}>
                    <Image
                        style={{marginRight:8}}
                        source={require('../../../assets/Icons/arrow-left-icon.png')}
                    />
                    <Title>Add Room</Title>
                </View>
            </Pressable>
            <View style={styles.content}>
                <View style={{marginBottom:12}}>
                    <Text style={styles.titleInput}>Room Name</Text>
                    <CustomTextInput onChangeText={(text)=>updateState('roomName', text)}/>
                </View>
                <View>
                    <Text style={styles.titleInput}>Room Type</Text>
                    <CustomDropdown
                        width={120}
                        placeholder={"Select"}
                        value={value}
                        items={items}
                        setValue={setValue}
                        setItems={setItems}
                        onOpen={dropdownOpenHandler}
                        onClose={dropdownCloseHandler}
                        onChangeValue={(value)=>updateState('roomType', value)}
                    />
                </View>
            </View>
            <View style={styles.footer}>
                <PrimaryButton onPress={saveHandler}>
                    <Text>Save</Text>
                </PrimaryButton>
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
        alignItems: 'center'
    },  
    content:{
        marginTop: 54
    },
    titleInput:{
        fontSize: 12,
        fontFamily: "Inter_500Medium",
        marginBottom: 8
    },
    footer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    }
})