//// TODO useEffect cleanup & css transition effects
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useAppContext } from "../config/AppContext";
import info from "../constants/bikeInfo";
import translations from "../constants/translations";
import PageTitle from "../components/PageTitle";
import RoundBtn from "../components/RoundBtn";
import color from "../constants/colors";

export default function Info() {
  const { language, bike } = useAppContext();
  const [active, setActive] = useState({
    name: "tyres",
    icon: "road",
  });

  // console.log(active);
  // useEffect(() => {
  //   return () => {
  //     console.log("effect happened");
  //     // setActive({
  //     //   name: "Tyres",
  //     //   icon: "road",
  //     // });
  //   };
  // }, []);

  const types = [
    { name: "tyres", icon: "road" },
    { name: "oil", icon: "oil-can" },
    { name: "battery", icon: "battery-half" },
    { name: "chain", icon: "cogs" },
    { name: "lights", icon: "lightbulb" },
    { name: "coolant", icon: "snowflake" },
    { name: "fuses", icon: "bolt" },
    { name: "sparkPlug", icon: "fire" },
  ];

  return (
    <View style={styles.container}>
      <PageTitle pageName={"bike"} pageSub={"info"} />

      <View style={styles.typesContainer}>
        <View style={styles.typesContainerSub}>
          {types.map((item, index) => (
            <RoundBtn
              key={index}
              name={item.name}
              icon={item.icon}
              active={active}
              setActive={setActive}
            />
          ))}
        </View>
      </View>

      <View style={styles.hr} />

      <View style={styles.detailsContainer}>
        <View style={styles.detailsLeft}>
          <Text
            style={{
              fontWeight: "700",
              letterSpacing: 0.8,
              fontSize: 27,
              color: color.blackSoft,
              marginBottom: 20,
            }}
          >
            {translations[language][active.name]}
          </Text>
          {info[bike][active.name].map((index, i) => (
            <Text key={i}>{index}</Text>
          ))}
        </View>
        <View style={styles.detailsRight}>
          <Icon
            name={active.icon}
            style={{ fontSize: 100, color: color.backIcon }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 80,
    paddingTop: 20,
  },
  typesContainer: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  typesContainerSub: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  hr: {
    borderBottomColor: color.hr,
    borderBottomWidth: 1,
    width: "85%",
    alignSelf: "center",
    flex: 0.1,
  },
  detailsContainer: {
    flexDirection: "row",
    flex: 5,
  },
  detailsLeft: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  detailsRight: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
});
