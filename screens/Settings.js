import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useAppContext } from "../config/AppContext";
import translations from "../constants/translations";
import colors from "../constants/colors";
import TopBtns from "../components/settings/TopBtns";
import ChooseBike from "../components/chooseBike/ChooseBike";
import Units from "../components/mKm/Units";
import BackBtn from "../components/global/BackBtn";

export default function Settings({ navigation }) {
  const [active, setActive] = useState("bike");
  const { language, bike } = useAppContext();

  return (
    <View style={styles.container}>
      <View style={styles.topHead}>
        <View style={{ flex: 1 }}>
          <BackBtn callback={() => navigation.goBack()} />
        </View>
        <Text style={{ fontSize: 28, letterSpacing: 1 }}>
          {translations[language].settings}
        </Text>

        <View style={{ flex: 1 }} />
      </View>
      <TopBtns active={active} setActive={setActive} />
      <View style={styles.body}>
        {active === "bike" ? <ChooseBike /> : <Units />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  topHead: {
    height: 70,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: colors.blackSofter,
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
