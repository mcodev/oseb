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

const dotsInNumber = (num) => {
  num = typeof num === String ? num : num.toString();
  return num.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
};

export { serviceIconPicker, languagePicker, dotsInNumber };
