import React, { useState } from "react";
import {
  ImageBackground,
  View,
  Text,
  Image,
  SafeAreaView,
  Pressable,
} from "react-native";
import styled from "styled-components/native";
import TodaysMission from "./TodaysMission";
import missionObj from "../../constants/Missions";
import useStore from "../../lib/store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import Header from "./Header";
import PhotoMission from "./PhotoMission";
import WriteMission from "./WriteMission";

// console.log(launchCamera, "||||", launchImageLibrary);

const StartMission = (props) => {
  const navigation = useNavigation();
  const [letter, setLetter] = useState("");
  const [isWriteScreen, setIsWriteScreen] = useState(false);
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
    <Container>
      <SafeAreaView
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <Header submitTextMission={submitTextMission} />
        <TodaysMission />
        {isWriteScreen ? (
          <WriteMission setLetter={setLetter} />
        ) : (
          <PhotoMission />
        )}
      </SafeAreaView>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.n200};
`;

export default StartMission;
