import {Text,View,StyleSheet} from 'react-native'
import Colors from '../../constants/Colors';
function InstructionText({children}){
    return(
        <View>
            <Text style={styles.text}>{children}</Text>
        </View>
    )
}

export default InstructionText;

const styles = StyleSheet.create({
    text:{
        color:Colors.purple700,
        fontSize:23,
        marginBottom:10
    }
    
})
