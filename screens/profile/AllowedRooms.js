import { View, Text, StyleSheet, Image, TextInput, Button, Pressable, CheckBox } from 'react-native'
import { useState } from 'react' 
import Checkbox from 'expo-checkbox';

import Title from '../../components/UI/Title'
import Avatar from '../../components/UI/Avatar'
import Logo from '../../components/UI/Logo'
import PrimaryButton from '../../components/UI/PrimaryButton'
import CustomTextInput from '../../components/UI/CustomTextInput'
import CustomDropdown from '../../components/UI/CustomDropdown'

export default function AllowedRooms() {

    const [isChecked, setChecked] = useState(false);
    return(
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <View style={styles.backButton}>
                    <Pressable>
                        <Image
                        style={styles.arrowBack}
                            source={require('../../assets/Icons/arrow-left-icon.png')}
                        />
                    </Pressable>
                </View>
                    <Title>Allowed Rooms</Title>
            </View>
            <View style={styles.bungkusParaRuangan}>
                <View style={styles.ruangan}>
                    <View style={styles.untukIcon}>
                        <Image
                            source={require('../../assets/Icons/bed-icon.png')}
                        />
                    </View>
                    <Text style={styles.textAja}>Bedroom</Text>
                    <View style={styles.checkboxContainer}>
                        <Checkbox
                            style={styles.checkbox}
                            value={isChecked}
                            onValueChange={setChecked}
                            color={isChecked ? '#4630EB' : undefined}
                        />
                    </View>
                </View>
                        
                <View style={styles.ruangan}>
                    <View style={styles.untukIcon}>
                        <Image
                            source={require('../../assets/Icons/sofa-icon.png')}
                        />
                    </View>
                    <Text style={styles.textAja}>Living Room</Text>
                    <View style={styles.checkboxContainer}>
                        <Checkbox
                            style={styles.checkbox}
                            value={isChecked}
                            onValueChange={setChecked}
                            color={isChecked ? '#4630EB' : undefined}
                        />
                    </View>
                </View>
                        
            </View>
            <View style={styles.buttonContainer}>
                <PrimaryButton>SAVE</PrimaryButton>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    titleContainer: {
        justifyContent: 'flex-start',
        marginTop: 72,
        marginBottom: 40,
        flexDirection: 'row',
    },
    backButton: {
        marginRight: 15.5,
        marginLeft: 20,
        justifyContent: 'center'
    },
    buttonContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1,
        marginBottom: 40
    },
    bungkusParaRuangan: {
        width: '100%',
    
    },
    ruangan:{
        borderWidth: 1,
        borderColor: 'grey',
        paddingVertical: 28,
        alignItems: 'center',
        flexDirection: 'row'
    },
    untukIcon: {
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 24,
        marginRight: 16
    },
    textAja: {
        fontSize: 16
    },
    checkboxContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginRight: 38    
    }
})