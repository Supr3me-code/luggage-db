import React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";

interface IListItem {
  title: string;
  type?: string;
  onPress?: () => void;
}

const ListItem = ({ title, type, onPress }: IListItem) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.type}>{type}</Text>
      </View>
    </Pressable>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 20,
    margin: 5,
  },
  title: {
    color: "#fff",
    fontSize: 18,
  },
  type: { color: "#fff" },
});
