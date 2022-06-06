import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styled from "styled-components";
import { BigBlackButton, Layout, MainText, SubText } from "../components";

const Nickname = (props) => {
  const [nickname, setNickname] = useState();

  return (
    <Layout>
      <ContentContainer>
        <MainText>앞으로 어떻게 불러드릴까요?</MainText>
        <AnswerText
          placeholder="8글자까지 입력하실 수 있어요"
          onChangeText={(text) => setNickname(text)}
        ></AnswerText>
      </ContentContainer>
      <ButtonContainer>
        <BigBlackButton
          text="다음"
          onPress={() => {
            props.saveNicknameToAsyncStorage(nickname);
            console.log("닉네임 저장완료");
            this._swiper.scrollBy(1);
          }}
        />
      </ButtonContainer>
    </Layout>
  );
};

const AnswerText = styled.TextInput`
  font-size: 20px;
  font-family: ${(props) => props.theme.mainFont};
`;

const ContentContainer = styled.View`
  justify-content: center;
  flex: 2;
`;
const ButtonContainer = styled.View`
  justify-content: center;
  flex: 1;
`;
export default Nickname;
