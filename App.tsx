import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import Home from "./src/screens/Home";
import AddLocation from "./src/screens/AddLocation";
import Create from "./src/screens/Create";
import Explore from "./src/screens/Explore";
import KnowMe from "./src/screens/KnowAboutMe";
import Search from "./src/screens/Seach";
import Login from "./src/screens/Login";
import ItemDetails from "./src/screens/ItemDetails";
import LuggageDetails from "./src/screens/LuggageDetails";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen
            name="login"
            component={Login}
            options={{
              title: "Login",
              headerShown: false,
            }}
          ></Stack.Screen> */}
          <Stack.Screen
            name="home"
            component={Home}
            options={{
              headerStyle: { backgroundColor: "#ff3200" },
              headerTintColor: "#000",
              headerShadowVisible: false,
              headerTitleStyle: {
                fontSize: 24,
              },
              title: "Luggage DB",
            }}
          ></Stack.Screen>
          <Stack.Screen
            name="addlocation"
            component={AddLocation}
            options={{
              headerStyle: { backgroundColor: "#ff3200" },
              headerTintColor: "#000",
              headerShadowVisible: false,
              headerTitleStyle: {
                fontSize: 24,
              },
              title: "Add a Location",
              headerBackTitle: "",
            }}
          ></Stack.Screen>
          <Stack.Screen
            name="create"
            component={Create}
            options={{
              headerStyle: { backgroundColor: "#ff3200" },
              headerTintColor: "#000",
              headerShadowVisible: false,
              headerTitleStyle: {
                fontSize: 24,
              },
              title: "Create",
              headerBackTitle: "",
            }}
          ></Stack.Screen>
          <Stack.Screen
            name="explore"
            component={ItemDetails}
            options={{
              headerStyle: { backgroundColor: "#ff3200" },
              headerTintColor: "#000",
              headerShadowVisible: false,
              headerTitleStyle: {
                fontSize: 24,
              },
              title: "Explore",
              headerBackTitle: "",
            }}
          ></Stack.Screen>
          <Stack.Screen
            name="knowaboutme"
            component={KnowMe}
            options={{
              headerStyle: { backgroundColor: "#ff3200" },
              headerTintColor: "#000",
              headerShadowVisible: false,
              headerTitleStyle: {
                fontSize: 24,
              },
              title: "Know About Me",
              headerBackTitle: "",
            }}
          ></Stack.Screen>
          <Stack.Screen
            name="search"
            component={LuggageDetails}
            options={{
              headerStyle: { backgroundColor: "#ff3200" },
              headerTintColor: "#000",
              headerShadowVisible: false,
              headerTitleStyle: {
                fontSize: 24,
              },
              title: "Search",
              headerBackTitle: "",
            }}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
