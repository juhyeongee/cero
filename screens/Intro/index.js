import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  Alert,
  Image,
} from "react-native";
import Swiper from "react-native-swiper";
import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";
import LastPage from "./LastPage";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import FourthPage from "./FourthPage";
import FifthPage from "./FifthPage";

const Intro = () => {
  const [nowPage, setNowPage] = useState();
  return (
    <Swiper
      ref={(swiper) => {
        this._swiper = swiper;
      }}
      loop={false}
      dotColor={"gray"}
      activeDotColor={"brown"}
    >
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
      <LastPage />
    </Swiper>
  );
};

export default Intro;
