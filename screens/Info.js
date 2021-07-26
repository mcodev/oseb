import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useAppContext } from "../config/AppContext";
import info from "../constants/bikeInfo";
import translations from "../constants/translations";
import PageTitle from "../components/PageTitle";
import RoundBtn from "../components/RoundBtn";
import color from "../constants/colors";

export default function Info() {
  const { language, bike } = useAppContext();
  const [active, setActive] = useState({
    name: "Tyres",
    icon: "road",
    id: "tyres",
  });

  // useEffect(() => {

  //   return () => {
  //     setActive({
  //       name: "Tyres",
  //       icon: "road",
  //       id: "tyres",
  //     });
  //   }
  // }, [])

  const types = [
    { name: "Tyres", icon: "road", id: "tyres" },
    { name: "Oil", icon: "oil-can", id: "oil" },
    { name: "Battery", icon: "battery-half", id: "battery" },
    { name: "Chain", icon: "cogs", id: "chain" },
    { name: "Lights", icon: "lightbulb", id: "lights" },
    { name: "Coolant", icon: "snowflake", id: "coolant" },
    { name: "Fuses", icon: "bolt", id: "fuses" },
    { name: "Spark plug", icon: "fire", id: "sparkPlug" },
  ];

  return (
    <View style={styles.container}>
      <PageTitle pageName={"info"} />

      <View style={styles.typesContainer}>
        {types.map((item, index) => (
          <RoundBtn
            key={index}
            name={item.name}
            icon={item.icon}
            id={item.id}
            active={active}
            setActive={setActive}
          />
        ))}
      </View>

      <View
        style={{
          borderBottomColor: color.hr,
          borderBottomWidth: 1,
          marginVertical: 20,
          width: "85%",
          alignSelf: "center",
        }}
      />

      <View>
        <Text>{active.name}</Text>
      </View>
      {/* {info.R_X_F_500.tyres.map((index, i) => (
        <Text key={i}>{index}</Text>
      ))} */}
      {info[bike][active.id].map((index, i) => (
        <Text key={i}>{index}</Text>
      ))}
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  typesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 20,
  },
});
