import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Drawer from "../screens/Drawer";
import MyRoom from "../screens/MyRoom";
import Setting from "../screens/Setting";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator
    initialRouteName="MyRoom"
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        position: "absolute",
        backgroundColor: "black",
        borderTopWidth: 0,
      },
    }}
  >
    <Tab.Screen
      name="Drawer"
      component={Drawer}
      options={{
        tabBarLabel: "drawer",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="wallet" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="MyRoom"
      component={MyRoom}
      options={{
        tabBarLabel: "My room",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Setting"
      component={Setting}
      options={{
        tabBarLabel: "setting",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="circle" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default Tabs;
