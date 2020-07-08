import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Card from "../components/Card";
import Colors from "../constants/colors";
import Input from "../components/Input";
import NumberCont from "../components/NumberCont";
import BodyText from "../components/BodyText";

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [enteredNumber, setEnteredNumber] = useState();
  const [selectedNumber, setSelectedNumber] = useState();

  const NumberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g), "");
  };

  const ResetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const ConfirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: ResetInputHandler }]
      );
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue("");
    Keyboard.dismiss();
  };

  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryCont}>
        <BodyText>You selected</BodyText>
        <NumberCont>{selectedNumber}</NumberCont>
        <Button
          title="START GAME"
          onPress={() => props.onStartGame(selectedNumber)}
        />
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <BodyText style={styles.title}>Start a New Game!</BodyText>
        <Card style={styles.inputCont}>
          <Text>Select a Number</Text>
          <Input
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={NumberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonCont}>
            <View style={styles.button}>
              <Button
                title="Reset"
                onPress={ResetInputHandler}
                color={Colors.accent}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                onPress={ConfirmInputHandler}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    marginVertical: 20,
    fontFamily: "open-sans-bold",
  },
  inputCont: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonCont: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
  input: {
    width: 75,
    textAlign: "center",
  },
  summaryCont: {
    marginTop: 20,
    alignItems: "center",
  },
});
export default StartGameScreen;
