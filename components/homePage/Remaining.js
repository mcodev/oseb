import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useAppContext } from "../../config/AppContext";
import colors from "../../constants/colors";
import translations from "../../constants/translations";

export default function Remaining({ remaining }) {
  const { mKm, language } = useAppContext();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={styles.textTitle}>{translations[language].remaining}</Text>
        <Text style={styles.text}>{`${remaining} ${mKm}`}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    paddingVertical: 25,
    marginTop: 20,
  },
  textTitle: {
    fontSize: 28,
    color: colors.white,
    letterSpacing: 1,
  },
  text: {
    fontSize: 20,
    color: colors.third,
    letterSpacing: 1,
  },
});
