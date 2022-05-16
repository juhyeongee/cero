import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Swiper from "react-native-swiper";
import Birthday from "./components/takeUserInfo/Birthday";
import Gender from "./components/takeUserInfo/Gender";
import Nickname from "./components/takeUserInfo/Nickname";
import Confirm from "./components/takeUserInfo/Confirm";

const TakeUserInfo = (props) => {
  return (
    <Swiper loop={false}>
      <Birthday />
      <Gender />
      <Nickname />
      <Confirm finishMindTest={props.finishMindTest} />
    </Swiper>
  );
};

export default TakeUserInfo;
