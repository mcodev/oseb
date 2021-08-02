import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  ActivityIndicator,
  Keyboard,
} from "react-native";
import PageTitle from "../components/PageTitle";
import colors from "../constants/colors";
import { bottomTabsHeight } from "../constants/apps";
import AddBtn from "../components/bookPage/AddBtn";
import CardsDisplay from "../components/bookPage/CardsDisplay";
import { saveData, loadAndSetData } from "../functions/functions";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function Book() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    type: null,
    distance: null,
    date: null,
  });

  useEffect(() => {
    loadAndSetData()
      .then((res) => res && setData(res))
      .then(() => setLoading(true));

    // return () => {
    //   cleanup
    // }
  }, []);

  const updateData = () => {
    setData((prev) => {
      return [
        {
          key: state.date + Math.random().toString(36).substr(2, 9),
          type: state.type,
          distance: state.distance,
          date: state.date,
        },
        ...prev,
      ];
    });
  };

  console.log("data", data);
  // // console.log("state", state);
  // console.log(loading);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.bookContainer}>
        <PageTitle pageName={"service"} pageSub={"book"} />
        {!loading ? (
          <ActivityIndicator
            size="large"
            color={Colors.primary}
            style={{ alignSelf: "center", justifyContent: "center" }}
          />
        ) : (
          <CardsDisplay data={data} setData={setData} />
        )}
        <AddBtn
          state={state}
          setState={setState}
          cancel={() => setState({ type: null, distance: null, date: null })}
          save={() => {
            updateData();
            saveData(data);
          }}
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
