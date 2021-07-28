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

export { serviceIconPicker, languagePicker };
