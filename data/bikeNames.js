const bikeNames = {
  honda: [{ cb_500_r_f: "CBR 500R - CB 500F" }, { cb_125_f: "CB 125F" }],

  yamaha: [{ mt_7: "MT-07 / Tracer" }, { ys_125: "YS 125" }],
  kawasaki: [
    { ninja_z_650: "Ninja 650 - Z 650" },
    { versys_300: "Versys 300" },
  ],
  suzuki: [{ vstrom_650: "V-STROM 650" }],
};

const bikeDictionary = {
  cb_500_r_f: "CBR 500R - CB 500F",
  cb_125_f: "CB 125F",
  mt_7: "MT-07 / Tracer",
  ys_125: "YS 125",
  ninja_z_650: "Ninja 650 - Z 650",
  versys_300: "Versys 300",
  vstrom_650: "V-STROM 650",
};

const bikeBrandSlector = (bike) => {
  if (bike === "cb_500_r_f" || bike === "cb_125_f") return "Honda";
  else if (bike === "mt_7" || bike === "ys_125") return "Yamaha";
  else if (bike === "vstrom_650") return "Suzuki";
  else if (bike === "ninja_z_650" || bike === "versys_300") return "Kawasaki";
};

export { bikeNames, bikeDictionary, bikeBrandSlector };
