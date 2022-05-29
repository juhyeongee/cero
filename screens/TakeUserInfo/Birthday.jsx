import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styled from "styled-components";
import DatePicker from "react-native-date-picker";

const Birthday = (props) => {
  const [birthday, setBirthday] = useState(new Date());

  const age = new Date().getFullYear() - birthday.getFullYear();

  const birthdayYear = birthday.getFullYear();
  const birthdayMonth = birthday.getMonth() + 1;
  const birthdayDay = birthday.getDate();

  return (
    <>
      <Container>
        <QuestionText>{props.nickname}님의 나이를 알려주세요. </QuestionText>
        <SubQuestionText>연령대 별 추천을 드리기 위함이예요.</SubQuestionText>
        <DatePicker
          maximumDate={new Date("2022-12-31")}
          mode="date"
          date={birthday}
          onDateChange={setBirthday}
        />
        <NextBtn
          onPress={() => {
            props.saveBirthdayToAsyncStorage(birthday.toString());
            props.setAge(age);
            props.setBirthdayYear(birthdayYear);
            props.setBirthdayMonth(birthdayMonth);
            props.setBirthdayDay(birthdayDay);
            this._swiper.scrollBy(1);
          }}
        >
          <NextBtnText>다음</NextBtnText>
        </NextBtn>
      </Container>
    </>
  );
};

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

const NextBtn = styled.Pressable`
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme.n900};
  border-radius: 10px;
  height: 48px;
  padding: 10px 20px;
  margin: 10px;
`;

const NextBtnText = styled.Text`
  font-family: ${(props) => props.theme.mainFont};
  font-size: 16px;
  color: ${(props) => props.theme.n0};
`;

export default Birthday;
