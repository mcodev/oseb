import React from "react";
import { Text } from "react-native";
import { useAppContext } from "../config/AppContext";
import translations from "../constants/translations";

export default function PageTitle({ pageName, pageSub }) {
  const { language } = useAppContext();

  return (
    <Text
      style={{
        fontSize: 35,
        justifyContent: "center",
        marginLeft: 20,
        flex: 1,
      }}
    >
      <Text style={{ fontWeight: "700" }}>
        {translations[language][pageName]}
      </Text>{" "}
      {translations[language][pageSub]}
    </Text>
  );
}
