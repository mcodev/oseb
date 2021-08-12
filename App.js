import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, TouchableWithoutFeedback, Keyboard } from "react-native";
import { AppProvider } from "./config/AppContext";
import { StackNavigator } from "./navigation/Stack";
import { height } from "./constants/device";
import Header from "./components/global/Header";

export default function App({ navigation }) {
  return (
    <AppProvider>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={{ minHeight: height }}>
          <StatusBar hidden style="inverted" />
          <Header navigation={navigation} />
          <StackNavigator />
        </View>
      </TouchableWithoutFeedback>
    </AppProvider>
  );
}
