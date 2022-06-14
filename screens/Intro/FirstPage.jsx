import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import styled from "styled-components";
import AutoHeightImage from "react-native-auto-height-image";

const FirstPage = (props) => {
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
      <IntroText>여기까지 오시느라 힘드셨죠?</IntroText>
    </BG>
  );
};

export default FirstPage;
