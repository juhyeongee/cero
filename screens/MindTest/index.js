import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";
import styled from "styled-components";
import MindTestIntroduce from "./MindTestIntroduce";
import questionObj from "../../constants/Qustions";
import MindTestPage from "./MindTestPage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoadingScreen from "./LoadingScreen";

const MindTest = (props) => {
  const [introduceBtn, setIntroduceBtn] = useState(false);
  const [showLoadingScreen, setShowLoadingScreen] = useState(false);

  const showLoadingScreenThenSubmitMindText = async () => {
    setShowLoadingScreen(true);
    //TODO: 확인 필요
    setTimeout(setShowLoadingScreen(false), 3000).then(submitMindTest());
  };

  const submitMindTest = async () => {
    const number = await findNotAnsweredQuestion();
    if (number < 0) {
      props.finishMindTest();
    } else {
      // 액션을 취한다.
      // 이동한다.
      if (number !== 20) {
        this._swiper.scrollBy(-(20 - number));
      } else {
        this._swiper.scrollBy(0);
      }
    }
  };
  // props.findNotAnsweredQuestion();
  // if (props.allAnswerResponsed) {
  //   props.finishMindTest();
  //   firestore().collection("Users").add({ showLoadingScreenThenSubmitMindText: true });
  // } else {
  //   Alert.alert ("응답하지 않은 답변이있습니다ㅠ");
  const findNotAnsweredQuestion = async () => {
    AsyncStorage.getAllKeys().then((text) => console.log(text));
    const arr = await AsyncStorage.getAllKeys();
    for (let i = 1; i < Object.keys(questionObj).length + 1; i++) {
      if (!arr.includes(`answer${i}`)) {
        return i;
      }
    }
    return -1;
  };

  // AsyncStorage.getAllKeys().then((text) => console.log(text));
  // if (!introduceBtn) {
  //   console.log(introduceBtn);
  //   return <MindTestIntroduce setIntroduceBtn={setIntroduceBtn} />;
  // } else if (introduceBtn && showLoadingScreen) {
  //   console.log(introduceBtn);
  //   return <LoadingScreen />;
  // } else {
  return (
    <>
      <Swiper
        loop={false}
        ref={(swiper) => {
          this._swiper = swiper;
        }}
        showsPagination={false}
      >
        {Object.keys(questionObj).map((item, index) => (
          <MindTestPage
            showLoadingScreenThenSubmitMindText={
              showLoadingScreenThenSubmitMindText
            }
            pageNumber={item}
            key={index}
          />
        ))}
      </Swiper>
    </>
  );
};
// };

export default MindTest;
