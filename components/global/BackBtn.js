import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import colors from "../../constants/colors";

export default function BackBtn({ callback }) {
  return (
    <Pressable
      style={styles.backBtn}
      onPress={callback}
      hitSlop={20}
      children={(pressed) => (
        <Icon
          name="chevron-left"
          size={20}
          color={pressed ? colors.primary : colors.primaryPressed}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  backBtn: {
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 80,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    elevation: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: colors.shaddow,
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
});
