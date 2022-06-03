import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";
import questionObj from "../../constants/Qustions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AnswerBtn from "./AnswerBtn";
import { Layout, OnOffButton } from "../components";

const Body = (props) => {
  const [clickedBtnNumber, setClickedBtnNumber] = useState(0);
  //clickedBtnNumber은 방금 눌린 번호가 뭔지 기록해놓는 역할

  const onHandleClickBtnNumber = (btnNumber) => {
    setClickedBtnNumber(btnNumber);
    saveAnswer(btnNumber);
    setTimeout(() => this._swiper.scrollBy(1), 200);
  };

  const saveAnswer = (clickedBtnNumber) => {
    AsyncStorage.setItem(`answer${props.pageNumber}`, `${clickedBtnNumber}`);
    console.log("저장되었습니다");
  };

  return (
    <>
      <ContentContainer>
        <LastWeekText>최근 일주일 동안...</LastWeekText>
        <Question>{questionObj[props.pageNumber]}</Question>
      </ContentContainer>
      <ButtonContainer>
        <AnswerBtn
          clickedBtnNumber={clickedBtnNumber}
          onHandleClickBtnNumber={() => onHandleClickBtnNumber(1)}
          number={1}
          content="극히 드물게"
        />
        <AnswerBtn
          clickedBtnNumber={clickedBtnNumber}
          onHandleClickBtnNumber={() => onHandleClickBtnNumber(2)}
          number={2}
          content="가끔 (1~2일)"
        />
        <AnswerBtn
          clickedBtnNumber={clickedBtnNumber}
          onHandleClickBtnNumber={() => onHandleClickBtnNumber(3)}
          number={3}
          content="자주 (3~4일)"
        />
        <AnswerBtn
          clickedBtnNumber={clickedBtnNumber}
          onHandleClickBtnNumber={() => onHandleClickBtnNumber(4)}
          number={4}
          content="거의 대부분 (5~7일)"
        />
      </ButtonContainer>
    </>
  );
};

const ContentContainer = styled.View`
  justify-content: flex-end;
  flex: 1;
`;
const ButtonContainer = styled.View`
  flex: 2;
`;

const BodyBG = styled.View`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Question = styled.Text`
  width: 100%;
  font-size: 22px;
  margin-bottom: 90px;
  font-family: ${(props) => props.theme.thickFont};
`;

const LastWeekText = styled.Text`
  width: 100%;
  font-size: 16px;
  margin-bottom: 20px;
  font-family: ${(props) => props.theme.mainFont};
`;

export default Body;
