import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet } from "react-native";

const KnowAboutMe = () => {
  <LinearGradient
    colors={["#ff3200", "#000"]}
    style={styles.container}
  ></LinearGradient>;
};

export default KnowAboutMe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
