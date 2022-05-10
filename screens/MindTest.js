import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";
import styled from "styled-components";
import questionObj from "../screens/components/Qustions";
import MindTestPage from "./components/mindTest/MindTestPage";
const MindTest = () => {
  return (
    <Swiper loop={false}>
      {Object.keys(questionObj).map((item, index) => (
        <MindTestPage pageNumber={item} key={index} />
      ))}
    </Swiper>
  );
};

export default MindTest;
