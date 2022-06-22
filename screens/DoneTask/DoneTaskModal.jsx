import React, { useState } from "react";
import { View, Modal, Text, Pressable, SafeAreaView } from "react-native";
import styled from "styled-components";

const DoneTaskModal = (props) => {
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.isModalActive}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          props.setIsModalActive(!isModalActive);
        }}
      >
        <EmptyContainer onPress={() => props.setIsModalActive(false)} />
        <Container>
          <GrayBar></GrayBar>
          <View style={{ width: "100%" }}>
            <TitleText>텍스트</TitleText>
            <SubTitleText>2022년 6월 1일</SubTitleText>
          </View>
          <MissionContentBox />
        </Container>
      </Modal>
    </>
  );
};

const MissionContentBox = styled.View`
  border: 1px solid black;
  width: 100%;
  height: 200px;
`;

const EmptyContainer = styled.Pressable`
  flex: 1;
  width: 100%;
  height: 100%;
  opacity: 0.5;
`;

const Container = styled.View`
  align-items: center;
  flex: 1;
  position: absolute;
  width: 100%;
  bottom: 0px;
  padding-top: 16px;
  padding-right: 32px;
  padding-left: 32px;
  border-radius: 20px;
  border: 1px solid black;
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

const GrayBar = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.n700};
  width: 60px;
  border-radius: 3px;
  height: 5px;
`;
export default DoneTaskModal;
