import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  Alert,
  Image,
} from "react-native";
import Swiper from "react-native-swiper";
import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";

const Intro = () => {
  return (
    <Swiper
      ref={(swiper) => {
        this._swiper = swiper;
      }}
      loop={false}
      dotColor={"gray"}
      activeDotColor={"brown"}
    >
      <FirstIntroBG>
        <IntroText>이제 괜찮아질 거예요</IntroText>
      </FirstIntroBG>
      <SecondIntroBG>
        <IntroText>어서오세요</IntroText>
        <IntroText>지금은 새로 시작할 시간입니다</IntroText>
      </SecondIntroBG>
      <ThirdIntroLogo></ThirdIntroLogo>
    </Swiper>
  );
};

const ThirdIntroLogo = () => {
  const navigation = useNavigation();
  const navigateToLogin = () => {
    //console.log(this._swiper.scrollBy(-1));
    setTimeout(() => navigation.navigate("Login"), 1500);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image source={require("/Users/a12/teamCero/cero/logo.png")}></Image>
      <View style={{ alignItems: "center" }}>
        <ServiceTitle>새로</ServiceTitle>
        <Text> 더 나은 당신으로</Text>
        <Text> 매일 새로웁게</Text>
        <TouchableOpacity onPress={navigateToLogin}>
          <Text>전환 어떻게 자동으로하지...</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const FirstIntroBG = styled.View`
  color: white;
  background-color: ${(props) => props.theme.n900};
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const SecondIntroBG = styled.View`
  color: white;
  background-color: ${(props) => props.theme.n800};
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const IntroText = styled.Text`
  font-family: ${(props) => props.theme.mainFont};
  color: white;
  font-size: 20px;
  margin: 5px;
`;

const ServiceTitle = styled.Text`
  font-family: ${(props) => props.theme.thickFont};
  font-size: 30px;
  margin-top: 15px;
`;

export default Intro;
