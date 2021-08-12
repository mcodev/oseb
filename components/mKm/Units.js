import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useAppContext } from "../../config/AppContext";
import colors from "../../constants/colors";
import translations from "../../constants/translations";
import MKm from "./Mkm";

export default function Units() {
  const { bike, mKm, language } = useAppContext();

  return (
    <View style={styles.container}>
      <View style={styles.contTop}>
        <Text style={styles.txt}>{translations[language].chooseUnit}</Text>
        <MKm />
      </View>
      <View style={styles.contBottom}>
        <Icon name={"ruler-horizontal"} color={colors.hr} size={230} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txt: {
    fontWeight: "700",
    fontSize: 28,
    color: colors.blackSofter,
    marginVertical: 40,
  },
  contTop: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contBottom: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
