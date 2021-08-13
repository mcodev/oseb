import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, TouchableWithoutFeedback, Keyboard } from "react-native";
import { AppProvider } from "./config/AppContext";
import { height } from "./constants/device";
import { StackNavigator } from "./navigation/Stack";

export default function App() {
  return (
    <AppProvider>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={{ minHeight: height }}>
          <StatusBar hidden style="auto" />
          <StackNavigator />
        </View>
      </TouchableWithoutFeedback>
    </AppProvider>
  );
}
