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

// const userCollection = firestore().collection("Users");
// const thisUserDocument = userCollection.doc("cIFcYGaaGxAOZ8HgIC8r");
// thisUserDocument.get().then((result) => console.log(result.data()));

// const save = async () => {
//   try {
//     await AsyncStorage.setItem("button1", "Yos");
//   } catch (e) {
//     console.log(e);
//   }
// };

//console.log(await AsyncStorage.getItem("button1"));

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [finishedMindTest, setFinishedMindTest] = useState(false);

  const finishMindTest = () => {
    setFinishedMindTest(true);
  };
  //좋은 습관이다. 변수 많아지면 헷갈리니까. 파라미터 없다는거 얘기하는거임 -> takeuserinfo.js -> confirm.js

  const loadingComplete = () => setLoaded(true);
  const startLoading = async () => {
    await Font.loadAsync(Ionicons.font);
    await Asset.loadAsync(require("./title.png"));
    //웹 이미지 가져오는 법: await Image.prefetch ("https://..")
  };
  // uid를  받아서, async storage에  저장할까?

  // console.log(
  //   firestore()
  //     .collection("User")
  //     .get()
  //     .then((reuslt) => console.log(result.data()))
  // );
  // firestore()
  //   .collection("Users")
  //   .doc(user)
  //   .get()
  //   .then((결과) => {
  //     console.log(결과.data());
  //   });

  //이거 useEffect로 검사할 항목이 이걸로만 되나?
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
  }, []);

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
  }
  // else if (!isfinishedMindTest) {
  //   return <LoadingAnimation />;
  // }
  else if (!isLoggedIn) {
    return (
      <ThemeProvider theme={mainTheme}>
        <NavigationContainer>
          <OutNav />
        </NavigationContainer>
      </ThemeProvider>
    );
  } else if (!finishedMindTest) {
    return <TakeUserInfo finishMindTest={finishMindTest} />;
  } else {
    return (
      <ThemeProvider theme={mainTheme}>
        <NavigationContainer>
          <Tabs />
        </NavigationContainer>
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
