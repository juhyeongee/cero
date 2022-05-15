import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styled from "styled-components";

const Nickname = () => {
  const [nickname, setNickname] = useState();

  const sendInfo = () => {
    AsyncStorage.setItem("nickname", nickname);
    AsyncStorage.getItem("nickname").then((text) => console.log(text));
  };

  return (
    <BG>
      <Text>앞으로 어떻게 불러드릴까요?</Text>
      <TextInput
        placeholder="8글자까지 입력하실 수 있어요"
        onChangeText={(text) => setNickname(text)}
      ></TextInput>

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

export default Nickname;
