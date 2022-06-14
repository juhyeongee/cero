import React, { useState } from "react";
import { View, Text, TextInput, Button, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styled from "styled-components";
import { OnOffButton, Layout } from "../components";

const Gender = (props) => {
  const [checkedBtnName, setCheckedBtnName] = useState(0);

  const PressandSaveGender = (gender) => {
    props.saveGenderToAsyncStorage(gender);
    setTimeout(() => this._swiper.scrollBy(1), 500);
    setCheckedBtnName(gender);
  };

  return (
    <Layout>
      <ContentContainer>
        <QuestionText>{props.nickname}님의 성별을 알려주세요 </QuestionText>
        {/* <SubQuestionText>민감하다면 알려주지 않아도 괜찮아요</SubQuestionText> */}
      </ContentContainer>
      <ButtonContainer>
        <OnOffButton
          checkedBtnName={checkedBtnName}
          name="여성"
          text="여자"
          onPress={() => {
            PressandSaveGender("여성");
          }}
        />

        <OnOffButton
          checkedBtnName={checkedBtnName}
          text="남자"
          name="남성"
          onPress={() => {
            PressandSaveGender("남성");
          }}
        />
        <OnOffButton
          checkedBtnName={checkedBtnName}
          text="기타"
          name="기타"
          onPress={() => {
            PressandSaveGender("기타");
          }}
        />
        <OnOffButton
          checkedBtnName={checkedBtnName}
          name="비밀"
          text="말하지 않을래요"
          onPress={() => {
            PressandSaveGender("비밀");
          }}
        />
      </ButtonContainer>
    </Layout>
  );
};

const ContentContainer = styled.View`
  justify-content: center;
  flex: 1;
`;
const ButtonContainer = styled.View`
  flex: 2;
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

export default Gender;
