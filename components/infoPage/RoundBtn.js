import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useAppContext } from "../../config/AppContext";
import Icon from "react-native-vector-icons/FontAwesome5";
import colors from "../../constants/colors";
import translations from "../../constants/translations";
import { width, height } from "../../constants/device";

export default function RoundBtn({ name, icon, active, setActive }) {
  const { language } = useAppContext();

  return (
    <View style={styles.btnContainer}>
      <Pressable
        activeOpacity={0.5}
        hitSlop={40}
        style={[
          styles.addButton,
          {
            backgroundColor:
              name === active?.name ? colors.primary : colors.white,
          },
          { elevation: name === active?.name ? 0 : 4 },
          { shadowOffset: name === active?.name ? 0 : { width: 1, height: 1 } },
          {
            shadowColor: name === active?.name ? colors.white : colors.shaddow,
          },
          {
            shadowOpacity: name === active?.name ? 0 : 0.3,
          },
          {
            shadowRadius: name === active?.name ? 0 : 2,
          },
        ]}
        onPress={() => {
          setActive({ name: name, icon: icon });
        }}
      >
        <Icon
          name={icon}
          style={[
            styles.buttonIcon,
            { color: name !== active?.name ? colors.primary : colors.third },
          ]}
        />
      </Pressable>
      <Text
        style={[
          styles.titles,
          { color: name === active?.name ? colors.primary : colors.black },
        ]}
      >
        {translations[language][name]}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: "1%",
    marginVertical: 5,
    width: width * 0.2,
    height: height * 0.15,
  },
  buttonIcon: {
    fontSize: width * 0.06,
  },
  addButton: {
    borderRadius: 50,
    width: width * 0.13,
    height: width * 0.13,
    justifyContent: "center",
    alignItems: "center",
  },
  titles: {
    fontSize: width * 0.026,
    marginTop: 6,
  },
});
