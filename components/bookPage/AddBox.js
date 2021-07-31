import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Pressable,
  TextInput,
} from "react-native";
import { useAppContext } from "../../config/AppContext";
import colors from "../../constants/colors";
import translations from "../../constants/translations";
import RNPickerSelect from "react-native-picker-select";
import RNDateTimePicker from "@react-native-community/datetimepicker";

export default function AddBox({
  cancelBtn,
  saveBtn,
  modalVisible,
  state,
  setState,
}) {
  const { language } = useAppContext();

  const handleState = (type, entry) => {
    setState({
      ...state,
      [type]: entry,
    });
  };

  const clickHandler = (e) => {
    e = e.replace(/\s/g, "");
    e = e.replace(/,/g, "");
    setTes(e);
    setSaveKm(parseInt(e));
  };

  const clickNew = () => {
    if (
      tes == NaN ||
      tes == " " ||
      parseInt(tes) < 0 ||
      parseInt(tes) > 426000
    ) {
      setSaveKm(null);
    } else {
      setSaveKm(parseInt(tes));
    }
  };

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.modalInputs}>
            <View style={styles.inputa}>
              <TextInput
                style={styles.formInput}
                placeholder="Add odometer"
                keyboardType="number-pad"
                maxLength={6}
                onChangeText={clickHandler}
                onEndEditing={clickNew}
              />
            </View>
            <RNPickerSelect
              placeholder={{
                label: "Type",
                value: null,
                color: "grey",
              }}
              itemStyle={{ fontSize: 8 }}
              style={{
                width: 60,
                height: 20,
                inputAndroid: {
                  color: "black",
                  paddingVertical: 45,
                  marginBottom: 10,
                },
              }}
              //   onValueChange={(value) => setType(value)}
              onValueChange={(value) => console.log(value)}
              items={[
                { label: "First Service", value: "first" },
                { label: "Oil change", value: "oil" },
                { label: "Annual Service", value: "annual" },
                { label: "Full Service", value: "full" },
              ]}
            />
            <Pressable onPress={() => setShow(!show)}>
              <Text>add date</Text>
            </Pressable>
          </View>
          <View style={styles.modalActions}>
            <Pressable
              onPress={cancelBtn}
              hitSlop={20}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? colors.redPressed : "transparent",
                  color: pressed ? colors.white : colors.red,
                },
                styles.actionBtn,
              ]}
              children={({ pressed }) => (
                <Text
                  style={[
                    styles.btnsTxt,
                    { color: pressed ? colors.white : colors.red },
                  ]}
                >
                  {translations[language].cancel}
                </Text>
              )}
            />
            <Pressable
              onPress={saveBtn}
              hitSlop={20}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed
                    ? colors.secondaryPressed
                    : "transparent",
                },
                styles.actionBtn,
              ]}
              children={({ pressed }) => (
                <Text
                  style={[
                    styles.btnsTxt,
                    { color: pressed ? colors.white : colors.secondary },
                  ]}
                >
                  {translations[language].save}
                </Text>
              )}
            />
          </View>
        </View>
      </View>
      {show && (
        <RNDateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={"date"}
          display="spinner"
          onChange={onChange}
          maximumDate={new Date()}
          minimumDate={new Date(2004, 0, 1)}
          textColor={colors.secondary}
        />
      )}
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    height: 300,
    // margin: 20,
    backgroundColor: colors.white,
    borderRadius: 5,
    padding: 20,
    alignItems: "center",
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "60%",
  },
  modalInputs: { flex: 3 },
  modalActions: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  actionBtn: {
    padding: 5,
    borderRadius: 5,
  },
  btnsTxt: {
    fontWeight: "700",
  },
  inputa: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
});

// https://github.com/react-native-datetimepicker/datetimepicker
