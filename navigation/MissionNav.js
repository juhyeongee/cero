import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import StartMission from "../screens/StartMission";
import Home from "../screens/Home";

const Nav = createStackNavigator();

const HomeNav = (props) => {
  return (
    <Nav.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <Nav.Screen
        name="SelectMission"
        component={(data) => (
          <SelectMission navigation={data.navigation} day={props.day} />
        )}
      /> */}
      <Nav.Screen name="StartMission" component={StartMission} />
      <Nav.Screen name="Home" component={Home} />
    </Nav.Navigator>
  );
};
export default HomeNav;
