import React, { useState } from "react";
import { ImageBackground, View, Text, StyleSheet } from "react-native";
import styled from "styled-components/native";
import MissionBoard from "./components/MissionBoard";
import Icon from "react-native-vector-icons/Ionicons";
import { WINDOW_WIDTH, WINDOW_HEIGHT } from "./property";

const MyRoom = () => {
  const [isMissionPage, setIsMissionPage] = useState(false);
  //visibleMissionScreen 으로 boolean은 변수명을 보자마자 알 수있게 해주는게 좋습니다. 카멜케이스로 씁시다~ is has visible hidden을 사용한다.
  //근본있게 docs로 공부하기.
  const onPress = () => {
    setIsMissionPage(!isMissionPage);
  };

  if (isMissionPage) {
    return (
      //접어서 옮기기~~ 그러면 개꿀
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ImageBackground
          style={styles.mainImage}
          source={require("../title.png")}
        >
          <MissionBoard></MissionBoard>
          <Back onPress={onPress}>
            <Icon name="chevron-back-circle-outline" size={50} />
          </Back>
        </ImageBackground>
      </View>
    );
  } else {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ImageBackground
          style={styles.mainImage}
          source={require("../title.png")}
        />
        <MissionBtn onPress={onPress}>
          <Text style={{ fontSize: 20 }}>Mission</Text>
        </MissionBtn>
      </View>
    );
  }
};

const MissionBtn = styled.TouchableOpacity`
  position: absolute;
  right: 100;
  top: 300;
  height: 100px;
  width: 100px;
  border-radius: 50px;
  background-color: greenyellow;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Back = styled.TouchableOpacity`
  position: absolute;
  left: 20;
  top: 60;
  height: 50;
  width: 50;
`;

const styles = StyleSheet.create({
  mainImage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
    resizeMode: "repeat",
  },
});

export default MyRoom;
