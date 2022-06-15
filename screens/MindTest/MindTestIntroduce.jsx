import React, { useState } from "react";
import { View, Text, Pressable, Modal, Image } from "react-native";
import styled from "styled-components";
import questionObj from "../../constants/Qustions";
import { Layout, MainText, SubText, BigGreenButton } from "../components";
import IntroModal from "./IntroModal";

const MindTestIntroduce = (props) => {
  const [mindSeedModalVisible, setMindSeedModalVisible] = useState(false);
  return (
    <>
      <Layout center={true}>
        <MainText>정말 잘하셨어요! </MainText>

        <View style={{ height: "30%" }}></View>
      </Layout>
      <IntroModal
        setIntroduceBtn={props.setIntroduceBtn}
        setMindSeedModalVisible={setMindSeedModalVisible}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={mindSeedModalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          props.setVisible(!visible);
        }}
      >
        <EmptyContainer />
        <Container>
          <Image source={require("cero_/assets/seedBox.png")}></Image>
          <MainText>마음 씨앗 만들기</MainText>
          <SubText>20개 질문, 평균 5분 소요</SubText>
          <SubText>
            지난 일주일을 가만히 돌아보세요. 온전히 나에게 집중할 수 있는 편안한
            환경에서 함께해시길 추천해요.
          </SubText>

          <BigGreenButton
            text="계속하기"
            onPress={() => props.setShowIntroduceScreen(false)}
          />
        </Container>
      </Modal>
    </>
  );
};

const EmptyContainer = styled.Pressable`
  flex: 0.6;
  width: 100%;
  height: 100%;
`;

const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 0.4;
  padding: 32px;
  border-radius: 20px;
  border: 1px solid black;
  background-color: ${(props) => props.theme.n100};
`;

export default MindTestIntroduce;
