import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Drawer from "../screens/Drawer";
import MyRooms from "../screens/MyRooms";
import Setting from "../screens/Setting";

const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator
    initialRouteName="MyRooms"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Tab.Screen name="Drawer" component={Drawer} />
    <Tab.Screen name="MyRooms" component={MyRooms} />
    <Tab.Screen
      screenOptions={{ headerShown: false }}
      name="Setting"
      component={Setting}
    />
  </Tab.Navigator>
);

export default Tabs;
