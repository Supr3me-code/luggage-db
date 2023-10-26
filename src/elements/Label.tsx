import React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";

interface ILabel {
  title: string;
}

const Label = ({ title }: ILabel) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Label;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 5,
    margin: 5,
    opacity: 0.7
  },
  title: {
    color: "#000",
    fontSize: 18,
  },
});
