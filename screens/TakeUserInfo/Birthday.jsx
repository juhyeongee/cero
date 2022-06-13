import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styled from "styled-components";
// import DatePicker from "react-native-date-picker";
import { BigGreenButton, Layout, MainText, SubText } from "../components";

const Birthday = (props) => {
  const [birthday, setBirthday] = useState(new Date());
  const age = new Date().getFullYear() - birthday.getFullYear();
  const birthdayYear = birthday.getFullYear();
  const birthdayMonth = birthday.getMonth() + 1;
  const birthdayDay = birthday.getDate();

  return (
    <Layout>
      <ContentContainer>
        <MainText>{props.nickname}님의 나이를 알려주세요. </MainText>
        <SubText>연령대 별 추천을 드리기 위함이예요.</SubText>
        {/* <DatePicker
          maximumDate={new Date("2022-12-31")}
          mode="date"
          date={birthday}
          onDateChange={setBirthday}
        /> */}
        <GrayBox>
          <AgeText>만 {age}세</AgeText>
        </GrayBox>
      </ContentContainer>
      <ButtonContainer>
        <BigGreenButton
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
      </ButtonContainer>
    </Layout>
  );
};

const AgeText = styled.Text`
  color: ${(props) => props.theme.n900};
  font-family: ${(props) => props.theme.mainFont};
  font-size: 20px;
`;
const GrayBox = styled.View`
  border-radius: 14px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.n700};
  width: 150px;
  height: 50px;
`;
const ContentContainer = styled.View`
  justify-content: center;
  flex: 2;
`;
const ButtonContainer = styled.View`
  justify-content: center;
  flex: 1;
`;

export default Birthday;
