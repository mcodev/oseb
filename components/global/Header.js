import React from "react";
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
import { bikeDictionary, bikeBrandSlector } from "../../data/bikeNames";
import { width, height } from "../../constants/device";

export default function Header({ navigation }) {
  const { bike } = useAppContext();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.titleTxt}>
          <Text style={styles.bikeBrand}>{bikeBrandSlector(bike)}</Text>
          <Text style={styles.bikeName}>{bikeDictionary[bike]}</Text>
        </View>
        <Pressable
          style={{ flex: 1.5, justifyContent: "center", alignItems: "center" }}
          onPress={() => navigation.navigate("Settings")}
          hitSlop={20}
        >
          <Icon name="cog" size={width * 0.075} color={colors.blackSoft} />
        </Pressable>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height * 0.08,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: colors.white,
  },
  titleTxt: {
    flex: 5,
    height: "80%",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: colors.third,
    paddingHorizontal: 10,
    borderTopRightRadius: 55,
    borderBottomRightRadius: 55,
    flexDirection: "row",
  },
  bikeName: {
    fontSize: width * 0.04,
    letterSpacing: 0.5,
    color: colors.blackSofter,
  },
  bikeBrand: {
    fontSize: width * 0.05,
    letterSpacing: 1,
    color: colors.white,
    fontWeight: "700",
    paddingBottom: width * 0.012,
  },
});
