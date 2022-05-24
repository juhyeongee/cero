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
    <Swiper loop={false} dotColor={"gray"} activeDotColor={"brown"}>
      <FirstIntroBG>
        <IntroMessage>이제 괜찮아질 거예요</IntroMessage>
      </FirstIntroBG>
      <SecondIntroBG>
        <IntroMessage>어서오세요</IntroMessage>
        <IntroMessage>지금은 새로 시작할 시간입니다</IntroMessage>
      </SecondIntroBG>
      <ThirdIntroLogo></ThirdIntroLogo>
    </Swiper>
  );
};

const ThirdIntroLogo = () => {
  const navigation = useNavigation();
  const navigateToLogin = () => {
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
      <View
        style={{
          flex: 5,
          justifyContent: "center",
        }}
      >
        <Image source={require("/Users/a12/teamCero/cero/logo.png")}></Image>
      </View>
      <View style={{ flex: 2, alignItems: "center" }}>
        <Text> 더 나은 당신으로</Text>
        <Text> 매일 새로웁게</Text>
        <TouchableOpacity onPress={navigateToLogin}>
          <Text>전환</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const FirstIntroBG = styled.View`
  color: white;
  background-color: #313131;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const SecondIntroBG = styled.View`
  color: white;
  background-color: #555555;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const IntroMessage = styled.Text`
  color: white;
  font-size: 20px;
  margin: 5px;
`;

export default Intro;
