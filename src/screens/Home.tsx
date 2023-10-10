import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, View } from "react-native";
import Card from "../modules/Card/Card";

const screens = [
  { title: "Explore", onPress: "explore" },
  { title: "Search", onPress: "search" },
  { title: "Create", onPress: "create" },
  { title: "Add Location", onPress: "addlocation" },
  { title: "Know About Me", onPress: "knowaboutme" },
];

const Home = () => {
  return (
    <LinearGradient colors={["#ff3200", "#000"]} style={styles.container}>
      <View style={styles.ctaContainer}>
        {screens &&
          screens.map(({ title, onPress }) => {
            return <Card title={title} onPress={onPress} key={title}/>;
          })}
      </View>
    </LinearGradient>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ctaContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
});
