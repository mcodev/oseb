import React from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ImageBackground,
} from "react-native";
import colors from "../../constants/colors";

export default function CarouselCard({ item, activeItem }) {
  return (
    <Pressable style={{ borderRadius: 25 }}>
      <View style={styles.cardContainer}>
        <ImageBackground
          //   source={require("../../assets/brandIcons/kawasaki.jpg")}
          source={item?.item?.path}
          style={styles.image}
          imageStyle={{ borderRadius: 15 }}
        >
          <Text
            style={[
              styles.text,
              {
                backgroundColor:
                  activeItem === item?.index
                    ? colors.primaryPressed
                    : "#000000c0",
              },
            ]}
          >
            {item?.item?.brand}
          </Text>
        </ImageBackground>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    height: 150,
    // width: "70%",
    // marginHorizontal: 10,
    marginVertical: 20,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  text: {
    color: colors.white,
    fontSize: 22,
    letterSpacing: 1,
    lineHeight: 44,
    fontWeight: "bold",
    textAlign: "center",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
});
