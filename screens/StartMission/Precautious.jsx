import React from "react";
import styled from "styled-components";
import { Text, View } from "react-native";

const Precautious = () => {
  const PopUpFrame = styled.View`
    flex: 0.5;
    background-color: ${(props) => props.theme.n400};
    border: 1px solid black;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 20%;
  `;
  return (
    <PopUpFrame>
      <Text>주의사항 팝업</Text>
      <Text>사진 웃기고이상한거 올리지마라..</Text>
      <Text>개인정보어쩌고..</Text>
    </PopUpFrame>
  );
};

export default Precautious;
