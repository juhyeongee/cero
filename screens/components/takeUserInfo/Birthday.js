import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styled from "styled-components";

const Birthday = () => {
  const [birthday, setBirthday] = useState();

  const sendInfo = () => {
    AsyncStorage.setItem("birthday", birthday);
  };

  return (
    <BG>
      <Text>OO님께서 태어나신 날은 언제입니까?</Text>
      {/* <DatePicker /> */}
      <TouchableOpacity onPress={sendInfo}>
        <Text>다음</Text>
      </TouchableOpacity>
    </BG>
  );
};

const BG = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default Birthday;
