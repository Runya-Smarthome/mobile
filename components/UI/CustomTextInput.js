import { TextInput, StyleSheet } from "react-native"

import Colors from "../../constants/Colors"

export default function CustomTextInput({placeholder, onChangeText, editable, style, value, secureTextEntry, onChange}) {
    return(
        <TextInput 
            style={[styles.textInput, style]} 
            placeholder={placeholder}
            onChangeText={onChangeText}
            editable={editable}
            value={value}
            secureTextEntry={secureTextEntry}
            onChange={onChange}
        />
    )
}


const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        width: 320,
        height: 48,
        borderRadius: 8,
        padding: 12,
        borderColor: Colors.dark300,
        backgroundColor: 'white'
    }
})
