import { StyleSheet, Text } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

const InstructionText = ({ children, style }) => {
  return <Text style={[styles.intructiontext, style]}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  intructiontext: {
    color: Colors.accent500,
    fontSize: 24,
    fontFamily: "open-sans",
  },
});
