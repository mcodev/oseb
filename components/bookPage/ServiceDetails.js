import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useAppContext } from "../../config/AppContext";
import colors from "../../constants/colors";
import translations from "../../constants/translations";

export default function ServiceDetails({ title, data }) {
  const { language } = useAppContext();

  return (
    <View>
      <Text style={styles.title}>{translations[language][title]}</Text>
      <View style={styles.hr} />
      {data &&
        data.map((item, i) => {
          <Text key={i}>{translations[language][item]}</Text>;
        })}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "700",
  },
  hr: {
    borderBottomColor: colors.hr,
    borderBottomWidth: 1,
    width: "85%",
    alignSelf: "center",
    flex: 0.1,
  },
});
