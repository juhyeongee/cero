import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";
import styled from "styled-components";
import questionObj from "../screens/components/Qustions";
import MindTestPage from "../screens/components/MindTestPage";

const MindTest = () => {
  return (
    <Swiper loop={false}>
      {Object.keys(questionObj).map((item) => (
        <MindTestPage pageNumber={item} />
      ))}
    </Swiper>
  );
};

export default MindTest;
