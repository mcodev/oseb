import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useAppContext } from "../../config/AppContext";
import colors from "../../constants/colors";
import translations from "../../constants/translations";
import { width, height } from "../../constants/device";

export default function NoEntriesScreen({ callback }) {
  const { language } = useAppContext();

  return (
    <Pressable onPress={callback} style={styles.container}>
      <Icon name="database" size={width * 0.35} style={styles.icon} />
      <Text style={styles.txt}>{translations[language].noEntries}</Text>
    </Pressable>
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
    fontSize: width * 0.085,
    marginTop: height * 0.05,
  },
});
