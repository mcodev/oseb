import React, { useState, useEffect } from "react";
import { Switch } from "react-native-switch";
import { useAppContext } from "../../config/AppContext";
import translations from "../../constants/translations";
import colors from "../../constants/colors";
import { saveData } from "../../functions/functions";

export default function Mkm() {
  const { mKm, setMKm, language } = useAppContext();
  const [swi, setSwi] = useState(false);

  useEffect(() => {
    mKm === "m" ? setSwi(true) : setSwi(false);
  }, []);

  const switcher = (val) => {
    val
      ? (saveData("mKm", "m"), setSwi(true), setMKm("m"))
      : (saveData("mKm", "Km"), setSwi(false), setMKm("Km"));
  };

  return (
    <Switch
      value={swi}
      onValueChange={(val) => switcher(val)}
      disabled={false}
      activeText={translations[language].m}
      inActiveText={translations[language].Km}
      inactiveTextStyle={{
        color: colors.white,
        fontWeight: "700",
        fontSize: 20,
      }}
      activeTextStyle={{
        color: colors.primaryPressed,
        fontWeight: "700",
        fontSize: 18,
      }}
      circleSize={32}
      barHeight={33}
      circleBorderWidth={1}
      backgroundActive={colors.thirdPressed}
      backgroundInactive={colors.primaryPressed}
      circleActiveColor={colors.third}
      circleInActiveColor={colors.primary}
      changeValueImmediately={true}
      // renderInsideCircle={() => <CustomComponent />} // custom component to render inside the Switch circle (Text, Image, etc.)
      changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
      innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
      outerCircleStyle={{}} // style for outer animated circle
      renderActiveText={true}
      renderInActiveText={true}
      switchLeftPx={6} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
      switchRightPx={2.5} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
      switchWidthMultiplier={3} // multipled by the `circleSize` prop to calculate total width of the Switch
      switchBorderRadius={0} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
    />
  );
}

/// ISSUE ///
// https://github.com/shahen94/react-native-switch/issues/93
// node modules ->  react-native-switch  -> lib -> index.js ->

// animateSwitch = (value, cb = () => {}) => {
//   Animated.parallel([
//     Animated.spring(this.state.transformSwitch, {
//       toValue: value
//         ? this.props.circleSize / this.props.switchLeftPx
//         : -this.props.circleSize / this.props.switchRightPx,
//       useNativeDriver: false,
//     }),
//     Animated.timing(this.state.backgroundColor, {
//       toValue: value ? 75 : -75,
//       duration: 200,
//       useNativeDriver: false,
//     }),
//     Animated.timing(this.state.circleColor, {
//       toValue: value ? 75 : -75,
//       duration: 200,
//       useNativeDriver: false,
//     }),
//     Animated.timing(this.state.circleBorderColor, {
//       toValue: value ? 75 : -75,
//       duration: 200,
//       useNativeDriver: false,
//     }),
//   ]).start(cb);
// };
