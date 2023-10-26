import { LinearGradient } from "expo-linear-gradient";
import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import ListItem from "../elements/ListItem";
import Label from "../elements/Label";

interface IItemDetails {
  navigation?: any;
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
        <View style={styles.innerContainer}>
          <Label title="Room" />
          <ListItem title="Dishant's Room" />
        </View>
        <View style={styles.innerContainer}>
          <Label title="Area" />
          <ListItem title="Bed Top Right" />
        </View>
        <View style={styles.innerContainer}>
          <Label title="Luggage" />
          <ListItem title="Singapore Red Bag" />
        </View>
      </View>
    </LinearGradient>
  );
};

export default ItemDetails;

const styles = StyleSheet.create({
  innerContainer: {
    marginVertical: 10,
  },
  content: {
    marginVertical: 20,
  },
  container: {
    flex: 1,
  },
});
