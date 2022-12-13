import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import Avatar from '../../../components/UI/Avatar'
import GetProfile from '../../../API/GetProfile'
import SmallSpinner from '../../../components/UI/SmallSpinner'

export default function Profile({navigation, route}) {

    const [profile, setProfile] = useState([])
    const [loading, isLoading] = useState(false)

    async function getToken(){
        const token = await AsyncStorage.getItem('@MyTokenLogin:key');
        return token
    }

    useEffect(() => {
        async function fetchData(){
            const token = await getToken()
            isLoading(true)
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
            isLoading(false)
        }
        fetchData()

    },[])

    function capitilizeLetter(profileName){
        if(profileName !== undefined){
            const capProfileName = profileName.charAt(0).toUpperCase() + profileName.slice(1);
            return capProfileName
        }

    }

    function manageProfilePressHandler(){
        navigation.navigate('ManageProfile')
    };

    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Avatar
                    color={route.params.color}
                    owner={true}
                    name={""}
                />
            </View>
            <View style={styles.descProfile}>
                {
                    loading
                    ? <SmallSpinner/>
                    : <Text style={styles.namaUser}>{capitilizeLetter(profile.username)}</Text>
                }
                {
                    loading
                    ? <SmallSpinner/>
                    : <Text style={styles.roleEmail}>({profile.role})</Text>
                }
                <Text style={styles.roleEmail}>{route.params.email}</Text>
            </View>

            <View style={styles.bungkusChangeManage}>
                <Pressable>
                    <View style={styles.changeProfile}>
                        <View style={styles.iconChangeManage}>
                            <Image
                                source={require('../../../assets/Icons/pencilbiru-icon.png')}
                            />
                        </View>
                        <Text style={styles.textAja}>Change Profile</Text>
                        <View style={styles.untukIcon}>
                            <Image
                                source={require('../../../assets/Icons/arrow-right-grey-icon.png')}
                            />
                        </View>
                    </View>
                </Pressable>
                <Pressable onPress={manageProfilePressHandler}>
                    <View style={styles.manageProfile}>
                        <View style={styles.iconChangeManage}>
                            <Image
                                source={require('../../../assets/Icons/groupmerah-icon.png')}
                            />
                        </View>
                        <Text style={styles.textAja}>Manage Profile</Text>
                        <View style={styles.untukIcon}>
                            <Image
                                source={require('../../../assets/Icons/arrow-right-grey-icon.png')}
                            />
                        </View>
                    </View>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        alignItems: "center",
        justifyContent: "center"
    },
    imageContainer: {
        overflow: 'hidden'
    },
    descProfile: {
        marginBottom: 36
    },
    namaUser: {
        fontSize: 18,
        textAlign: 'center'
    },
    roleEmail: {
        color: 'grey',
        textAlign: 'center'
    },
    bungkusChangeManage: {
        width: '114%'
    },
    changeProfile:{
        borderWidth: 1,
        borderColor: 'grey',
        paddingVertical: 28,
        marginBottom: 16,
        alignItems: 'center',
        flexDirection: 'row'
    },
    untukIcon: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    manageProfile: {
        borderWidth: 1,
        borderColor: 'grey',
        paddingVertical: 28,
        alignItems: 'center',
        flexDirection: 'row'
    },
    textAja: {
        fontSize: 16,
        marginRight: 140
    },
    iconChangeManage: {
        marginLeft: 32,
        marginRight: 16
    }
})