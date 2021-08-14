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
import { width } from "../../constants/device";

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
    flex: 0.7,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 25,
    marginTop: 20,
    backgroundColor: colors.primary,
  },
  textTitle: {
    fontSize: width * 0.06,
    letterSpacing: 1,
    color: colors.white,
  },
  text: {
    fontSize: width * 0.055,
    color: colors.third,
    letterSpacing: 1,
  },
  bottomText: {
    color: colors.whiteST,
    fontSize: width * 0.04,
  },
});
