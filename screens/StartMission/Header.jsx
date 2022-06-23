import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";

const Header = (props) => {
  const navigation = useNavigation();
  return (
    <Container>
      <Pressable onPress={() => navigation.navigate("MissionHome")}>
        <Image source={require("cero_/assets/left-arrow.png")} />
      </Pressable>
      <HeaderText>오늘의 할 일</HeaderText>
      <Pressable onPress={props.submitTextMission}>
        <CompleteTextButton>완료</CompleteTextButton>
      </Pressable>
    </Container>
  );
};

const Container = styled.View`
  flex: 0.5;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.n200};
`;

const HeaderText = styled.Text`
  font-family: ${(props) => props.theme.mainFont};
  font-size: 18px;
  color: ${(props) => props.theme.n800};
`;

const CompleteTextButton = styled.Text`
  font-family: ${(props) => props.theme.mainFont};
  font-size: 16px;
  color: ${(props) => props.theme.mainGreen};
`;

export default Header;
