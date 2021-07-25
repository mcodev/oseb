import React from "react";
import { Text } from "react-native";
import { useAppContext } from "../config/AppContext";
import translations from "../constants/translations";

export default function PageTitle({ pageName }) {
  const { language } = useAppContext();

  return (
    <Text style={{ fontSize: 30, marginTop: 20 }}>
      <Text style={{ fontWeight: "700" }}>
        {translations[language][pageName]}
      </Text>{" "}
      {translations[language].page}
    </Text>
  );
}
