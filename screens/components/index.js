import React, { useState } from "react";
import { View, SafeAreaView } from "react-native";
import styled from "styled-components";

export { default as BigGreenButton } from "./BigGreenButton";
export { default as OutlineButton } from "./OutlineButton";
export { default as OnOffButton } from "./OnOffButton";

export const Layout = (props) => {
  let centered = props.center === true;

  const Container = styled.View`
    background-color: ${(props) => props.theme.n50};
    flex: 1;
    justify-content: center;
    padding: 32px;
  `;
  let SafeArea = styled.SafeAreaView`
    justify-content: ${(props) => (props.center ? "center" : "flex-start")};
    align-items: ${(props) => (props.center ? "center" : "flex-start")};
    flex: 1;
  `;

  return (
    <Container>
      <SafeArea center={props.center} alignCenter={props.alignCenter}>
        {props.children}
      </SafeArea>
    </Container>
  );
};

export const MainText = styled.Text`
  color: ${(props) => (props.color ? props.color : props.theme.n900)};
  font-family: ${(props) => props.theme.thickFont};
  margin-bottom: 26px;
  font-size: 20px;
`;

export const SubText = styled.Text`
  color: ${(props) => (props.color ? props.color : props.theme.n900)};
  font-family: ${(props) => props.theme.mainFont};
  margin-bottom: 10px;
  font-size: 14px;
`;
