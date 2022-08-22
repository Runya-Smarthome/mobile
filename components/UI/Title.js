import { Text, StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'


export default function Title({children}) {
    return(
        <Text style={styles.title}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Inter_600SemiBold',
        fontSize: 24,
        color: Colors.dark500
    }
})