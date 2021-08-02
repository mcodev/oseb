import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Pressable,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useAppContext } from "../../config/AppContext";
import colors from "../../constants/colors";
import translations from "../../constants/translations";
import RNPickerSelect from "react-native-picker-select";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { distanceMax } from "../../constants/apps";
import { dateFormater } from "../../functions/functions";

export default function AddBox({
  cancelBtn,
  saveBtn,
  modalVisible,
  state,
  setState,
}) {
  const { language, mKm } = useAppContext();
  const [show, setShow] = useState(false);

  const numInputCleaner = (e) => {
    e = e.replace(/\s/g, "");
    e = e.replace(/,/g, "");
    parseInt(e) > 0 && parseInt(e) < distanceMax(mKm)
      ? setState({ ...state, distance: parseInt(e) })
      : parseInt(e) < 0
      ? setState({ ...state, distance: parseInt(e) * -1 })
      : setState({ ...state, distance: distanceMax(mKm) });
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || new Date();
    setShow(Platform.OS === "ios");
    setState({ ...state, date: dateFormater(currentDate, mKm) });
  };

  const inputsOk = (which) => {
    switch (which) {
      case "distance":
        return state.distance === null || state.distance === "" ? false : true;
      case "type":
        return state.type === null || state.type === "" ? false : true;
      case "date":
        return state.date === null || state.date === "" ? false : true;

      case "all":
        return state.distance === null ||
          state.distance === "" ||
          state.type === null ||
          state.type === "" ||
          state.date === null ||
          state.date === ""
          ? false
          : true;

      default:
        break;
    }
  };

  // console.log("state", state);

  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.modalInputs}>
            {inputsOk("distance") || (
              <Text style={styles.guideTxt}>
                <Text style={styles.guideTxtSpan}>1</Text>{" "}
                <Text style={styles.guideTxtSecondSpan}>
                  {translations[language].odometer}
                </Text>{" "}
                {translations[language].readingS}
              </Text>
            )}

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.formInput}
                placeholder={`${translations[language].addDistance} ${mKm}`}
                keyboardType="number-pad"
                maxLength={7}
                onChangeText={numInputCleaner}
              />
            </View>

            {!inputsOk("distance") || inputsOk("type") || (
              <Text style={styles.guideTxt}>
                <Text style={styles.guideTxtSpan}>2</Text>{" "}
                <Text style={styles.guideTxtSecondSpan}>
                  {translations[language].type}
                </Text>{" "}
                {translations[language].serviceS}
              </Text>
            )}

            <View style={styles.inputContainer}>
              <RNPickerSelect
                useNativeAndroidPickerStyle={false}
                placeholder={{
                  label: `${translations[language].serviceType}`,
                  value: null,
                  color: "grey",
                }}
                style={{
                  inputAndroid: {
                    color: "black",
                    height: 40,
                    width: "100%",
                    backfaceVisibility: "hidden",
                    paddingHorizontal: 40,
                  },
                  inputAndroidContainer: {
                    width: "100%",
                  },
                  viewContainer: {
                    backfaceVisibility: "hidden",
                  },
                }}
                //   onValueChange={(value) => setType(value)}
                onValueChange={(value) => setState({ ...state, type: value })}
                items={[
                  {
                    label: `${translations[language].oilChange}`,
                    value: "oil",
                  },
                  {
                    label: `${translations[language].annualService}`,
                    value: "annual",
                  },
                  {
                    label: `${translations[language].fullService}`,
                    value: "full",
                  },
                  {
                    label: `${translations[language].firstService}`,
                    value: "first",
                  },
                ]}
              />
            </View>

            {inputsOk("all") || !inputsOk("type") || !inputsOk("distance") || (
              <Text style={styles.guideTxt}>
                <Text style={styles.guideTxtSpan}>3</Text>{" "}
                <Text style={styles.guideTxtSecondSpan}>
                  {translations[language].date}{" "}
                </Text>
                {translations[language].serviceS}
              </Text>
            )}

            <View style={styles.inputContainer}>
              <Pressable
                onPress={() => setShow(!show)}
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "90%",
                  height: 30,
                }}
              >
                <Icon
                  name={"calendar"}
                  size={15}
                  style={{ marginRight: 20, color: "grey" }}
                />
                <Text style={{ color: "grey" }}>
                  {state.date === null
                    ? translations[language].addDate
                    : `${state.date}`}
                </Text>
              </Pressable>
            </View>
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
              onPress={() => inputsOk("all") && saveBtn()}
              hitSlop={20}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed
                    ? inputsOk("all")
                      ? colors.secondaryPressed
                      : "transparent"
                    : "transparent",
                },
                styles.actionBtn,
              ]}
              children={({ pressed }) => (
                <Text
                  style={[
                    styles.btnsTxt,
                    {
                      color: pressed
                        ? inputsOk("all")
                          ? colors.white
                          : colors.secondaryPressed
                        : inputsOk("all")
                        ? colors.secondary
                        : colors.secondaryPressed,
                    },
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
          value={new Date()}
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
    flex: 0.55,
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
  modalInputs: {
    flex: 5,
    width: "100%",
    marginTop: 10,
  },
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
    width: 70,
  },
  btnsTxt: {
    fontWeight: "700",
    textAlign: "center",
  },
  inputContainer: {
    width: "100%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: colors.blackSofter,
    borderRadius: 25,
    marginVertical: 10,
  },
  formInput: {
    textAlign: "center",
    margin: 0,
    padding: 0,
  },
  guideTxt: {
    textAlign: "center",
    fontSize: 17,
    marginTop: 10,
  },
  guideTxtSpan: {
    fontWeight: "700",
    fontSize: 20,
    color: colors.blackSoft,
  },
  guideTxtSecondSpan: {
    fontWeight: "700",
    fontSize: 19,
    color: colors.primary,
  },
});

// https://github.com/react-native-datetimepicker/datetimepicker
