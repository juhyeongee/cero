import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Join from "../screens/Join";
import EmailJoin from "../screens/EmailJoin";

const Nav = createStackNavigator();

const JoinNav = () => {
  return (
    <Nav.Navigator
      initialRouteName="EmailJoin"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Nav.Screen name="Join" children={Join} />
      <Nav.Screen name="EmailJoin" children={EmailJoin} />
    </Nav.Navigator>
  );
};

export default JoinNav;
