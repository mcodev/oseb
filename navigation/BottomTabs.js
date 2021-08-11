import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useAppContext } from "../config/AppContext";
import { bottomTabsHeight } from "../constants/apps";
import translations from "../constants/translations";
import colors from "../constants/colors";
import Home from "../screens/Home";
import Info from "../screens/Info";
import Book from "../screens/Book";

const Tab = createBottomTabNavigator();
const iconSize = 20;

const Mytabs = () => {
  const { language } = useAppContext();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      lazy
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: colors.blackSofter,
        elevation: 0,
        style: {
          height: bottomTabsHeight,
          paddingTop: 10,
          paddingBottom: 10,
          elevation: 0,
          shadowColor: colors.white,
          shadowOpacity: 0,
          shadowRadius: 0,
        },
      }}
    >
      <Tab.Screen
        name="Book"
        component={Book}
        options={{
          tabBarLabel: `${translations[language].service_book}`,
          tabBarIcon: ({ color }) => (
            <Icon name="book-open" color={color} size={iconSize} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: `${translations[language].home}`,
          tabBarIcon: ({ color }) => (
            <Icon name="chevron-circle-up" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Info"
        component={Info}
        options={{
          tabBarLabel: `${translations[language].bike_info}`,
          tabBarIcon: ({ color }) => (
            <Icon name="info" color={color} size={iconSize} />
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
