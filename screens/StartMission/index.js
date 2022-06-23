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
import Precautious from "./Precautious";
import missionObj from "../../constants/Missions";
import useStore from "../../lib/store";
import Camera from "./Camera";
import { Layout, MainText, SubText, BigGreenButton } from "../components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import Header from "./Header";

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

  const options = {
    title: "Load Photo",
  };
  return (
    <Container>
      <SafeAreaView style={{ flex: 1 }}>
        <Header submitTextMission={submitTextMission} />
        <TodaysMission />
        <SubmitContentsContainer>
          <SubmitTextInput
            placeholder="여기에 적어주세요"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
            value={letter}
            placeholderTextColor={"rgba(0, 0, 0, 0.3)"}
            onChangeText={(text) => {
              setLetter(text);
            }}
          />
          {isWriteScreen && (
            <BigGreenButton
              text="사진 가져오기"
              onPress={() =>
                launchImageLibrary(options, (response) => {
                  if (response.didCancel) {
                    return;
                  } else if (response.errorCode == "camera_unavailable") {
                    console.log("<error> camera_unavailable");
                    return;
                  } else if (response.errorCode == "permission") {
                    console.log("<error> permission");
                    return;
                  } else if (response.errorCode == "others") {
                    console.log("<error> others");
                    return;
                  }
                  console.log(response.assets);
                })
              }
            />
          )}
        </SubmitContentsContainer>
      </SafeAreaView>
    </Container>
  );
};
const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.n200};
`;

const SubmitContentsContainer = styled.View`
  flex: 1;
  padding: 32px;
  width: 100%;
  border: 1px solid;
  border-color: ${(props) => props.theme.n200};
  background-color: ${(props) => props.theme.n0};
  flex: 4;
  height: 80%;
`;

const SubmitTextInput = styled.TextInput`
  font-family: ${(props) => props.theme.mainFont};
  width: 100%;
  font-size: 16px;
`;

const ButtonContainer = styled.View``;

export default StartMission;
