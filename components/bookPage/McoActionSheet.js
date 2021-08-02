import React from "react";
import { View, StyleSheet } from "react-native";
import ActionSheet from "react-native-actions-sheet";
import colors from "../../constants/colors";

export default function McoActionSheet({ refer, body }) {
  return (
    <ActionSheet containerStyle={styles.topContainer} ref={refer}>
      <View style={styles.actionContainer}>{body}</View>
    </ActionSheet>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: colors.white,
  },
  actionContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

// https://www.npmjs.com/package/react-native-actions-sheet
////////////////// USAGE ///////////////////////
// page that uses it:  const actionSheetRef = createRef();
// btn :   onPress={() => {
//         actionSheetRef.current?.setModalVisible();
//         }}
