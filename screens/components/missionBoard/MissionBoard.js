import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import styled from "styled-components/native";
import missionObj from "../Missions";

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
      <Text style={{ fontSize: 16 }}>
        Q.{props.missionObj.day1.version1.subtitle}
      </Text>
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
        How to do. {props.missionObj.day1.version1.contents}
      </Text>
    </View>
  );
};

const MissionBoard = (props) => {
  const [text, setText] = useState("Write your action");
  const [todayMission, setTodayMission] = useState();

  return (
    <View style={styles.board}>
      <Header>
        <Text style={styles.title}>Today's mission </Text>
      </Header>
      <TodayMission missionObj={missionObj} />
      <HowToDo missionObj={missionObj} />
      <TextInput
        style={{ flex: 1, padding: 20 }}
        onChangeText={setText}
        value={text}
      />
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
