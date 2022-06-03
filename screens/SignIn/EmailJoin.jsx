import React, { useRef, useState } from "react";
import styled from "styled-components";
import {
  KeyboardAvoidingView,
  View,
  Text,
  TextInput,
  ActivityIndicator,
  Alert,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import auth from "@react-native-firebase/auth";
import CheckPrivacyPolicy from "./CheckPrivacyPolicy";
import { Container, BigBlackButton } from "../components";
import CheckBoxes from "./CheckBoxes";
import { SafeAreaView } from "react-native-safe-area-context";

const EmailJoin = () => {
  const passwordInput = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPW, setCheckPW] = useState("");
  const onSubmitEmailEditing = () => {
    passwordInput.current.focus(); //나중에 확인
  };

  const onSubmitPasswordEditing = () => {
    if (email === "" || password === "") {
      return Alert.alert("칸 채워주세요");
    }
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log("로그인 완료!");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          Alert.alert("이미 사용하고 있는 이메일입니다");
        }
        if (error.code === "auth/invalid-email") {
          Alert.alert("이메일이 뭔가 이상하네요!");
        }
        if (error.code === "auth/operation-not-allowed") {
          Alert.alert("뭔가 이상해요. 이메일과 비밀번호를 다시 작성해주세요");
        }
        if (error.code === "auth/weak-password") {
          Alert.alert("비밀번호가 약합니다!");
        }
        console.log(error.code);
      });
  };

  return (
    <Container>
      <SafeAreaView style={{ flex: 1 }}>
        <CheckBoxes />
        <InputContainer>
          <EmailInput
            placeholder="Email"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            value={email}
            returnKeyType="next"
            onChangeText={(text) => setEmail(text)}
            onSubmitEditing={onSubmitEmailEditing}
            placeholderTextColor={"rgba(0, 0, 0, 0.7)"}
          />
          <PWInput
            autoCapitalize="none"
            ref={passwordInput}
            placeholder="Password"
            secureTextEntry
            value={password}
            returnKeyType="done"
            onChangeText={(text) => setPassword(text)}
            placeholderTextColor={"rgba(0, 0, 0, 0.7)"}
            onSubmitEditing={onSubmitPasswordEditing}
          />
          <PWInput
            secureTextEntry
            placeholder="Password"
            onChangeText={(text) => setCheckPW(text)}
          />
          {password !== checkPW && (
            <View>
              <Text>비밀번호가 일치하지 않습니다.</Text>
            </View>
          )}
          {password !== checkPW ? (
            <BigBlackButton text="Create Account" />
          ) : (
            <BigBlackButton
              text="Create Account"
              onPress={onSubmitPasswordEditing}
            />
          )}
        </InputContainer>
      </SafeAreaView>
    </Container>
  );
};

const EmailInput = styled.TextInput`
  background-color: ${(props) => props.theme.n100};
  padding: 10px;
  height: 40px;
  border: 1px solid grey;
  border-radius: 10px;
`;

const PWInput = styled.TextInput`
  background-color: ${(props) => props.theme.n100};
  padding: 10px;
  height: 40px;
  border: 1px solid grey;
  border-radius: 10px;
`;

const InputContainer = styled.View`
  flex: 1;
`;
export default EmailJoin;
