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
import styled from "styled-components";
import auth from "@react-native-firebase/auth";

const Login = ({ navigation: { navigate } }) => {
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
    <LoginPage>
      <Text>Login</Text>
      <LoginInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Email"
        value={email} //이게 왜 필요할까?
        onSubmitEditing={onSubmitEmailEditing}
        returnKeyType="next"
        placeholderTextColor={"rgba(0, 0, 0, 0.7)"}
        onChangeText={(text) => {
          setEmail(text);
        }}
      />
      <PasswordInput
        placeholder="10글자 이상, 특수문자 1개를 포함해주세요"
        ref={passwordInput}
        value={password}
        secureTextEntry
        returnKeyType="done"
        placeholderTextColor={"rgba(0, 0, 0, 0.7)"}
        onChangeText={(text) => {
          setPassword(text);
        }}
      />
      <Button title="로그인 하기" onPress={onSubmitPasswordEditing} />
      <Text>Don't have an account? </Text>
      <TouchableOpacity onPress={() => navigate("Join")}>
        <Text> 회원가입하기 </Text>
      </TouchableOpacity>
    </LoginPage>
  );
};

const LoginPage = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const LoginInput = styled.TextInput`
  width: 90%;
  border: 1px solid black;
  padding: 10px 20px;
  margin: 10px;
`;

const PasswordInput = styled.TextInput`
  width: 90%;
  border: 1px solid black;
  padding: 10px 20px;
  margin: 10px;
`;

export default Login;
