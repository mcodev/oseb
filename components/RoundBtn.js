import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import color from "../constants/colors";

export default function RoundBtn({ name, icon, id, active, setActive }) {
  return (
    <View style={styles.btnContainer}>
      <Pressable
        activeOpacity={0.5}
        style={[
          styles.addButton,
          {
            backgroundColor: name === active.name ? color.primary : color.white,
          },
          { elevation: name === active.name ? 0 : 5 },
          //   {
          //     borderColor: title !== active ? color.primary : color.white,
          //   },
        ]}
        onPress={() => {
          setActive({ name: name, icon: icon, id: id });
        }}
      >
        <Icon
          name={icon}
          style={[
            styles.buttonIcon,
            { color: name !== active.name ? color.primary : color.white },
          ]}
        />
      </Pressable>
      <Text
        style={[
          styles.titles,
          { color: name === active.name ? color.primary : color.black },
        ]}
      >
        {name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "column",
    // backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: "1%",
    marginVertical: 5,
    width: 80,
    height: 80,
  },
  buttonIcon: {
    fontSize: 17,
  },
  addButton: {
    borderRadius: 50,
    width: 43,
    height: 43,
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 0.2,
  },
  titles: {
    fontSize: 10,
    marginTop: 6,
  },
});
