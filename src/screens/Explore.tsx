import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text } from "react-native";

const Explore = () => {
  return (
    <LinearGradient colors={["#ff3200", "#000"]} style={styles.container}>
      <Text></Text>
    </LinearGradient>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
