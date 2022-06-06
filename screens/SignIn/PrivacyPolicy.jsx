import React, { useRef, useState } from "react";
import { View, Text, Image, Pressable, TouchableOpacity } from "react-native";
import styled from "styled-components";
import CheckPrivacyPolicy from "./CheckPrivacyPolicy";
import CheckBoxes from "./CheckBoxes";
import { Container, Layout } from "../components";

const PrivacyPolicy = ({ navigation: { navigate } }) => {
  const moveToDetail = () => {
    navigate("PolicyDetail");
  };
  return (
    <Layout>
      <LogoContainer>
        <Image source={require("/Users/a12/teamCero/cero/logo.png")}></Image>
        <ServiceTitle>새로</ServiceTitle>
        <Pressable onPress={() => navigate("SignIn")}>
          <Text>버튼</Text>
        </Pressable>
      </LogoContainer>
      <CheckBoxes moveToDetail={moveToDetail} />
    </Layout>
  );
};

const LogoContainer = styled.View`
  flex: 1;
  justify-content: center; ;
`;

const ServiceTitle = styled.Text`
  font-family: ${(props) => props.theme.thickFont};
  font-size: 30px;
  margin-top: 15px;
`;

export default PrivacyPolicy;
