import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import styled from "styled-components";
import AutoHeightImage from "react-native-auto-height-image";

const FourthPage = (props) => {
  const BG = styled.View`
    background-color: ${(props) => props.theme.n900};
    flex: 1;
    justify-content: center;
    align-items: center;
  `;

  const IntroText = styled.Text`
    font-family: ${(props) => props.theme.mainFont};
    color: white;
    font-size: 20px;
    margin: 5px;
  `;

  const PlantContainer = styled.View`
    position: absolute;
    bottom: 0px;
  `;
  return (
    <BG>
      <IntroText>14일 후,</IntroText>
      <IntroText>당신의 화분엔</IntroText>
      <IntroText>어떤 꽃이 자라게 될까요?</IntroText>
      <PlantContainer>
        <AutoHeightImage
          width={300}
          source={require("cero_/assets/fourthIntroPot.png")}
        ></AutoHeightImage>
      </PlantContainer>
    </BG>
  );
};

export default FourthPage;
