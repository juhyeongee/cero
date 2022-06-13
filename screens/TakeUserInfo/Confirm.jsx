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
        <SubText>이름: {props.nickname}</SubText>
        <SubText>
          생일 : {props.birthdayYear}년 {props.birthdayMonth}월
          {props.birthdayDay}일
        </SubText>
        <SubText>나이 : {props.age}</SubText>

        <SubText>성별: {props.gender}</SubText>
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

const ContentContainer = styled.View`
  justify-content: center;
  flex: 2;
`;
const ButtonContainer = styled.View`
  justify-content: center;
  flex: 1;
`;
export default Confirm;
