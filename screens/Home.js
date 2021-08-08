import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useAppContext } from "../config/AppContext";
import { closestNum } from "../functions/appFunctions";
import { bottomTabsHeight } from "../constants/apps";
import colors from "../constants/colors";
import translations from "../constants/translations";
import bikeDistances from "../data/mainBikeData";
import ChooseBike from "../components/chooseBike/ChooseBike";
import MainInput from "../components/homePage/MainInput";

export default function Home() {
  const { bike, mKm, language } = useAppContext();
  const [reading, setReading] = useState(null);

  //////////////////////  MAIN PROGRAM///////////////////////////

  const programAlgorithm = (e) => {
    console.log("function1: ", closestNum(e, bikeDistances[bike][mKm].value));
  };

  // console.log(bikeDistances[bike][mKm]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.homeContainer}>
        <MainInput
          reading={reading}
          setReading={setReading}
          programAlgorithm={programAlgorithm}
        />
        {/* <ChooseBike /> */}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingBottom: bottomTabsHeight,
  },
});

// https://reactnative.dev/docs/animations
// https://www.youtube.com/watch?v=6UXfS6FI674
// ALT
// https://docs.expo.dev/versions/v42.0.0/sdk/reanimated/
