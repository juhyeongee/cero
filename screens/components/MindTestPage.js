import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";
import questionObj from "./Qustions";

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

const Tail = (props) => {
  const LastSubmitBtn = styled.TouchableOpacity`
    width: 60%;
    height: 30px;
    position: relative;
    bottom: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 50px;
    border-radius: 20px;
    background-color: #555555;
  `;
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

  if (props.pageNumber !== "20") {
    return (
      <TailBG>
        <TailPage>
          <Text style={{ color: "#313131" }}> {props.pageNumber} / 20</Text>
        </TailPage>
      </TailBG>
    );
  } else {
    return (
      <TailBG>
        <LastSubmitBtn>
          <Text style={{ color: "#faf8f4", fontSize: 17 }}>제출하기</Text>
        </LastSubmitBtn>
      </TailBG>
    );
  }
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

const MindTestPage = (props) => {
  return (
    <Background>
      <Header />
      <Body pageNumber={props.pageNumber} />
      <Tail pageNumber={props.pageNumber} />
    </Background>
  );
};

export default MindTestPage;
