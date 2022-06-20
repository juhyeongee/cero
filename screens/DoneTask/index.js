import React, { useState } from "react";
import { View, Text, Pressable, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components";
import DailyTaskBox from "./DailyTaskBox";
import DoneTaskModal from "./DoneTaskModal";
import useStore from "../../lib/store";
import { MainText, SubText } from "../components";
import { WINDOW_WIDTH, WINDOW_HEIGHT } from "../../constants/property";

const DoneTask = () => {
  const { day } = useStore();
  const [visible, setVisible] = useState(false);
  const ModalClickedBG = styled.View`
    height: ${WINDOW_HEIGHT};
    width: ${WINDOW_WIDTH};
    position: absolute;
    background-color: ${(props) => props.theme.n400};
  `;
  return (
    <Container>
      <SafeAreaView style={{ flex: 1 }}>
        <TitleContainer>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Image source={require("cero_/assets/flag.png")} />
            <MainText>지난 할 일</MainText>
            <SubText>지금까지의 여정을 살펴보세요.</SubText>
            <Text>{day}일 차</Text>
          </View>
        </TitleContainer>
        <View style={{ flex: 5 }}>
          <Row>
            <DailyTaskBox setVisible={setVisible} />
            <DailyTaskBox setVisible={setVisible} />
            <DailyTaskBox setVisible={setVisible} />
          </Row>
          <Row>
            <DailyTaskBox setVisible={setVisible} />
            <DailyTaskBox setVisible={setVisible} />
            <DailyTaskBox setVisible={setVisible} />
          </Row>
          <Row>
            <DailyTaskBox setVisible={setVisible} />
            <DailyTaskBox setVisible={setVisible} />
            <DailyTaskBox setVisible={setVisible} />
          </Row>
        </View>
        <DoneTaskModal
          visible={visible}
          setVisible={setVisible}
        ></DoneTaskModal>
        {visible && <ModalClickedBG />}
      </SafeAreaView>
    </Container>
  );
};

const Container = styled.View`
  background-color: ${(props) => props.theme.n100};
  flex: 1;
  justify-content: center;
`;

const TitleContainer = styled.View`
  background-color: ${(props) => props.theme.n100};
  flex: 1;
  justify-content: center;
  padding: 32px;
`;

const Row = styled.View`
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
`;

export default DoneTask;
