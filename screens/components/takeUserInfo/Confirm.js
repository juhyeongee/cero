import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styled from "styled-components";

const Confirm = (props) => {
  // const func = () => {
  //   console.log(props.finishTakeUserInfo(false)); // return type => 함수의 실행결과(여기서는 void)
  //   console.log(props.finishTakeUserInfo); // return type =>function
  //   console.log(() => {
  //     props.finishTakeUserInfo(false);
  //   }); // return type=> function,
  // };
  //2번째 함수도 3번째 함수도 모두 정상적으로 동작함. 아래는 그냥 파라미터 유무 차이임.
  //그리고 지금 마인드테스트가 끝났는지 체크하는 함수를  보내줬는데, 이게 on off가 아니라 종료되면 끝인 변수니까
  //종료했다는 의미의 함수를 보내주는 것이 직관적이기도 하고, 파라미터가 필요한 함수인지 아닌지 헷갈릴 수 있다 나중에.
  //그러면 setIsFinisheD
  return (
    <BG>
      <Text>당신의 현재 정보가 이게 맞을까요? </Text>
      <Text>{props.birthday}</Text>
      <Text>{props.gender}</Text>
      <Text>{props.nickname}</Text>

      <TouchableOpacity
        onPress={() => {
          props.finishTakeUserInfo;
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
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Confirm;
