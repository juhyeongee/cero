import React, { useRef, useState } from "react";
import { View, Text, Image, Pressable, TouchableOpacity } from "react-native";
import styled from "styled-components";
import Icon from "react-native-vector-icons/FontAwesome";
import CheckPrivacyPolicy from "./CheckPrivacyPolicy";

const PrivacyPolicy = ({ navigation: { navigate } }) => {
  const moveToDetail = () => {
    navigate("PolicyDetail");
  };
  return (
    <Container>
      <LogoContainer>
        <Image source={require("/Users/a12/teamCero/cero/logo.png")}></Image>
        <ServiceTitle>새로</ServiceTitle>
      </LogoContainer>
      <CheckBoxes>
        <CheckPrivacyPolicy
          moveToDetail={moveToDetail}
          content="약관 전체 동의"
        />
        <Bar />
        <CheckPrivacyPolicy
          moveToDetail={moveToDetail}
          content="(필수) 이메일 정보 제공 동의"
        />
        <CheckPrivacyPolicy content="(선택) 말걸기 알림 받기 동의" />
        <CheckPrivacyPolicy content="(선택) 이벤트 및 광고 수신동의" />
        <StartBtn>
          <StartBtnText>시작하기</StartBtnText>
        </StartBtn>
      </CheckBoxes>
    </Container>
  );
};

const LogoContainer = styled.View`
  flex: 0.3;
`;
const Container = styled.View`
  background-color: ${(props) => props.theme.n100};
  flex: 1;
  justify-content: center;
  padding: 40px;
`;

const ServiceTitle = styled.Text`
  font-family: ${(props) => props.theme.thickFont};
  font-size: 30px;
  margin-top: 15px;
`;
const Bar = styled.View`
  background-color: ${(props) => props.theme.n700};
  width: 100%;
  height: 1px;
  margin-top: 10px;
  margin-bottom: 10px;
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

const CheckBoxes = styled.View`
  flex: 0.2;
`;

const StartBtnText = styled.Text`
  font-family: ${(props) => props.theme.mainFont};
  font-size: 16px;
  color: ${(props) => props.theme.n0};
`;

export default PrivacyPolicy;
