import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useAppContext } from "../config/AppContext";
import translations from "../constants/translations";

import Home from "../screens/Home";
import Info from "../screens/Info";
import Book from "../screens/Book";

const Tab = createBottomTabNavigator();

const Mytabs = () => {
  const { language } = useAppContext();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      lazy
      tabBarOptions={{
        activeTintColor: "rgba(0,0,0, .8)",
        inactiveTintColor: "rgba(0,0,0, .5)",
        style: {
          borderTopLeftRadius: 55,
          borderTopRightRadius: 55,
          height: 80,
          paddingTop: 20,
          paddingBottom: 15,
          position: "absolute",
        },
      }}
    >
      <Tab.Screen
        name="Book"
        component={Book}
        options={{
          tabBarLabel: `${translations[language].service_book}`,
          tabBarIcon: ({ color, size }) => (
            <Icon name="book-open" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: `${translations[language].home}`,
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Info"
        component={Info}
        options={{
          tabBarLabel: `${translations[language].bike_info}`,
          tabBarIcon: ({ color, size }) => (
            <Icon name="info" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function BottomTabs() {
  return (
    <NavigationContainer>
      <Mytabs />
    </NavigationContainer>
  );
}
