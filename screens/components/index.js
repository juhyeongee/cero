import React, { useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components";

export { default as BigBlackButton } from "./BigBlackButton";
export { default as OutlineButton } from "./OutlineButton";
export { default as OnOffButton } from "./OnOffButton";

export const Container = styled.View`
  background-color: ${(props) => props.theme.n100};
  flex: 1;
  justify-content: center;
  padding: 32px;
`;

export const Layout = (props) => {
  return (
    <Container>
      <SafeAreaView style={{ flex: 1 }}>{props.children}</SafeAreaView>
    </Container>
  );
};
