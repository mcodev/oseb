import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useAppContext } from "../../config/AppContext";
import colors from "../../constants/colors";
import { height, width } from "../../constants/device";

export default function BikeListItem({
  item,
  setBikeToSave,
  setModalVisible,
  length,
}) {
  const { bike } = useAppContext();

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
              item?.index !== length - 1 ? colors.hr : colors.white,
            height: height * 0.07,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "700",
              fontSize: width * 0.035,
              letterSpacing: 0.7,
              color: pressed
                ? colors.white
                : Object.keys(item.item).toString() === bike
                ? colors.primary
                : colors.black,
            }}
          >
            {Object.values(item.item)}
          </Text>
        </View>
      )}
      onPress={() => {
        Object.keys(item.item).toString() !== bike &&
          (setBikeToSave(Object.keys(item.item).toString()),
          setModalVisible(true));
      }}
    />
  );
}

const styles = StyleSheet.create({
  itemBike: {
    textAlign: "center",
  },
});
