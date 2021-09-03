import React from "react";
import { Pressable, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import colors from "../../constants/colors";
import { width } from "../../constants/device";

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
    borderRadius: 500,
    width: width * 0.09,
    height: width * 0.09,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: width * 0.03,
    elevation: 5,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: colors.shaddow,
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  buttonIcon: {
    fontSize: width * 0.038,
    color: colors.white,
    fontWeight: "100",
  },
});
