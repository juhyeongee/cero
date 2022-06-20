import React, { useState } from "react";
import { View, Text, Pressable, Modal, Image } from "react-native";
import styled from "styled-components";

const IntroMessage = (props) => {
  const [pageNumber, setPageNumber] = useState(0);

  //그냥 갑자기 이렇게도 쓰고싶어서..
  const text = [
    "좋아요, 지금부터 효준님의 마음을 살펴보겠습니다.",
    "다음 질문에 답변해주시면, 효준님의 마음이 씨앗이 되어 화분에 심어지게 됩니다.",
    "앞으로 14일간,  이 씨앗을 멋지게 키워주세요.",
    "씨앗이 움을 틔울수록, 효준님의 마음도 점점 근사하게 성장하게 될 거예요.",
  ];
  console.log("페이지넘버 :" + pageNumber);
  return (
    <Container>
      <ModalText>{text[pageNumber]}</ModalText>
      {pageNumber !== text.length - 1 ? (
        <NextButton onPress={() => setPageNumber(pageNumber + 1)}>
          <Image source={require("cero_/assets/arrowTriangle.png")} />
        </NextButton>
      ) : (
        <NextButton onPress={() => props.setMindSeedModalVisible(true)}>
          <ButtonText> 다음으로</ButtonText>
        </NextButton>
      )}
    </Container>
  );
};

const Container = styled.View`
  border-radius: 10px;
  position: absolute;
  bottom: 60%;
  flex: 0.3;
  justify-content: space-between;
  background-color: ${(props) => props.theme.n50};
  height: 20%;
  width: 80%;
  padding: 10%;
  box-shadow: 0.01px 0.01px 10px grey;
`;

const ModalText = styled.Text`
  font-family: ${(props) => props.theme.mainFont};
  font-size: 18px;
`;

const NextButton = styled.Pressable`
  flex-direction: row-reverse;
`;

const ButtonText = styled.Text`
  font-family: ${(props) => props.theme.mainFont};
  font-size: 16px;
  color: ${(props) => props.theme.mainGreen};
`;

export default IntroMessage;
