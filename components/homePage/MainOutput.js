import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import colors from "../../constants/colors";

export default function MainOutput() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Pressable style={styles.prevContainer}>
          <Text style={styles.title}>Prev</Text>
          <Text style={styles.type}>First Service</Text>
          <Text style={styles.at}>at 40000 km</Text>
        </Pressable>
        <Pressable style={styles.nextContainer}>
          <Text style={styles.title}>Next</Text>
          <Text style={styles.type}>First Service</Text>
          <Text style={styles.at}>at 40000 km</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    paddingHorizontal: 5,
    justifyContent: "center",
  },
  textContainer: {
    flexDirection: "row",
  },
  prevContainer: {
    flex: 1,
    height: "100%",
    borderRightWidth: 1,
    borderRightColor: colors.black,

    alignItems: "center",
    justifyContent: "center",
  },
  nextContainer: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 35,
    letterSpacing: 1.5,
  },
  type: {
    fontWeight: "700",
    fontSize: 18,
    letterSpacing: 1.9,
    marginTop: 7,
    marginBottom: 5,
    color: colors.primary,
  },
  at: { letterSpacing: 1.5, color: colors.blackSoft },
});
