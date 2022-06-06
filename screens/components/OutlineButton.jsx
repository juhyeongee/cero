import React from "react";
import { View, Text, Pressable } from "react-native";
import styled from "styled-components";

const OutlineButton = (props) => {
  return (
    <OutlineButtonBG onPress={props.onPress}>
      <OutlineButtonText>{props.text}</OutlineButtonText>
    </OutlineButtonBG>
  );
};
const OutlineButtonBG = styled.Pressable`
  border: 1px solid ${(props) => props.theme.n900};
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

export default OutlineButton;
