import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import AppLoading from "expo-app-loading";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Asset } from "expo-asset";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/Tabs";
import styled from "styled-components/native";
import OutNav from "./navigation/OutNav";
import { ThemeProvider } from "styled-components";
import { mainTheme, darkTheme } from "./screens/components/theme";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TakeUserInfo from "./screens/TakeUserInfo";
import LoadingAnimation from "./screens/components/LoadingAnimation";
import MindTest from "./screens/MindTest";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isUserInfoInAsyncStorage, setIsUserInfoInAsyncStorage] =
    useState(false);
  const [isMindTestOverInAsyncStorage, setIsMindTestOverInAsyncStorage] =
    useState(false);

  const finishTakeUserInfo = () => {
    setIsUserInfoInAsyncStorage(true);
    AsyncStorage.setItem("checkUserInfofinished", "finished");
    console.log("유저 정보 체크끝!");
  };

  const finishMindTest = () => {
    setIsMindTestOverInAsyncStorage(true);
    AsyncStorage.setItem("checkMindTestOver", "finished");
    console.log("1차 심리검사 끝!");
  };
  //좋은 습관이다. 변수 많아지면 헷갈리니까. 파라미터 없다는거 얘기하는거임 -> takeuserinfo.js -> confirm.js
  const checkUserInfoInAsyncStorage = () => {
    AsyncStorage.getItem("checkUserInfofinished").then((text) => {
      if (text === "finished") {
        setIsUserInfoInAsyncStorage(true);
        console.log("유저가 입력하는 유저정보 단계 Finished");
      } else if (text === null) {
        console.log("유저가 입력하는 유저 정보가 아직없음");
      }
    });
  };

  const checkMindTestFinishedInAsyncStorage = () => {
    AsyncStorage.getItem("checkMindTestOver").then((text) => {
      if (text === "finished") {
        setIsMindTestOverInAsyncStorage(true);
        console.log("Finished");
      } else if (text === null) {
        console.log("입력 심리테스트 정보가 아직없음");
      }
    });
  };

  const loadingComplete = () => setLoaded(true);
  const startLoading = async () => {
    await Font.loadAsync(Ionicons.font);
    await Asset.loadAsync(require("./title.png"));
    //웹 이미지 가져오는 법: await Image.prefetch ("https://..")
  };

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        if (auth().currentUser) {
          setIsLoggedIn(true);
        }
      } else {
        setIsLoggedIn(false);
      }
    });
    checkUserInfoInAsyncStorage();
    checkMindTestFinishedInAsyncStorage();
  }, []);
  // AsyncStorage.getItem("birthday").then((text) => console.log(text));
  if (loaded === false) {
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
  } else if (!isLoggedIn) {
    return (
      <ThemeProvider theme={mainTheme}>
        <NavigationContainer>
          <OutNav />
        </NavigationContainer>
      </ThemeProvider>
    );
  } else if (!isUserInfoInAsyncStorage) {
    return (
      <ThemeProvider theme={mainTheme}>
        <TakeUserInfo finishTakeUserInfo={finishTakeUserInfo} />
      </ThemeProvider>
    );
  } else if (!isMindTestOverInAsyncStorage) {
    return (
      <ThemeProvider theme={mainTheme}>
        <MindTest finishMindTest={finishMindTest} />
      </ThemeProvider>
    );
  }
  return (
    <ThemeProvider theme={mainTheme}>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </ThemeProvider>
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
