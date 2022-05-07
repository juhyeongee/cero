import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Intro from "../screens/Intro";
import Join from "../screens/Join";

const Nav = createStackNavigator();

const OutNav = () => {
  return (
    <Nav.Navigator
      screenOptions={{
        headerShown: false,
        presentation: "modal",
        headerTintColor: "red",
      }}
    >
      <Nav.Screen name="Intro" component={Intro} />
      <Nav.Screen name="Join" component={Join} />
    </Nav.Navigator>
  );
};
export default OutNav;
