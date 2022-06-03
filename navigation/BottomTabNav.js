import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DoneTask from "../screens/DoneTask";
import Home from "../screens/Home";
import { View, Image } from "react-native";
import Setting from "../screens/Setting";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MissionNav from "./MissionNav";
import { mainTheme } from "../constants/theme";

const Tab = createBottomTabNavigator();

const BottomTabNav = (props) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: mainTheme.n100,
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="DoneTask"
        children={() => <DoneTask />}
        options={{
          tabBarShowLabel: false,
          tabBarLabel: "drawer",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("/Users/a12/teamCero/cero/file.png")}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        children={() => <MissionNav />}
        options={{
          tabBarLabel: "My room",
          tabBarShowLabel: false,

          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("/Users/a12/teamCero/cero/home.png")}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarLabel: "setting",
          tabBarShowLabel: false,

          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("/Users/a12/teamCero/cero/setting.png")}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
