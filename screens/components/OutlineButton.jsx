import React, { useState } from "react";
import { View, Text } from "react-native";
import styled from "styled-components";

export const OutlineButton = (props) => {
  const OutlineButtonBG = styled.Pressable`
    border: 1px solid ${(props) => props.theme.n700};
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: ${(props) => props.theme.n100};
    border-radius: 10px;
    height: 48px;
    padding: 10px 20px;
    margin-top: 10px;
  `;
  const OutlineButtonText = styled.Text`
    font-family: ${(props) => props.theme.mainFont};
    font-size: 16px;
    color: ${(props) => props.theme.n900};
  `;
  return (
    <OutlineButtonBG onPress={props.onPress}>
      <OutlineButtonText>{props.text}</OutlineButtonText>
    </OutlineButtonBG>
  );
};
