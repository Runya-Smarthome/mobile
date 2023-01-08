import { View, StyleSheet} from 'react-native'

import Colors from '../../constants/Colors'

export default function CardDevice({children,style}) {
    return(
        <View style={[styles.outerCard,style]}>
            <View style={styles.innerCard}>
                {children}
            </View>
        </View>
    )    
}

const styles = StyleSheet.create({
    outerCard: {
        width: 150,
        height: 90,
        borderRadius: 8,
        margin: 8,
        backgroundColor: Colors.Green300,
        elevation: 12,
        
    },
    innerCard: {
        padding: 12
    }
})

