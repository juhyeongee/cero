import React, { useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import missionObj from "../../constants/Missions";
import Precautious from "./Precautious";
import { SubText, MainText } from "../components";
import useStore from "../../lib/store";

const TodaysMission = () => {
  const { completedMissionNumber } = useStore();

  useEffect(
    () => console.log("투데이 미션에서 번호 출력: ", completedMissionNumber),
    [completedMissionNumber]
  );
  return (
    <View>
      <SubText>Q.{missionObj[1].version1.subtitle}</SubText>
      <SubText>{missionObj[1].version1.contents}</SubText>
    </View>
  );
};

export default TodaysMission;
