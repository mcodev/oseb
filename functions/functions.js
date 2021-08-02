import dateFormat from "dateformat";
import AsyncStorage from "@react-native-async-storage/async-storage";

////////////////////// ICON SELECTOR ///////////////////////

const serviceIconPicker = (iconName) => {
  switch (iconName) {
    case "first":
      return "box-open";

    case "oil":
      return "oil-can";

    case "annual":
      return "calendar";

    case "full":
      return "tools";

    default:
      return "toolbox";
  }
};

////////////////////// LANGUAGE SELECTOR ///////////////////////

const languagePicker = (lang) => {
  switch (lang) {
    case "el":
      return "el";

    case "nl":
      return "nl";

    default:
      return "en";
  }
};

////////////////////// NUMBER INPUT  CLEANER ///////////////////////

const numInputCleaner = (e, key, setNum) => {
  e = e.replace(/\s/g, "");
  e = e.replace(/,/g, "");
  setNum({ ...num, [key]: parseInt(e) });
};

//////////  NUMBER OUTPUT ////////////////////

const dotsInNumber = (num) => {
  num = typeof num === String ? num : num.toString();
  return num.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
};

////////////////////// DATA ASYNC READ / SAVE  ///////////////////////
const saveData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("@data", jsonValue);
    alert("saved successfully");
  } catch (e) {
    alert("Something went wrong..");
  }
};

const loadAndSetData = async () => {
  try {
    let jsonValue = await AsyncStorage.getItem("@data");
    if (jsonValue !== null) {
      return JSON.parse(jsonValue);
    }
  } catch (err) {
    console.log("Error reading data..", err);
  }
};

////////////////////// HANDLE STATE  ///////////////////////
const handleState = (type, entry) => {
  setState({
    ...state,
    [type]: entry,
  });
};

////////////////////// FORMAT DATE  ///////////////////////

const dateFormater = (date, type) =>
  type === "Km"
    ? dateFormat(date, "dd/mm/yyyy")
    : dateFormat(date, "mm/dd/yyyy");

export {
  serviceIconPicker,
  languagePicker,
  dotsInNumber,
  numInputCleaner,
  dateFormater,
  saveData,
  loadAndSetData,
};
