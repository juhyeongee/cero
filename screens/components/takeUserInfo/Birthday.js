import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styled from "styled-components";
import DatePicker from "react-native-date-picker";

const Birthday = () => {
  const [birthday, setBirthday] = useState(new Date());

  const sendInfo = () => {
    console.log(birthday);
    console.log(typeof birthday);
    AsyncStorage.setItem("birthday", JSON.stringify(birthday));
    AsyncStorage.getItem("birthday").then((yes) => console.log(yes));
  };

  return (
    <BG>
      <Text>OO님께서 태어나신 날은 언제입니까?</Text>
      <DatePicker date={birthday} onDateChange={setBirthday} />
      <TouchableOpacity onPress={sendInfo}>
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
