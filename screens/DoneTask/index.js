import React, { useState } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components";

const DoneTask = () => {
  return (
    <Container>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <TitleText>지난 할 일</TitleText>
          <SubTitleText>지금까지의 여정을 살펴보세요.</SubTitleText>
        </View>
        <View style={{ flex: 3 }}>
          <Row>
            <DailyBox></DailyBox>
            <DailyBox></DailyBox>
            <DailyBox></DailyBox>
          </Row>
          <Row>
            <DailyBox></DailyBox>
            <DailyBox></DailyBox>
            <DailyBox></DailyBox>
          </Row>
          <Row>
            <DailyBox></DailyBox>
            <DailyBox></DailyBox>
            <DailyBox></DailyBox>
          </Row>
        </View>
      </SafeAreaView>
    </Container>
  );
};

const Container = styled.View`
  background-color: ${(props) => props.theme.n100};
  flex: 1;
  justify-content: center;
  padding: 32px;
`;

const Row = styled.View`
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  height: 70px;
  margin: 3px;
`;

const TitleText = styled.Text`
  color: ${(props) => props.theme.n900};
  font-family: ${(props) => props.theme.thickFont};
  font-size: 20px;
`;

const SubTitleText = styled.Text`
  color: ${(props) => props.theme.n900};
  font-family: ${(props) => props.theme.mainFont};
  font-size: 14px;
`;

const DailyBox = () => {
  const Box = styled.View`
    background-color: ${(props) => props.theme.n800};
    width: 32%;
    height: 70px;
    border-radius: 8px;
  `;
  return (
    <Box>
      <Text></Text>
    </Box>
  );
};

export default DoneTask;
