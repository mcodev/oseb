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

  // return list[pointer_tmp] === query
  //   ? { value: pointer_tmp, note: "now" }
  //   : { value: pointer_upper, note: "next" };

  return pointer_upper;
};

const typosservice = (num) => {
  if (num == 0 && (km == "" || km == undefined)) {
    return " ";
  } else if (num == 0) {
    return "First Service";
  } else if (megaloService.includes(num) == true) {
    return "Major Service";
  } else if (num % 2 == 0) {
    return "Annual Service";
  } else {
    return "Oil Change";
  }
};

const Typos = () => {
  if (mk == "Km") {
    if (service.includes(parseInt(km)) == true) {
      return typosservice(closest(km, service) - 1);
    } else {
      return typosservice(closest(km, service));
    }
  } else {
    if (serviceMiles.includes(parseInt(km)) == true) {
      return typosservice(closest(km, serviceMiles) - 1);
    } else {
      return typosservice(closest(km, serviceMiles));
    }
  }
};

const TyposPrev = () => {
  if (mk == "Km") {
    if (Typos() == "First Service") {
      return " ";
    } else {
      if (service.includes(parseInt(km)) == true) {
        return typosservice(closest(km, service) - 2);
      } else {
        return typosservice(closest(km, service) - 1);
      }
    }
  } else {
    if (Typos() == "First Service") {
      return " ";
    } else {
      if (serviceMiles.includes(parseInt(km)) == true) {
        return typosservice(closest(km, serviceMiles) - 2);
      } else {
        return typosservice(closest(km, serviceMiles) - 1);
      }
    }
  }
};

export { closestNum };
