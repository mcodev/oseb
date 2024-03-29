import React, { useState } from "react";
import { View, StyleSheet, TextInput, Alert } from "react-native";
import * as Animatable from "react-native-animatable";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useAppContext } from "../../config/AppContext";
import translations from "../../constants/translations";
import { distanceMax } from "../../constants/apps";
import colors from "../../constants/colors";
import { width, height } from "../../constants/device";

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
      ? (Alert.alert(
          `${translations[language].savesLimitTitle}`,
          `${translations[language].calcLimit}`
        ),
        setState(distanceMax(mKm)))
      : (setState(null), setReading(null));
  };

  return (
    <View style={styles.container}>
      <Animatable.View animation="rubberBand" style={styles.inp}>
        <Icon
          name="search"
          style={{
            position: "absolute",
            left: "17%",
            color: colors.whiteST,
            zIndex: 100000,
          }}
          size={width * 0.05}
        />
        <TextInput
          style={styles.input}
          placeholder={`${translations[language].addDistance} ${translations[language][mKm]} `}
          placeholderTextColor={colors.whiteST}
          keyboardType="number-pad"
          defaultValue={reading && reading.toString()}
          maxLength={6}
          onChangeText={(e) => numInputCleaner(e)}
          onEndEditing={() => state && setReading(state)}
          clearTextOnFocus={true}
        />
      </Animatable.View>
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
    minHeight: height * 0.1,
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
    fontSize: width * 0.043,
  },
});
