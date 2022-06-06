import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Intro from "../screens/Intro";
import SignIn from "../screens/SignIn";
import PrivacyPolicy from "../screens/SignIn/PrivacyPolicy";
import PolicyDetail from "../screens/SignIn/PolicyDetail";
import EmailJoin from "../screens/SignIn/EmailJoin";

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
      <Nav.Screen name="SignIn" component={SignIn} />
      <Nav.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Nav.Screen name="PolicyDetail" component={PolicyDetail} />
      <Nav.Screen name="EmailJoin" component={EmailJoin} />
    </Nav.Navigator>
  );
};
export default OutNav;
