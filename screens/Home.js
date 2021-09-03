import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useAppContext } from "../config/AppContext";
import {
  closestNum,
  typeOfService,
  remaining,
} from "../functions/appFunctions";
import colors from "../constants/colors";
import bikeDistances from "../data/mainBikeData";
import MainInput from "../components/homePage/MainInput";
import MainOutput from "../components/homePage/MainOutput";
import Remaining from "../components/homePage/Remaining";

export default function Home() {
  const { bike, mKm } = useAppContext();
  const [reading, setReading] = useState(null);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.homeContainer}>
        <MainInput reading={reading} setReading={setReading} />
        {reading && (
          <>
            <MainOutput
              next={typeOfService(
                closestNum(reading, bikeDistances[bike][mKm]),
                bikeDistances[bike].full
              )}
              prev={typeOfService(
                closestNum(reading, bikeDistances[bike][mKm]) - 1,
                bikeDistances[bike].full
              )}
              nextAt={
                bikeDistances[bike][mKm][
                  closestNum(reading, bikeDistances[bike][mKm])
                ]
              }
              prevAt={
                bikeDistances[bike][mKm][
                  closestNum(reading, bikeDistances[bike][mKm]) - 1
                ]
              }
              reading={reading}
            />
            <Remaining
              remaining={remaining(
                reading,
                bikeDistances[bike][mKm][
                  closestNum(reading, bikeDistances[bike][mKm])
                ]
              )}
              reading={reading}
            />
          </>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingBottom: 20,
  },
});

// https://reactnative.dev/docs/animations
// https://www.youtube.com/watch?v=6UXfS6FI674
// ALT
// https://docs.expo.dev/versions/v42.0.0/sdk/reanimated/
