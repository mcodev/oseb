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
      .then((res) => res && setData(res))
      .then(() => setLoading(false));
  }, []);

  // const updateData = () => {
  //   setData([
  //     {
  //       key: state.date + Math.random().toString(36).substr(2, 9),
  //       type: state.type,
  //       distance: state.distance,
  //       date: state.date,
  //     },
  //     ...data,
  //   ]);
  // };

  const saveData = async () => {
    try {
      const jsonValue = JSON.stringify(data);
      console.log("to be saved", jsonValue);
      await AsyncStorage.setItem("@data", jsonValue);
      alert("saved successfully");
    } catch (e) {
      console.log("Something went wrong..");
    }
  };

  ////////////////////// ADD BOX  ///////////////////////
  const handleAddBoxCancel = () => {
    setState({ type: null, distance: null, date: null });
    setModalVisible(!modalVisible);
  };

  const updateData = async () => {
    let res = await setData([
      {
        key: state.date + Math.random().toString(36).substr(2, 9),
        type: state.type,
        distance: state.distance,
        date: state.date,
      },
      ...data,
    ]);
    console.log("first", res);
    return data;
  };

  const handleAddBoxSave = () => {
    updateData().then((res) => console.log("response", res));
    setModalVisible(!modalVisible);
  };

  ////////////////////// ADD BUTTON  ///////////////////////
  const addBtnHandler = () => {
    setState({ type: null, distance: null, date: null });
    setModalVisible(!modalVisible);
  };

  console.log("data", data);

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
          saveBtn={handleAddBoxSave}
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
