import React, { useState, createRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useAppContext } from "../../config/AppContext";
import colors from "../../constants/colors";
import translations from "../../constants/translations";
import McoActionSheet from "../global/McoActionSheet";
import { serviceNamesInterpreter } from "../../functions/appFunctions";
import { width } from "../../constants/device";

const actionSheetRef = createRef();

export default function MainOutput({ next, prev, nextAt, prevAt, reading }) {
  const { mKm, language } = useAppContext();
  const [active, setActive] = useState(null);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Pressable
            style={styles.prevContainer}
            onPress={() => {
              setActive(prev);
              prevAt !== 0 && actionSheetRef.current?.setModalVisible();
            }}
          >
            <Text style={styles.title}>{translations[language].prev}</Text>

            {reading && prevAt !== 0 ? (
              <>
                <Text style={styles.type}>
                  {translations[language][serviceNamesInterpreter(prev)]}
                </Text>
                <Text style={styles.at}>
                  {`${translations[language].at} ${prevAt} ${mKm}`}
                </Text>
              </>
            ) : (
              <Text style={styles.altTxt}>
                {translations[language].service}
              </Text>
            )}
          </Pressable>
          <Pressable
            style={styles.nextContainer}
            onPress={() => {
              setActive(next);
              reading && actionSheetRef.current?.setModalVisible();
            }}
          >
            <Text style={styles.title}>{translations[language].next}</Text>

            {reading ? (
              <>
                <Text style={styles.type}>
                  {translations[language][serviceNamesInterpreter(next)]}
                </Text>
                <Text style={styles.at}>
                  {`${translations[language].at} ${nextAt} ${mKm}`}
                </Text>
              </>
            ) : (
              <Text style={styles.altTxt}>
                {translations[language].service}
              </Text>
            )}
          </Pressable>
        </View>
        <McoActionSheet refer={actionSheetRef} active={active} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    paddingHorizontal: 5,
    justifyContent: "center",
  },
  textContainer: {
    flexDirection: "row",
  },
  prevContainer: {
    flex: 1,
    height: "100%",
    borderRightWidth: 1,
    borderRightColor: colors.black,

    alignItems: "center",
    justifyContent: "center",
  },
  nextContainer: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: width * 0.1,
    letterSpacing: 1.5,
    textAlign: "center",
  },
  type: {
    fontWeight: "700",
    fontSize: width * 0.05,
    letterSpacing: 1.9,
    marginTop: 7,
    marginBottom: 5,
    color: colors.primary,
  },
  at: {
    letterSpacing: 1.5,
    color: colors.blackSoft,
    fontSize: width * 0.04,
  },
  altTxt: {
    fontSize: width * 0.05,
  },
});
