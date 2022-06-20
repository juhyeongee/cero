import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";
import styled from "styled-components";
import MindTestIntroduce from "./MindTestIntroduce";
import { questionObj } from "../../constants/property";
import MindTestPage from "./MindTestPage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MindTest = (props) => {
  const [showIntroduceScreen, setShowIntroduceScreen] = useState(true);

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
  //   firestore().collection("Users").add({ submitMindTest: true });
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

  AsyncStorage.getAllKeys().then((text) => console.log(text));

  //로딩스크린이 우선순위의 상위조건이므로 그 조건을 삼항연산자에서도 먼저걸어주는 것이 좋아보엿음

  return (
    <>
      {showIntroduceScreen ? (
        <MindTestIntroduce setShowIntroduceScreen={setShowIntroduceScreen} />
      ) : (
        <Swiper
          loop={false}
          ref={(swiper) => {
            this._swiper = swiper;
          }}
          showsPagination={false}
        >
          {Object.keys(questionObj).map((item, index) => (
            <MindTestPage
              submitMindTest={submitMindTest}
              pageNumber={item}
              key={index}
            />
          ))}
        </Swiper>
      )}
    </>
  );
};
// };

export default MindTest;
