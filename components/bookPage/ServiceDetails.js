import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useAppContext } from "../../config/AppContext";
import colors from "../../constants/colors";
import translations from "../../constants/translations";

export default function ServiceDetails({ title, data }) {
  const { language } = useAppContext();

  return (
    <View style={{ backgroundColor: "transparent" }}>
      <Text style={styles.title}>
        {title !== "oil"
          ? `${translations[language][title]} ${translations[language].service}`
          : translations[language][title]}
      </Text>
      <View style={{ alignItems: "center", marginVertical: 20 }}>
        {data &&
          data.map((item, i) => (
            <Text
              key={i}
              style={{
                color: colors.blackSoft,
                fontSize: 16,
                marginVertical: 2,
                letterSpacing: 0.7,
              }}
            >
              {translations[language][item]}
            </Text>
          ))}
      </View>
      {
        <Text
          style={{ color: colors.blackSofter, fontSize: 11, marginTop: 10 }}
        >
          *{translations[language].rExp} , {translations[language].cExp} ,
          {translations[language].aExp}
        </Text>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "700",
    fontSize: 23,
    letterSpacing: 0.8,
    textAlign: "center",
    paddingBottom: 10,
    borderBottomColor: colors.hr,
    borderBottomWidth: 1,
  },
});
