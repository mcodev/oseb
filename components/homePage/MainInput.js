import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useAppContext } from "../../config/AppContext";
import translations from "../../constants/translations";
import { distanceMax } from "../../constants/apps";
import colors from "../../constants/colors";

export default function MainInput({ reading, setReading }) {
  const { language, mKm } = useAppContext();
  const [state, setState] = useState(null);

  //////////////////////  INPUT VALIDATION ///////////////////////////
  const numInputCleaner = (e) => {
    e = e.replace(/\s/g, "");
    e = e.replace(/,/g, "");
    parseInt(e) > 0 && parseInt(e) < distanceMax(mKm)
      ? setState(parseInt(e))
      : parseInt(e) < 0
      ? setState(parseInt(e) * -1)
      : parseInt(e) > distanceMax(mKm)
      ? setState(distanceMax(mKm))
      : (setState(null), setReading(null));
  };

  return (
    <View style={styles.container}>
      <View style={styles.inp}>
        <Icon
          name="search"
          style={{
            position: "absolute",
            left: "17%",
            color: colors.whiteST,
            zIndex: 100000,
          }}
          size={20}
        />
        <TextInput
          style={styles.input}
          placeholder={`${translations[language].addDistance} ${translations[language][mKm]} `}
          placeholderTextColor={colors.whiteST}
          keyboardType="number-pad"
          defaultValue={reading && reading.toString()}
          maxLength={7}
          onChangeText={(e) => numInputCleaner(e)}
          onEndEditing={() => state && setReading(state)}
          clearTextOnFocus={true}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    justifyContent: "center",
  },
  inp: {
    flexDirection: "row",
    minHeight: 100,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 8,
    paddingVertical: 10,
  },
  input: {
    backgroundColor: colors.primary,
    color: colors.third,
    width: "80%",
    height: "70%",
    borderRadius: 55,
    padding: 8,
    margin: 10,
    textAlign: "center",
    letterSpacing: 1.5,
    fontSize: 16,
  },
});
