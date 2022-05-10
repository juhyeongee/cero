import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";
import questionObj from "../Qustions";

const Body = (props) => {
  const BodyBG = styled.View`
    width: 100%;
    flex: 0.6;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const Question = styled.Text`
    font-size: 22px;
    margin: 20px;
    margin-bottom: 90px; ;
  `;
  const AnswerButton = styled.TouchableOpacity`
    width: 80%;
    height: 60px;
    padding: 20px;
    background-color: ${(props) => props.theme.mainBlackColor};
    justify-content: center;
    border-radius: 10px;
    margin: 4px;
  `;
  const AnswerButtonText = styled.Text`
    font-size: 16px;
    color: ${(props) => props.theme.bgColor};
  `;

  return (
    <BodyBG>
      <Question>{questionObj[props.pageNumber]}</Question>
      <AnswerButton>
        <AnswerButtonText>극히 드물게</AnswerButtonText>
      </AnswerButton>
      <AnswerButton>
        <AnswerButtonText>가끔 (1~2일)</AnswerButtonText>
      </AnswerButton>
      <AnswerButton>
        <AnswerButtonText>자주 (3~4일)</AnswerButtonText>
      </AnswerButton>
      <AnswerButton>
        <AnswerButtonText>거의 대부분 (5~7일)</AnswerButtonText>
      </AnswerButton>
    </BodyBG>
  );
};

export default Body;
