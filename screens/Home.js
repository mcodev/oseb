import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";
import { bottomTabsHeight } from "../constants/apps";
import ChooseBike from "../components/chooseBike/ChooseBike";
import { useAppContext } from "../config/AppContext";

export default function Home() {
  const { bike } = useAppContext();
  return <View style={styles.homeContainer}>{/* <ChooseBike /> */}</View>;
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
