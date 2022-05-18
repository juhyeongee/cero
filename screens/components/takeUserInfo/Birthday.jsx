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
    <BG>
      <Text>OO님께서 태어나신 날은 언제입니까?</Text>
      <DatePicker
        maximumDate={new Date("2022-12-31")}
        mode="date"
        date={birthday}
        onDateChange={setBirthday}
      />
      <TouchableOpacity
        onPress={() => {
          props.saveBirthdayToAsyncStorage(birthday.toString());
          props.setAge(age);
          props.setBirthdayYear(birthdayYear);
          props.setBirthdayMonth(birthdayMonth);
          props.setBirthdayDay(birthdayDay);
          this._swiper.scrollBy(1);
        }}
      >
        <Text>다음</Text>
      </TouchableOpacity>
    </BG>
  );
};

const BG = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default Birthday;
