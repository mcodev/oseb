import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Carousel from "react-native-snap-carousel";
import CarouselCard from "./CarouselCard";
import { brandImgs } from "../../data/other";
import BikeListItem from "./BikeListItem";
import { bikeNames } from "../../data/bikeNames";

export default function ChooseBike() {
  const [activeItem, setActiveItem] = useState(0);
  console.log(bikeNames[brandImgs[activeItem].id]);
  console.log("test");

  return (
    <View style={styles.container}>
      {/* <View styles={styles.carouselContainer}>
        <Carousel
          data={brandImgs}
          renderItem={(item, i) => (
            <CarouselCard
              key={i}
              item={item}
              activeItem={activeItem}
              path={item?.item?.path}
            />
          )}
          sliderWidth={400}
          itemWidth={300}
          onSnapToItem={(index) => setActiveItem(index)}
        />
      </View> */}
      <View style={styles.list}>
        <Text>works</Text>
        <FlatList
          // keyExtractor={(item) => item.id}
          data={bikeNames[brandImgs[activeItem].id]}
          renderItem={() => <BikeListItem item={item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    // backgroundColor: "aqua",
    // alignItems: "center",
  },
  carouselContainer: {
    flex: 0.5,
  },
  list: {
    flex: 0.5,
    height: 400,
    backgroundColor: "aqua",
  },
});
