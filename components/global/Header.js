import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useAppContext } from "../../config/AppContext";
import colors from "../../constants/colors";
import { bikeDictionary } from "../../data/bikeNames";

export default function Header({ navigation }) {
  const { bike } = useAppContext();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.titleTxt}>
          <Text style={styles.bikeName}>{bikeDictionary[bike]}</Text>
        </View>
        <Pressable
          style={{ flex: 1.5, justifyContent: "center", alignItems: "center" }}
          onPress={() => navigation.navigate("Settings")}
          hitSlop={20}
        >
          <Icon name="cog" size={28} color={colors.blackSofter} />
        </Pressable>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    // marginTop: 50,
  },
  bikeName: {
    fontSize: 20,
    letterSpacing: 0.5,
    color: colors.blackSofter,
    fontWeight: "700",
    textAlign: "center",
  },
  titleTxt: {
    flex: 5,
    height: "80%",
    justifyContent: "center",
    backgroundColor: colors.third,
    paddingHorizontal: 10,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
});
