const closestNum = (query, list) => {
  let pointer_upper = list.length - 1;
  let pointer_lower = 0;
  let pointer_tmp;
  while (pointer_upper - pointer_lower > 1) {
    pointer_tmp = Math.ceil((pointer_upper + pointer_lower) / 2);
    if (list[pointer_tmp] <= query) {
      pointer_lower = pointer_tmp;
    } else {
      pointer_upper = pointer_tmp;
    }
  }

  return pointer_upper;
};

const typeOfService = (index, full) => {
  if (index === 1) return "first";
  else if (index % 2 == 1) {
    if (full.includes(index) === true) return "full";
    else return "annual";
  } else return "oil";
};

const remaining = (reading, nextIndex) => {
  return (reading - nextIndex) * -1;
};

const serviceNamesInterpreter = (name) => {
  switch (name) {
    case "oil":
      return "oilChange";
    case "first":
      return "firstService";
    case "annual":
      return "annualService";
    case "full":
      return "fullService";

    default:
      break;
  }
};

export { closestNum, typeOfService, remaining, serviceNamesInterpreter };
