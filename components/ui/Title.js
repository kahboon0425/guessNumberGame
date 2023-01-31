import {View,Text,StyleSheet} from 'react-native'
import Colors from '../../constants/Colors';

function Title({children}){
    return(

        <View style={styles.titleContainer}>
            <Text style={styles.title}>
                {children}
            </Text>
        </View>

    )
}

export default Title;

const styles = StyleSheet.create({
    // titleContainer:{
    //     borderColor:"#2e0040",
    //     // backgroundColor:Colors.purple800,
    //     elevation:40,
    //     borderRadius:10,

    //     // Add Shadow for IOS
    //     shadowColor:"black",
    //     shadowOffset:{width:0,height:10},
    //     shadowRadius:8,
    //     shadowOpacity:0.8
    // }, 
    title:{
       fontSize:34,
       
    //    fontWeight:"bold",
    //    borderWidth:2,
       paddingVertical:20,
       textAlign:"center",
       color:"white"
       
    } 
})