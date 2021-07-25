import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppProvider } from "./config/AppContext";
import BottomTabs from "./navigation/BottomTabs";
import Book from "./screens/Book";
import Home from "./screens/Home";

export default function App() {
  return (
    <AppProvider>
      {/* <StatusBar hidden style="auto" /> */}
      <StatusBar hidden style="auto" />

      <BottomTabs />
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
