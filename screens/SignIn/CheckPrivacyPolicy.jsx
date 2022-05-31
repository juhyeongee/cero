import React, { useState } from "react";
import { View, Text, Image, Pressable, TouchableOpacity } from "react-native";
import styled from "styled-components";
import CheckBox from "@react-native-community/checkbox";

const CheckPrivacyPolicy = (props) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <CheckBoxContainer>
      <View style={{ flexDirection: "row" }}>
        <CheckBox
          style={{ width: 20, height: 20 }}
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
        />
        <CheckBoxText>{props.content}</CheckBoxText>
      </View>
      <ArrowBtn
        onPress={() => {
          props.moveToDetail();
        }}
      >
        <Image
          source={require("/Users/a12/teamCero/cero/right-arrow.png")}
        ></Image>
      </ArrowBtn>
    </CheckBoxContainer>
  );
};

const ArrowBtn = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
`;
const CheckBoxContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
`;

const CheckBoxText = styled.Text`
  margin-left: 10px;
  font-size: 16px;
  color: ${(props) => props.theme.n800};
`;

export default CheckPrivacyPolicy;
