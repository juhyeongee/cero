import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Intro from "../screens/Intro";
import Login from "../screens/SignIn";
import {
  NotoSansKR_100Thin,
  NotoSansKR_300Light,
  NotoSansKR_400Regular,
  NotoSansKR_500Medium,
  NotoSansKR_700Bold,
  NotoSansKR_900Black,
} from "@expo-google-fonts/noto-sans-kr";

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
