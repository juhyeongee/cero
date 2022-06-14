import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";
import AutoHeightImage from "react-native-auto-height-image";
import { BigGreenButton } from "../components";
import { Layout } from "../components";

const LastPage = () => {
  const navigation = useNavigation();
  const navigateToLogin = () => {
    //console.log(this._swiper.scrollBy(-1));
    setTimeout(() => navigation.navigate("SignIn"), 1000);
  };
  const SubText = styled.Text`
    font-family: ${(props) => props.theme.thinFont};
  `;
  return (
    <BG>
      <PlantContainer>
        <AutoHeightImage
          width={300}
          source={require("cero_/assets/lastIntroPot.png")}
        ></AutoHeightImage>
      </PlantContainer>
      <Image source={require("cero_/assets/logo.png")}></Image>
      <View style={{ alignItems: "center" }}>
        <SubText> 매일 조금씩 더 괜찮은 우리,</SubText>
        <SubText> 혼자들만의 14일 이야기</SubText>
      </View>
      <ButtonContainer>
        <BigGreenButton onPress={navigateToLogin} text="시작하기" />
      </ButtonContainer>
    </BG>
  );
};

const ButtonContainer = styled.View`
  width: 100%;
  position: relative;
  top: 30%;
`;
const BG = styled.View`
  background-color: ${(props) => props.theme.n100};
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 32px;
`;

const PlantContainer = styled.View`
  position: absolute;
  bottom: -10px;
  margin-bottom: 10px;
`;

export default LastPage;
