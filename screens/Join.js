import React, { useRef, useState } from "react";

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
          Alert.alert("뭔가 이상해요.\n 이메일과 비밀번호를 다시 작성해주세요");
        }
        if (error.code === "auth/weak-password") {
          Alert.alert("비밀번호가 약합니다!");
        }
        console.log(error.code);
      });
  };

  return (
    <View>
      <TextInput
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
      <TextInput
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
      <TouchableOpacity onPress={onSubmitPasswordEditing}>
        <Text>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Join;
