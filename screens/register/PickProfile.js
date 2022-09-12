import { View, Image, StyleSheet } from 'react-native'
import { useEffect  } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import Avatar from '../../components/UI/Avatar'
import Logo from '../../components/UI/Logo'
import Title from '../../components/UI/Title'
import isAuth from '../../API/Auth'


export default function PickProfile({navigation, route}) {

    useEffect(()=>{

        async function getToken(){
            const token = await AsyncStorage.getItem('@MyToken:key');
            return token
        }
        
        async function fetchData(){
            const token = await getToken()
            const data = await isAuth({
                method: "POST",
                body: {
                    email: route.params.email
                },
                headers: {
                    'Authorization': `Bearer ${token}` 
                }
            })
            console.log(data)
        }

        fetchData()

    },[])

    return(
        <View style={styles.container}>
            <Image
                source={require('../../assets/object/Ellipse-10.png')}
                style={{width: 157, height: 157, resizeMode: "contain", position: "absolute", right: -60}}
            />
            <View style={styles.innerContainer}>
                <View style={{marginTop: 20, alignItems: "center"}}>
                    <Logo/>
                </View>
                <View style={styles.profileContainer}>
                    <Title>Pick Your Profile</Title>
                    <View style={styles.profiles}>
                        <Avatar
                            color={"yellow"}
                            name={"yanto"}
                            owner={true}
                        />
                        <Avatar
                            color={"blue"}
                            name={"bambang"}
                            owner={true}
                        />
                    </View>
                    <View style={styles.profiles}>
                        <Avatar
                            color={"red"}
                            name={"Rahmat"}
                            owner={true}
                        />
                    </View>
                </View>
            </View>
            <Image
                source={require('../../assets/object/Rectangle-34.png')}
                style={{width: 109, height: 145, resizeMode: "contain", position: "absolute", left: -50, bottom: 0}}
            />
            <Image
                source={require('../../assets/object/Rectangle-34.png')}
                style={{width: 109, height: 145, resizeMode: "contain", position: "absolute", right: -30, bottom: -70}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    innerContainer: {
        flex: 1,
        padding: 20,
    },
    logoContainer: {
        marginTop: 20, 
        alignItems: "center"
    },
    profileContainer: {
        justifyContent: "center",
        marginTop: 90
    },
    profiles: {
        marginTop: 32,
        flexDirection: 'row',
        justifyContent: "space-around"
    },
})