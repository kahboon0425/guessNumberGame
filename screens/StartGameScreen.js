import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Alert,
  Dimensions,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/Colors";
import Title from "../components/ui/Title";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({ pickedNumber }) {
  const [userInput, setUserInput] = useState("");

  const { width, height } = useWindowDimensions();

  function numberInputHandler(enteredText) {
    setUserInput(enteredText);
  }

  function resetInputHandler() {
    setUserInput(" ");
  }

  function confirmInputHandler() {
    const number = parseInt(userInput);
    if (isNaN(number) || number > 99 || number <= 0) {
      Alert.alert("Invalid Number", "Number must be between 1 - 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    pickedNumber(number);
  }

  const marginTopDistance = height < 450 ? 9 : 150;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
          {/* <View style={styles.rootContainer}> */}
          <Title>Guess Number Game</Title>

          <View style={styles.outerContainer}>
            <InstructionText>My Number</InstructionText>

            <TextInput
              style={styles.textInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              value={userInput}
              onChangeText={numberInputHandler}
            />

            <View style={styles.buttonContainer}>
              <View style={styles.innerButtonContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.innerButtonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    // marginTop:deviceHeight < 450 ?  9: 150,
    // marginTop:80,
    borderColor: "black",
    alignItems: "center",
  },
  outerContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 20,
    padding: 20,
    backgroundColor: Colors.purple800,
    borderRadius: 8,
    elevation: 10,

    // Add Shadow for IOS
    shadowColor: "#ed4599",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 8,
    shadowOpacity: 0.8,
  },
  textInputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 50,
  },
  textInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomWidth: 2,
    borderBottomColor: "white",
    color: "white",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },

  innerButtonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
