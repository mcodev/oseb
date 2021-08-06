import React from "react";
import { View, Text, Pressable } from "react-native";

export default function BikeListItem({ item }) {
  //   console.log(item);
  return (
    <Pressable>
      <View>
        <Text>{item}</Text>
      </View>
    </Pressable>
  );
}
