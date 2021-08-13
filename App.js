import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, TouchableWithoutFeedback, Keyboard } from "react-native";
import { AppProvider } from "./config/AppContext";
import { bottomTabsHeight } from "./constants/apps";
import { height } from "./constants/device";
import { StackNavigator } from "./navigation/Stack";
import colors from "./constants/colors";

export default function App() {
  return (
    <AppProvider>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View
          style={{
            minHeight: height,
            backgroundColor: colors.white,
          }}
        >
          <StatusBar hidden style="inverted" backgroundColor={colors.white} />
          <StackNavigator />
        </View>
      </TouchableWithoutFeedback>
    </AppProvider>
  );
}
