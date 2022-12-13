import { ActivityIndicator } from "react-native"
import Colors from "../../constants/Colors"

export default function SmallSpinner(){
    return(
        <ActivityIndicator size="small" color={Colors.Green500} />
    )
}