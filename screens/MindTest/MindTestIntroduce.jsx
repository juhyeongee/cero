import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";
import questionObj from "../../constants/Qustions";
import { Layout, MainText, SubText, BigGreenButton } from "../components";

const MindTestIntroduce = (props) => {
  return (
    <Layout center={true}>
      <MainText>정말 잘하셨어요! </MainText>
      <SubText>
        본격적인 여정을 시작하기 전, OO님의 마음 상태를 알아보기 위해 간단한
        질문을 준비했어요.
      </SubText>
      <View style={{ height: "30%" }}></View>
      <BigGreenButton text="다음" onPress={props.setIntroduceBtn} />
    </Layout>
  );
};

export default MindTestIntroduce;
