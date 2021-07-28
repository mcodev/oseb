import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import colors from "../../constants/colors";
import { serviceIconPicker } from "../../constants/functions";

export default function ServiceCard() {
  const [active, setActive] = useState(false);
  const [sideBtn, setSideBtn] = useState(false);
  const [fake, setFake] = useState({
    type: "first",
  });

  return (
    <Pressable
      onPress={() => {
        setActive(!active);
        setSideBtn(false);
      }}
    >
      <View
        style={[
          styles.cardContainer,
          { borderLeftColor: active ? colors.secondary : colors.blackSofter },
        ]}
      >
        <Icon
          name={serviceIconPicker(fake.type)}
          size={60}
          style={styles.iconBack}
        />
        <View style={styles.cardLeft}>
          <Text
            style={[
              styles.type,
              {
                color: active ? colors.blackSoft : colors.blackSofter,
              },
            ]}
          >
            Annual
          </Text>
        </View>
        <View style={styles.cardMiddle}>
          <Text
            style={[
              styles.title,
              { color: active ? colors.primary : colors.blackSoft },
            ]}
          >
            30000 km
          </Text>
          <Text style={styles.date}>27/3/2018</Text>
        </View>
        <View style={styles.cardRight}>
          {active && (
            <Pressable onPress={() => setSideBtn(!sideBtn)}>
              <Icon
                name={"ellipsis-v"}
                size={25}
                style={{ color: colors.blackSoft }}
              />
            </Pressable>
          )}
          {/* {sideBtn && (
            <View
              style={{
                justifyContent: "space-around",
                // backgroundColor: "aqua",
                height: "100%",
                paddingVertical: 7,
              }}
            >
              <Text>Delete</Text>
              <Text>Details</Text>
            </View>
          )} */}
        </View>
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
  cardLeft: {
    flex: 0.5,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
  },
  cardMiddle: {
    flex: 3,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
  },
  cardRight: {
    flex: 1.7,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    fontWeight: "700",
    fontSize: 22,
    letterSpacing: 2,
    marginBottom: 2,
  },
  date: {
    color: colors.blackSofter,
    fontSize: 16,
  },
  type: {
    fontSize: 18,
    transform: [{ rotate: "-90deg" }],
    width: 100,
    textAlign: "center",
    letterSpacing: 2,
    fontWeight: "700",
    marginLeft: 5,
  },
  iconBack: {
    position: "absolute",
    alignSelf: "center",
    right: 10,
    color: colors.backIcon,
  },
});
