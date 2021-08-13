const bikeNames = {
  honda: [
    { cb_500_X: "CB 500X" },
    { cb_500_r_f: "CBR 500R - CB 500F" },
    { nc_750_x: "NC 750X" },
    { cb_125_f: "CB 125F" },
    { cb_650_F_R: "CB 650R - CBR 650R" },
    { africa: "Africa Twin CRF 11000L" },
    { cbr_1000_rr: "CBR 1000RR-R" },
    { sh_300_i: "SH 300i" },
    { cb_125_r: "CB 125R" },
  ],

  yamaha: [
    { r1: "R1" },
    { r7: "R7" },
    { mt_9: "MT-09 / Tracer" },
    { mt_7: "MT-07 / Tracer" },
    { mt_3: "MT-03 " },
    { tenere_700: "Tenere 700" },
    { ys_125: "YS 125" },
  ],
  kawasaki: [
    { ninja_z_400: "Ninja 400 - Z 400" },
    { ninja_z_650: "Ninja 650 - Z 650" },
    { ninja_10_r: "Ninja 10R" },
    { versys_300: "Versys 300" },
    { versys_650: "Versys 650" },
    { versys_1000: "Versys 1000" },
  ],
  suzuki: [
    { gsxr_1000: "GSX-R 1000" },
    { sv_650: "SV 650" },
    { vstrom_1050: "V-STROM 1050" },
    { vstrom_650: "V-STROM 650" },
  ],
};

const bikeDictionary = {
  cb_500_X: "CB 500X",
  cb_500_r_f: "CBR 500R - CB 500F",
  nc_750_x: "NC 750X",
  cb_125_f: "CB 125F",
  cb_650_F_R: "CB 650R - CBR 650R",
  africa: "Africa Twin CRF 11000L",
  cbr_1000_rr: "CBR 1000RR-R",
  sh_300_i: "SH 300i",
  cb_125_r: "CB 125R",
  r1: "R1",
  r7: "R7",
  mt_9: "MT-09 / Tracer",
  mt_7: "MT-07 / Tracer",
  mt_3: "MT-03 ",
  tenere_700: "Tenere 700",
  ys_125: "YS 125",
  ninja_z_400: "Ninja 400 - Z 400",
  ninja_z_650: "Ninja 650 - Z 650",
  ninja_10_r: "Ninja 10R",
  versys_300: "Versys 300",
  versys_650: "Versys 650",
  versys_1000: "Versys 1000",
  gsxr_1000: "GSX-R 1000",
  sv_650: "SV 650",
  vstrom_1050: "V-STROM 1050",
  vstrom_650: "V-STROM 650",
};

const bikeBrandSlector = (bike) => {
  if (
    bike === "cb_500_X" ||
    bike === "cb_500_r_f" ||
    bike === "nc_750_x" ||
    bike === "cb_125_f" ||
    bike === "cb_650_F_R" ||
    bike === "africa" ||
    bike === "cbr_1000_rr" ||
    bike === "sh_300_i" ||
    bike === "cb_125_r"
  )
    return "Honda";
  else if (
    bike === "r1" ||
    bike === "r7" ||
    bike === "mt_9" ||
    bike === "mt_7" ||
    bike === "mt_3" ||
    bike === "tenere_700" ||
    bike === "ys_125"
  )
    return "Yamaha";
  else if (
    bike === "gsxr_1000" ||
    bike === "sv_650" ||
    bike === "vstrom_1050" ||
    bike === "vstrom_650"
  )
    return "Suzuki";
  else if (
    bike === "ninja_z_400" ||
    bike === "ninja_z_650" ||
    bike === "ninja_10_r" ||
    bike === "versys_300" ||
    bike === "versys_650" ||
    bike === "versys_1000"
  )
    return "Kawasaki";
};

export { bikeNames, bikeDictionary, bikeBrandSlector };
