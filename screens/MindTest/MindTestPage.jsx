import React, { useState, useEffect } from "react";
import { View } from "react-native";

import styled from "styled-components";
import Body from "./MindTestBody";
import Tail from "./MindTestTail";

const Background = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: ${(props) => props.theme.n100};
`;

const Container = styled.View`
  width: ${(props) => props.theme.windowWidth};
  background-color: ${(props) => props.theme.n100};
  justify-content: center;
  padding: 32px;
  flex: 1;
  display: flex;
`;

const MindTestPage = (props) => {
  return (
    <Container>
      <Body pageNumber={props.pageNumber} />
      <Tail
        submitMindtest={props.submitMindtest}
        pageNumber={props.pageNumber}
      />
    </Container>
  );
};

export default MindTestPage;
