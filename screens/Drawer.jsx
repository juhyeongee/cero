import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

const Drawer = (props) => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>나의 서랍 페이지</Text>
    <Text> {props.day}</Text>
  </View>
);
export default Drawer;
