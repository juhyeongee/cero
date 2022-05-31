import React, { useState } from "react";
import { View, Text, Pressable, Image } from "react-native";
import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import missionObj from "../../constants/Missions";

const Home = (props) => {
  const navigation = useNavigation();
  return (
    <Container>
      <SafeAreaView style={{ flex: 1 }}>
        <ToDoContainer>
          <ToDoText>오늘의 할 일</ToDoText>
          <SubToDoText>{missionObj.day1.version1.subtitle}</SubToDoText>
          <StartMissionBtn
            day={props.day}
            onPress={() => navigation.navigate("StartMission")}
          >
            <SubToDoText>하러가기</SubToDoText>
          </StartMissionBtn>
        </ToDoContainer>
        <PlantContainer>
          <PlantImage
            source={require("/Users/a12/teamCero/cero/plant3.png")}
          ></PlantImage>
        </PlantContainer>
      </SafeAreaView>
    </Container>
  );
};
const ToDoText = styled.Text`
  flex: 1;
  color: ${(props) => props.theme.n900};
  font-family: ${(props) => props.theme.thickFont};
  font-size: 20px;
`;

const ToDoContainer = styled.View`
  box-shadow: 0.01px 0.01px 7px grey;

  border-radius: 10px;
  background-color: ${(props) => props.theme.n0};
  flex: 0.5;
  padding: 30px;
`;
const StartMissionBtn = styled.Pressable`
  flex: 1;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 50%;
  height: 30%;
  background-color: ${(props) => props.theme.n700};
`;

const SubToDoText = styled.Text`
  flex: 1;
  color: ${(props) => props.theme.n900};
  font-family: ${(props) => props.theme.mainFont};
  font-size: 14px;
`;

const Container = styled.View`
  width: ${(props) => props.theme.windowWidth};
  background-color: ${(props) => props.theme.n100};
  justify-content: center;
  align-items: center;
  padding: 32px;
  flex: 1;
  display: flex;
`;
const PlantContainer = styled.View`
  flex-direction: column-reverse;
  flex: 2;
`;
const PlantImage = styled.Image`
  width: 300px;
  height: 300px;
`;

export default Home;
