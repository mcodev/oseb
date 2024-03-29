import React, { useState, useEffect, createRef } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useAppContext } from "../../config/AppContext";
import colors from "../../constants/colors";
import translations from "../../constants/translations";
import { serviceIconPicker, dotsInNumber } from "../../functions/functions";
import EditBtns from "./EditBtns";
import McoActionSheet from "../global/McoActionSheet";
import ConfirmBox from "../global/ConfirmBox";
import { width, height } from "../../constants/device";
const actionSheetRef = createRef();

export default function ServiceCard({
  localData,
  deleteCard,
  active,
  setActive,
}) {
  const { language, mKm } = useAppContext();
  const [onOff, setOnOff] = useState(false);
  const [sideBtn, setSideBtn] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const isActive = () => (active?.key === localData?.key ? true : false);
  const isActiveFunc = () => (isActive() && onOff ? true : false);

  useEffect(() => {
    setOnOff(isActiveFunc);
  });

  useEffect(() => {
    return () => {
      return () => {
        setOnOff(false);
        setSideBtn(false);
        setModalVisible(false);
      };
    };
  }, []);

  ////////////////////// CARD PRESSED ///////////////////////

  const pressed = () => {
    setActive(localData);
    setOnOff(!onOff);
    isActiveFunc() && setSideBtn(false);
  };

  const longPressed = () => {
    setActive(localData);
    setOnOff(true);
    setSideBtn(true);
  };

  return (
    <Animatable.View animation="fadeInRight">
      {isActive() && sideBtn && (
        <View style={styles.extras}>
          <EditBtns
            icon={"trash-alt"}
            color={"red"}
            callback={() => setModalVisible(true)}
          />
          <EditBtns
            icon={"info"}
            color={"third"}
            callback={() => {
              actionSheetRef.current?.setModalVisible();
            }}
          />
        </View>
      )}

      <Pressable
        onPress={pressed}
        onLongPress={longPressed}
        style={{
          transform:
            isActive() && sideBtn
              ? [{ translateX: width * 0.35 }]
              : [{ translateX: 0 }],
          elevation: 5,
          shadowOffset: { width: 1, height: 1 },
          shadowColor: colors.shaddow,
          shadowOpacity: 0.3,
          shadowRadius: 2,
        }}
      >
        <View
          style={[
            styles.cardContainer,
            {
              borderLeftColor:
                isActive() && onOff ? colors.third : colors.secondary,
            },
          ]}
        >
          <Icon
            name={serviceIconPicker(localData?.type)}
            size={60}
            style={styles.iconBack}
          />
          <View style={styles.cardLeft}>
            <Text
              style={[
                styles.type,
                {
                  color: onOff ? colors.white : colors.blackSofter,
                },
              ]}
            >
              {`${translations[language][localData?.type]}`}
            </Text>
          </View>
          <View style={styles.cardMiddle}>
            <Text
              style={[
                styles.title,
                { color: onOff ? colors.third : colors.blackSoft },
              ]}
            >
              {`${dotsInNumber(localData?.distance)} ${
                translations[language][mKm]
              }`}
            </Text>
            <Text
              style={[
                styles.date,
                {
                  color: onOff ? colors.black : colors.blackSofter,
                },
              ]}
            >
              {localData?.date}
            </Text>
          </View>

          <View style={styles.cardRight}>
            {onOff && (
              <Pressable
                onPress={() => isActiveFunc() && setSideBtn(!sideBtn)}
                hitSlop={20}
                style={{ zIndex: 1000000 }}
              >
                <Icon
                  name={"ellipsis-v"}
                  size={width * 0.06}
                  style={{ marginRight: 15, color: colors.whiteST }}
                />
              </Pressable>
            )}
          </View>
        </View>
      </Pressable>
      <ConfirmBox
        modalVisible={modalVisible}
        cancel={() => setModalVisible(false)}
        confirm={() => deleteCard(localData.key)}
        textToShow={translations[language].sure}
      />
      <McoActionSheet refer={actionSheetRef} active={active?.type} />
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    marginVertical: height * 0.01,
    backgroundColor: colors.cardBack,
    height: height * 0.13,
    width: "100%",
    flexDirection: "row",
    borderLeftWidth: 5,
    zIndex: 100000,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
  },
  cardLeft: {
    flex: 0.5,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    marginLeft: width * 0.015,
  },
  cardMiddle: {
    flex: 3,
    paddingHorizontal: 20,
    paddingVertical: height * 0.025,
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
    fontSize: width * 0.055,
    letterSpacing: 2,
    marginBottom: height * 0.003,
  },
  date: {
    fontSize: width * 0.043,
  },
  type: {
    fontSize: width * 0.05,
    transform: [{ rotate: "-90deg" }],
    width: height * 0.13,
    textAlign: "center",
    letterSpacing: 2,
    fontWeight: "700",
    marginLeft: width * 0.015,
  },
  iconBack: {
    position: "absolute",
    alignSelf: "center",
    right: width * 0.04,
    color: colors.backIcon,
  },
  extras: {
    position: "absolute",
    left: 0,
    top: 0,
    height: "100%",
    width: "40%",
    alignItems: "center",
    flexDirection: "row",
  },
});
