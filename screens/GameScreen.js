import {
  Text,
  View,
  StyleSheet,
  Alert,
  FlatList,
  useWindowDimensions,
} from "react-native";
import { useEffect, useState } from "react";
import Title from "../components/ui/Title";
import Number from "../components/game/Number";
import PrimaryButton from "../components/ui/PrimaryButton";
import InstructionText from "../components/ui/InstructionText";
import { Ionicons } from "@expo/vector-icons";
import GuessLog from "../components/game/GuessLog";
import Colors from "../constants/Colors";

function generateRandomBetween(min, max, exclude) {
  const randomNum = Math.floor(Math.random() * (max - min)) + min;

  if (randomNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, gameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (currentGuess === userNumber) {
      gameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, gameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuessNumber(direction) {
    if (
      (direction === "Lower" && currentGuess < userNumber) ||
      (direction === "Higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie", "You know that is wrong ..."),
        [
          {
            text: "Sorry",
            style: "Cancel",
          },
        ];
      return;
    }

    if (direction === "Lower") {
      // means you guess too large
      maxBoundary = currentGuess;
    } else {
      // means you guess too small
      minBoundary = currentGuess + 1;
    }

    const newRandomNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
    setGuessRounds((previousGuess) => [newRandomNumber, ...previousGuess]);
  }

  const countRound = guessRounds.length;

  let content = (
    <>
      <Number> {currentGuess} </Number>

      <View style={styles.buttonOuterContainer}>
        <InstructionText> Higher or Lower </InstructionText>

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <PrimaryButton onPress={nextGuessNumber.bind(this, "Higher")}>
              <Ionicons name="md-add" color="white" size={24} />
            </PrimaryButton>
          </View>

          <View style={styles.button}>
            <PrimaryButton onPress={nextGuessNumber.bind(this, "Lower")}>
              <Ionicons name="md-remove" color="white" size={24} />
            </PrimaryButton>
          </View>
        </View>
      </View>
    </>
  );

  if (width > 500) {
    content = (
      <>
        {/* <InstructionText> Higher or Lower </InstructionText>  */}

        <View style={styles.buttonContainerWide}>
          <View style={styles.button}>
            <PrimaryButton onPress={nextGuessNumber.bind(this, "Higher")}>
              <Ionicons name="md-add" color="white" size={24} />
            </PrimaryButton>
          </View>
          <Number> {currentGuess} </Number>

          <View style={styles.button}>
            <PrimaryButton onPress={nextGuessNumber.bind(this, "Lower")}>
              <Ionicons name="md-remove" color="white" size={24} />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }

  return (
    <View style={styles.outer}>
      <Title> Opponent 's Guess</Title>
      {content}
      <View>
        {/* {guessRounds.map(guessRound=><Text key={guessRound}>{guessRound}</Text>)} */}

        {/* <FlatList 
            data = {guessRounds}
            renderItem = {(itemData) => <Text> {itemData.item} </Text>}
            keyExtractor={(item)=>item}/> */}
        <View style={styles.logContainer}>
          <Text style={styles.logTitle}>Guess History ...</Text>

          <FlatList
            scrollEnabled={true}
            data={guessRounds}
            renderItem={(itemData) => (
              <GuessLog
                guessRounds={countRound - itemData.index}
                guessNumber={itemData.item}
              />
            )}
            keyExtractor={(item) => item}
          />
        </View>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    paddingTop: 8,
    paddingHorizontal: 40,
  },
  buttonOuterContainer: {
    alignItems: "center",
    // marginTop: 5,
    paddingBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
  logContainer: {
    marginTop: 10,
    height: 320,
  },
  logTitle: {
    fontSize: 25,
    color: "white",
    paddingBottom: 10,
    // fontWeight:"bold"
  },
  buttonContainerWide: {
    flexDirection: "row",
    alignItems: "center",
  },
});
