import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styled from "styled-components";
import { Layout, MainText, SubText, BigGreenButton } from "../components";

const Confirm = (props) => {
  return (
    <Layout>
      <ContentContainer>
        <MainText>당신의 현재 정보가 이게 맞을까요? </MainText>
        <SubText>대답해주신 내용을 확인해주세요.</SubText>
        <AnswerContainer>
          <GreyBar />
          <View>
            <BigFont>{props.nickname}</BigFont>

            <BigFont>만 {props.age}세</BigFont>

            <BigFont>{props.gender}</BigFont>
          </View>
        </AnswerContainer>
      </ContentContainer>
      <ButtonContainer>
        <BigGreenButton
          text="예, 맞아요!"
          onPress={() => {
            props.finishTakeUserInfo();
          }}
        ></BigGreenButton>
        <Button
          title="AsyncStorage비우기"
          onPress={() => {
            AsyncStorage.clear();
            console.log("🥡 asyncStorge 비우기 완료 ");
          }}
        />
      </ButtonContainer>
    </Layout>
  );
};

const BigFont = styled.Text`
  font-family: ${(props) => props.theme.mainFont};
  font-size: 20px;
  margin-bottom: 10px; ;
`;

const ContentContainer = styled.View`
  justify-content: center;
  flex: 2;
`;
const ButtonContainer = styled.View`
  justify-content: center;
  flex: 1;
`;

const AnswerContainer = styled.View`
  flex-direction: row;
`;

const GreyBar = styled.View`
  background-color: grey;
  width: 2px;
  height: 100%;
  margin-right: 15px;
`;
export default Confirm;
