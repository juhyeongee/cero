import React from "react";
import { useState } from "react";
import { View, Text } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";

const Camera = async () => {
  const result = await launchCamera();
  return (
    <View>
      <ImagePicker />
    </View>
  );
};

export default Camera;
