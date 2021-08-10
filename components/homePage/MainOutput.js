import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../../constants/colors";
import { width } from "../../constants/device";

export default function MainOutput() {
  return (
    <View style={styles.container}>
      <View style={styles.cirleOne}>
        <Text>test1</Text>
      </View>
      <View style={styles.circleTwo}>
        <Text style={{ color: colors.white }}>test1</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 8,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
    justifyContent: "center",
  },
  cirleOne: {
    backgroundColor: colors.white,
    height: width * 0.5,
    width: width * 0.5,
    borderRadius: 250,
    marginRight: -20,

    elevation: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  circleTwo: {
    backgroundColor: colors.primary,
    height: width * 0.5,
    width: width * 0.5,
    borderRadius: 250,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
