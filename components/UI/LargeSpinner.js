import { View, ActivityIndicator, StyleSheet } from "react-native"
import Colors from "../../constants/Colors"

export default function LargeSpinner(){
    return(
        <View style={styles.container}>
            <ActivityIndicator size="large" color={Colors.Green500} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        zIndex: 100
    }
})