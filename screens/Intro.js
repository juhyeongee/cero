import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Intro = ({ navigation: { navigate } }) => {
  return (
    <View>
      <Text>Don't have an account? </Text>
      <TouchableOpacity onPress={() => navigate("Join")}>
        <Text>Join &rarr;</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Intro;
