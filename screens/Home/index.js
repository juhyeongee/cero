import React, { useState, useEffect } from "react";
import { View, Text, Pressable, Image, SafeAreaView } from "react-native";
import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";
import missionObj from "../../constants/Missions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useStore from "../../lib/store";

const Home = (props) => {
  const [aaa, setAaa] = useState("before");
  const loadMissionContent = async () => {
    const missionContent = await AsyncStorage.getItem("Mission1Submit");
    setAaa(missionContent);
  };
  const navigation = useNavigation();

  useEffect(() => {
    loadMissionContent();
  }, []);
  return (
    <Container>
      <SafeAreaView style={{ flex: 1 }}>
        <ToDoContainer>
          <ToDoText>오늘의 할 일</ToDoText>
          <SubToDoText>{missionObj[1].version1.subtitle}</SubToDoText>
          <StartMissionBtn onPress={() => navigation.navigate("StartMission")}>
            <SubToDoText>하러가기</SubToDoText>
          </StartMissionBtn>
        </ToDoContainer>
        <PlantContainer>
          <PlantImage source={require("cero_/assets/plant3.png")}></PlantImage>
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
