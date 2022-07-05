import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import styled from "styled-components";
import { Layout } from "../components";
import LoadingScreen from "./LoadingScreen";
import { MindTextIntroductionText } from "../../properties/property";
const MindTestResult = (props) => {
  const [pageNumber, setPageNumber] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  //그냥 갑자기 이렇게도 쓰고싶어서..
  const MindTextIntroductionText = [
    "효준님의 마음은 지금 어둡고 외로워 보이네요.",
    "평소에는 괜찮은 것 같다가도, 이따금 가슴이 답답하고 가라앉는 느낌이 드실 거예요.",
    "괜찮아요.여기 효준님의 외로움을 담은 마음 씨앗을 받으세요.",
    "앞으로 14일 동안, 효준님이 이 씨앗을 키우게 됩니다.",
    "14일 후, 이 화분엔 어떤 꽃이 자라게 될까요?",
  ];

  useEffect(() => setTimeout(() => setIsLoading(false), 3000), []);
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <Layout>
          <TextContainer>
            <SubText>{MindTextIntroductionText[pageNumber - 1]}</SubText>
            <CurrText>{MindTextIntroductionText[pageNumber]}</CurrText>
          </TextContainer>
          <ImageContainer>
            <Image
              source={require("cero_/assets/seedBoxWithShadow.png")}
            ></Image>
          </ImageContainer>
          {pageNumber !== MindTextIntroductionText.length - 1 ? (
            <NextButton onPress={() => setPageNumber(pageNumber + 1)}>
              <ButtonText>클릭하여 다음으로</ButtonText>
            </NextButton>
          ) : (
            <NextButton>
              <ButtonText onPress={() => props.setIsSeedIntroduced(true)}>
                클릭해서 다음으로
              </ButtonText>
            </NextButton>
          )}
        </Layout>
      )}
    </>
  );
};

const TextContainer = styled.View`
  justify-content: center;
  width: 100%;
  flex: 6;
`;
const ImageContainer = styled.View`
  width: 100%;
  align-items: center;
  flex: 6;
`;

const CurrText = styled.Text`
  font-family: ${(props) => props.theme.mainFont};
  font-size: 18px;
`;

const SubText = styled.Text`
  color: grey;
  font-family: ${(props) => props.theme.mainFont};
  font-size: 18px;
`;

const NextButton = styled.Pressable`
  width: 100%;
  flex-direction: row-reverse;
  flex: 1;
`;

const ButtonText = styled.Text`
  font-family: ${(props) => props.theme.mainFont};
  font-size: 16px;
  color: ${(props) => props.theme.mainGreen};
`;

export default MindTestResult;
