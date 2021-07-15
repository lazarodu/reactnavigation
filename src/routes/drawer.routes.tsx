import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Screen, Notification } from "../pages";
import { color } from "react-native-reanimated";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: "#009900" },
        headerTintColor: "white",
      }}
    >
      <Drawer.Screen name="Screen" component={Screen} />
      <Drawer.Screen name="Notification" component={Notification} />
    </Drawer.Navigator>
  );
}
