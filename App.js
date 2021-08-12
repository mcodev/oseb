import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, TouchableWithoutFeedback, Keyboard } from "react-native";
import { AppProvider } from "./config/AppContext";
import BottomTabs from "./navigation/BottomTabs";
import { height } from "./constants/device";
import Header from "./components/global/Header";
// import { StackNavigator } from "./navigation/Stack";

export default function App() {
  return (
    <AppProvider>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={{ minHeight: height }}>
          <StatusBar hidden style="inverted" />
          <Header />
          {/* <StackNavigator /> */}
          <BottomTabs />
        </View>
      </TouchableWithoutFeedback>
    </AppProvider>
  );
}
