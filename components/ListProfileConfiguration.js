import { View } from "react-native"
import { Picker } from "@react-native-picker/picker"

import CustomTextInput from "./UI/CustomTextInput"

export default function ListProfileConfiguration({index, profiles, onTextInput, onSelectItem}){

    function changeInputHandler(e, i){
        onTextInput(e,i)
    }

    function selectHandler(v, i){
        onSelectItem(v, i)
    }

    return(
        <View key={index} style={{marginTop: 12,flexDirection: 'row'}}>
            <CustomTextInput 
                style={{width: "50%", marginRight: 22}} 
                placeholder={"username"}
                onChange={(e)=>changeInputHandler(e,index)}
            />
            <View style={{}}>
                <Picker
                    selectedValue={profiles[index] === undefined ? "Role" : profiles[index].role }
                    mode={"dropdown"}
                    style={{width: 150}}
                    onValueChange={(itemValue) =>
                        selectHandler(itemValue, index)
                    }>
                    <Picker.Item label="Role" value={""} />
                    <Picker.Item label="Owner" value={"owner"} />
                    <Picker.Item label="Member" value={"member"} />
                </Picker>
            </View>
        </View>
    )
}