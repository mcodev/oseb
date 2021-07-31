import React, { useState, useEffect, createRef } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useAppContext } from "../../config/AppContext";
import colors from "../../constants/colors";
import translations from "../../constants/translations";
import { serviceIconPicker, dotsInNumber } from "../../constants/functions";
import EditBtns from "./EditBtns";
import DeleteBox from "./DeleteBox";
import McoActionSheet from "./McoActionSheet";
import ServiceDetails from "./ServiceDetails";
import serviceInfo from "../../data/serviceInfo";

const actionSheetRef = createRef();

export default function ServiceCard() {
  const { language } = useAppContext();

  const [active, setActive] = useState(false);
  const [sideBtn, setSideBtn] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [fake, setFake] = useState({
    type: "oil",
  });
  const bike = "R_X_F_500";

  useEffect(() => {
    setActive(false);
    setSideBtn(false);
    // return () => {
    //   cleanup
    // }
  }, []);

  return (
    <View>
      {sideBtn && (
        <View style={styles.extras}>
          <EditBtns
            icon={"trash-alt"}
            color={"red"}
            callback={() => setModalVisible(true)}
          />
          <EditBtns
            icon={"info"}
            color={"secondary"}
            callback={() => {
              actionSheetRef.current?.setModalVisible();
            }}
          />
        </View>
      )}

      <Pressable
        onPress={() => {
          setActive(!active);
          setSideBtn(false);
        }}
        onLongPress={() => {
          setActive(true);
          setSideBtn(true);
        }}
        style={{
          transform: sideBtn ? [{ translateX: 120 }] : [{ translateX: 0 }],
        }}
      >
        <View
          style={[
            styles.cardContainer,
            { borderLeftColor: active ? colors.secondary : colors.blackSofter },
          ]}
        >
          <Icon
            name={serviceIconPicker(fake.type)}
            size={60}
            style={styles.iconBack}
          />
          <View style={styles.cardLeft}>
            <Text
              style={[
                styles.type,
                {
                  color: active ? colors.blackSoft : colors.blackSofter,
                },
              ]}
            >
              {`${translations[language][fake.type]}`}
            </Text>
          </View>
          <View style={styles.cardMiddle}>
            <Text
              style={[
                styles.title,
                { color: active ? colors.primary : colors.blackSoft },
              ]}
            >
              {`${dotsInNumber(30000)} km`}
            </Text>
            <Text style={styles.date}>27/3/2018</Text>
          </View>
          <View style={styles.cardRight}>
            {active && (
              <Pressable
                onPress={() => setSideBtn(!sideBtn)}
                hitSlop={20}
                style={{ zIndex: 1000000 }}
              >
                <Icon
                  name={"ellipsis-v"}
                  size={20}
                  style={{ marginRight: 15, color: colors.blackSoft }}
                />
              </Pressable>
            )}
          </View>
        </View>
      </Pressable>
      <DeleteBox
        modalVisible={modalVisible}
        cancel={() => setModalVisible(false)}
        confirm={() => setModalVisible(false)}
      />
      <McoActionSheet
        refer={actionSheetRef}
        body={
          <ServiceDetails
            title={fake.type}
            data={serviceInfo[bike][fake.type]}
            exp
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    backgroundColor: colors.cardBack,
    height: 80,
    width: "100%",
    flexDirection: "row",
    borderLeftWidth: 5,
    zIndex: 100000,
  },
  cardLeft: {
    flex: 0.5,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    marginLeft: 5,
  },
  cardMiddle: {
    flex: 3,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
  },
  cardRight: {
    flex: 1.2,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    fontWeight: "700",
    fontSize: 22,
    letterSpacing: 2,
    marginBottom: 2,
  },
  date: {
    color: colors.blackSofter,
    fontSize: 16,
  },
  type: {
    fontSize: 18,
    transform: [{ rotate: "-90deg" }],
    width: 100,
    textAlign: "center",
    letterSpacing: 2,
    fontWeight: "700",
    marginLeft: 5,
  },
  iconBack: {
    position: "absolute",
    alignSelf: "center",
    right: 10,
    color: colors.backIcon,
  },
  extras: {
    position: "absolute",
    // backgroundColor: "yellow",
    left: 0,
    top: 0,
    height: "100%",
    width: "40%",
    alignItems: "center",
    flexDirection: "row",
  },
});
