import React, { useRef, useState } from "react";
import { View, Text, Image, Pressable, TouchableOpacity } from "react-native";
import styled from "styled-components";
import Icon from "react-native-vector-icons/FontAwesome";
import CheckPrivacyPolicy from "./CheckPrivacyPolicy";
import CheckBoxes from "./CheckBoxes";
import { Container, Layout } from "../components";

const PrivacyPolicy = ({ navigation: { navigate } }) => {
  return (
    <Layout>
      <LogoContainer>
        <Image source={require("/Users/a12/teamCero/cero/logo.png")}></Image>
        <ServiceTitle>새로</ServiceTitle>
      </LogoContainer>
      <CheckBoxes
        moveToDetail={() => navigate("PolicyDetail")}
        text="약관 전체 동의"
      />
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
