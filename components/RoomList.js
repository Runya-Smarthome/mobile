import { View, StyleSheet } from 'react-native'

import SmartBell from './Device/SmartBell'
import SmartCurtain from './Device/SmartCurtain'
import SmartDetection from './Device/SmartDetection'
import SmartDoor from './Device/SmartDoor'
import SmartGarden from './Device/SmartGarden'
import SmartLamp from './Device/SmartLamp'
import SmartTemperature from './Device/SmartTemperature'

export default function RoomList({features, client}){

    return(
        <View style={styles.container}>
            {features.map((feature,i)=>{
                if(feature.featureType === "smartlamp"){
                    return(
                        <SmartLamp 
                            key={i} 
                            topic={feature.topic}
                            client = {client}

                        />
                    )
                } else if(feature.featureType === "smarttemperature"){
                    return(
                        <SmartTemperature 
                            key={i} 
                            topic={feature.topic}
                            client={client}
                        />
                    )
                } else if(feature.featureType === "smartgarden"){
                    return(
                        <SmartGarden
                            key={i}
                            topic={feature.topic}
                            client={client}
                        />
                    )
                } else if(feature.featureType === "smartdoor"){
                    return(
                        <SmartDoor/>
                    )
                } else if(feature.featureType === "smartdetection"){
                    return(
                        <SmartDetection
                            connect={connect} 
                            key={i} 
                            topic={feature.topic}
                            client={client}
                        />
                    )
                } else if(feature.featureType === "smartcurtain"){
                    return(
                        <SmartCurtain
                            connect={connect} 
                            key={i} 
                            topic={feature.topic} 
                        />
                    )
                } else if(feature.featureType === "smartbell"){
                    return(
                        <SmartBell/>
                    )
                }
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})