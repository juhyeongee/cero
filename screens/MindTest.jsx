import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";
import styled from "styled-components";
import MindTestIntroduce from "./components/mindTest/MindTestIntroduce";
import questionObj from "../screens/components/Qustions";
import MindTestPage from "./components/mindTest/MindTestPage";

const MindTest = (props) => {
  const [introduceBtn, setIntroduceBtn] = useState(false);

  if (!introduceBtn) {
    return <MindTestIntroduce setIntroduceBtn={setIntroduceBtn} />;
  } else {
    return (
      <Swiper loop={false}>
        {Object.keys(questionObj).map((item, index) => (
          <MindTestPage
            finishMindTest={props.finishMindTest}
            pageNumber={item}
            key={index}
          />
        ))}
      </Swiper>
    );
  }
};

export default MindTest;
