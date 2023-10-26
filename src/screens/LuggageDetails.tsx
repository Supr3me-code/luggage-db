import { LinearGradient } from "expo-linear-gradient";
import React, { useLayoutEffect } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import ListItem from "../elements/ListItem";
import Label from "../elements/Label";
import LabelCard from "../modules/LabelCard";

interface ILuggageDetails {
  navigation?: any;
}

const LuggageDetails = ({ navigation }: ILuggageDetails) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Singapore Bag",
    });
  }, []);
  return (
    <LinearGradient colors={["#ff3200", "#000"]} style={styles.container}>
      <View style={styles.content}>
        <LabelCard labelTitle="Room" itemTitle="Dishant's room" />
        <LabelCard labelTitle="Area" itemTitle="Top Right Cabinet" />
        <Pressable onPress={() => {}} style={styles.itemListCta}>
          <ListItem title="Independent Items" />
        </Pressable>
      </View>
    </LinearGradient>
  );
};

export default LuggageDetails;

const styles = StyleSheet.create({
  content: {
    marginVertical: 20,
  },
  container: {
    flex: 1,
  },
  itemListCta: {
    margin: 5,
  },
});
