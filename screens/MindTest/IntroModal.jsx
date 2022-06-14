import React, { useState } from "react";
import { View, Text, Pressable, Modal } from "react-native";
import styled from "styled-components";

const IntroModal = (props) => {
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
    <ShortModal>
      <ModalText>{text[pageNumber]}</ModalText>
      {pageNumber !== text.length - 1 ? (
        <NextButton onPress={() => setPageNumber(pageNumber + 1)}>
          <ButtonText>클릭하여 다음으로</ButtonText>
        </NextButton>
      ) : (
        <NextButton onPress={() => props.setMindSeedModalVisible(true)}>
          <ButtonText>클릭해서 다음으로</ButtonText>
        </NextButton>
      )}
    </ShortModal>
  );
};

const ShortModal = styled.View`
  justify-content: space-between;
  background-color: ${(props) => props.theme.n300};
  position: absolute;
  bottom: 0px;
  height: 27%;
  width: 100%;
  padding: 10%;
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

export default IntroModal;
