import React, { useState, useRef } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  Button,
  Alert,
  Image,
  SafeAreaView,
  Pressable,
} from "react-native";
import styled from "styled-components";
import auth from "@react-native-firebase/auth";
import { Layout, BigGreenButton, OutlineButton } from "../components";

const SignIn = ({ navigation: { navigate } }) => {
  const [joinModalVisible, setJoinModalVisible] = useState(false);
  const passwordInput = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmitEmailEditing = () => {
    passwordInput.current.focus(); //나중에 확인
  };

  const onSubmitPasswordEditing = () => {
    if (email === "" || password === "") {
      Alert.alert("폼을 다시 작성해주세요~ ");
    }
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("로그인 완료!");
      })
      .catch((error) => {
        if (error.code === "auth/invalid-email") {
          Alert.alert("이메일을 다시 작성해주세요");
        }
        if (error.code === "auth/user-disabled") {
          Alert.alert("뭔가 에러가..!");
        }
        if (error.code === "auth/user-not-found") {
          Alert.alert("없는 이메일입니다!ㅠ");
        }
        if (error.code === "auth/wrong-password") {
          Alert.alert("비밀번호가 틀렸습니다");
        }
        //await가 있고 없고  차이:
        console.log(error.code);
      });
  };

  return (
    <Layout>
      <ContentContainer>
        <Image source={require("cero_/assets/logo.png")}></Image>
        <LoginInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="이메일"
          value={email} //이게 왜 필요할까?
          onSubmitEditing={onSubmitEmailEditing}
          returnKeyType="next"
          placeholderTextColor="#B9B6B3" //이거 왜 안됨. 왜 props로 theme에서 적용이 안됨, 폰트패밀리도 적용어케하누..
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
        <PasswordInput
          placeholder="비밀번호"
          ref={passwordInput}
          value={password}
          secureTextEntry
          returnKeyType="done"
          placeholderTextColor="#B9B6B3"
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
        <BigGreenButton text="로그인 하기" onPress={onSubmitPasswordEditing} />
      </ContentContainer>
      <ButtonContainer>
        <OutlineButton
          text="이메일로 시작하기"
          onPress={() => navigate("EmailJoin")}
        />
        <OutlineButton
          text="구글로 시작하기"
          onPress={() => navigate("PrivacyPolicy")}
        />
        <OutlineButton
          text="애플로 시작하기"
          onPress={() => navigate("PrivacyPolicy")}
        />
      </ButtonContainer>
    </Layout>
  );
};

const LoginInput = styled.TextInput`
  font-size: 16px;
  width: 100%;
  background-color: ${(props) => props.theme.n300};
  border-radius: 10px;
  height: 48px;
  padding: 10px 20px;
  margin-top: 10px; ;
`;

const PasswordInput = styled.TextInput`
  font-size: 16px;
  width: 100%;
  background-color: ${(props) => props.theme.n300};
  border-radius: 10px;
  height: 48px;
  padding: 10px 20px;
  margin-top: 10px; ;
`;

const ServiceTitle = styled.Text`
  font-family: ${(props) => props.theme.thickFont};
  font-size: 30px;
  margin-top: 15px;
`;

const ContentContainer = styled.View`
  justify-content: flex-end;
  flex: 0.5;
`;
const ButtonContainer = styled.View`
  justify-content: center;
  flex: 0.5;
`;

export default SignIn;
