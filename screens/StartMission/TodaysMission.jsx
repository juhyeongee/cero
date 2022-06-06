import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import missionObj from "../../constants/Missions";
import Precautious from "./Precautious";
import { SubText, MainText } from "../components";

const TodaysMission = (props) => {
  return (
    <View>
      <SubText>Q.{missionObj.day1.version1.subtitle}</SubText>
      <SubText>{missionObj.day1.version1.contents}</SubText>
    </View>
  );
};

export default TodaysMission;
