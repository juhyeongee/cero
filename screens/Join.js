import React, { useState } from "react";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";
import EmailJoin from "./EmailJoin";
import KakaoJoin from "./KakaoJoin";

const Join = () => {
  const [pressed, setPressed] = useState("");

  if (pressed === "Email") {
    return <EmailJoin />;
  } else if (pressed === "Kakao") {
    return <KakaoJoin />;
  } else {
    return (
      <Container>
        <EmailLoginBtn onPress={() => setPressed("Email")}>
          <Text>이메일로 가입하기</Text>
        </EmailLoginBtn>
        <KakaoLoginBtn onPress={() => setPressed("Kakao")}>
          <Text>카카오로 가입하기</Text>
        </KakaoLoginBtn>
        <GoogleLoginBtn onPress={() => setPressed("Google")}>
          <Text>구글로 가입하기</Text>
        </GoogleLoginBtn>
      </Container>
    );
  }
};
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #dfdbd6;
`;
const EmailLoginBtn = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 60px;
  border-radius: 20px;
  background-color: gray;
`;
const KakaoLoginBtn = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 60px;
  border-radius: 20px;
  background-color: yellow;
`;
const GoogleLoginBtn = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 60px;
  border-radius: 20px;
  background-color: grey;
`;
export default Join;
