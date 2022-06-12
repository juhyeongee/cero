import React, { useState } from "react";
import { ImageBackground, View, Text, StyleSheet } from "react-native";
import styled from "styled-components/native";
import TodaysMission from "./TodaysMission";
import Precautious from "./Precautious";
import missionObj from "../../constants/Missions";
import useStore from "../../lib/store";
import Camera from "./Camera";
import { Layout, MainText, SubText, BigBlackButton } from "../components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";

// console.log(launchCamera, "||||", launchImageLibrary);

const StartMission = (props) => {
  const navigation = useNavigation();
  const [letter, setLetter] = useState("");
  const { example, missionNumber, todayDate } = useStore();
  console.log(
    "1",
    missionNumber().then((res) => console.log("프로미스 출력: " + res))
  );
  console.log("2", () => missionNumber);
  console.log("3", missionNumber);
  console.log("4", example);

  const submitTextMission = () => {
    AsyncStorage.setItem(`missionNumber`, missionNumber + 1);

    AsyncStorage.setItem("missionCompleteDate", todayDate);

    AsyncStorage.setItem(`Mission${missionNumber}Content`, letter);

    navigation.navigate("MissionHome");
  };
  return (
    <Layout>
      <TitleContainer>
        {/* <MainText>미션 1: {missionObj[days].version1.subtitle}</MainText> */}
        <TodaysMission />
      </TitleContainer>
      <SubmitContentsContainer>
        <SubmitTextInput
          placeholder="당신의 이야기를 적어주세요"
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          value={letter}
          placeholderTextColor={"rgba(0, 0, 0, 0.7)"}
          onChangeText={(text) => {
            setLetter(text);
          }}
        />
        <BigBlackButton
          text="연습용"
          onPress={() => launchImageLibrary({}, (res) => console.log(res))}
        />
        <BigBlackButton text="제출" onPress={submitTextMission} />
      </SubmitContentsContainer>
    </Layout>
  );
};

const TitleContainer = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
`;

const SubmitContentsContainer = styled.View`
  flex: 2;
  width: 100%;
  justify-content: space-around;
`;

const SubmitTextInput = styled.TextInput`
  font-family: ${(props) => props.theme.mainFont};
  border: 1px solid black;
  width: 100%;
  height: 60%;
  padding: 32px;
  font-size: 16px;
`;

export default StartMission;
