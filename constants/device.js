import { Platform, NativeModules, Dimensions } from "react-native";

/////////////  DEVICE LANGUAGE ////////////////////
const deviceLanguage =
  Platform.OS === "ios"
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
    : NativeModules.I18nManager.localeIdentifier;

const language =
  deviceLanguage === undefined ||
  deviceLanguage === null ||
  deviceLanguage === ""
    ? "en"
    : deviceLanguage.substring(0, 2);

/////////////  DEVICE TYPE ////////////////////
const iOS = Platform.OS === "ios";
const windowInfo = Dimensions.get("window");
const { height, width } = windowInfo;
const aspectRatio = height / width;
const { isPad } = Platform;

let iPhoneX = false;
if (iOS) {
  if (height === 812 || width === 812 || height === 896 || width === 896) {
    iPhoneX = true;
  }
}

export { language, height, width, aspectRatio, isPad, iPhoneX };
