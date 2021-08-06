import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import colors from "../../constants/colors";

export default function BikeListItem({ item }) {
  //   console.log(Object.keys(item.item));
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? colors.secondaryPressed : colors.white,
        },
        styles.itemBike,
      ]}
      children={({ pressed }) => (
        <Text
          style={{
            textAlign: "center",
            color: pressed ? colors.white : colors.black,
          }}
        >
          {Object.values(item.item)}
        </Text>
      )}
    />
  );
}

const styles = StyleSheet.create({
  itemBike: {
    // backgroundColor: "yellow",
    textAlign: "center",
    // marginVertical: 7,
    paddingVertical: 13,
  },
});
