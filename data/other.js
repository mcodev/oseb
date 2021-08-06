const brandImgs = [
  {
    brand: "Honda",
    path: require("../assets/brandIcons/honda.jpg"),
    id: "honda",
  },
  {
    brand: "Yamaha",
    path: require("../assets/brandIcons/yamaha.jpg"),
    id: "yamaha",
  },
  {
    brand: "Suzuki",
    path: require("../assets/brandIcons/suzuki.jpg"),
    id: "suzuki",
  },
  {
    brand: "Kawasaki",
    path: require("../assets/brandIcons/kawasaki.jpg"),
    id: "kawasaki",
  },
];

const types = [
  { name: "tyres", icon: "road" },
  { name: "oil", icon: "oil-can" },
  { name: "battery", icon: "battery-half" },
  { name: "chain", icon: "cogs" },
  { name: "lights", icon: "lightbulb" },
  { name: "coolant", icon: "snowflake" },
  { name: "fuses", icon: "bolt" },
  { name: "sparkPlug", icon: "fire" },
];

export { brandImgs, types };
