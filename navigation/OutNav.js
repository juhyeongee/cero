import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Intro from "../screens/Intro";
import Login from "../screens/Login";

const Nav = createStackNavigator();

const OutNav = () => {
  return (
    <Nav.Navigator
      screenOptions={{
        headerShown: false,
        animationTypeForReplace: "push",
      }}
    >
      <Nav.Screen name="Intro" component={Intro} />
      <Nav.Screen name="Login" component={Login} />
    </Nav.Navigator>
  );
};
export default OutNav;
