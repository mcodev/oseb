import React from "react";
import { Pressable, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import colors from "../../constants/colors";

export default function AddBtn() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleSave = (type, entry) => {
    setState({
      ...state,
      [type]: entry,
    });
  };

  return (
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
    backgroundColor: colors.primary,
    borderRadius: 50,
    width: 43,
    position: "absolute",
    bottom: 100,
    right: 20,
    elevation: 8,
  },
});
