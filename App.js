import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/Colors";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(true);
  const [gameRounds, setGameRounds] = useState(0);

  function pickUserNumber(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameOver(false);
  }

  function checkGameOver(numberOfRounds) {
    setGameOver(true);
    setGameRounds(numberOfRounds);
  }

  function onRestartHandler() {
    setUserNumber(null);
    setGameRounds(0);
  }

  let screen = <StartGameScreen pickedNumber={pickUserNumber} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} gameOver={checkGameOver} />;
  }

  if (gameOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={gameRounds}
        restartGame={onRestartHandler}
      />
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        colors={[Colors.purple600, Colors.purple300]}
        style={styles.backgroundContainer}
      >
        <SafeAreaView style={styles.rootContainer}>{screen}</SafeAreaView>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingTop: 50,

    // paddingLeft:30
  },
  backgroundContainer: {
    flex: 1,
    // justifyContent:"center",
    // alignItems:"center",
  },
});
