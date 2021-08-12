import React, { useRef, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { BottomTabs } from "./BottomTabs";
import Home from "../screens/Home";
import Settings from "../screens/Settings";
import Book from "../screens/Book";
import Info from "../screens/Info";

export const StackNavigator = () => {
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
        <Stack.Screen
          name="Book"
          component={Book}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Info"
          component={Info}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
