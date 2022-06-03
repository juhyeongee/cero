import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styled from "styled-components";
import DatePicker from "react-native-date-picker";
import { Container, BigBlackButton } from "../components";

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
        <BigBlackButton
          onPress={() => {
            props.saveBirthdayToAsyncStorage(birthday.toString());
            props.setAge(age);
            props.setBirthdayYear(birthdayYear);
            props.setBirthdayMonth(birthdayMonth);
            props.setBirthdayDay(birthdayDay);
            this._swiper.scrollBy(1);
          }}
          text="다음"
        />
      </Container>
    </>
  );
};

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

export default Birthday;
