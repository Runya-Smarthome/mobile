import { View, Text, StyleSheet } from 'react-native'
import { useState } from 'react'

import Logo from '../../components/UI/Logo'
import Title from '../../components/UI/Title'
import PrimaryButton from '../../components/UI/PrimaryButton'
import CustomDropdown from '../../components/UI/CustomDropdown'
import CustomTextInput from '../../components/UI/CustomTextInput'
import Colors from '../../constants/Colors'

export default function ConfigProfile() {

    const [statusOpenTotalPerson, setStatusOpenTotalPerson] = useState(false)
    const [openTotalPerson, setOpenTotalPerson] = useState(false);
    const [valueTotalPerson, setValueTotalPerson] = useState();
    const [itemsTotalPerson, setItemsTotalPerson] = useState([
      {label: '1 person', value: 1},
      {label: '2 person', value: 2},
      {label: '3 person', value: 3},
      {label: '4 person', value: 4},
    ]);

    const selectedItemTotalPersonHandler = (value) => {
        //total person handler
    }

    const dropdownOpenHandler = () => {
        setStatusOpenTotalPerson(true)
    }

    const dropdownCloseHandler = () => {
        setStatusOpenTotalPerson(false)
    }


    const [openRole, setOpenRole] = useState(false);
    const [valueRole, setValueRole] = useState();
    const [itemsRole, setItemsRole] = useState([
      {label: 'owner', value: "owner"},
      {label: 'member', value: "member"},
    ]);

    const selectedItemRoleHandler = (value) => {
        //role handler
    }

    return(
        <View style={styles.container}>
            <View style={{marginTop: 4, alignItems: "center"}}>
                <Logo/>
            </View>
            <View style={{marginTop: 90}}>
                <Title>Profile Configuration</Title>
                <View style={{marginTop: 24}}>
                    <Text style={styles.titleInput}>
                        Total Profile <Text style={styles.subTitleInput}>(max. 4 people)</Text>
                    </Text>
                    <View style={{marginTop: 12, elevation: 3,zIndex: 3}}>
                        <CustomDropdown
                            width={150}
                            placeholder={"Total Person"}
                            open={openTotalPerson}
                            value={valueTotalPerson}
                            items={itemsTotalPerson}
                            setOpen={setOpenTotalPerson}
                            setValue={setValueTotalPerson}
                            setItems={setItemsTotalPerson}
                            onItemValueSelected={selectedItemTotalPersonHandler}
                            onOpen={dropdownOpenHandler}
                            onClose={dropdownCloseHandler}
                        />
                    </View>
                    <Text style={[styles.titleInput,{marginTop: 12}]}>Create username and role</Text>
                    <View style={{marginTop: 12,flexDirection: 'row'}}>
                        <CustomTextInput 
                            style={{width: "60%", marginRight: 22, elevation: 1}} 
                            placeholder={"username"}
                            editable={statusOpenTotalPerson === true ? false : true}
                            />
                        <CustomDropdown
                                width={105}
                                placeholder={"Role"}
                                open={openRole}
                                value={valueRole}
                                items={itemsRole}
                                setOpen={setOpenRole}
                                setValue={setValueRole}
                                setItems={setItemsRole}
                                onChangeValue={selectedItemRoleHandler}
                            />
                    </View>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <PrimaryButton>Next</PrimaryButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    buttonContainer: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        marginBottom: 20
    },
    titleInput: {
        fontFamily: 'Inter_500Medium',
        fontSize: 14,
        color: Colors.dark500
    },
    subTitleInput: {
        fontFamily: "Inter_400Regular",
        fontSize: 10,
        color: Colors.dark300
    }
})