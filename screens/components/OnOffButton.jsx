import styled from "styled-components";
import React, { useState } from "react";

const OnOffButton = (props) => {
  const checked = props.name === props.checkedBtnName;
  const BtnBG = styled.Pressable`
    justify-content: center;
    width: 100%;
    background-color: ${(props) =>
      checked ? props.theme.n900 : props.theme.n400};
    border-radius: 10px;
    height: 48px;
    padding: 10px 20px;
    margin-bottom: 10px;
  `;

  const BtnText = styled.Text`
    font-family: ${(props) => props.theme.mainFont};
    font-size: 16px;
    color: ${(props) => (checked ? props.theme.n100 : props.theme.n900)};
  `;

  return (
    <BtnBG onPress={props.onPress}>
      <BtnText>{props.text}</BtnText>
    </BtnBG>
  );
};

export default OnOffButton;
