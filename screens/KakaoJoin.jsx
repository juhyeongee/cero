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

const KakaoJoin = () => {
  return <EmailJoinBG></EmailJoinBG>;
};

const EmailJoinBG = styled.View`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #dfdbd6;
  flex: 1;
`;
export default KakaoJoin;
