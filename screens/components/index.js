import React, { useState } from "react";
import { View, SafeAreaView } from "react-native";
import styled from "styled-components";

export { default as BigBlackButton } from "./BigBlackButton";
export { default as OutlineButton } from "./OutlineButton";
export { default as OnOffButton } from "./OnOffButton";

export const Layout = (props) => {
  const Container = styled.View`
    background-color: ${(props) => props.theme.n100};
    flex: 1;
    justify-content: center;
    padding: 32px;
  `;
  return (
    <Container>
      <SafeAreaView style={{ flex: 1 }}>{props.children}</SafeAreaView>
    </Container>
  );
};

export const MainText = styled.Text`
  color: ${(props) => props.theme.n900};
  font-family: ${(props) => props.theme.thickFont};
  margin-bottom: 32px;
  font-size: 20px;
`;

export const SubText = styled.Text`
  color: ${(props) => props.theme.n900};
  font-family: ${(props) => props.theme.thinFont};
  margin-bottom: 32px;
  font-size: 14px;
`;
