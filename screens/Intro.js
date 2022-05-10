import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  Alert,
} from "react-native";
import Swiper from "react-native-swiper";
import styled from "styled-components";
import TITLE_BACKGROUND_COLOR_1 from "../screens/property";
import auth from "@react-native-firebase/auth";

const Intro = ({ navigation: { navigate } }) => {
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
    <Swiper loop={false} dotColor={"gray"} activeDotColor={"brown"}>
      <FirstIntroBG>
        <IntroMessage>이제 괜찮아질 거예요</IntroMessage>
      </FirstIntroBG>
      <SecondIntroBG>
        <IntroMessage>어서오세요</IntroMessage>
        <IntroMessage>지금은 새로 시작할 시간입니다</IntroMessage>
      </SecondIntroBG>
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
    </Swiper>
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

export default Intro;
