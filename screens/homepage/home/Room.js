import { View, StyleSheet, Pressable, Image, StatusBar, BackHandler, Text } from 'react-native'
import { useEffect, useState } from 'react'
import Paho from 'paho-mqtt'

import Title from '../../../components/UI/Title'
import GetFeatures from '../../../API/GetFeatures'
import RoomList from '../../../components/RoomList'
import SmallSpinner from '../../../components/UI/SmallSpinner'
import PrimaryButton from '../../../components/UI/PrimaryButton'

const client = new Paho.Client("80a2394d39414c4386f58ac618f6ae44.s2.eu.hivemq.cloud", Number(8884), "clientId-cRKSetRRgQ", );

export default function Room({navigation, route}){

    const formattedTitleRoom = route.params.roomName.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());

    const [features, setFeatures] = useState([])
    const [connectStatus, setConnectStatus] = useState(false)
    const [loading, isLoading] = useState(false)

    useEffect(()=>{
        async function fetchData(){
            isLoading(true)
            const data = await GetFeatures({
                method: "GET",
                params: route.params.idRoom
            })
            setFeatures(data.feautureResult)
            isLoading(false)
        }
        fetchData()
    },[])

    useEffect(() => {
        isLoading(true)
        client.connect( {
            onSuccess: () => { 
                console.log("Connected!");
                setConnectStatus(client.isConnected())
            },
            userName: 'runya_mobile',
            password: 'runyaccit2019',
            useSSL: true,
            onFailure: () => {
                console.log("Failed to connect!"); 
            }
        });
    }, [])

    useEffect(() => {
        function handleBackButton() {
          backButtonHandler();
          return true;
        }
    
        const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    
        return () => backHandler.remove();
      }, [navigation]);


    function backButtonHandler(){
        client.disconnect()
        navigation.goBack()
    }

    return(
        <View style={styles.container}>
            <Pressable disabled={loading} onPress={backButtonHandler}>
                <View style={styles.header}>
                    <Image
                        style={{marginRight:8}}
                        source={require('../../../assets/Icons/arrow-left-icon.png')}
                    />
                    <Title>{formattedTitleRoom}</Title>
                </View>
            </Pressable>
            {loading && <SmallSpinner/>}
            {features.length > 0 && connectStatus == true ?
                <RoomList
                    features = {features}
                    client = {client}
                />
                :
                null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        borderWidth: 1,
        paddingVertical: StatusBar.currentHeight + 20,
        paddingHorizontal: 24
    },
    header:{
        flexDirection: "row",
        alignItems: 'center',
        marginBottom: 24
    },  
})