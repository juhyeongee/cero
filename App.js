import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Asset } from "expo-asset";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNav from "./navigation/BottomTabNav";
import styled from "styled-components/native";
import OutNav from "./navigation/OutNav";
import { ThemeProvider } from "styled-components";
import { mainTheme, darkTheme } from "./constants/theme";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TakeUserInfo from "./screens/TakeUserInfo";
import LoadingAnimation from "./screens/components/LoadingAnimation";
import MindTest from "./screens/MindTest";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeNav from "./navigation/MissionNav";
import { useFonts } from "@expo-google-fonts/inter";
import {
  NotoSansKR_100Thin,
  NotoSansKR_300Light,
  NotoSansKR_400Regular,
  NotoSansKR_500Medium,
  NotoSansKR_700Bold,
  NotoSansKR_900Black,
} from "@expo-google-fonts/noto-sans-kr";
import useStore from "./lib/store";
import AppLoading from "expo-app-loading";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isUserInfoInAsyncStorage, setIsUserInfoInAsyncStorage] =
    useState(false);
  const [isMindTestOverInAsyncStorage, setIsMindTestOverInAsyncStorage] =
    useState(false);

  const { increaseCount, decreaseCount, count } = useStore();

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

  const startLoading = async () => {
    await SplashScreen.preventAutoHideAsync();

    await Font.loadAsync({
      NotoSansKR_100Thin,
      NotoSansKR_300Light,
      NotoSansKR_400Regular,
      NotoSansKR_500Medium,
      NotoSansKR_700Bold,
      NotoSansKR_900Black,
    });

    //오 로딩 완료되는거 늦춰지게 했음. 신기하네;;; 그러면 어떻게 하는거지?
    //TODO, await SplashScreen.hideAsync() 언제 쓸지 체크할 것
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

  useEffect(() => {
    startLoading().then(() => setAppIsReady(true));
    //TODO.
    setTimeout(() => {
      // console.log("가림막");
      SplashScreen.hideAsync();
    }, 3000);
  }, []);

  if (!appIsReady) {
    return (
      <View>
        <Text> loading......</Text>
      </View>
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
        <BottomTabNav />
      </NavigationContainer>
    </ThemeProvider>
  );
}
