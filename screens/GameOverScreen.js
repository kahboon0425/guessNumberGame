import { Text, View, Image ,StyleSheet} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/Colors";

function GameOverScreen({userNumber, roundsNumber, restartGame}){
    return(
        <View style={styles.rootContainer}>
            <Title>GameOverScreen</Title>
            <View  style={styles.imageContainer} >
                <Image style={styles.image} source={require("../assets/success.png")}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.summary}>Your phone need 
                    <Text style={styles.highlight}> {roundsNumber} </Text> rounds to guess the number 
                    <Text style={styles.highlight}> {userNumber} </Text>
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <PrimaryButton onPress={restartGame}>Start New Game</PrimaryButton>
            </View>
            
            
        </View>
    )
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex:1

    },
    imageContainer:{
       
        justifyContent:"center",
        alignItems:"center",
        marginTop:80
    },
    image:{
        width:300,
        height:300,
        borderRadius:150,
    },
    textContainer:{
        alignItems:"center",
        paddingVertical:20,
        paddingHorizontal:40,
        
    },

    summary:{
        fontSize:23,
        color:"black",
        textAlign:"center"
        
        
    },
    highlight:{
        fontWeight:"bold",
        fontSize:28,
        color:Colors.purple800
    },
    buttonContainer:{
        alignItems:"center",
        paddingHorizontal:30
    }
})