import { useState, useEffect } from 'react'

import Paho from 'paho-mqtt'
import SmartLamp from '../../components/Device/SmartLamp';
import SmartTemperature from '../../components/Device/SmartTemperature';

const client = new Paho.Client("80a2394d39414c4386f58ac618f6ae44.s2.eu.hivemq.cloud", Number(8884), "clientId-cRKSetRRgQ", );

export default function ConnectIoT(){

    const [valueRed, setValueRed] = useState('')
    const [valueBlue, setValueBlue] = useState('')
    const [valueTemp, setValueTemp] = useState('')

    useEffect(() => {
        client.connect( {
          onSuccess: () => { 
          console.log("Connected!");
          client.subscribe("raspi/led");
          client.subscribe("raspi/led2");
          client.subscribe("raspi/temp")
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
        setValueRed(message.payloadString);
      }
      if (message.destinationName === "raspi/led2") {
        setValueBlue(message.payloadString);
      }
      if (message.destinationName === "raspi/temp") {
        setValueTemp(message.payloadString);
      }
    }
    
    function changeValueRed(valueLamp) {
        const message = new Paho.Message(valueLamp);
        message.destinationName = "raspi/led";
        client.send(message);
    }

    function retrieveLampValueRedHandler(v){
        if( v === true){
            changeValueRed("ON")
        } else if(v === false){
            changeValueRed("OFF")
        }
        
    }

    function changeValueBlue(valueLamp) {
        const message = new Paho.Message(valueLamp);
        message.destinationName = "raspi/led2";
        client.send(message);
    }

    function retrieveLampValueBlueHandler(v){
        if( v === true){
            changeValueBlue("ON")
        } else if(v === false){
            changeValueBlue("OFF")
        }
        
    }

    return(
        <View>
            <SmartLamp onSwitchLampValueHandler={retrieveLampValueRedHandler}/>
            <SmartLamp onSwitchLampValueHandler={retrieveLampValueBlueHandler}/>
            <SmartTemperature tempValue={valueTemp}/>
            <Text>lampu merah: {valueRed}</Text>
            <Text>lampu biru: {valueBlue}</Text>
        </View>
    )
}