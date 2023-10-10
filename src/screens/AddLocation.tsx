import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet } from "react-native";

const AddLocation = () => {
  return (
    <LinearGradient
      colors={["#ff3200", "#000"]}
      style={styles.container}
    ></LinearGradient>
  );
};

export default AddLocation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
