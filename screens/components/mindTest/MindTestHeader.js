import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";

const HeaderIconCircle = styled.View`
  background-color: ${(props) => props.theme.mainBlackColor};
  width: 25px;
  height: 25px;
  border-radius: 12.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
`;

const HeaderIconCircleText = styled.Text`
  color: ${(props) => props.theme.bgColor};
`;
const HeaderBG = styled.View`
  width: 100%;
  flex: 0.2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const Header = () => {
  return (
    <HeaderBG>
      <HeaderIconCircle>
        <HeaderIconCircleText>1</HeaderIconCircleText>
      </HeaderIconCircle>
      <HeaderIconCircle>
        <HeaderIconCircleText>2</HeaderIconCircleText>
      </HeaderIconCircle>
      <HeaderIconCircle>
        <HeaderIconCircleText>3</HeaderIconCircleText>
      </HeaderIconCircle>
    </HeaderBG>
  );
};

export default Header;
