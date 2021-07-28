import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import ServiceCard from "./ServiceCard";

export default function CardsDisplay() {
  return (
    <ScrollView style={styles.cardsContainer}>
      <ServiceCard />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cardsContainer: {
    flex: 5,
    paddingTop: 10,
    paddingHorizontal: 20,
  },
});
