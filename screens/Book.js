import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import PageTitle from "../components/PageTitle";
import ServiceCard from "../components/ServiceCard";
import color from "../constants/colors";

// import { useAppContext } from "../config/AppContext";

export default function Book() {
  // const { value1, value2 } = useAppContext();
  const [modalVisible, setModalVisible] = useState(false);
  const [state, setState] = useState({
    type: "",
    mkm: "",
    date: "",
  });

  const handleSave = (type, entry) => {
    setState({
      ...state,
      [type]: entry,
    });
  };

  return (
    <View style={styles.bookContainer}>
      <PageTitle pageName={"service"} pageSub={"book"} />
      <ScrollView style={styles.cardsContainer}>
        <ServiceCard />
      </ScrollView>
      <Pressable
        activeOpacity={0.5}
        style={styles.addButton}
        onPress={() => {
          console.log("pressed");
          setModalVisible(!modalVisible);
        }}
      >
        <Icon name="plus" style={styles.buttonIcon} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  bookContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 80,
    paddingTop: 20,
  },
  buttonIcon: {
    fontSize: 20,
    color: color.white,
    fontWeight: "100",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 12.5,
    paddingRight: 10,
  },
  addButton: {
    backgroundColor: color.primary,
    borderRadius: 50,
    width: 43,
    position: "absolute",
    bottom: 100,
    right: 20,
    elevation: 8,
  },
  cardsContainer: {
    flex: 5,
    paddingTop: 10,
    paddingHorizontal: 20,
  },
});
