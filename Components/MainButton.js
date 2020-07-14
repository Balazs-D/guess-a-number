import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Dimensions,
} from "react-native";
import Colors from "../constants/colors";

const MainButton = (props) => {
  let ButtonComp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    ButtonComp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.buttonMainCont}>
      <ButtonComp activeOpacity={0.6} onPress={props.onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{props.children}</Text>
        </View>
      </ButtonComp>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonMainCont: {
    borderRadius: 25,
    overflow: "hidden",
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    width: Dimensions.get("window").width / 4,
  },
  buttonText: {
    color: "white",
    fontFamily: "open-sans-bold",
    fontSize: 18,
    textAlign: "center",
  },
});
export default MainButton;
