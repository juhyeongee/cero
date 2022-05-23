import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
import missionObj from "../Missions";
import { WINDOW_WIDTH, WINDOW_HEIGHT } from "../property";

const MissionBoard = (props) => {
  const [text, setText] = useState("");
  const [todayMission, setTodayMission] = useState();
  const [showPrecautious, setShowPrecautious] = useState(false);

  return (
    <View style={styles.board}>
      <Header>
        <Text style={styles.title}>Today's mission </Text>
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
    </View>
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

const styles = StyleSheet.create({
  board: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "bisque",
    borderRadius: 30,
  },
  title: {
    fontSize: 20,
  },
});

/* flex: 0.8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  background-color: bisque;
  border-radius: 10px; */

export default MissionBoard;
