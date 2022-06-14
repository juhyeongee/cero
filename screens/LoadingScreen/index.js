import React from "react";
import { View, Text, Image } from "react-native";
import styled from "styled-components";
import { Layout, MainText, SubText } from "../components";

const LoadingScreen = () => {
  return (
    <Layout center={true} alignCenter={true}>
      <Image source={require("cero_/assets/makingMindSeedImage.png")} />
      <MainText> 마음 씨앗을 만드는 중이예요..</MainText>
      <SubText color={"grey"}>
        대충 검은 배경에 아무거나 쓰면 명언이 된다 -명언-
      </SubText>
    </Layout>
  );
};

export default LoadingScreen;
