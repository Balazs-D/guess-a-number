import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImagePropTypes,
} from "react-native";
import Colors from "../constants/colors";

const MainButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontFamily: "open-sans-bold",
    fontSize: 18,
  },
});
export default MainButton;
