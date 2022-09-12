import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import Avatar from '../../components/UI/Avatar'
import PrimaryButton from '../../components/UI/PrimaryButton'
import SecondaryButton from '../../components/UI/SecondaryButton'
import Title from '../../components/UI/Title'
import Colors from '../../constants/Colors'

export default function MemberOwnerAccess() {

    return(
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <View style={styles.backButton}>
                    <Pressable>
                        <Image
                            source={require('../../assets/Icons/arrow-left-icon.png')}
                        />
                    </Pressable>
                </View>
                <Title>Noki</Title>
            </View>
            <View style={styles.innerContainer}>
                <View style={{alignItems: "center"}}>
                    <View style={styles.profileContainer}>
                        <View style={styles.profile}>
                            <Avatar
                                name={'Noki'}
                                color={"yellow"}
                                owner={true}
                            />
                        </View>
                    </View>
                    <View style={styles.buttonOuterContainer}>
                        <Pressable style={styles.buttonInnerContainer}>
                            <View style={styles.iconPintuAllowedRooms}>
                                <Image
                                    source={require('../../assets/Icons/pintu-hijau-icon.png')}
                                />
                            </View>
                            <Text style={styles.allowedText}>Allowed Rooms</Text>
                            <View style={styles.iconArrowAllowedRooms}>
                                <Image
                                    source={require('../../assets/Icons/arrow-right-grey-icon.png')}
                                />
                            </View>
                        </Pressable>
                    </View>
            
                    
                </View>
            </View>
            <View style={styles.buttonDeleteContainer}>
                <PrimaryButton><Text style={{color: Colors.Red}}>Delete Member</Text></PrimaryButton>
            </View> 
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    innerContainer: {
        flex: 1
    },
    titleContainer: {
        justifyContent: 'flex-start',
        marginTop: 72,
        flexDirection: 'row',
    },
    backButton: {
        marginRight: 15.5,
        marginLeft: 20,
        justifyContent: 'center'
    },
    profileContainer: {
        justifyContent: "center",
        marginTop: 32,
        marginBottom: 70
    },
    profile: {
        flexDirection: 'row',
        justifyContent: "space-around"
    },
    buttonOuterContainer: {
        width: 320,
        height: 55,
        maxWidth: 320,
    },
    buttonInnerContainer: {
        height: '100%',
        backgroundColor: 'white',
        elevation: 6,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50
    },
    allowedText: {
        fontSize: 16,
        fontFamily: 'Inter_500Medium',
        color: 'black',
    },
    buttonDeleteContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 40
    },
    iconPintuAllowedRooms: {
        marginLeft: 24,
        marginRight: 15
    },
    iconArrowAllowedRooms: {
        marginLeft: 94,
        marginRight: 20
    }
})