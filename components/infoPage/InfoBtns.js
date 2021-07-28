import React from "react";
import { View, StyleSheet } from "react-native";
import RoundBtn from "./RoundBtn";

export default function InfoBtns({ active, setActive }) {
  const types = [
    { name: "tyres", icon: "road" },
    { name: "oil", icon: "oil-can" },
    { name: "battery", icon: "battery-half" },
    { name: "chain", icon: "cogs" },
    { name: "lights", icon: "lightbulb" },
    { name: "coolant", icon: "snowflake" },
    { name: "fuses", icon: "bolt" },
    { name: "sparkPlug", icon: "fire" },
  ];

  return (
    <View style={styles.typesContainer}>
      <View style={styles.typesContainerSub}>
        {types.map((item, index) => (
          <RoundBtn
            key={index}
            name={item.name}
            icon={item.icon}
            active={active}
            setActive={setActive}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  typesContainer: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  typesContainerSub: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});
