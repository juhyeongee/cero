import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
import missionObj from "../../constants/Missions";
import { WINDOW_WIDTH, WINDOW_HEIGHT } from "../../constants/property";

const TodaysMission = (props) => {
  const [text, setText] = useState("");
  const [todayMission, setTodayMission] = useState();
  const [showPrecautious, setShowPrecautious] = useState(false);
  return (
    <Container>
      <Header>
        <Text>Today's mission </Text>
      </Header>
      {!showPrecautious ? (
        <PrecautiousBtn
          onPress={() => {
            setShowPrecautious(true);
          }}
        >
          <PrecautiousText>주의사항</PrecautiousText>
        </PrecautiousBtn>
      ) : (
        <>
          <Wall onPress={() => setShowPrecautious(false)} />
          <PrecautiousPopUp />
        </>
      )}

      <View>
        <Text>Q.{missionObj.day1.version1.subtitle}</Text>
      </View>
      <View>
        <Text>How to do. {missionObj.day1.version1.contents}</Text>
      </View>
      {!showPrecautious ? (
        <TextInput
          placeholder="오늘의 미션을 적어주세요"
          style={{ flex: 1, padding: 20 }}
          onChangeText={setText}
          value={text}
        />
      ) : (
        <View style={{ flex: 1, padding: 20 }} />
      )}

      <CompleteBtn
        onPress={() => {
          console.log("제출 완료");
        }}
      >
        <CompleteBtnText>완료 버튼</CompleteBtnText>
      </CompleteBtn>
    </Container>
  );
};

const PrecautiousPopUp = () => {
  const PopUpFrame = styled.View`
    background-color: aliceblue;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 70%;
    height: 50%;
  `;
  return (
    <PopUpFrame>
      <Text>주의사항 팝업</Text>
      <Text>사진 웃기고이상한거 올리지마라..</Text>
      <Text>개인정보어쩌고..</Text>
    </PopUpFrame>
  );
};
const PrecautiousBtn = styled.TouchableOpacity`
  font-size: 20;
`;

const Wall = styled.TouchableOpacity`
  position: absolute;
  background-color: black;
  opacity: 0.4;
  width: ${(props) => props.theme.windowWidth};
  height: ${(props) => props.theme.windowHeight};
`;

const PrecautiousText = styled.Text``;

const CompleteBtn = styled.TouchableOpacity`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200;
  height: 100;
`;
const CompleteBtnText = styled.Text`
  color: white;
`;

const Header = styled.View`
  flex-direction: row;
  flex: 0.3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.View`
  flex: 4;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 50%;
  background-color: wheat;
  border-radius: 10px;
`;

/* flex: 0.8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  background-color: bisque;
  border-radius: 10px; */

export default TodaysMission;
