import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet } from "react-native";

const Create = () => {
  return (
    <LinearGradient
      colors={["#ff3200", "#000"]}
      style={styles.container}
    ></LinearGradient>
  );
};

export default Create;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
