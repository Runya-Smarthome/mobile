import { View, Text, StyleSheet, Button, StatusBar, Image, Pressable, ScrollView, FlatList} from 'react-native'
import { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import Avatar from '../../../components/UI/Avatar'
import Title from '../../../components/UI/Title';
import GetProfile from '../../../API/GetProfile';
import CardRoom from '../../../components/UI/CardRoom';
import CardWeather from '../../../components/CardWeather';
import GetRooms from '../../../API/GetRooms';


export default function Home({navigation, route}) {

    const [profile, setProfile] = useState([])
    const [listRooms, setListRooms] = useState([])

    async function getToken(){
        const token = await AsyncStorage.getItem('@MyTokenLogin:key');
        return token
    }

    useEffect(() => {
        async function fetchData(){
            const token = await getToken()
            const data = await GetProfile({
                method: "POST",
                params: route.params.id,
                body: {
                    email: route.params.email
                },
                headers: {
                    'Authorization': `Bearer ${token}` 
                }
            })
            setProfile(data.loginResult)
        }
        fetchData()

    },[])

    useEffect(() => {
        async function fetchDataRooms(){
            const data = await GetRooms({
                method: "GET",
                params: route.params.id
            })
            setListRooms(data.roomResult)
        }

        const willFocusSubscription = navigation.addListener('focus', () => {
          fetchDataRooms();
        });
  
        return willFocusSubscription;
    }, []);

    function capitilizeLetter(profileName){
        if(profileName !== undefined){
            const capProfileName = profileName.charAt(0).toUpperCase() + profileName.slice(1);
            return capProfileName
        }

    }

    return(
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.header}>
                    <Image
                        source={require('../../../assets/Icons/bell-icon.png')}
                        style={{
                                width: 20,
                                height: 20
                        }}
                    />
                </View>
                <View style={styles.profile}>
                    <View style={styles.profileTitle}>
                        <Title style={styles.title}>
                            Welcome Home, {capitilizeLetter(profile.username)}!
                        </Title>
                    </View>
                    <Avatar
                        color={route.params.color}
                        name={""}
                        style={{width:70, height:70}}
                    />
                </View>
                <CardWeather/>
                <View style={styles.headerDeviceRoom}>
                    <Title>My Room</Title>
                    <Pressable onPress={()=>navigation.navigate('AddRoom',{idProfile:route.params.id})}>
                        <Text>Add Room +</Text>
                    </Pressable>
                </View>
                <FlatList
                    columnWrapperStyle={{justifyContent: 'space-between'}}
                    data={listRooms}
                    numColumns={2}
                    renderItem={(itemData)=>
                        <Pressable onPress={()=>navigation.navigate('Room', {idRoom: itemData.item.id, roomName: itemData.item.roomName})}>
                            <CardRoom
                                title={itemData.item.roomName}
                                icon={itemData.item.roomType}
                            />
                        </Pressable>
                    }
                    
                />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        
    },
    innerContainer:{
        flex: 1,
        paddingHorizontal: 22
    },
    header: {
        alignItems: 'flex-end'
    },
    profile : {
        flexDirection: "row",
        marginTop: 36,
        justifyContent: 'space-between'
    },
    profileTitle: {
        width: 224
    },
    title: {
        lineHeight: 34
    },
    headerDeviceRoom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },
    roomOuterContainer: {
        flex: 1
    },
    roomInnerContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    navigationBarContainer: {
        height: 92,
    },
})