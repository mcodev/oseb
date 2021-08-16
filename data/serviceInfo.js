const cb_500_r_f = {
  first: ["EngineOil", "EngineOilFilter", "ValveClearence"],
  oil: ["EngineOil", "EngineOilFilter"],
  annual: ["EngineOil", "EngineOilFilter", "AirCleanerC", "CrankcaseBreather"],
  full: [
    "EngineOil",
    "EngineOilFilter",
    "AirCleaner",
    "CrankcaseBreather",
    "SparkPlugs",
    "ValveClearence",
    "RadiatorCoolant",
    "BrakeFluid",
  ],
};

const cb_125_f = {
  first: ["EngineOil", "ValveClearence"],
  oil: ["EngineOil", "CrankcaseBreather"],
  annual: ["EngineOil", "AirCleanerC", "CrankcaseBreather", "SparkPlugs"],
  full: [
    "EngineOil",
    "AirCleaner",
    "CrankcaseBreather",
    "SparkPlugs",
    "ValveClearence",
    "BrakeFluid",
  ],
};

const mt_7 = {
  first: ["EngineOil", "EngineOilFilter"],
  oil: ["EngineOil", "EngineOilFilter"],
  annual: ["EngineOil", "EngineOilFilter", "CrankcaseBreather", "SparkPlugs"],
  full: [
    "EngineOil",
    "EngineOilFilter",
    "AirCleaner",
    "CrankcaseBreather",
    "ValveClearence",
    "RadiatorCoolant",
    "BrakeFluid",
  ],
};

const ys_125 = {
  first: ["EngineOil", "EngineOilFilter"],
  oil: ["EngineOil", "ValveClearence"],
  annual: [
    "EngineOil",
    "EngineOilFilter",
    "CrankcaseBreather",
    "SparkPlugs",
    "ValveClearence",
    "AirCleaner",
  ],
  full: [
    "EngineOil",
    "EngineOilFilter",
    "ValveClearence",
    "RadiatorCoolant",
    "BrakeFluid",
    "SparkPlugs",
    "AirCleaner",
  ],
};

const vstrom_650 = {
  first: ["EngineOil", "EngineOilFilter"],
  oil: ["EngineOil"],
  annual: ["EngineOil", "SparkPlugs", "AirCleaner"],
  full: [
    "EngineOil",
    "EngineOilFilter",
    "ValveClearence",
    "BrakeFluid",
    "SparkPlugs",
    "AirCleaner",
  ],
};

const versys_300 = {
  first: ["EngineOil", "EngineOilFilter"],
  oil: ["EngineOil"],
  annual: [
    "EngineOil",
    "EngineOilFilter",
    "SparkPlugs",
    "AirCleaner",
    "ValveClearence",
  ],
  full: [
    "EngineOil",
    "EngineOilFilter",
    "ValveClearence",
    "BrakeFluid",
    "SparkPlugs",
    "AirCleaner",
    "RadiatorCoolant",
  ],
};

export default { cb_500_r_f, cb_125_f, mt_7, ys_125, vstrom_650, versys_300 };
