import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import PageTitle from "../components/PageTitle";

// import { useAppContext } from "../config/AppContext";

export default function Book() {
  // const { value1, value2 } = useAppContext();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.bookContainer}>
      <PageTitle pageName={"book"} />

      <Pressable
        activeOpacity={0.5}
        style={styles.addButton}
        onPress={() => {
          console.log("pressed");
          setModalVisible(!modalVisible);
          // setSaveKm(null);
          // setType(null);
          // setTes(null);
          // setFullDate(
          //   date.getDate() +
          //     "/" +
          //     (date.getMonth() + 1) +
          //     "/" +
          //     date.getUTCFullYear()
          // );
          // setMyData('');
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
  },
  buttonIcon: {
    fontSize: 20,
    color: "black",
    fontWeight: "100",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 12.5,
    paddingRight: 10,
  },
  addButton: {
    backgroundColor: "rgba(102, 51, 153, .7)",
    borderRadius: 50,
    width: 43,
    position: "absolute",
    bottom: 20,
    right: 20,
    elevation: 8,
  },
});
