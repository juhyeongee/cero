import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { questionObj } from "../../properties/property";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AnswerBtn from "./AnswerBtn";
import { Layout, OnOffButton } from "../components";
import { SubText, MainText } from "../components";

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
      <LastWeekTextContainer>
        <SubText>최근 일주일 동안...</SubText>
      </LastWeekTextContainer>
      <QuestionContainer>
        <MainText>{questionObj[props.pageNumber]}</MainText>
      </QuestionContainer>
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

const QuestionContainer = styled.View`
  width: 100%;
  flex: 1.5;
`;
const ButtonContainer = styled.View`
  flex: 8;
  width: 100%;
`;

const LastWeekTextContainer = styled.View`
  width: 100%;
  justify-content: flex-end;
  flex: 1.5;
`;
export default Body;
