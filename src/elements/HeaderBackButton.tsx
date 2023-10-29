import { Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const HeaderBackButton = ({ screen, itemType, name, items }: any) => {
  const navigation = useNavigation();
  
  return (
    <Button
      title="Go Back"
      onPress={() => {
        navigation.navigate(screen, {
          itemType: itemType,
          name: name,
          items: items,
        });
      }}
    />
  );
};

export default HeaderBackButton;

const styles = StyleSheet.create({});
