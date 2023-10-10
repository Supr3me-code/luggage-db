import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface ICard {
  title: string;
  onPress: string;
}

const Card = ({ title, onPress }: ICard) => {
  const navigation = useNavigation();
  const onPressHandler = () => {
    navigation.navigate(onPress);
  };
  return (
    <Pressable onPress={onPressHandler}>
      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: 170,
    height: 170,
    backgroundColor: "black",
    marginHorizontal: 10,
    marginVertical: 15,
    shadowOffset: { width: 20, height: 20 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 5,
    margin: -20,
    borderRadius: 20,
    shadowColor: '#000',
  },
  title: {
    color: "white",
    margin: 20,
    fontSize: 18,
  },
});
