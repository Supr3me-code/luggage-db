import React from "react";
import { StyleSheet, View } from "react-native";
import Label from "../elements/Label";
import ListItem from "../elements/ListItem";

interface ILabelCard {
  labelTitle: string;
  itemTitle: string;
}

const LabelCard = ({ labelTitle, itemTitle }: ILabelCard) => {
  return (
    <View style={styles.container}>
      <Label title={labelTitle} />
      <ListItem title={itemTitle} />
    </View>
  );
};

export default LabelCard;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 10,
    padding: 5,
  },
});
