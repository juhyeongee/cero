import React, { useState } from "react";
import { View, Text, TextInput, Button, Pressable } from "react-native";
import styled from "styled-components";

const Gender = (props) => {
  const [gender, setGender] = useState("");
  const [pressed, setPressed] = useState();

  return (
    <BG>
      <Text>OO님께서 성별은 무엇입니까? </Text>
      <View style={{ flexDirection: "row" }}>
        {gender === "female" && (
          <>
            <PressedBtn
              onPress={() => {
                setGender("female");
              }}
            >
              <Text>여자</Text>
            </PressedBtn>
            <UnpressedBtn onPress={() => setGender("male")}>
              <Text>남자</Text>
            </UnpressedBtn>
          </>
        )}
        {gender === "male" && (
          <>
            <UnpressedBtn
              onPress={() => {
                setGender("female");
                props.saveGenderToAsyncStorage(gender);
                setTimeout(() => this._swiper.scrollBy(1), 1000);
              }}
            >
              <Text>여자</Text>
            </UnpressedBtn>
            <PressedBtn
              onPress={() => {
                setGender("male");
                props.saveGenderToAsyncStorage(gender);
                setTimeout(() => this._swiper.scrollBy(1), 1000);
              }}
            >
              <Text>남자</Text>
            </PressedBtn>
          </>
        )}
        {gender === "" && (
          <>
            <Pressable
              onPress={() => {
                setGender("female");
                props.saveGenderToAsyncStorage(gender);
                setTimeout(() => this._swiper.scrollBy(1), 1000);
              }}
            >
              <Text>여자</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                setGender("male");
                props.saveGenderToAsyncStorage(gender);
                setTimeout(() => this._swiper.scrollBy(1), 1000);
              }}
            >
              <Text>남자</Text>
            </Pressable>
          </>
        )}
      </View>
      {/* <Pressable
        onPress={() => {
          props.saveGenderToAsyncStorage(gender);
          this._swiper.scrollBy(1);
        }}
      >
        <Text>다음</Text>
      </Pressable> */}
    </BG>
  );
};

const PressedBtn = styled.Pressable`
  background-color: silver;
`;
const UnpressedBtn = styled.Pressable``;

const BG = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default Gender;
