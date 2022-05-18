import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";

const submitUserInfo = () => {
  firestore().collection("Users").add({ submitMindTest: true });
};
const Tail = (props) => {
  const LastSubmitBtn = styled.TouchableOpacity`
    width: 60%;
    height: 30px;
    position: relative;
    bottom: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 50px;
    border-radius: 20px;
    background-color: #555555;
  `;
  const TailBG = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0.2;
    width: 100%;
  `;

  const TailPage = styled.View`
    position: relative;
    bottom: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 35px;
    border-radius: 20px;
    background-color: #dfdbd6;
  `;

  if (props.pageNumber !== "20") {
    return (
      <TailBG>
        <TailPage>
          <Text style={{ color: "#313131" }}> {props.pageNumber} / 20</Text>
        </TailPage>
      </TailBG>
    );
  } else {
    return (
      <TailBG>
        <LastSubmitBtn
          onPress={() => {
            submitUserInfo();
            props.finishMindTest(true);
          }}
        >
          <Text style={{ color: "#faf8f4", fontSize: 17 }}>제출하기</Text>
        </LastSubmitBtn>
      </TailBG>
    );
  }
};

export default Tail;
