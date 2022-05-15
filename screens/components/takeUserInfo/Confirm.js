import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styled from "styled-components";

const Confirm = () => {
  const birthday = async () => {
    await AsyncStorage.getItem("birthday").then((text) => text);
  };
  const gender = AsyncStorage.getItem("gender");
  const nickname = AsyncStorage.getItem("nickname");
  console.log(birthday);
  return (
    <BG>
      <Text>당신의 현재 정보가 이게 맞을까요? </Text>
      {/* <Text>이름(닉네임): ${nickname}</Text>
      <Text>생년월일: ${birthday}</Text>
      <Text>현재나이: ${birthday}</Text>
      <Text>성별: ${gender}</Text> */}
    </BG>
  );
};

const BG = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Confirm;
