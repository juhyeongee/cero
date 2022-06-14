import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import styled from "styled-components";
import AutoHeightImage from "react-native-auto-height-image";

const SecondPage = (props) => {
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

  const WindowContainer = styled.View`
    position: absolute;
  `;
  return (
    <BG>
      <IntroText>혼자가 된 사람들을 위한</IntroText>
      <IntroText>비밀의 방에 오신 것을 환영합니다.</IntroText>
      <WindowContainer>
        <AutoHeightImage
          width={300}
          source={require("cero_/assets/window.png")}
        ></AutoHeightImage>
      </WindowContainer>
      <PlantContainer>
        <AutoHeightImage
          width={300}
          source={require("cero_/assets/secondIntroPot.png")}
        ></AutoHeightImage>
      </PlantContainer>
    </BG>
  );
};

export default SecondPage;
