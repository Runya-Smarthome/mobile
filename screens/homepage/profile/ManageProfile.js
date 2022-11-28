import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import Title from '../../../components/UI/Title'
import Avatar from '../../../components/UI/Avatar'
import PrimaryButton from '../../../components/UI/PrimaryButton'

export default function ManageProfile({navigation}) {

    function backButtonPressHandler(){
        navigation.navigate('Profile')
    };
    function buttonAddNewProfileHandler(){
        navigation.navigate('AddNewProfile')
    };
    return(
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <View style={styles.backButton}>
                    <Pressable onPress={backButtonPressHandler}>
                        <Image
                            source={require('../../../assets/Icons/arrow-left-icon.png')}
                        />
                    </Pressable>
                </View>
                    <Title>Manage Profile</Title>
            </View>
            <View style={styles.innerContainer}>
                <View style={styles.profileContainer}>
                    <View style={styles.profiles}>
                        <Pressable>
                            <Avatar
                                color={"red"}
                                name={"Yazid"}
                                owner={true}
                            />
                        </Pressable>
                        <Pressable>
                            <Avatar
                                color={"blue"}
                                name={"Rifdah"}
                                owner={true}
                            />
                        </Pressable>
                    </View>
                    <View style={styles.profiles}>
                        <Pressable>
                            <Avatar
                                color={"yellow"}
                                name={"Ijan"}
                                owner={true}
                            />
                        </Pressable>
                    </View>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <PrimaryButton onPress={buttonAddNewProfileHandler}>Add New Profile</PrimaryButton>
            </View>
            
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
    titleContainer: {
        justifyContent: 'flex-start',
        marginTop: 72,
        flexDirection: 'row',
    },
    backButton: {
        marginRight: 15.5,
        marginLeft: 30,
        justifyContent: 'center'
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 37
    },
    profileContainer: {
        justifyContent: "center",
        marginTop: 10
    },
    profiles: {
        marginTop: 75,
        flexDirection: 'row',
        justifyContent: "space-around"
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50
    },
})