import React, { useState, useEffect } from "react";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import styled from "styled-components";

const AnswerBtn = ({
  clickedBtnNumber,
  number,
  content,
  onHandleClickBtnNumber,
}) => {
  console.log("클릭드버튼 :" + clickedBtnNumber);
  console.log("넘버: " + number);
  console.log(clickedBtnNumber == number);
  console.log(clickedBtnNumber === number);

  const AnswerBtnBG = styled.Pressable`
    justify-content: center;
    width: 100%;
    background-color: ${(props) =>
      props.checked ? props.theme.n900 : props.theme.n400};
    border-radius: 10px;
    height: 56px;
    padding: 10px 20px;
    margin-bottom: 10px;
  `;

  const AnswerBtnText = styled.Text`
    font-family: ${(props) => props.theme.mainFont};
    font-size: 16px;
    color: ${(props) => (props.checked ? props.theme.n100 : props.theme.n900)};
  `;

  return (
    <AnswerBtnBG
      checked={clickedBtnNumber === number}
      onPress={() => {
        onHandleClickBtnNumber();
        // if (props.number !== props.clickedBtnNumber) {
        //   setChecked(!checked);
        // } else {
        //   setChecked(true);
        // }
        // props.recordAnswer(props.number);
        // props.setClickedBtnNumber(props.number);
      }}
    >
      <AnswerBtnText checked={clickedBtnNumber === number}>
        {content}
      </AnswerBtnText>
    </AnswerBtnBG>
  );
};

export default AnswerBtn;
