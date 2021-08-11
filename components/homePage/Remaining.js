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

export default function Remaining({ remaining, reading }) {
  const { mKm, language } = useAppContext();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={styles.textTitle}>{translations[language].untilNext}</Text>
        {reading && (
          <>
            <Text style={styles.text}>{`${remaining} ${mKm}`}</Text>
            <Text style={styles.bottomText}>
              {translations[language].remaining}
            </Text>
          </>
        )}
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
    fontSize: 23,
    color: colors.white,
    letterSpacing: 1,
  },
  text: {
    fontSize: 21,
    color: colors.third,
    letterSpacing: 1,
  },
  bottomText: {
    color: colors.whiteST,
    fontSize: 17,
  },
});
