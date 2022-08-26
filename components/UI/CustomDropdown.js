import { View, StyleSheet } from 'react-native'
import { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

import Colors from '../../constants/Colors'

export default function CustomDropdown({
    width,
    placeholder,
    onChangeValue,
    open,
    value,
    items,
    setOpen,
    setValue,
    setItems,
    onOpen,
    onClose
}){

    return(
        <View
            style={{
                width
            }}
        >
            <DropDownPicker
            placeholder={placeholder}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            onChangeValue={onChangeValue}
            placeholderStyle={styles.placeholderStyle}
            style={styles.container}
            dropDownContainerStyle={styles.childContainer}
            onOpen={onOpen}
            onClose={onClose}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: Colors.dark300,
        borderRadius: 8
    },
    childContainer: {
        borderColor: Colors.dark300
    },
    placeholderStyle: {
        color: Colors.dark500,
        fontFamily: "Inter_500Medium",
        fontSize: 12
    }
})