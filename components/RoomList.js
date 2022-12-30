import { View, StyleSheet, ScrollView  } from 'react-native'

import SmartBell from './Device/SmartBell'
import SmartCurtain from './Device/SmartCurtain'
import SmartDetection from './Device/SmartDetection'
import SmartDoor from './Device/SmartDoor'
import SmartGarden from './Device/SmartGarden'
import SmartLamp from './Device/SmartLamp'
import SmartTemperature from './Device/SmartTemperature'

export default function RoomList({features, client}){

    return(
        <ScrollView>
        <View style={styles.container}>
            {features.map((feature,i)=>{
                if(feature.featureType === "smartlamp"){
                    return(
                        <SmartLamp 
                            key={i} 
                            topic={feature.topic}
                            client = {client}
                            name={feature.featureName}
                        />
                    )
                } else if(feature.featureType === "smarttemperature"){
                    return(
                        <SmartTemperature 
                            key={i} 
                            topic={feature.topic}
                            client={client}
                            name={feature.featureName}
                        />
                    )
                } else if(feature.featureType === "smartgarden"){
                    return(
                        <SmartGarden
                            key={i}
                            topic={feature.topic}
                            client={client}
                            name={feature.featureName}
                        />
                    )
                } 
            })}
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
})