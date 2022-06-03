import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styled from "styled-components";
import { BigBlackButton } from "../components";
import { Container } from "../components";
import { SafeAreaView } from "react-native-safe-area-context";

const Nickname = (props) => {
  const [nickname, setNickname] = useState();

  return (
    <Container>
      <SafeAreaView style={{ flex: 1 }}>
        <TextView>
          <QuestionText>앞으로 어떻게 불러드릴까요?</QuestionText>
          <AnswerText
            placeholder="8글자까지 입력하실 수 있어요"
            onChangeText={(text) => setNickname(text)}
          ></AnswerText>
        </TextView>
        <TextView>
          <NextBtn
            onPress={() => {
              props.saveNicknameToAsyncStorage(nickname);
              this._swiper.scrollBy(1);
            }}
          >
            <BigBlackButton text="다음" />
          </NextBtn>
        </TextView>
      </SafeAreaView>
    </Container>
  );
};

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

const TextView = styled.View`
  flex: 1;
  justify-content: center; ;
`;

export default Nickname;
