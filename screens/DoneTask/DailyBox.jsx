import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components";

const DailyBox = () => {
  const [done, setDone] = useState(false); //흠 근데, 이건 전체 커리큘럼에 따른 전체 상태로 처리해줘야할 것 같은데요?
  const Box = styled.Pressable`
    align-items: center;
    justify-content: center;
    padding: 10px;
    background-color: ${(props) =>
      done ? props.theme.n800 : props.theme.n400};
    width: 32%;
    height: 70px;
    border-radius: 8px;
  `;

  const DayTitle = styled.Text`
    font-family: ${(props) => props.theme.mainFont};
    color: ${(props) => (done ? props.theme.n400 : props.theme.n800)};
  `;

  const DaySubTitle = styled.Text`
    font-family: ${(props) => props.theme.thinFont};
    color: ${(props) => (done ? props.theme.n400 : props.theme.n800)};
  `;

  return (
    <Box onPress={() => setDone(!done)}>
      <DayTitle>01</DayTitle>
      <DaySubTitle>하늘 사진 찍기</DaySubTitle>
    </Box>
  );
};

export default DailyBox;
