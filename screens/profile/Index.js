import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import Avatar from '../../components/UI/Avatar'

export default function Profile({navigation}) {

    function manageProfilePressHandler(){
        navigation.navigate('ManageProfile')
    };
    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Avatar
                    color={"red"}
                    owner={true}
                />
            </View>
            <View style={styles.descProfile}>
                <Text style={styles.namaUser}>Ripdah</Text>
                <Text style={styles.roleEmail}>(Owner)</Text>
                <Text style={styles.roleEmail}>ripdahSlebew@yahoo.com</Text>
            </View>

            <View style={styles.bungkusChangeManage}>
                <Pressable>
                    <View style={styles.changeProfile}>
                        <View style={styles.iconChangeManage}>
                            <Image
                                source={require('../../assets/Icons/pencilbiru-icon.png')}
                            />
                        </View>
                        <Text style={styles.textAja}>Change Profile</Text>
                        <View style={styles.untukIcon}>
                            <Image
                                source={require('../../assets/Icons/arrow-right-grey-icon.png')}
                            />
                        </View>
                    </View>
                </Pressable>
                <Pressable onPress={manageProfilePressHandler}>
                    <View style={styles.manageProfile}>
                        <View style={styles.iconChangeManage}>
                            <Image
                                source={require('../../assets/Icons/groupmerah-icon.png')}
                            />
                        </View>
                        <Text style={styles.textAja}>Manage Profile</Text>
                        <View style={styles.untukIcon}>
                            <Image
                                source={require('../../assets/Icons/arrow-right-grey-icon.png')}
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