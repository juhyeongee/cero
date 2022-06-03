import React, { useState } from "react";
import { View, Text, Image, Pressable, TouchableOpacity } from "react-native";
import styled from "styled-components";
import CheckPrivacyPolicy from "./CheckPrivacyPolicy";

const CheckBoxes = (props) => {
  return (
    <BG>
      <CheckPrivacyPolicy
        moveToDetail={props.moveToDetail}
        text="약관 전체 동의"
      />
      <Bar />
      <CheckPrivacyPolicy
        moveToDetail={props.moveToDetail}
        text="(필수) 이메일 정보 제공 동의"
      />
      <CheckPrivacyPolicy
        moveToDetail={props.moveToDetail}
        text="(선택) 말걸기 알림 받기 동의"
      />
      <CheckPrivacyPolicy
        moveToDetail={props.moveToDetail}
        text="(선택) 이벤트 및 광고 수신동의"
      />
      <StartBtn>
        <StartBtnText>시작하기</StartBtnText>
      </StartBtn>
    </BG>
  );
};

const BG = styled.View`
  flex: 1;
`;

const StartBtn = styled.Pressable`
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${(props) => props.theme.n900};
  border-radius: 10px;
  height: 48px;
  padding: 10px 20px;
  margin: 10px;
  margin-top: 30px;
`;

const StartBtnText = styled.Text`
  font-family: ${(props) => props.theme.mainFont};
  font-size: 16px;
  color: ${(props) => props.theme.n0};
`;
const Bar = styled.View`
  background-color: ${(props) => props.theme.n700};
  width: 100%;
  height: 1px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export default CheckBoxes;
