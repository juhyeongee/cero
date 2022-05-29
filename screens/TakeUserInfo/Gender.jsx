import React, { useState } from "react";
import { View, Text, TextInput, Button, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styled from "styled-components";

const Gender = (props) => {
  const [gender, setGender] = useState("");

  return (
    <Container>
      <QuestionText>{props.nickname}님의 성별을 알려주세요 </QuestionText>
      <SubQuestionText>민감하다면 알려주지 않아도 괜찮아요</SubQuestionText>

      <GenderBtn content="남자" />
      <GenderBtn content="여자" />
      <GenderBtn content="기타" />
      <GenderBtn content="말하지 않을래요" />

      <>
        <Pressable
          onPress={() => {
            setGender("female");
            props.saveGenderToAsyncStorage(gender);
            setTimeout(() => this._swiper.scrollBy(1), 500);
          }}
        >
          <Text>여자</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            setGender("male");
            props.saveGenderToAsyncStorage(gender);
            setTimeout(() => this._swiper.scrollBy(1), 500);
          }}
        >
          <Text>남자</Text>
        </Pressable>
      </>
    </Container>
  );
};

const PressedBtn = styled.Pressable`
  background-color: ${(props) => props.theme.n800};
`;
const UnpressedBtn = styled.Pressable``;

const Container = styled.View`
  width: ${(props) => props.theme.windowWidth};
  background-color: ${(props) => props.theme.n100};
  justify-content: center;
  padding: 32px;
  flex: 1;
  display: flex;
`;

const QuestionText = styled.Text`
  color: ${(props) => props.theme.n900};
  font-family: ${(props) => props.theme.thickFont};
  margin-bottom: 32px;
  font-size: 20px;
`;

const SubQuestionText = styled.Text`
  color: ${(props) => props.theme.n900};
  font-family: ${(props) => props.theme.thinFont};
  margin-bottom: 32px;
  font-size: 14px;
`;

const GenderBtn = (props) => {
  const [checked, setChecked] = useState(false);

  const GenderBtnBG = styled.Pressable`
    justify-content: center;
    width: 100%;
    background-color: ${(props) =>
      props.checked ? props.theme.n900 : props.theme.n400};
    border-radius: 10px;
    height: 48px;
    padding: 10px 20px;
    margin: 10px;
  `;

  const GenderBtnText = styled.Text`
    font-family: ${(props) => props.theme.mainFont};
    font-size: 16px;
    color: ${(props) => (props.checked ? props.theme.n100 : props.theme.n900)};
  `;

  return (
    <GenderBtnBG checked={checked} onPress={() => setChecked(!checked)}>
      <GenderBtnText checked={checked}>{props.content}</GenderBtnText>
    </GenderBtnBG>
  );
};

export default Gender;
