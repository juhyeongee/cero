import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styled from "styled-components";

const Nickname = (props) => {
  const [nickname, setNickname] = useState();

  return (
    <Container>
      <QuestionText>앞으로 어떻게 불러드릴까요?</QuestionText>
      <AnswerText
        placeholder="8글자까지 입력하실 수 있어요"
        onChangeText={(text) => setNickname(text)}
      ></AnswerText>
      <NextBtn
        onPress={() => {
          props.saveNicknameToAsyncStorage(nickname);
          this._swiper.scrollBy(1);
        }}
      >
        <NextBtnText>다음</NextBtnText>
      </NextBtn>
    </Container>
  );
};

const Container = styled.View`
  background-color: ${(props) => props.theme.n100};
  padding: 32px;
  flex: 1;
  display: flex;
  justify-content: center;
`;

const QuestionText = styled.Text`
  color: ${(props) => props.theme.n900};
  font-family: ${(props) => props.theme.thickFont};
  margin-bottom: 32px;
  font-size: 20px;
`;

const AnswerText = styled.TextInput`
  font-size: 20px;
  font-family: ${(props) => props.theme.mainFont};
`;

const NextBtn = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.n900};
  width: 100%;
  height: 32px;
`;

const NextBtnText = styled.Text`
  color: ${(props) => props.theme.n100};
  font-family: ${(props) => props.theme.mainFont};
`;

export default Nickname;
