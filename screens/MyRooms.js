import React from "react";
import {
  Dimensions,
  ImageBackground,
  View,
  Text,
  StyleSheet,
} from "react-native";
import splash from "../";

const Width = Dimensions.get("window").width; //스크린 너비 초기화
const Height = Dimensions.get("window").height; //스크린 높이 초기화

const MyRooms = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <ImageBackground
      style={styles.mainImage}
      source={require("../title.png")}
    />
  </View>
);

const styles = StyleSheet.create({
  mainImage: {
    flex: 1,
    width: Width,
    height: Height,
    resizeMode: "repeat",
  },
});

export default MyRooms;
