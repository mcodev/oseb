import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import * as Animatable from "react-native-animatable";
import { useAppContext } from "../../config/AppContext";
import { brandImgs } from "../../data/other";
import { bikeNames } from "../../data/bikeNames";
import translations from "../../constants/translations";
import Carousel from "react-native-snap-carousel";
import CarouselCard from "./CarouselCard";
import BikeListItem from "./BikeListItem";
import ConfirmBox from "../global/ConfirmBox";
import { saveData } from "../../functions/functions";
import { width } from "../../constants/device";

export default function ChooseBike({ navigation }) {
  const { language, setBike } = useAppContext();
  const [activeItem, setActiveItem] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [bikeToSave, setBikeToSave] = useState(null);

  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInRight"
        styles={styles.carouselContainer}
      >
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
          sliderWidth={width}
          itemWidth={width / 1.5}
          onSnapToItem={(index) => setActiveItem(index)}
        />
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={styles.list}>
        <FlatList
          data={bikeNames[brandImgs[activeItem].id]}
          keyExtractor={(item) => Object.keys(item).toString()}
          renderItem={(item) => (
            <BikeListItem
              item={item}
              setBikeToSave={setBikeToSave}
              setModalVisible={setModalVisible}
              length={
                bikeNames[brandImgs[activeItem].brand.toLowerCase()].length
              }
            />
          )}
        />
      </Animatable.View>
      <ConfirmBox
        modalVisible={modalVisible}
        cancel={() => setModalVisible(false)}
        confirm={() => {
          saveData("bike", bikeToSave);
          setModalVisible(false);
          setBike(bikeToSave);
          navigation.navigate("Home");
        }}
        textToShow={translations[language].sure}
      />
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
    paddingHorizontal: 40,
    marginTop: 20,
  },
});

// https://github.com/meliorence/react-native-snap-carousel
