import React, { useRef, useState } from "react";
import { View, Text, Image, Pressable, TouchableOpacity } from "react-native";
import styled from "styled-components";
import CheckBox from "@react-native-community/checkbox";
import Icon from "react-native-vector-icons/FontAwesome";

const PrivacyPolicy = ({ navigation: { navigate } }) => {
  const navigateToDetail = () => {
    console.log("wpq");
  };
  const CheckPrivacyPolicy = (props) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    return (
      <CheckBoxContainer>
        <View style={{ flexDirection: "row" }}>
          <CheckBox
            style={{ width: 20, height: 20 }}
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
          />
          <CheckBoxText>{props.content}</CheckBoxText>
        </View>
        <ArrowBtn onPress={navigateToDetail}>
          <Image
            source={require("/Users/a12/teamCero/cero/right-arrow.png")}
          ></Image>
        </ArrowBtn>
      </CheckBoxContainer>
    );
  };
  return (
    <Container>
      <LogoContainer>
        <Image source={require("/Users/a12/teamCero/cero/logo.png")}></Image>
        <ServiceTitle>새로</ServiceTitle>
      </LogoContainer>
      <CheckBoxes>
        <CheckPrivacyPolicy
          content="약관 전체 동의"
          navigateToDetail={navigateToDetail}
          //check 이거 대체 왜 전환 안돼 ㅋㅋㅋ
        />
        <Bar />
        <CheckPrivacyPolicy content="(필수) 이메일 정보 제공 동의" />
        <CheckPrivacyPolicy content="(선택) 말걸기 알림 받기 동의" />
        <CheckPrivacyPolicy content="(선택) 이벤트 및 광고 수신동의" />
        <StartBtn>
          <StartBtnText>시작하기</StartBtnText>
        </StartBtn>
      </CheckBoxes>
    </Container>
  );
};

const LogoContainer = styled.View`
  flex: 0.3;
`;
const Container = styled.View`
  background-color: ${(props) => props.theme.n100};
  flex: 1;
  justify-content: center;
  padding: 40px;
`;

const ServiceTitle = styled.Text`
  font-family: ${(props) => props.theme.thickFont};
  font-size: 30px;
  margin-top: 15px;
`;
const Bar = styled.View`
  background-color: ${(props) => props.theme.n700};
  width: 100%;
  height: 1px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const CheckBoxContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
`;

const CheckBoxText = styled.Text`
  margin-left: 10px;
  font-size: 16px;
  color: ${(props) => props.theme.n800};
`;

const StartBtn = styled.Pressable`
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${(props) => props.theme.n900};
  border-radius: 10px;
  height: 48px;
  padding: 10px 20px;
  margin: 10px;
  margin-top: 30px;
`;

const CheckBoxes = styled.View`
  flex: 0.2;
`;

const StartBtnText = styled.Text`
  font-family: ${(props) => props.theme.mainFont};
  font-size: 16px;
  color: ${(props) => props.theme.n0};
`;

const ArrowBtn = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
`;
export default PrivacyPolicy;
