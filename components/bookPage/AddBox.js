import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Pressable,
  TextInput,
  Platform,
} from "react-native";
import { useAppContext } from "../../config/AppContext";
import colors from "../../constants/colors";
import translations from "../../constants/translations";
import RNPickerSelect from "react-native-picker-select";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { distanceMax } from "../../constants/apps";
import { dateFormater } from "../../functions/functions";
import { width, height } from "../../constants/device";

export default function AddBox({
  cancelBtn,
  saveBtn,
  modalVisible,
  state,
  setState,
}) {
  const { language, mKm } = useAppContext();
  const [show, setShow] = useState(false);

  useEffect(() => {
    return () => {
      setShow(false);
    };
  }, []);

  const numInputCleaner = (e) => {
    e = e.replace(/\s/g, "");
    e = e.replace(/,/g, "");
    parseInt(e) > 0 && parseInt(e) < distanceMax(mKm)
      ? setState({ ...state, distance: parseInt(e) })
      : parseInt(e) < 0
      ? setState({ ...state, distance: parseInt(e) * -1 })
      : setState({ ...state, distance: null });
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

  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.modalInputs}>
            {inputsOk("distance") || (
              <View style={styles.guideTxt}>
                <View style={styles.guideTxtSpanView}>
                  <Text style={styles.guideTxtSpan}>1</Text>
                </View>
                <Text style={styles.guideTxtSecondSpan}>
                  {translations[language].odometer}
                </Text>
                <Text style={styles.guideTxtLastSpan}>
                  {translations[language].readingS}
                </Text>
              </View>
            )}

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.formInput}
                placeholder={`${translations[language].addDistance} ${translations[language][mKm]} `}
                keyboardType="number-pad"
                maxLength={7}
                onChangeText={numInputCleaner}
              />
            </View>

            {!inputsOk("distance") || inputsOk("type") || (
              <View style={styles.guideTxt}>
                <View style={styles.guideTxtSpanView}>
                  <Text style={styles.guideTxtSpan}>2</Text>
                </View>
                <Text style={styles.guideTxtSecondSpan}>
                  {translations[language].type}
                </Text>
                <Text style={styles.guideTxtLastSpan}>
                  {translations[language].serviceS}
                </Text>
              </View>
            )}

            <View
              style={[
                styles.inputContainer,
                { paddingLeft: Platform.OS === "ios" ? width * 0.13 : 0 },
              ]}
            >
              <RNPickerSelect
                useNativeAndroidPickerStyle={false}
                placeholder={{
                  label: `${translations[language].serviceType}`,
                  value: null,
                  color: colors.blackSoft,
                }}
                style={{
                  inputAndroid: {
                    color: colors.primary,
                    height: 40,
                    width: "100%",
                    backfaceVisibility: "hidden",
                    paddingHorizontal: 40,
                    fontSize: width * 0.035,
                  },
                  inputAndroidContainer: {
                    width: "100%",
                  },
                  viewContainer: {
                    backfaceVisibility: "hidden",
                  },
                }}
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
              <View style={styles.guideTxt}>
                <View style={styles.guideTxtSpanView}>
                  <Text style={styles.guideTxtSpan}>3</Text>
                </View>
                <Text style={styles.guideTxtSecondSpan}>
                  {translations[language].date}
                </Text>
                <Text style={styles.guideTxtLastSpan}>
                  {translations[language].serviceS}
                </Text>
              </View>
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
                <Text
                  style={{
                    color:
                      state?.date === null
                        ? colors.blackSofter
                        : colors.primary,
                    fontSize: width * 0.035,
                  }}
                >
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
          display={Platform.OS === "ios" ? "calendar" : "spinner"}
          onChange={onChange}
          maximumDate={new Date()}
          minimumDate={new Date(2004, 0, 1)}
          style={{
            marginBottom: Platform.OS === "ios" ? height * 0.02 : 0,
          }}
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
    backgroundColor: colors.white,
    borderRadius: 5,
    paddingHorizontal: width * 0.06,
    paddingTop: width * 0.02,
    paddingBottom: width * 0.07,
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
    width: "100%",
    marginTop: 10,
    marginBottom: height * 0.05,
  },
  modalActions: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  actionBtn: {
    padding: 5,
    borderRadius: 5,
    width: "50%",
  },
  btnsTxt: {
    fontWeight: "700",
    textAlign: "center",
    fontSize: width * 0.037,
  },
  inputContainer: {
    width: "100%",
    height: height * 0.06,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: colors.blackSofter,
    borderRadius: 50,
    marginVertical: height * 0.02,
  },
  formInput: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontSize: width * 0.035,
    margin: 0,
    padding: 0,
    color: colors.primary,
  },
  guideTxt: {
    textAlign: "center",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  guideTxtSpanView: {
    backgroundColor: colors.thirdPressed,
    borderRadius: 50,
    padding: width * 0.01,
    width: width * 0.07,
    alignItems: "center",
    justifyContent: "center",
    marginRight: width * 0.015,
  },
  guideTxtSpan: {
    fontWeight: "700",
    fontSize: width * 0.04,
    color: colors.white,
  },
  guideTxtSecondSpan: {
    fontWeight: "700",
    fontSize: width * 0.05,
    color: colors.primary,
    marginRight: width * 0.015,
  },
  guideTxtLastSpan: {
    fontSize: width * 0.045,
  },
});

// https://github.com/react-native-datetimepicker/datetimepicker
