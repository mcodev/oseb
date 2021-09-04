import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useAppContext } from "../config/AppContext";
import translations from "../constants/translations";
import colors from "../constants/colors";
import Home from "../screens/Home";
import Info from "../screens/Info";
import Book from "../screens/Book";
import Header from "../components/global/Header";
import { height } from "../constants/device";

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
          height: height * 0.1,
          paddingTop: height * 0.013,
          paddingBottom: height * 0.019,
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
            tabBarLabel: translations[language].service_book,
            tabBarIcon: ({ color, size }) => (
              <Icon name="book-open" color={color} size={size - 5} />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: translations[language].home,
            tabBarIcon: ({ color, size }) => (
              <Icon name="search" color={color} size={size - 5} />
            ),
          }}
        />
        <Tab.Screen
          name="Info"
          component={Info}
          options={{
            tabBarLabel: translations[language].bike_info,
            tabBarIcon: ({ color, size }) => (
              <Icon name="info" color={color} size={size - 5} />
            ),
          }}
        />
      </>
    </Tab.Navigator>
  );
};
