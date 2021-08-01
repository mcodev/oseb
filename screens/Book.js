import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import PageTitle from "../components/PageTitle";
import colors from "../constants/colors";
import { bottomTabsHeight } from "../constants/apps";
import AddBtn from "../components/bookPage/AddBtn";
import CardsDisplay from "../components/bookPage/CardsDisplay";

export default function Book() {
  const [data, setData] = useState([]);
  const [state, setState] = useState({
    type: null,
    distance: null,
    date: null,
  });

  return (
    <View style={styles.bookContainer}>
      <PageTitle pageName={"service"} pageSub={"book"} />
      <CardsDisplay />
      <AddBtn
        state={state}
        setState={setState}
        cancel={() => setState({ type: null, distance: null, date: null })}
      />
    </View>
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

/// Types: first , oil change, annual, full
