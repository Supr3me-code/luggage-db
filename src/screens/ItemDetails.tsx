import { LinearGradient } from "expo-linear-gradient";
import React, { useLayoutEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import ListItem from "../elements/ListItem";
import Label from "../elements/Label";
import LabelCard from "../modules/LabelCard";

interface IItemDetails {
  navigation?: any;
  room?: string;
  area?: string;
  luggage?: string;
  imageUrl?: string;
}

const ItemDetails = ({ navigation }: IItemDetails) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Red Saree",
    });
  }, []);
  return (
    <LinearGradient colors={["#ff3200", "#000"]} style={styles.container}>
      <View style={styles.content}>
        <LabelCard labelTitle="Room" itemTitle="Dishant's Room" />
        <LabelCard labelTitle="Area" itemTitle="Bed Top RIght" />
        <LabelCard labelTitle="Luggage" itemTitle="Pink American Tourister" />
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://madisarshop.com/wp-content/uploads/2021/01/black-red-square-pattern-readymade-bharatanatyam-practise-saree.jpg",
            }}
            style={styles.image}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

export default ItemDetails;

const styles = StyleSheet.create({
  content: {
    marginVertical: 20,
  },
  container: {
    flex: 1,
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    margin: 15,
    height: 200,
    width: 200,
  },
});
