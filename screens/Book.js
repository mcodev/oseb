import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  ActivityIndicator,
  Keyboard,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loadAndSetData } from "../functions/functions";
import { Colors } from "react-native/Libraries/NewAppScreen";
import colors from "../constants/colors";
import AddBtn from "../components/bookPage/AddBtn";
import CardsDisplay from "../components/bookPage/CardsDisplay";
import AddBox from "../components/bookPage/AddBox";
import NoEntriesScreen from "../components/bookPage/NoEntriesScreen";
import { language, width } from "../constants/device";
import translations from "../constants/translations";
import { savesLimit } from "../constants/apps";

export default function Book() {
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([]);
  const [state, setState] = useState({
    type: null,
    distance: null,
    date: null,
  });

  useEffect(() => {
    loadAndSetData()
      .then((res) => res && setData(res))
      .then(() => setLoading(false));
    return () => {
      setLoading(true);
      setModalVisible(false);
      setData([]);
      setState({
        type: null,
        distance: null,
        date: null,
      });
    };
  }, []);

  ////////////////////// ADD BOX  ///////////////////////
  const handleAddBoxCancel = () => {
    setState({ type: null, distance: null, date: null });
    setModalVisible(!modalVisible);
  };

  const saveData = async () => {
    if (data?.length < savesLimit) {
      state.key = state.date + Math.random().toString(36).substr(2, 9);
      let payload = [state, ...data]; /// payload used cause there are 2 states and async doesnt catchup with the data state
      try {
        const jsonValue = JSON.stringify(payload);
        await AsyncStorage.setItem("@data", jsonValue);
      } catch (e) {
        console.log("Something went wrong..");
      }
      setData(payload);
      setModalVisible(!modalVisible);
    } else {
      Alert.alert(
        `${translations[language].savesLimitTitle}`,
        `${translations[language].savesLimit}`
      );
    }
  };

  ////////////////////// ADD BUTTON  ///////////////////////
  const addBtnHandler = () => {
    setState({ type: null, distance: null, date: null });
    data?.length >= savesLimit
      ? Alert.alert(
          `${translations[language].savesLimitTitle}`,
          `${translations[language].savesLimit}`
        )
      : setModalVisible(!modalVisible);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.bookContainer}>
        {loading ? (
          <View
            style={{ alignSelf: "center", justifyContent: "center", flex: 5 }}
          >
            <ActivityIndicator
              size="large"
              color={Colors.primary}
              style={{ alignSelf: "center", justifyContent: "center" }}
            />
          </View>
        ) : data?.length !== 0 ? (
          <CardsDisplay data={data} setData={setData} />
        ) : (
          <NoEntriesScreen callback={addBtnHandler} />
        )}
        <AddBtn
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          handle={addBtnHandler}
        />
        <AddBox
          state={state}
          setState={setState}
          modalVisible={modalVisible}
          cancelBtn={handleAddBoxCancel}
          saveBtn={saveData}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  bookContainer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 20,
    paddingHorizontal: width * 0.009,
  },
});
