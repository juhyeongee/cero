import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Drawer from "../screens/Drawer";
import Home from "../screens/Home";
import Setting from "../screens/Setting";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MindTest from "../screens/MindTest";

const Tab = createBottomTabNavigator();

const BottomTabNav = (props) => (
  <Tab.Navigator
    initialRouteName="Home"
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
      children={() => <Drawer day={props.day} />}
      options={{
        tabBarLabel: "drawer",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="wallet" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Home"
      children={() => <Home day={props.day} />}
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

export default BottomTabNav;
