import React, { useEffect, useState, useRef } from "react";
import { View, StyleSheet } from "react-native";
import InfoBtns from "../components/infoPage/InfoBtns";
import color from "../constants/colors";
import InfoDetails from "../components/infoPage/InfoDetails";
import colors from "../constants/colors";

export default function Info() {
  const [active, setActive] = useState({
    name: "tires",
    icon: "road",
  });

  const AnimationRef = useRef(null);
  const AnimationRef2 = useRef(null);

  const _onPress = () => {
    if (AnimationRef) {
      AnimationRef.current?.tada();
      AnimationRef2.current?.fadeIn();
    }
  };

  useEffect(() => {
    return () => {
      setActive({
        name: "tires",
        icon: "road",
      });
    };
  }, []);

  return (
    <View style={styles.container}>
      <InfoBtns active={active} setActive={setActive} action={_onPress} />
      <View style={styles.hr} />
      <InfoDetails
        active={active}
        anRef1={AnimationRef}
        anRef2={AnimationRef2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 20,
  },

  hr: {
    borderBottomColor: color.hr,
    borderBottomWidth: 1,
    width: "85%",
    alignSelf: "center",
    flex: 0.1,
  },
});

/// ANIMATION  https://dev-yakuza.posstree.com/en/react-native/react-native-animatable/
