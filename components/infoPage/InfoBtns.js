import React from "react";
import { View, StyleSheet } from "react-native";
import RoundBtn from "./RoundBtn";
import { types } from "../../data/other";

export default function InfoBtns({ active, setActive, action }) {
  return (
    <View style={styles.typesContainer}>
      <View style={styles.typesContainerSub}>
        {types.map((item, index) => (
          <RoundBtn
            action={action}
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
  },
  typesContainerSub: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});
