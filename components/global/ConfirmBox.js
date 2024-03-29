import React from "react";
import { View, Text, StyleSheet, Modal, Pressable } from "react-native";
import { useAppContext } from "../../config/AppContext";
import colors from "../../constants/colors";
import translations from "../../constants/translations";
import { width, height } from "../../constants/device";

export default function ConfirmBox({
  cancel,
  confirm,
  modalVisible,
  textToShow,
}) {
  const { language } = useAppContext();

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.modalMessage}>
            <Text style={{ fontSize: width * 0.05 }}>{textToShow}</Text>
          </View>
          <View
            style={[
              styles.modalActions,
              {
                justifyContent: cancel && confirm ? "space-between" : "center",
              },
            ]}
          >
            {cancel && (
              <Pressable
                onPress={cancel}
                hitSlop={20}
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed
                      ? colors.redPressed
                      : "transparent",
                    color: pressed ? colors.white : colors.red,
                  },
                  styles.actionBtn,
                ]}
                children={({ pressed }) => (
                  <Text
                    style={[
                      styles.btnsTxt,
                      { color: pressed ? colors.white : colors.red },
                    ]}
                  >
                    {translations[language].cancel}
                  </Text>
                )}
              />
            )}
            {confirm && (
              <Pressable
                onPress={confirm}
                hitSlop={20}
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed
                      ? colors.secondaryPressed
                      : "transparent",
                  },
                  styles.actionBtn,
                ]}
                children={({ pressed }) => (
                  <Text
                    style={[
                      styles.btnsTxt,
                      { color: pressed ? colors.white : colors.secondary },
                    ]}
                  >
                    {translations[language].confirm}
                  </Text>
                )}
              />
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    marginTop: -30,
  },
  modalView: {
    backgroundColor: colors.white,
    borderRadius: 5,
    paddingHorizontal: width * 0.06,
    paddingTop: width * 0.02,
    paddingBottom: width * 0.07,
    alignItems: "center",
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "60%",
  },
  modalMessage: {
    marginVertical: height * 0.05,
  },

  modalActions: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  actionBtn: {
    padding: 5,
    borderRadius: 5,
    width: "50%",
  },
  btnsTxt: {
    fontWeight: "700",
    textAlign: "center",
    fontSize: width * 0.037,
  },
});
