import React, { useState, useEffect, createRef } from "react";
import { View, StyleSheet, FlatList, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ServiceCard from "./ServiceCard";

export default function CardsDisplay({ data, setData }) {
  const deleteCard = async (key) => {
    let payload = data.filter((item) => key != item.key);
    try {
      const jsonValue = JSON.stringify(payload);
      await AsyncStorage.setItem("@data", jsonValue);
    } catch (e) {
      console.log("Something went wrong..");
    }
    setData(payload);
  };

  return (
    <View style={styles.cardsContainer}>
      <FlatList
        data={data}
        key={(item) => item.item.key}
        renderItem={(item) => (
          <ServiceCard localData={item.item} deleteCard={deleteCard} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cardsContainer: {
    flex: 5,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
});
