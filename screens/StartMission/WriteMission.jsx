import React, { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import styled from "styled-components";

const WriteMission = (props) => {
  return (
    <WriteContentsContainer>
      <SubmitTextInput
        placeholder="여기에 적어주세요"
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="next"
        value={props.letter}
        placeholderTextColor={"rgba(0, 0, 0, 0.3)"}
        onChangeText={(text) => {
          console.log(text);
          props.setLetter(text);
        }}
      />
    </WriteContentsContainer>
  );
};

const WriteContentsContainer = styled.View`
  flex: 1;
  padding: 32px;
  width: 100%;
  border: 1px solid;
  border-color: ${(props) => props.theme.n200};
  background-color: ${(props) => props.theme.n0};
  flex: 4;
  height: 80%;
`;
const SubmitTextInput = styled.TextInput`
  font-family: ${(props) => props.theme.mainFont};
  width: 100%;
  font-size: 16px;
`;

export default WriteMission;
