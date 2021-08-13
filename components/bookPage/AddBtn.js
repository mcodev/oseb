import React from "react";
import { Pressable, StyleSheet } from "react-native";
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
          backgroundColor: pressed ? colors.primaryPressed : colors.primary,
        },
        styles.addButton,
      ]}
    >
      <Icon name="plus" style={styles.buttonIcon} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonIcon: {
    fontSize: height * 0.03,
    color: colors.white,
    fontWeight: "100",
  },
  addButton: {
    borderRadius: 50,
    width: width * 0.115,
    height: width * 0.115,
    position: "absolute",
    bottom: height * 0.03,
    right: width * 0.05,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
