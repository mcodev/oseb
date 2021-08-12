import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useAppContext } from "../../config/AppContext";
import colors from "../../constants/colors";
import translations from "../../constants/translations";

export default function TopBtns({ active, setActive }) {
  const { language } = useAppContext();
  return (
    <View style={styles.cont}>
      <Pressable
        style={[
          styles.btn,
          {
            backgroundColor: active === "bike" ? colors.primary : colors.white,
            borderBottomColor:
              active === "bike" ? colors.third : colors.primary,
          },
        ]}
        onPress={() => setActive("bike")}
        children={() => (
          <Text
            style={[
              styles.txt,
              { color: active === "bike" ? colors.third : colors.primary },
            ]}
          >
            {translations[language].chooseBike}
          </Text>
        )}
      />
      <Pressable
        style={[
          styles.btn,
          {
            backgroundColor: active === "unit" ? colors.primary : colors.white,
            borderBottomColor:
              active === "unit" ? colors.third : colors.primary,
          },
        ]}
        onPress={() => setActive("unit")}
        children={() => (
          <Text
            style={[
              styles.txt,
              { color: active === "unit" ? colors.third : colors.primary },
            ]}
          >
            {translations[language].unit}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    flexDirection: "row",
  },
  btn: {
    flex: 1,
    width: "50%",
    borderBottomWidth: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    fontWeight: "700",
    letterSpacing: 1.5,
  },
});
