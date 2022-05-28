import React, { useState } from "react";
import { ImageBackground, View, Text, StyleSheet } from "react-native";
import styled from "styled-components/native";
import TodaysMission from "./TodaysMission";
import missionObj from "../../constants/Missions";
import { SafeAreaView } from "react-native-safe-area-context";

const StartMission = (props) => {
  const [isMissionPage, setIsMissionPage] = useState(false);
  //visibleMissionScreen 으로 boolean은 변수명을 보자마자 알 수있게 해주는게 좋습니다. 카멜케이스로 씁시다~ is has visible hidden을 사용한다.
  //근본있게 docs로 공부하기.
  // 비동기:  오래걸리는거 나중에 처리해줘. 약속해저. (서버 다녀올때 많이 )
  //2~3초 걸리는 api호출 하고, 다른 작업들을 폰에서 처리해줌.
  const days = "day" + props.day;
  return (
    <Container>
      <SafeAreaView style={{ flex: 1 }}>
        <TodaysDate>
          <Text>{days}</Text>
        </TodaysDate>
        <MissionTitle>
          {/* <Text>미션 1: {missionObj[days].version1.subtitle}</Text> */}
        </MissionTitle>
        <TodaysMission day={props.day} />
      </SafeAreaView>
    </Container>
  );
};

const TodaysDate = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: aquamarine;
`;
const MissionTitle = styled.View`
  justify-content: center;
  align-items: center;

  background-color: antiquewhite;
  flex: 1;
`;
const Container = styled.View`
  align-items: center;
  background-color: darkgoldenrod;
  flex: 0.91;
`;

export default StartMission;
