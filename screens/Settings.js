import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useAppContext } from "../config/AppContext";
import translations from "../constants/translations";
import colors from "../constants/colors";
import TopBtns from "../components/settings/TopBtns";
import MKm from "../components/mKm/Mkm";
import ChooseBike from "../components/chooseBike/ChooseBike";

export default function Settings() {
  const { language } = useAppContext();
  const [active, setActive] = useState("bike");

  return (
    <View style={styles.container}>
      <TopBtns active={active} setActive={setActive} />
      <View style={styles.body}>
        {active === "bike" ? <ChooseBike /> : <MKm />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  head: {
    flex: 1,
    backgroundColor: "aqua",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    letterSpacing: 1,
  },
  body: {
    flex: 9,
  },
});
