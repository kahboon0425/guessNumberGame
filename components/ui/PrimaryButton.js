import {View, Text,StyleSheet, Pressable} from 'react-native'
import Colors from '../../constants/Colors'

function PrimaryButton({children, onPress}){
    
    function onPressHandler(){
        console.log("delete")
    }

    return(
        <View style={styles.buttonMostOuterContainer} >
            <Pressable style={({pressed})=>pressed ? [styles.buttonOuterContainer,styles.pressed] :styles.buttonOuterContainer}  
            onPress={onPress} 
            android_ripple={{color:'#EAAFC8'}}>
                <Text style={styles.buttonInnerContainer} >{children}</Text>
            </Pressable>
        </View>
    )

}

const styles= StyleSheet.create({
    buttonMostOuterContainer:{
        backgroundColor:Colors.purple700,
        borderRadius:50,
        marginVertical:10,
        marginHorizontal:10,
        overflow:'hidden',

    },

    buttonOuterContainer:{
        paddingHorizontal:28,
        paddingVertical:10,
        borderRadius:50,
    },
    buttonInnerContainer:{
        justifyContent:"center",
        textAlign:"center",
        fontSize:16,
        color:"white"
    },
    pressed:{
        opacity:0.85
    }
    

})

export default PrimaryButton;