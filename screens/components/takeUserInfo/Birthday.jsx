import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styled from "styled-components";
import DatePicker from "react-native-date-picker";

const Birthday = (props) => {
  const [birthday, setBirthday] = useState(new Date());
  const todayDateYear = new Date().getFullYear();
  const todayDateMonth = new Date().getMonth();
  const todayDateDay = new Date().getDay();

  let date = new Date(todayDateYear, todayDateMonth, todayDateDay);
  console.log(date);
  return (
    <BG>
      <Text>OO님께서 태어나신 날은 언제입니까?</Text>
      <DatePicker
        maximumDate={new Date()}
        mode="date"
        date={birthday}
        onDateChange={setBirthday}
        format="YYYY-MM-DD"
      />
      <TouchableOpacity
        onPress={() => {props.saveBirthdayToAsyncStorage(birthday.toString());
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
