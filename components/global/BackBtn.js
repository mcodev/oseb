import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import colors from "../../constants/colors";
import { width } from "../../constants/device";

export default function BackBtn({ callback }) {
  return (
    <Pressable
      style={styles.backBtn}
      onPress={callback}
      hitSlop={width * 0.05}
      children={(pressed) => (
        <Icon
          name="chevron-left"
          size={width * 0.05}
          color={pressed ? colors.primary : colors.primaryPressed}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  backBtn: {
    backgroundColor: colors.white,
    borderRadius: 80,
    width: width * 0.11,
    height: width * 0.11,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: width * 0.05,
    elevation: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: colors.shaddow,
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
});
