import React, { useState } from "react";
import {
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TextInput,
} from "react-native";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Ionicons";
import missionArray from "./Missions";

const TodayMission = (props) => {
  return (
    <View
      style={{
        flex: 0.2,
        backgroundColor: "teal",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 16 }}>Q. {props.missionArray[0].subTitle}</Text>
    </View>
  );
};

const HowToDo = (props) => {
  return (
    <View
      style={{
        padding: 20,
        flex: 0.4,
        backgroundColor: "tomato",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 13 }}>
        How to do. {props.missionArray[0].contents}
      </Text>
    </View>
  );
};

const Header = styled.View`
  flex-direction: row;
  flex: 0.3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MissionBoard = (props) => {
  const [text, setText] = useState("Write your action");
  const [todayMission, setTodayMission] = useState(missionArray[0].subTitle);

  return (
    <View style={styles.board}>
      <Header>
        <Text style={styles.title}>Today's mission </Text>
      </Header>
      <TodayMission missionArray={missionArray} />
      <HowToDo missionArray={missionArray} />
      <TextInput
        style={{ flex: 1, padding: 20 }}
        onChangeText={setText}
        value={text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    flex: 0.7,
    backgroundColor: "bisque",
    width: "80%",
    borderRadius: 30,
  },
  title: {
    fontSize: 20,
  },
});

/* flex: 0.8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  background-color: bisque;
  border-radius: 10px; */

export default MissionBoard;
