import React, { useState, useEffect } from "react";
import { View, Text, Alert } from "react-native";
import styled from "styled-components";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
import { TouchableOpacity } from "react-native-gesture-handler";

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
          <TouchableOpacity onPress={() => this._swiper.scrollBy(1)}>
            <Text>다음</Text>
          </TouchableOpacity>
          <Text style={{ color: "#313131" }}> {props.pageNumber} / 20</Text>
        </TailPage>
      </TailBG>
    );
  } else {
    return (
      <TailBG>
        <LastSubmitBtn onPress={props.submitMindtest}>
          <Text style={{ color: "#faf8f4", fontSize: 17 }}>제출하기</Text>
        </LastSubmitBtn>
      </TailBG>
    );
  }
};
export default Tail;
