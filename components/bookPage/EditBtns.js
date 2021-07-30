import React from "react";
import { Pressable, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import colors from "../../constants/colors";

export default function EditBtns({ callback, icon, color }) {
  return (
    <Pressable
      activeOpacity={0.5}
      onPress={callback}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? colors[`${color}Pressed`] : colors[color],
        },
        styles.addButton,
      ]}
    >
      <Icon name={icon} style={styles.buttonIcon} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  addButton: {
    borderRadius: 50,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  buttonIcon: {
    fontSize: 15,
    color: colors.white,
    fontWeight: "100",
    paddingVertical: 7,
    paddingHorizontal: 5,
  },
});
