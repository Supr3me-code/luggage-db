import { Button, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const HeaderBackButton = ({ screen, itemType, name, items }: any) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => {
        navigation.navigate(screen, {
          itemType: itemType,
          name: name,
          items: items,
        });
      }}
    >
      <AntDesign name="left" size={26} color="black" />
    </Pressable>
  );
};

export default HeaderBackButton;

const styles = StyleSheet.create({});
