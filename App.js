import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { AppProvider } from "./config/AppContext";
import BottomTabs from "./navigation/BottomTabs";
import { height } from "./constants/device";

export default function App() {
  return (
    <AppProvider>
      <View style={{ minHeight: height }}>
        <StatusBar hidden style="inverted" />
        <BottomTabs />
      </View>
    </AppProvider>
  );
}
