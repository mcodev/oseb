import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import * as Animatable from "react-native-animatable";
import Icon from "react-native-vector-icons/FontAwesome5";
import colors from "../../constants/colors";
import { width, height } from "../../constants/device";

export default function AddBtn({ handle }) {
  return (
    <Pressable
      activeOpacity={0.5}
      onPress={handle}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? colors.third : colors.primary,
        },
        styles.addButton,
      ]}
    >
      <Animatable.View animation="rubberBand">
        <Icon name="plus" style={styles.buttonIcon} />
      </Animatable.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  addButton: {
    borderRadius: 50,
    width: width * 0.115,
    height: width * 0.115,
    position: "absolute",
    bottom: height * 0.03,
    right: width * 0.05,
    elevation: 5,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: colors.shaddow,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonIcon: {
    fontSize: height * 0.03,
    color: colors.white,
    fontWeight: "100",
  },
});
