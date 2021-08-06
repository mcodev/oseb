import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { brandImgs } from "../../data/other";
import { bikeNames } from "../../data/bikeNames";
import Carousel from "react-native-snap-carousel";
import CarouselCard from "./CarouselCard";
import BikeListItem from "./BikeListItem";

export default function ChooseBike() {
  const [activeItem, setActiveItem] = useState(0);
  // console.log(bikeNames[brandImgs[activeItem].id]);

  return (
    <View style={styles.container}>
      <View styles={styles.carouselContainer}>
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
      </View>
      <View style={styles.list}>
        <FlatList
          keyExtractor={(item) => item.index}
          data={bikeNames[brandImgs[activeItem].id]}
          renderItem={(item) => <BikeListItem item={item} />}
          // renderItem={(item) => console.log(Object.keys(item.item))}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  carouselContainer: {
    flex: 1,
  },
  list: {
    flex: 1,
    // height: 600,
    // backgroundColor: "aqua",
  },
});
