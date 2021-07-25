import React from "react";
import { View, Text } from "react-native";
import { useAppContext } from "../config/AppContext";

export default function Home() {
  const { test } = useAppContext();
  return (
    <View>
      <Text>Home screen</Text>
      <Text>{test}</Text>
    </View>
  );
}
