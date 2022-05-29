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
      <ThirdIntro></ThirdIntro>
    </Swiper>
  );
};

const ThirdIntro = () => {
  const navigation = useNavigation();
  const navigateToLogin = () => {
    //console.log(this._swiper.scrollBy(-1));
    setTimeout(() => navigation.navigate("SignIn"), 1500);
  };

  return (
    <ThirdIntroBG>
      <Image source={require("/Users/a12/teamCero/cero/logo.png")}></Image>
      <View style={{ alignItems: "center" }}>
        <ServiceTitle>새로</ServiceTitle>
        <Text> 더 나은 당신으로</Text>
        <Text> 매일 새로웁게</Text>
        <TouchableOpacity onPress={navigateToLogin}>
          <Text>전환 어떻게 자동으로하지...</Text>
        </TouchableOpacity>
      </View>
    </ThirdIntroBG>
  );
};

const FirstIntroBG = styled.View`
  background-color: ${(props) => props.theme.n900};
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const SecondIntroBG = styled.View`
  background-color: ${(props) => props.theme.n800};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ThirdIntroBG = styled.View`
  background-color: ${(props) => props.theme.n100};
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
