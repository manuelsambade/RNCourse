import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import Colors from "./constants/colors";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [userNumber, setUserNumber] = useState(undefined);
  const [gameOver, setGameOver] = useState(false);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const pickedNumberHandler = (number) => {
    setUserNumber(number);
  };

  const onGameOverHandler = (numberOfGuesses) => {
    setGuessRounds(numberOfGuesses);
    setGameOver(true);
  };

  const startNewGameHandler = () => {
    setUserNumber(undefined);
    setGuessRounds(0);
    setGameOver(false);
  };

  const renderCurrentScreen = () => {
    if (gameOver && userNumber)
      return (
        <GameOverScreen
          userNumber={userNumber}
          roundsNumber={guessRounds}
          onStartNewGame={startNewGameHandler}
        />
      );

    return userNumber ? (
      <GameScreen userNumber={userNumber} onGameOver={onGameOverHandler} />
    ) : (
      <StartGameScreen onPickNumber={pickedNumberHandler} />
    );
  };

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={{ opacity: 0.2 }}
      >
        <SafeAreaView style={styles.rootScreen}>
          {renderCurrentScreen()}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
