import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useAppContext } from "../../config/AppContext";
import { brandImgs } from "../../data/other";
import { bikeNames } from "../../data/bikeNames";
import translations from "../../constants/translations";
import Carousel from "react-native-snap-carousel";
import CarouselCard from "./CarouselCard";
import BikeListItem from "./BikeListItem";
import ConfirmBox from "../ConfirmBox";
import { saveData } from "../../functions/functions";

export default function ChooseBike() {
  const { language } = useAppContext();
  const [activeItem, setActiveItem] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [bikeToSave, setBikeToSave] = useState(null);

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
          keyExtractor={(item) => item?.index}
          // keyExtractor={(item) => Object.values(item.index)}
          // data={bikeNames[brandImgs[activeItem].id]}
          data={bikeNames[brandImgs[activeItem].id]}
          renderItem={(item) => (
            <BikeListItem
              item={item}
              setBikeToSave={setBikeToSave}
              setModalVisible={setModalVisible}
            />
          )}
          // renderItem={(item, index) => console.log(item)}
        />
      </View>
      <ConfirmBox
        modalVisible={modalVisible}
        cancel={() => setModalVisible(false)}
        confirm={() =>
          bikeToSave !== null
            ? () => {
                saveData("bike", bikeToSave);
                setModalVisible(false);
              }
            : setModalVisible(false)
        }
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
    // height: 600,
    // backgroundColor: "aqua",
  },
});
