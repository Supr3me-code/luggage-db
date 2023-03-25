import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import { MenuCard } from "./src/modules/MenuCard/menu";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Luggage DB</Text>
      <StatusBar style="auto" />
      {/* <MenuCard /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
