import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../../constants/colors";
import { width } from "../../constants/device";

export default function MainOutput() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <View style={styles.prevContainer}>
          <Text>test1</Text>
        </View>
        <View style={styles.nextContainer}>
          <Text>test1</Text>
        </View>
      </View>
    </View>
    // <View style={styles.container}>
    //   <View style={styles.cirleOne}>
    //     <Text>test1</Text>
    //   </View>
    //   <View style={styles.circleTwo}>
    //     <Text style={{ color: colors.white }}>test1</Text>
    //   </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    // backgroundColor: "aqua",
    flex: 8,
    paddingHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    flexDirection: "row",
    height: "40%",
  },
  prevContainer: {
    flex: 1,
    // backgroundColor: "aqua",
    height: "100%",
    borderRightWidth: 1,
    borderRightColor: colors.black,

    alignItems: "center",
    justifyContent: "center",
  },
  nextContainer: {
    // backgroundColor: "yellow",
    flex: 1,
    height: "100%",
    alignItems: "center",
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
