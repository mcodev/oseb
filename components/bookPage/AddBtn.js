import React, { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import colors from "../../constants/colors";
import { bottomTabsHeight } from "../../constants/device";
import AddBox from "./AddBox";

export default function AddBtn({ save, cancel, state, setState }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Pressable
        activeOpacity={0.5}
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? colors.primaryPressed : colors.primary,
          },
          styles.addButton,
        ]}
      >
        <Icon name="plus" style={styles.buttonIcon} />
      </Pressable>
      <AddBox
        state={state}
        setState={setState}
        modalVisible={modalVisible}
        cancelBtn={() => {
          cancel();
          setModalVisible(!modalVisible);
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  buttonIcon: {
    fontSize: 20,
    color: colors.white,
    fontWeight: "100",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 12.5,
    paddingRight: 10,
  },
  addButton: {
    // backgroundColor: colors.primary,
    borderRadius: 50,
    width: 43,
    position: "absolute",
    bottom: bottomTabsHeight + 20,
    right: 20,
    elevation: 8,
  },
});
