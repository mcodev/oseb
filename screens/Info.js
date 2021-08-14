import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import InfoBtns from "../components/infoPage/InfoBtns";
import color from "../constants/colors";
import InfoDetails from "../components/infoPage/InfoDetails";
import colors from "../constants/colors";

export default function Info() {
  const [active, setActive] = useState({
    name: "tires",
    icon: "road",
  });

  useEffect(() => {
    return () => {
      setActive({
        name: "tires",
        icon: "road",
      });
    };
  }, []);

  return (
    <View style={styles.container}>
      <InfoBtns active={active} setActive={setActive} />
      <View style={styles.hr} />
      <InfoDetails active={active} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 20,
  },

  hr: {
    borderBottomColor: color.hr,
    borderBottomWidth: 1,
    width: "85%",
    alignSelf: "center",
    flex: 0.1,
  },
});
