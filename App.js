import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Asset } from "expo-asset";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/Tabs";
import styled from "styled-components/native";

export default function App() {
  const [로딩상태, set로딩상태] = useState(false);
  const loadingComplete = () => set로딩상태(true);
  const startLoading = async () => {
    await Font.loadAsync(Ionicons.font);
    await Asset.loadAsync(require("./title.png"));
    //웹 이미지 가져오는 법: await Image.prefetch ("https://..")
  };

  if (로딩상태 === false) {
    return (
      <AppLoading
        startAsync={startLoading}
        onFinish={loadingComplete}
        onError={console.error}
      >
        <View style={styles.container}>
          <Text> loading......</Text>
        </View>
      </AppLoading>
    );
  }

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
