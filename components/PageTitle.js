import React from "react";
import { View, Text } from "react-native";
import { useAppContext } from "../config/AppContext";
import translations from "../constants/translations";

export default function PageTitle({ pageName, pageSub }) {
  const { language } = useAppContext();

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text
        style={{
          fontSize: 35,
          marginLeft: 20,
        }}
      >
        <Text style={{ fontWeight: "700" }}>
          {translations[language][pageName]}
        </Text>{" "}
        {translations[language][pageSub]}
      </Text>
    </View>
  );
}
