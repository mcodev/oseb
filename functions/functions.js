import dateFormat from "dateformat";

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
  setNum({ ...num, key: parseInt(e) });
};

//////////  NUMBER OUTPUT ////////////////////

const dotsInNumber = (num) => {
  num = typeof num === String ? num : num.toString();
  return num.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
};

////////////////////// DATA UPDATE ///////////////////////
const dataUpdate = (key, setData) => {
  setData((prevTodos) => {
    return prevTodos.filter((todo) => todo.key != key);
  });
};

////////////////////// DATA ASYNC READ / SAVE  ///////////////////////
const save = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    alert("Something went wrong..");
  }
};

const loadAndSet = async (key, setData) => {
  try {
    let jsonValue = await AsyncStorage.getItem(key);
    if (jsonValue) {
      setMyData(JSON.parse(jsonValue));
    }
    setData(JSON.parse(jsonValue));
  } catch (err) {
    alert("Something went wrong..");
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
};
