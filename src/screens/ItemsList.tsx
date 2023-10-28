import React, { useLayoutEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import ListItem from "../elements/ListItem";
import { LinearGradient } from "expo-linear-gradient";
import { AREAS, ITEMS, LUGGAGES } from "../utils/constants/mockData";

interface IItemList {}

const ItemList = ({ data, navigation, route }: any) => {
  const { rooms, itemType, name, items } = route.params;

  if (!itemType || !name) data = rooms;
  else if (itemType == "room") {
    data = AREAS.filter((area) => items?.includes(area.name));
  } else if (itemType == "area") {
    const independentItems = AREAS.find(
      (area) => area.name == name
    )?.independentItems;
    data = LUGGAGES.filter((luggage) => items?.includes(luggage.name));
    data.push(independentItems);
  } else if (itemType == "luggage") {
    data = ITEMS.filter((item) => items?.includes(item.name));
  }
  useLayoutEffect(() => {
    let title = "Rooms";
    switch (itemType) {
      case "room":
        title = "Areas";
        break;
      case "area":
        title = "Luggages";
        break;
      case "luggage":
        title = "Items";
        break;
    }
    navigation.setOptions({
      title: title,
    });
  }, [itemType]);
  const renderItem = (itemData: any) => {
    const item = itemData.item;
    const onPressHandler = () => {
      if (item.type !== "item") {
        navigation.navigate("explore", {
          itemType: item.type,
          name: item.name,
          items: item.items,
        });
      } else {
        navigation.navigate("create");
      }
    };
    const listItemProps = {
      title: item.name,
      onPress: onPressHandler,
    };
    return <ListItem {...listItemProps} />;
  };

  return (
    <LinearGradient colors={["#ff3200", "#000"]} style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.name}
          renderItem={renderItem}
        />
      </View>
    </LinearGradient>
  );
};

export default ItemList;

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    padding: 16,
  },
  container: {
    flex: 1,
  },
});
