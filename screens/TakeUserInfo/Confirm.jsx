import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styled from "styled-components";

const Confirm = (props) => {
  return (
    <BG>
      <Text>당신의 현재 정보가 이게 맞을까요? </Text>
      <Text>
        생일 : {props.birthdayYear}년 {props.birthdayMonth}월
        {props.birthdayDay}일
      </Text>
      <Text>나이 : {props.age}</Text>

      <Text>{props.gender}</Text>
      <Text>{props.nickname}</Text>

      <TouchableOpacity
        onPress={() => {
          props.finishTakeUserInfo();
        }}
      >
        <Text>예 맞아요!</Text>
        {/* 여기서 App.js로 정보를 보내서 setLoggedIn을 구현하고 싶은데요..  */}
      </TouchableOpacity>
      <Button
        title="AsyncStorage비우기"
        onPress={() => {
          AsyncStorage.clear();
          console.log("🥡 asyncStorge 비우기 완료 ");
        }}
      />
    </BG>
  );
};

const BG = styled.View`
  background-color: ${(props) => props.theme.n100};
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Confirm;
