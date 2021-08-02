import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import ServiceCard from "./ServiceCard";

export default function CardsDisplay({ data, setData }) {
  return (
    <View style={styles.cardsContainer}>
      <FlatList
        data={data}
        key={(item) => item.item.key}
        renderItem={(item) => (
          <ServiceCard localData={item.item} data={data} setData={setData} />
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
