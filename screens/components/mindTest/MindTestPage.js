import React, { useState, useEffect } from "react";
import { View } from "react-native";

import styled from "styled-components";
import Body from "./MindTestBody";
import Tail from "./MindTestTail";
import Header from "./MindTestHeader";

const Background = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: ${(props) => props.theme.bgColor};
`;

const MindTestPage = (props) => {
  return (
    <Background>
      <Header />
      <Body pageNumber={props.pageNumber} />
      <Tail
        submitMindtest={props.submitMindtest}
        pageNumber={props.pageNumber}
      />
    </Background>
  );
};

export default MindTestPage;
