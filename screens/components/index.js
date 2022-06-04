import React, { useState } from "react";
import { View, SafeAreaView } from "react-native";
import styled from "styled-components";

export { default as BigBlackButton } from "./BigBlackButton";
export { default as OutlineButton } from "./OutlineButton";
export { default as OnOffButton } from "./OnOffButton";

export const Layout = (props) => {
  let centered = props.center === true;

  return (
    <Container>
      <SafeArea center={props.center} style={{ flex: 1 }}>
        {props.children}
      </SafeArea>
    </Container>
  );
};

const Container = styled.View`
  background-color: ${(props) => props.theme.n100};
  flex: 1;
  justify-content: center;
  padding: 32px;
`;

let SafeArea = styled.SafeAreaView`
  justify-content: ${(props) => (props.center ? "center" : "flex-start")};
  flex: 1;
`;

export const MainText = styled.Text`
  color: ${(props) => props.theme.n900};
  font-family: ${(props) => props.theme.thickFont};
  margin-bottom: 32px;
  font-size: 20px;
`;

export const SubText = styled.Text`
  color: ${(props) => props.theme.n900};
  font-family: ${(props) => props.theme.mainFont};
  margin-bottom: 32px;
  font-size: 14px;
`;
