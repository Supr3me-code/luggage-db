import React, { useLayoutEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import ListItem from "../elements/ListItem";
import { LinearGradient } from "expo-linear-gradient";
import { AREAS, ITEMS, LUGGAGES, ROOMS } from "../utils/constants/mockData";
import HeaderBackButton from "../elements/HeaderBackButton";

interface IItemList {}

const ItemList = ({ data, navigation, route }: any) => {
  const { rooms, itemType, name, items, areaName } = route.params;

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
    let goHome = false;
    let backButtonProps = {
      itemType,
      name,
      items,
    };
    switch (itemType) {
      case undefined:
        goHome = true;
        break;
      case "room":
        goHome = false;
        backButtonProps.itemType = undefined;
        break;
      case "area":
        goHome = false;
        backButtonProps.itemType = "room";
        const room = ROOMS.find((room) => room.items.includes(name));
        backButtonProps.name = room?.name;
        backButtonProps.items = room?.items;
        break;
      case "luggage":
        goHome = false;
        backButtonProps.itemType = "area";
        const area = AREAS.find(
          (area) => area.items.includes(name) || area.name === areaName
        );
        backButtonProps.name = area?.name;
        backButtonProps.items = area?.items;
        break;
    }

    navigation.setOptions({
      title: title,
      headerLeft: () => (
        <HeaderBackButton
          screen={goHome ? "home" : "explore"}
          itemType={backButtonProps.itemType}
          name={backButtonProps.name}
          items={backButtonProps.items}
        />
      ),
    });
  }, [itemType]);
  const renderItem = (itemData: any) => {
    const item = itemData.item;
    let room: string | undefined;
    let area: string | undefined;
    let luggage: string | undefined;
    if (item.type === "item") {
      const luggageObj = LUGGAGES.find((obj) => obj.items.includes(item.name));
      luggage = luggageObj?.name || "Independent Item";
      let areaObj;
      if (luggage == "Independent Item") {
        areaObj = AREAS.find((obj) =>
          obj.independentItems.items.includes(item.name)
        );
      } else {
        areaObj = AREAS.find((obj) => obj.items.includes(luggage));
      }
      area = areaObj?.name;
      const roomObj = ROOMS.find((obj) => obj.items.includes(area));
      room = roomObj?.name;
    }
    const onPressHandler = () => {
      if (item.type !== "item") {
        navigation.navigate("explore", {
          itemType: item.type,
          name: item.name,
          items: item.items,
          areaName: item.areaName,
        });
      } else {
        navigation.navigate("itemDetails", {
          name: item.name,
          imageUrl: item.imageUrl,
          room: room,
          area: area,
          luggage: luggage,
        });
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
