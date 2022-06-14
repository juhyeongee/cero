import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import styled from "styled-components";
import AutoHeightImage from "react-native-auto-height-image";

const FifthPage = (props) => {
  const BG = styled.View`
    background-color: ${(props) => props.theme.n200};
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
      <IntroText>어서오세요.</IntroText>
      <IntroText>지금은 새로 시작할 시간입니다</IntroText>
      <PlantContainer>
        <AutoHeightImage
          width={300}
          source={require("cero_/assets/fifthIntroPot.png")}
        ></AutoHeightImage>
      </PlantContainer>
    </BG>
  );
};

export default FifthPage;
