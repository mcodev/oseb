import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../../constants/colors";

export default function Remaining() {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>remaining </Text>
      <Text style={styles.text}>30000 Km </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primaryPressed,
    paddingVertical: 25,
    marginTop: 20,
  },
  textTitle: {
    fontSize: 28,
    color: colors.white,
    letterSpacing: 1,
  },
  text: {
    fontSize: 20,
    color: colors.third,
    letterSpacing: 1,
  },
});
