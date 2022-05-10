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

const Join = () => {
  const passwordInput = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPW, setCheckPW] = useState("");
  const [loading, setLoading] = useState(false);
  const onSubmitEmailEditing = () => {
    passwordInput.current.focus(); //나중에 확인
  };

  const onSubmitPasswordEditing = async () => {
    if (email === "" || password === "") {
      return Alert.alert("칸 채워주세요");
    }
    if (loading) {
      return;
    }
    setLoading(true);
    await auth()
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
    <JoinBG>
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
      {/* 여기서 checkPW와 password가 같으면 아래에 빨간줄로 경고뜨게 하고 싶은데요.그리고 createAccount 버튼을 비활성화한다. */}
      {password !== checkPW ? (
        <CreateBtn>
          <Text style={{ fontSize: 17 }}>Create Account</Text>
        </CreateBtn>
      ) : (
        <CreateBtn onPress={onSubmitPasswordEditing}>
          <Text style={{ fontSize: 17 }}>Create Account</Text>
        </CreateBtn>
      )}
    </JoinBG>
  );
};

const JoinBG = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #dfdbd6;
  flex: 1;
`;

const EmailInput = styled.TextInput`
  background-color: whitesmoke;
  padding: 10px;
  width: 80%;
  height: 40px;
  border: 1px solid grey;
  border-radius: 15px;
  margin: 20px;
`;

const PWInput = styled.TextInput`
  background-color: whitesmoke;
  padding: 10px;
  width: 80%;
  height: 40px;
  border: 1px solid grey;
  border-radius: 15px;
  margin: 2px;
`;

const CreateBtn = styled.TouchableOpacity`
  margin: 50px;
  //여기에 sass쓸  수 있다면 참 편할 텐데요.
`;
export default Join;
