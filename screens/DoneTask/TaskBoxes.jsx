import React from "react";
import { View } from "react-native";
import styled from "styled-components";
import DailyTaskBox from "./DailyTaskBox";

const TaskBoxes = (props) => {
  return (
    <View style={{ flex: 7 }}>
      <Row>
        <DailyTaskBox
          setIsModalActive={props.setIsModalActive}
          missionNumber="1"
        />
        <DailyTaskBox
          setIsModalActive={props.setIsModalActive}
          missionNumber="2"
        />
        <DailyTaskBox
          setIsModalActive={props.setIsModalActive}
          missionNumber="3"
        />
      </Row>
      <Row>
        <DailyTaskBox
          setIsModalActive={props.setIsModalActive}
          missionNumber="4"
        />
        <DailyTaskBox
          setIsModalActive={props.setIsModalActive}
          missionNumber="5"
        />
        <DailyTaskBox
          setIsModalActive={props.setIsModalActive}
          missionNumber="6"
        />
      </Row>
      <Row>
        <DailyTaskBox
          setIsModalActive={props.setIsModalActive}
          missionNumber="7"
        />
        <DailyTaskBox
          setIsModalActive={props.setIsModalActive}
          missionNumber="8"
        />
        <DailyTaskBox
          setIsModalActive={props.setIsModalActive}
          missionNumber="9"
        />
      </Row>
      <Row>
        <DailyTaskBox
          setIsModalActive={props.setIsModalActive}
          missionNumber="10"
        />
        <DailyTaskBox
          setIsModalActive={props.setIsModalActive}
          missionNumber="11"
        />
        <DailyTaskBox
          setIsModalActive={props.setIsModalActive}
          missionNumber="12"
        />
      </Row>
    </View>
  );
};
const Row = styled.View`
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
`;
export default TaskBoxes;
