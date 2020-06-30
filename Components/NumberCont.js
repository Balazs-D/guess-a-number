import React from "react";
import { View, Text, StyleSheet, ImagePropTypes } from "react-native";
import Colors from "../constants/colors";

const NumberCont = (props) => {
  return (
    <View style={styles.cont}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    borderWidth: 2,
    borderColor: Colors.accent,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: Colors.accent,
    fontSize: 22,
  },
});

export default NumberCont;
