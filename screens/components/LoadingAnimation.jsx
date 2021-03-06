import React, { useState, useRef } from "react";
import styled from "styled-components";
import {
  View,
  Text,
  Animated,
  StyleSheet,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";

const BG = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadingAnimation = () => {
  const [rotateAnimation, setRotateAnimation] = useState(new Animated.Value(0));

  const handleAnimation = () => {
    Animated.timing(rotateAnimation, {
      toValue: 1,
      duration: 1000,
    }).start(() => {
      rotateAnimation.setValue(0);
    });
  };

  const interpolateRotating = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  const styles = StyleSheet.create({
    logo: {
      width: "50px",
      height: "50px",
    },
  });
  const animatedStyle = {
    transform: [
      {
        rotate: interpolateRotating,
      },
    ],
  };

  return (
    <BG>
      <TouchableOpacity onPress={async () => handleAnimation()}>
        <Animated.Image
          //   source={require("cero_/assets/temp_logo.png")}
          style={[styles.logo, animatedStyle]}
        ></Animated.Image>
      </TouchableOpacity>
    </BG>
  );
};

export default LoadingAnimation;
