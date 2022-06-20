import React, { useState } from "react";
import { View, Modal, Text, Pressable, SafeAreaView } from "react-native";
import styled from "styled-components";

const DoneTaskModal = (props) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.visible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        props.setVisible(!visible);
      }}
    >
      <EmptyContainer onPress={() => props.setVisible(false)} />
      <Container>
        <TitleText>텍스트</TitleText>
        <SubTitleText>2022년 6월 1일</SubTitleText>
        <MissionContentBox />
      </Container>
    </Modal>
  );
};

const MissionContentBox = styled.View`
  border: 1px solid black;
  width: 100%;
  height: 200px;
`;

const EmptyContainer = styled.Pressable`
  flex: 0.5;
  width: 100%;
  height: 100%;
`;

const Container = styled.View`
  padding: 32px;
  border-radius: 20px;
  border: 1px solid black;
  flex: 0.5;
  background-color: ${(props) => props.theme.n100};
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
export default DoneTaskModal;
