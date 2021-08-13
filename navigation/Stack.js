import React, { useRef, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { BottomTabs } from "./BottomTabs";
import Home from "../screens/Home";
import Settings from "../screens/Settings";
import Book from "../screens/Book";
import Info from "../screens/Info";
import Header from "../components/global/Header";

export const StackNavigator = ({ navigation }) => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="initial" //Home
      >
        <Stack.Screen
          name="Initial"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
