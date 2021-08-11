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
import ConfirmBox from "../global/ConfirmBox";
import Mkm from "../mKm/Mkm";

export default function HomeHeader() {
  const { bike, language } = useAppContext();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={{ flex: 1.5 }}></View>
        <Pressable style={{ flex: 5 }}>
          <Text style={styles.bikeName}>{bikeDictionary[bike]}</Text>
        </Pressable>
        <Pressable
          style={{ flex: 1.5, justifyContent: "center", alignItems: "center" }}
          onPress={() => setModalVisible(true)}
        >
          <Icon name="cog" size={22} color={colors.blackSoft} />
        </Pressable>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  bikeName: {
    fontSize: 22,
    letterSpacing: 0.7,
    color: colors.primary,
    fontWeight: "700",
  },
});
