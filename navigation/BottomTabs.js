import React from "react";
import { Text } from "react-native";
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
import Header from "../components/global/Header";
import { width, height } from "../constants/device";

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
  const { language } = useAppContext();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      backBehavior="initialRoute"
      shifting={true}
      sceneAnimationEnabled={true}
      screenOptions={{
        lazy: true,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.blackSofter,
        tabBarStyle: {
          height: height * 0.09,
          paddingTop: height * 0.013,
          paddingBottom: height * 0.013,
          elevation: 0,
          shadowColor: colors.white,
          shadowOpacity: 0,
          shadowRadius: 0,
        },

        header: ({ navigation }) => <Header navigation={navigation} />,
      }}
    >
      <>
        <Tab.Screen
          name="Book"
          component={Book}
          options={{
            tabBarLabel: ({ color }) => (
              <Text style={{ color: color, fontSize: width * 0.026 }}>
                {`${translations[language].service_book}`}
              </Text>
            ),
            tabBarIcon: ({ color }) => (
              <Icon name="book-open" color={color} size={width * 0.051} />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: ({ color }) => (
              <Text style={{ color: color, fontSize: width * 0.027 }}>
                {`${translations[language].home}`}
              </Text>
            ),
            tabBarIcon: ({ color }) => (
              <Icon name="search" color={color} size={width * 0.055} />
            ),
          }}
        />
        <Tab.Screen
          name="Info"
          component={Info}
          options={{
            tabBarLabel: ({ color }) => (
              <Text style={{ color: color, fontSize: width * 0.027 }}>
                {`${translations[language].bike_info}`}
              </Text>
            ),
            tabBarIcon: ({ color }) => (
              <Icon name="info" color={color} size={width * 0.053} />
            ),
          }}
        />
      </>
    </Tab.Navigator>
  );
};
