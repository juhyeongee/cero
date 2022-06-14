import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import styled from "styled-components";
import AutoHeightImage from "react-native-auto-height-image";

const ThirdPage = (props) => {
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
      <IntroText>이곳에선 모두가</IntroText>
      <IntroText>화분에 마음을 담아,</IntroText>
      <IntroText>자신만의 씨앗을 틔웁니다.</IntroText>
      <PlantContainer>
        <AutoHeightImage
          width={300}
          source={require("cero_/assets/thirdIntroPot.png")}
        ></AutoHeightImage>
      </PlantContainer>
    </BG>
  );
};

export default ThirdPage;
