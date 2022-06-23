import React from "react";
import styled from "styled-components";
import { Text, View, Image } from "react-native";

const Precautious = () => {
  return (
    <Container>
      <GreyBox>
        <InfoIconContainer>
          <Image source={require("cero_/assets/icon/information.png")} />
        </InfoIconContainer>
        <TextContainer>
          <LittleText>하늘이 아닌, 다른 사진을 찍지 말아주세요.</LittleText>
          <LittleText>사진을 찍기 전, 주변을 잘 살펴 주세요.</LittleText>
        </TextContainer>
      </GreyBox>
    </Container>
  );
};

const InfoIconContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
const TextContainer = styled.View`
  flex: 3;
`;
const GreyBox = styled.View`
  flex: 0.4;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  flex-direction: row;
  background-color: ${(props) => props.theme.n500};
  border-radius: 10px; ;
`;
const Container = styled.View`
  margin: 32px;
  flex: 0.4;
  align-items: center;
  width: 100%;
`;

const LittleText = styled.Text`
  font-size: 12px;
  color: ${(props) => props.theme.n900};
`;
export default Precautious;
