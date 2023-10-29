import { LinearGradient } from "expo-linear-gradient";
import React, { useLayoutEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import ListItem from "../elements/ListItem";
import Label from "../elements/Label";
import LabelCard from "../modules/LabelCard";

interface IItemDetails {
  navigation?: any;
  route?: any;
}

const ItemDetails = ({ navigation, route }: IItemDetails) => {
  const { name, room, area, luggage, imageUrl } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, []);
  return (
    <LinearGradient colors={["#ff3200", "#000"]} style={styles.container}>
      <View style={styles.content}>
        <LabelCard labelTitle="Room" itemTitle={room} />
        <LabelCard labelTitle="Area" itemTitle={area} />
        <LabelCard labelTitle="Luggage" itemTitle={luggage} />
        <View style={styles.imageContainer}>
          {imageUrl && (
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.image}
            />
          )}
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
