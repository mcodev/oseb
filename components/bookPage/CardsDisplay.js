import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ServiceCard from "./ServiceCard";

export default function CardsDisplay({ data, setData }) {
  const [active, setActive] = useState({});

  useEffect(() => {
    return () => {
      setActive({});
    };
  }, []);

  ////////////////////// DELETE BUTTON FROM LIST ///////////////////////

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
          <ServiceCard
            localData={item.item}
            deleteCard={deleteCard}
            active={active}
            setActive={setActive}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cardsContainer: {
    flex: 8,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
});
