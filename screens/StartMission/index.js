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

console.log(launchCamera, "||||", launchImageLibrary);

const StartMission = (props) => {
  const navigation = useNavigation();
  const [letter, setLetter] = useState("");
  const { day } = useStore();
  // const result = await launchImageLibrary(options?)
  //visibleMissionScreen 으로 boolean은 변수명을 보자마자 알 수있게 해주는게 좋습니다. 카멜케이스로 씁시다~ is has visible hidden을 사용한다.
  //근본있게 docs로 공부하기.
  // 비동기:  오래걸리는거 나중에 처리해줘. 약속해저. (서버 다녀올때 많이 )
  //2~3초 걸리는 api호출 하고, 다른 작업들을 폰에서 처리해줌.
  const days = "day" + day;
  const submitTextMission = () => {
    AsyncStorage.setItem("Mission1Submit", letter).then(
      AsyncStorage.getItem(`Mission${day}Submit`).then((text) =>
        console.log(text)
      )
    );
    navigation.navigate("MissionHome");
  };
  return (
    <Layout>
      <TitleContainer>
        <MainText>미션 1: {missionObj[days].version1.subtitle}</MainText>
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
