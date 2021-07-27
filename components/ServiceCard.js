import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import colors from "../constants/colors";

export default function ServiceCard() {
  const [active, setActive] = useState(false);
  return (
    <Pressable onPress={() => setActive(!active)}>
      <View
        style={[
          styles.cardContainer,
          { borderLeftColor: active ? "red" : "black" },
        ]}
      >
        <View style={styles.cardLeft}>
          <Icon name={"home"} size={20} />
        </View>
        <View style={styles.cardMidle}>
          <Text>test</Text>
        </View>
        <View style={styles.cardRight}></View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    backgroundColor: colors.cardBack,
    height: 80,
    width: "100%",
    flexDirection: "row",
    borderLeftWidth: 5,
  },
});
