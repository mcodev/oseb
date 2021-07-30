//// TODO useEffect cleanup & css transition effects
import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import PageTitle from "../components/PageTitle";
import InfoBtns from "../components/infoPage/InfoBtns";
import color from "../constants/colors";
import { bottomTabsHeight } from "../constants/device";
import InfoDetails from "../components/infoPage/InfoDetails";

export default function Info() {
  const [active, setActive] = useState({
    name: "tyres",
    icon: "road",
  });

  // console.log(active);
  // useEffect(() => {
  //   return () => {
  //     console.log("effect happened");
  //     // setActive({
  //     //   name: "Tyres",
  //     //   icon: "road",
  //     // });
  //   };
  // }, []);

  return (
    <View style={styles.container}>
      <PageTitle pageName={"bike"} pageSub={"info"} />

      <InfoBtns active={active} setActive={setActive} />

      <View style={styles.hr} />

      <InfoDetails active={active} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: bottomTabsHeight,
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
