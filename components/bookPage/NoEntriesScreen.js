import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useAppContext } from "../../config/AppContext";
import colors from "../../constants/colors";
import { language } from "../../constants/device";
import translations from "../../constants/translations";

export default function NoEntriesScreen() {
  const { language } = useAppContext();

  return (
    <View style={styles.container}>
      <Icon name="database" size={100} style={styles.icon} />
      <Text style={styles.txt}>{translations[language].noEntries}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    color: colors.backIcon,
  },
  txt: {
    color: colors.backIcon,
    fontSize: 30,
    marginTop: 15,
  },
});
