import { View, Image, StyleSheet } from 'react-native'
import Avatar from '../../components/UI/Avatar'

import Logo from '../../components/UI/Logo'
import Title from '../../components/UI/Title'

export default function PickProfile() {
    return(
        <View style={styles.container}>
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
                            color={"yellow"}
                            name={"bambang"}
                            owner={true}
                        />
                    </View>
                    <View style={styles.profiles}>
                        <Avatar
                            color={"yellow"}
                            name={"Rahmat"}
                            owner={true}
                        />
                    </View>
                </View>
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