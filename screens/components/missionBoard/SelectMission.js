import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";
import missionObj from "../Missions";

const SelectMission = ({ navigation, day }) => {
  console.log(navigation);
  console.log(day);
  const [selectedMission, setSelectedMission] = useState();
  const days = "day" + day;
  return (
    <Container>
      <Text>미션 고르지</Text>
      <SelectOption>
        <SelectOptionTitle>
          미션 1: {missionObj[days].version1.subtitle}
        </SelectOptionTitle>
      </SelectOption>
      <SelectOption>
        <SelectOptionTitle>
          미션 2: {missionObj[days].version2.subtitle}
        </SelectOptionTitle>
      </SelectOption>
      {missionObj[days].version3 && (
        <SelectOption>
          <SelectOptionTitle>
            미션 3: {missionObj[days].version3.subtitle}
          </SelectOptionTitle>
        </SelectOption>
      )}
      {/* && 연산자도 사용했다 삼항아니고 + [day]쓴것도 확인 */}
      {/* <SelectConfirmBtn onPress={props.navigation.navigate("MissionBoard")}> */}
      <SelectConfirmBtn onPress={() => navigation.navigate("MissionBoard")}>
        <SelectConfirmBtnText>선택 완료, 미션하러 가기</SelectConfirmBtnText>
      </SelectConfirmBtn>
    </Container>
  );
};

const SelectOption = styled.TouchableOpacity`
  width: 90%;
  height: 15%;
  border: 1px solid black;
`;

const SelectOptionTitle = styled.Text`
  margin: 30px;
`;
const Container = styled.View`
  background-color: azure;
  width: 100%;
  height: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const SelectConfirmBtn = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: teal;
  width: 50%;
  height: 10%;
`;

const SelectConfirmBtnText = styled.Text``;

export default SelectMission;
