import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";
import styled from "styled-components";
import { questionArray } from "../screens/components/Qustions";

const Background = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: #faf8f4;
`;

const HeaderIconCircle = styled.View`
  background-color: #313131;
  width: 25px;
  height: 25px;
  border-radius: 12.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
`;

const HeaderBG = styled.View`
  width: 100%;
  flex: 0.2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const Body = () => {
  const BodyBG = styled.View`
    width: 100%;
    flex: 0.6;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const Question = styled.Text`
    font-size: 20px;
    margin: 20px;
  `;
  const AnswerButton = styled.TouchableOpacity`
    width: 80%;
    height: 60px;
    padding: 20px;
    background-color: #313131;
    justify-content: center;
    border-radius: 10px;
    margin: 4px;
  `;
  const AnswerButtonText = styled.Text`
    font-size: 16px;
    color: #faf8f4;
  `;

  return (
    <BodyBG>
      <Question>우울해서 잠 못이룬 날이 있다.</Question>
      <AnswerButton>
        <AnswerButtonText>일주일 이내</AnswerButtonText>
      </AnswerButton>
      <AnswerButton>
        <AnswerButtonText>한 달 이내</AnswerButtonText>
      </AnswerButton>
      <AnswerButton>
        <AnswerButtonText>세 달 이내</AnswerButtonText>
      </AnswerButton>
      <AnswerButton>
        <AnswerButtonText>세 달 이상</AnswerButtonText>
      </AnswerButton>
    </BodyBG>
  );
};

const Tail = () => {
  const TailBG = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0.2;
    width: 100%;
  `;

  const TailPage = styled.View`
    position: relative;
    bottom: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 35px;
    border-radius: 20px;
    background-color: #dfdbd6;
  `;

  return (
    <TailBG>
      <TailPage>
        <Text style={{ color: "#faf8f4" }}> 2 / 23</Text>
      </TailPage>
    </TailBG>
  );
};

const Header = () => {
  return (
    <HeaderBG>
      <HeaderIconCircle>
        <Text style={{ color: "#faf8f4" }}>1</Text>
      </HeaderIconCircle>
      <HeaderIconCircle>
        <Text style={{ color: "#faf8f4" }}>2</Text>
      </HeaderIconCircle>
      <HeaderIconCircle>
        <Text style={{ color: "#faf8f4" }}>3</Text>
      </HeaderIconCircle>
    </HeaderBG>
  );
};

const MindTest = () => {
  return (
    <Swiper>
      <Background>
        <Header />
        <Body />
        <Tail />
      </Background>
    </Swiper>
  );
};

export default MindTest;
