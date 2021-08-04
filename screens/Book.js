import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  ActivityIndicator,
  Keyboard,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { bottomTabsHeight } from "../constants/apps";
import { loadAndSetData } from "../functions/functions";
import { Colors } from "react-native/Libraries/NewAppScreen";
import PageTitle from "../components/PageTitle";
import colors from "../constants/colors";
import AddBtn from "../components/bookPage/AddBtn";
import CardsDisplay from "../components/bookPage/CardsDisplay";
import AddBox from "../components/bookPage/AddBox";

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
      // .then((res) => console.log(res))
      .then((res) => res && setData(res))
      .then(() => setLoading(false));
  }, []);

  ////////////////////// ADD BOX  ///////////////////////
  const handleAddBoxCancel = () => {
    setState({ type: null, distance: null, date: null });
    setModalVisible(!modalVisible);
  };

  const saveData = async () => {
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
  };

  ////////////////////// ADD BUTTON  ///////////////////////
  const addBtnHandler = () => {
    setState({ type: null, distance: null, date: null });
    setModalVisible(!modalVisible);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.bookContainer}>
        <PageTitle pageName={"service"} pageSub={"book"} />
        {loading ? (
          <ActivityIndicator
            size="large"
            color={Colors.primary}
            style={{ alignSelf: "center", justifyContent: "center" }}
          />
        ) : (
          <CardsDisplay data={data} setData={setData} />
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
    paddingBottom: bottomTabsHeight,
    paddingTop: 20,
  },
});
