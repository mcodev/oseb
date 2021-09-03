import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, TouchableWithoutFeedback, Keyboard } from "react-native";
import { AppProvider } from "./config/AppContext";
import { height } from "./constants/device";
import { StackNavigator } from "./navigation/Stack";
import colors from "./constants/colors";
import { getStatusBarHeight } from "react-native-status-bar-height";

export default function App() {
  return (
    <AppProvider>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View
          style={{
            minHeight: height - getStatusBarHeight(),
            marginTop: getStatusBarHeight() + 7,
            backgroundColor: colors.white,
            flex: 1,
          }}
        >
          <StatusBar style="inverted" backgroundColor={colors.white} />
          <StackNavigator />
        </View>
      </TouchableWithoutFeedback>
    </AppProvider>
  );
}
