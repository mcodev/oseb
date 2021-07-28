import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useAppContext } from "../../config/AppContext";
import info from "../../data/bikeInfo";
import translations from "../../constants/translations";
import color from "../../constants/colors";

export default function InfoDetails({ active }) {
  const { language, bike } = useAppContext();

  return (
    <View style={styles.detailsContainer}>
      <View style={styles.detailsLeft}>
        <Text style={styles.infoTitle}>
          {translations[language][active.name]}
        </Text>
        {info[bike][active.name].map((index, i) => (
          <Text key={i}>{index}</Text>
        ))}
      </View>
      <View style={styles.detailsRight}>
        <Icon name={active.icon} style={styles.icon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    flexDirection: "row",
    flex: 5,
  },
  detailsLeft: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  detailsRight: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  infoTitle: {
    fontWeight: "700",
    letterSpacing: 0.8,
    fontSize: 27,
    color: color.blackSoft,
    marginBottom: 20,
  },
  icon: {
    fontSize: 100,
    color: color.backIcon,
  },
});
