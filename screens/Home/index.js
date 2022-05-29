import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import styled from "styled-components";
import Plant from "./Plant";
import { useNavigation } from "@react-navigation/native";

const Home = (props) => {
  console.log("Home :" + props.day);
  const navigation = useNavigation();
  return (
    <Container>
      <StartMissionBtn
        day={props.day}
        onPress={() => navigation.navigate("StartMission")}
      />
      <Text>Home</Text>
      <Plant></Plant>
    </Container>
  );
};

const StartMissionBtn = styled.Pressable`
  border-radius: 10px;
  width: ${(props) => (props.theme.windowWidth * 80) / 100};
  height: ${(props) => (props.theme.windowHeight * 10) / 100};
  background-color: ${(props) => props.theme.n900};
`;

const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export default Home;
