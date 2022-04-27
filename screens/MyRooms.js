import React, { useState } from "react";
import {
  Dimensions,
  ImageBackground,
  View,
  Text,
  StyleSheet,
  TextInput,
} from "react-native";
import splash from "../";
import styled from "styled-components/native";
import MissionBoard from "./components/MissionBoard";
import Icon from "react-native-vector-icons/Ionicons";

const Width = Dimensions.get("window").width; //스크린 너비 초기화
const Height = Dimensions.get("window").height; //스크린 높이 초기화
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

const MyRooms = () => {
  const [mission, setMission] = useState(false);
  const onPress = () => {
    setMission(!mission);
  };
  if (mission == false) {
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
  if (mission == true) {
    return (
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
  }
};

const styles = StyleSheet.create({
  mainImage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: Width,
    height: Height,
    resizeMode: "repeat",
  },
});

export default MyRooms;
