import React from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ImageBackground,
} from "react-native";
import colors from "../../constants/colors";
import { height, width } from "../../constants/device";

export default function CarouselCard({ item, activeItem }) {
  return (
    <Pressable style={{ borderRadius: 25 }}>
      <View style={styles.cardContainer}>
        <ImageBackground
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
    height: height * 0.2,
    marginVertical: height * 0.05,
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  text: {
    color: colors.white,
    fontSize: width * 0.05,
    letterSpacing: 1,
    lineHeight: height * 0.05,
    fontWeight: "bold",
    textAlign: "center",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
});
