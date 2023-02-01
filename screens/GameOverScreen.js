import { Text, View, Image ,StyleSheet,Dimensions, useWindowDimensions} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/Colors";

function GameOverScreen({userNumber, roundsNumber, restartGame}){
    const {width, height} = useWindowDimensions();

    let imageSize = 300;

    if(width < 380){
        imageSize = 150;
    }

    if(height < 420){
        imageSize = 80;
    }

    const imageStyle = {
        width:imageSize,
        height: imageSize,
        borderRadius: imageSize / 2
    }

    return(
        <View style={styles.rootContainer}>
            <Title>Game Over Screen</Title>
            <View  style={styles.imageContainer} >
                <Image style={[styles.image, imageStyle]} source={require("../assets/success.png")}/>
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

// const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        marginTop:10

    },
    imageContainer:{
       
        justifyContent:"center",
        alignItems:"center",
        marginTop:40
    },
    image:{
        // width:300,
        // height:300,
        // if smaller than 380 use 150 otherwise using 300
        // width:deviceWidth < 380 ? 150 :300,
        // height:deviceWidth < 380 ? 150 :300,
        // borderRadius:deviceWidth < 380 ? 75 :150,
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