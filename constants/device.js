import { Platform, NativeModules, Dimensions } from "react-native";
import { languagePicker } from "../functions/functions";

/////////////  DEVICE LANGUAGE ////////////////////
const deviceLanguage = /////// GET Language
  Platform.OS === "ios"
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
    : NativeModules.I18nManager.localeIdentifier;

const language = languagePicker(deviceLanguage.substring(0, 2)); /// SET Language 2 first chars

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

////////////////////// DYNAMIC WIDTH / HEIGHT ///////////////////////

const dynamicLayout = (type, number) => {
  let result;
  switch (type) {
    case "w":
      result = (number / width) * 100;
      return `${result.toString}%`;

    case "h":
      result = (number / height) * 100;
      return `${result.toString}%`;

    default:
      result = (number / width) * 100;
      return `${result.toString}%`;
  }
};

export { language, height, width, aspectRatio, isPad, iPhoneX, dynamicLayout };
