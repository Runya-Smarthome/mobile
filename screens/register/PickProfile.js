import { View, Image, StyleSheet, Pressable, FlatList, Text } from 'react-native'
import { useEffect, useState  } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import DialogInput from 'react-native-dialog-input';

import Avatar from '../../components/UI/Avatar'
import Logo from '../../components/UI/Logo'
import Title from '../../components/UI/Title'
import isAuth from '../../API/Auth'
import LoginProfile from '../../API/LoginProfile'


export default function PickProfile({navigation, route}) {

    const [dialogVisible, setDialogVisible] = useState(false)
    const [listProfiles, setListProfiles] = useState([])

    const color = ["yellow","red","blue","green"]

    async function getToken(){
        const token = await AsyncStorage.getItem('@MyToken:key');
        return token
    }

    const profilePasswordHandler = (id, isPassword) => {
        if(isPassword === true){
            profileHandler(id, "")
            return;
        } else if(isPassword === false){
            setDialogVisible(true)
            return;
        }
    }
    
    const profileHandler = async (id, password) => {
        const token = await getToken()
        const data = await LoginProfile({
            method: "POST",
            body: {
                id,
                password
            },
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        if(data.status === 201){
            await AsyncStorage.setItem(
                '@MyTokenProfile:key',
                data.profilesResult
            );
            navigation.navigate("Homepage",)
        }

    }

    useEffect(()=>{

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
            setListProfiles(data.profilesResult)
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
                    <FlatList
                        style={{marginTop:32}}
                        columnWrapperStyle={styles.profiles}
                        data = {listProfiles}
                        renderItem = {(itemData) => {
                            return(
                                <View>
                                    <DialogInput 
                                        isDialogVisible={dialogVisible}
                                        title={"Feedback"}
                                        message={"Message for Feedback"}
                                        hintInput ={"Enter Text"}
                                        submitInput={ (inputText) => {
                                            setInputPassword(inputText),
                                            setDialogVisible(false);
                                            profileHandler(itemData.item.id, inputPassword);
                                        }}
                                        closeDialog={() => setDialogVisible(false)}
                                    />
                                    
                                    <Pressable 
                                        onPress={()=>profilePasswordHandler(itemData.item.id, itemData.item.isPassword)}>
                                        <Avatar
                                            color={color[itemData.index]}
                                            name={itemData.item.username}
                                            owner={itemData.item.role}
                                        />
                                    </Pressable>
                                </View>
                            )
                        }}
                        keyExtractor={(item, index)=>{
                            return item.id;
                        }}
                        numColumns={2}
                    />
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
        flex: 1,
        justifyContent: "space-around",
        marginBottom: 40
    },
})