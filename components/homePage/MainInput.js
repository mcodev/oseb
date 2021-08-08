import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { useAppContext } from "../../config/AppContext";
import translations from "../../constants/translations";
import { distanceMax } from "../../constants/apps";

export default function MainInput({ reading, setReading, programAlgorithm }) {
  const { language } = useAppContext();

  //////////////////////  INPUT VALIDATION ///////////////////////////
  const numInputCleaner = (e) => {
    e = e.replace(/\s/g, "");
    e = e.replace(/,/g, "");
    parseInt(e) > 0 && parseInt(e) < distanceMax(mKm)
      ? setReading(parseInt(e))
      : parseInt(e) < 0
      ? setReading(parseInt(e) * -1)
      : parseInt(e) > distanceMax(mKm)
      ? setReading(distanceMax(mKm))
      : setReading(null);
  };

  return (
    <View style={styles.inp}>
      <TextInput
        style={styles.input}
        placeholder={translations[language].odometer}
        keyboardType="number-pad"
        defaultValue={reading && reading.toString()}
        maxLength={7}
        onChangeText={(e) => numInputCleaner(e)}
        onEndEditing={() => reading && programAlgorithm(reading)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inp: {
    backgroundColor: "#fff",
    height: "15%",
    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  input: {
    width: "50%",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    textAlign: "center",
  },
});
