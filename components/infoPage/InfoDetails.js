import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useAppContext } from "../../config/AppContext";
import info from "../../data/bikeInfo";
import translations from "../../constants/translations";
import color from "../../constants/colors";
import colors from "../../constants/colors";
import { width, height } from "../../constants/device";

export default function InfoDetails({ active }) {
  const { language, bike } = useAppContext();

  return (
    <View style={styles.detailsContainer}>
      <View style={styles.detailsLeft}>
        <View style={styles.card}>
          <Text style={styles.infoTitle}>
            {translations[language][active.name]}
          </Text>
          {info[bike][active?.name].map((index, i) => (
            <Text style={styles.infoTxt} key={i}>
              {index === "Front" || index === "Rear"
                ? translations[language][index]
                : index}
            </Text>
          ))}
        </View>
      </View>
      <View style={styles.detailsRight}>
        <Icon name={active?.icon} style={styles.icon} />
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
    fontSize: width * 0.065,
    color: color.primary,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.blackSofter,
    paddingBottom: 5,
    textAlign: "center",
  },
  infoTxt: {
    fontSize: width * 0.035,
    marginVertical: 2,
    letterSpacing: 1,
    color: colors.blackSofter,
  },
  icon: {
    fontSize: width * 0.3,
    color: color.backIcon,
  },

  card: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: width * 0.05,
    paddingHorizontal: width * 0.055,
    borderRadius: 15,
    backgroundColor: colors.white,
    elevation: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: colors.shaddow,
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
});
