import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";
import questionObj from "../../constants/Qustions";

const MindTestIntroduce = (props) => {
  const BG = styled.View`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  return (
    <BG>
      <Text>
        본격적인 여정을 시작하기 전, OO님의 마음 상태를 알아보기 위해 간단한
        질문을 준비했어요.
      </Text>
      <TouchableOpacity onPress={props.setIntroduceBtn}>
        <Text>다음</Text>
      </TouchableOpacity>
    </BG>
  );
};
export default MindTestIntroduce;
