import { View, Image, StyleSheet, Pressable, FlatList } from 'react-native'
import { useEffect, useState  } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import DialogInput from 'react-native-dialog-input';

import Avatar from '../../components/UI/Avatar'
import Logo from '../../components/UI/Logo'
import Title from '../../components/UI/Title'
import isAuth from '../../API/Auth'
import LoginProfile from '../../API/LoginProfile'
import LargeSpinner from '../../components/UI/LargeSpinner';


export default function PickProfile({navigation, route}) {

    const [loading, isLoading] = useState(false)

    const [dialogVisible, setDialogVisible] = useState(false)
    
    const [profileHasPassword, setProfileHasPassword] = useState({
        id : "",
        password : "",
        indexColor: ""
    })

    const [listProfiles, setListProfiles] = useState([])

    const color = ["yellow","red","blue","green"]

    async function getToken(){
        const token = await AsyncStorage.getItem('@MyTokenLogin:key');
        return token
    }

    const profilePasswordHandler = (id, isPassword, indexColor) => {
        if(isPassword === false){
            profileHandler(id, "", indexColor)
            return;
        } else if(isPassword === true){
            setDialogVisible(true)
            setProfileHasPassword(previousState => {
                return { ...previousState, id, indexColor }
            });
        }
    }
    
    const profileHandler = async (id, password, indexColor) => {
        isLoading(true)
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
            isLoading(false)
            await AsyncStorage.setItem(
                '@MyTokenProfile:key',
                data.profilesResult
            );
            navigation.navigate("Homepage",{
                id,
                email: route.params.email,
                color: color[indexColor]
            })
        }

    }

    useEffect(()=>{
        async function fetchData(){
            isLoading(true)
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
            isLoading(false)
        }

        fetchData()

    },[])

    useEffect(()=>{
        if(profileHasPassword.password !== ""){
            profileHandler(profileHasPassword.id,profileHasPassword.password, profileHasPassword.indexColor)
        }
    },[profileHasPassword])

    return(
        <View style={styles.container}>
            {loading && <LargeSpinner/>}
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
                                        title={"Need Password"}
                                        message={"Enter owner password"}
                                        hintInput ={"password"}
                                        submitInput={ (inputPassword) => {
                                            setProfileHasPassword(previousState => {
                                                return { ...previousState, password:inputPassword }
                                            });
                                            setDialogVisible(false);
                                        }}
                                        closeDialog={() => setDialogVisible(false)}
                                        textInputProps={{secureTextEntry:true}}
                                    />
                                    
                                    <Pressable 
                                        onPress={()=>profilePasswordHandler(itemData.item.id, itemData.item.isPassword, itemData.index)}>
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