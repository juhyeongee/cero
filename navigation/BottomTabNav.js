import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DoneTask from "../screens/DoneTask";
import Home from "../screens/Home";
import { View, Image } from "react-native";
import Setting from "../screens/Setting";
import styled from "styled-components/native";
import MissionNav from "./MissionNav";
import { mainTheme } from "../properties/theme";

const Tab = createBottomTabNavigator();

const BottomTabNav = (props) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarInactiveTintColor: mainTheme.n700,
        tabBarActiveTintColor: "teal",
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: mainTheme.n400,
        },
      }}
    >
      <Tab.Screen
        name="DoneTask"
        children={() => <DoneTask />}
        options={{
          tabBarLabel: "drawer",
          tabBarIcon: ({ color }) => (
            <Image
              style={{
                tintColor: color,
              }}
              source={require("cero_/assets/file.png")}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        children={() => <MissionNav />}
        options={{
          tabBarLabel: "My room",
          tabBarIcon: ({ color }) => (
            <Image
              style={{
                tintColor: color,
              }}
              source={require("cero_/assets/home.png")}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarLabel: "setting",
          tabBarIcon: ({ color }) => (
            <Image
              style={{
                tintColor: color,
              }}
              source={require("cero_/assets/setting.png")}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
