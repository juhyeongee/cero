import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import styled from "styled-components";
import Plant from "./Plant";
import { useNavigation } from "@react-navigation/native";

const Home = (props) => {
  const navigation = useNavigation();
  return (
    <Container>
      <StartMissionBtn onPress={() => navigation.navigate("StartMission")} />
      <Text>Home</Text>
      <Plant></Plant>
    </Container>
  );
};

const StartMissionBtn = styled.Pressable`
  border-radius: 10px;
  width: ${(props) => (props.theme.windowWidth * 80) / 100};
  height: ${(props) => (props.theme.windowHeight * 10) / 100};
  background-color: ${(props) => props.theme.mainBlackColor};
`;

const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export default Home;
