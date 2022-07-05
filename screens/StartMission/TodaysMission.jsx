import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import missionObj from "../../properties/Missions";

const TodaysMission = (props) => {
  return (
    <TitleContainer>
      <Title>Q.{missionObj[1].version1.subtitle}</Title>
      <SubTitle>{missionObj[1].version1.contents}</SubTitle>
    </TitleContainer>
  );
};
const TitleContainer = styled.View`
  justify-content: center;
  flex: 1;
  width: 100%;
  padding-left: 32px;
  padding-right: 32px;
`;

const Title = styled.Text`
  color: ${(props) => props.theme.n800};
  font-size: 20px;
  margin-bottom: 10px;
`;

const SubTitle = styled.Text`
  color: ${(props) => props.theme.n700};
  font-size: 14px;
`;

export default TodaysMission;
