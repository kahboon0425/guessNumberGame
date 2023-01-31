import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

function GuessLog({guessRounds, guessNumber}){
    return(
        <View style={styles.container}>
            <Text style={styles.listItem}># {guessRounds}</Text>
            <Text style={styles.listItem}>Opponent's Guess: {guessNumber}</Text>
        </View>

    )
}

export default GuessLog;

const styles = StyleSheet.create({

    container:{
        borderColor:"white",
        borderWidth:1,
        borderRadius:20,
        padding:15,
        marginVertical:10,
        // backgroundColor:"white",
        flexDirection:"row",
        justifyContent:"space-between",
        width:"100%",
        // elevation:4,
        // shadowColor:"black",
        shadowOffset:{width:0,height:0},
        shadowOpacity:0.25,
        shadowRadius:3,
    },
    listItem:{
        fontSize:17,
        color:"white",
        fontWeight:"bold"
        
    }
})