import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import BodyText from "../components/BodyText";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <BodyText>The Game is Over!</BodyText>

      <BodyText>Number of Rounds: {props.roundsNumber}</BodyText>
      <BodyText>Guessed Number was: {props.userNumber}</BodyText>
      <View style={styles.imageCont}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{
            uri:
              "https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_960_720.jpg",
          }}
          // source={require("../assets/success.png")}
        />
      </View>
      <Button title="New Game" onPress={props.onRestart}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageCont: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 1,
    shadowOpacity: 0.9,
    backgroundColor: "white",
    elevation: 15,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default GameOverScreen;
