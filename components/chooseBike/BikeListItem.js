import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import colors from "../../constants/colors";

export default function BikeListItem({
  item,
  setBikeToSave,
  setModalVisible,
  length,
}) {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? colors.primaryPressed : colors.white,
        },
        styles.itemBike,
      ]}
      children={({ pressed }) => (
        <View
          style={{
            textAlign: "center",
            borderBottomWidth: 1,
            borderBottomColor:
              item?.index !== length - 1 ? colors.blackSofter : colors.white,
            height: 50,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: pressed ? colors.white : colors.black,
            }}
          >
            {Object.values(item.item)}
          </Text>
        </View>
      )}
      onPress={() => {
        setBikeToSave(Object.keys(item.item).toString());
        setModalVisible(true);
      }}
    />
  );
}

const styles = StyleSheet.create({
  itemBike: {
    textAlign: "center",
  },
});
