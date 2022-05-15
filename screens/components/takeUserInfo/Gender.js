import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styled from "styled-components";

const Gender = () => {
  const [gender, setGender] = useState("");

  const sendInfo = () => {
    AsyncStorage.setItem("gender", gender);
    AsyncStorage.getItem("gender").then((text) => console.log(text));
  };

  return (
    <BG>
      <Text>OO님께서 성별은 무엇입니까? </Text>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => setGender("female")}>
          <Text>여자</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setGender("male")}>
          <Text>남자</Text>
        </TouchableOpacity>
      </View>
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
export default Gender;
