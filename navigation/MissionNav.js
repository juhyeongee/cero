import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MissionBoard from "../screens/components/missionBoard/MissionBoard";
import SelectMission from "../screens/components/missionBoard/SelectMission";

const Nav = createStackNavigator();

const MissionNav = (props) => {
  return (
    <Nav.Navigator>
      {/* <Nav.Screen
        name="SelectMission"
        component={(data) => (
          <SelectMission navigation={data.navigation} day={props.day} />
        )}
      /> */}
      <Nav.Screen name="MissionBoard" component={MissionBoard} />
    </Nav.Navigator>
  );
};
export default MissionNav;
