import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useAppContext } from "../config/AppContext";
import { R_X_F_500 } from "../constants/bikeInfo";
import translations from "../constants/translations";
import PageTitle from "../components/PageTitle";

export default function Info() {
  const { language } = useAppContext();

  const types = [
    { name: "Tyres", icon: "home" },
    { name: "Oil", icon: "home" },
    { name: "Battery", icon: "home" },
    { name: "Chain", icon: "home" },
    { name: "Lights", icon: "home" },
    { name: "Coolant", icon: "home" },
    { name: "Fuses", icon: "home" },
    { name: "Spark plug", icon: "home" },
  ];

  return (
    <View style={styles.container}>
      <PageTitle pageName={"info"} />
      {/* <Text>{R_X_F_500.tyres.fro}</Text> */}
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
