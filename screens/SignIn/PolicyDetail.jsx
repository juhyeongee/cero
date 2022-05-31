import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  TextInput,
  ScrollView,
  SafeAreaView,
  Image,
} from "react-native";
import styled from "styled-components";
import { policyText } from "../../constants/PrivatePolicyText";

const PolicyDetail = ({ navigation: { navigate } }) => {
  return (
    <Container>
      <SafeAreaView style={{ flex: 1 }}>
        <ArrowContainer>
          <Pressable onPress={() => navigate("PrivacyPolicy")}>
            <Image
              source={require("/Users/a12/teamCero/cero/left-arrow.png")}
            ></Image>
          </Pressable>
        </ArrowContainer>
        <QuestionText>이용약관 동의</QuestionText>
        <TextScrollView>
          <SubQuestionText>{policyText.text}</SubQuestionText>
        </TextScrollView>
      </SafeAreaView>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.n100};
  padding: 32px;
`;

const ArrowContainer = styled.View`
  justify-content: center;
  flex: 1;
  height: 10px;
  width: 20px;
`;

const TextScrollView = styled.ScrollView`
  flex: 10;
  height: 300px;
`;

const QuestionText = styled.Text`
  flex: 0.5;
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
//질문 flex안먹는거 진짜 개오바다. 분명 부모 밑에 자식들 flex나눠 가지는 거 맞는데

export default PolicyDetail;
