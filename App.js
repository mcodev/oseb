import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { AppProvider } from "./config/AppContext";
import BottomTabs from "./navigation/BottomTabs";
import { height } from "./constants/device";

export default function App() {
  return (
    <AppProvider>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={{ minHeight: height }}>
          <StatusBar hidden style="inverted" />
          <BottomTabs />
        </View>
      </TouchableWithoutFeedback>
    </AppProvider>
  );
}
