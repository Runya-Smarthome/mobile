import { View, Text, StyleSheet, Button } from 'react-native'
import { useState, useEffect } from 'react'

import Paho from 'paho-mqtt'
import SmartLamp from '../../components/Device/SmartLamp';


const client = new Paho.Client("80a2394d39414c4386f58ac618f6ae44.s2.eu.hivemq.cloud", Number(8884), "clientId-cRKSetRRgQ", );


export default function Home() {

    const [value, setValue] = useState('')

    useEffect(() => {
        client.connect( {
          onSuccess: () => { 
          console.log("Connected!");
          client.subscribe("raspi/led");
          client.onMessageArrived = onMessage;
        },
        userName: 'runya_mobile',
        password: 'runyaccit',
        useSSL: true,
        onFailure: () => {
            console.log("Failed to connect!"); 
        }
    });
    }, [])
    
    function onMessage(message) {
      if (message.destinationName === "raspi/led") {
        setValue(message.payloadString);
      }
    }
    
    function changeValue(valueLamp) {
        const message = new Paho.Message(valueLamp);
        message.destinationName = "raspi/led";
        client.send(message);
    }

    function retrieveLampValueHandler(v){
        if( v === true){
            changeValue("ON")
        } else if(v === false){
            changeValue("OFF")
        }
        
    }

    return(
        <View style={styles.container}>
            <SmartLamp onSwitchLampValueHandler={retrieveLampValueHandler}/>
            <Text>{value}</Text>
            <Text>Ini Homepage</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})