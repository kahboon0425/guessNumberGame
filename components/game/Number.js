import{View,Text,StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

function Number({children}){
    return(
        <View style={styles.numberContainer}>
            <Text style={styles.number}>{children}</Text>
        </View>
    )

}

export default Number;

const styles = StyleSheet.create({
    numberContainer:{
        borderWidth:2,
        margin:13,
        padding:23,
        alignItems:"center",
        justifyContent:"center",
        borderColor:"white",
        backgroundColor:"white",
        borderRadius:20,
        elevation:40,

        // Add Shadow for IOS
        shadowColor:"black",
        shadowOffset:{width:0,height:10},
        shadowRadius:8,
        shadowOpacity:90


    },
    number:{
        fontSize:50,
        color:Colors.purple700,
        fontWeight:"bold"
        
    }
})