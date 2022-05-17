import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Swiper from "react-native-swiper";
import Birthday from "./components/takeUserInfo/Birthday";
import Gender from "./components/takeUserInfo/Gender";
import Nickname from "./components/takeUserInfo/Nickname";
import Confirm from "./components/takeUserInfo/Confirm";

const TakeUserInfo = (props) => {
  const [birthday, setBirthday] = useState();
  const [gender, setGender] = useState();
  const [nickname, setNickname] = useState();

  useEffect(() => {
    getBirthday();
  }, [birthday]);

  useEffect(() => {
    getGender();
  }, [gender]);

  useEffect(() => {
    getNickname();
  }, [nickname]);

  const getBirthday = async () => {
    const birthday = await AsyncStorage.getItem("birthday");
    // const parsedBirthday = JSON.parse(birthday);
    setBirthday(birthday);
  };
  const getGender = async () => {
    const gender = await AsyncStorage.getItem("gender");
    setGender(gender);
  };
  const getNickname = async () => {
    const nickname = await AsyncStorage.getItem("nickname");
    setNickname(nickname);
  };

  const saveGenderToAsyncStorage = (params) => {
    AsyncStorage.setItem("gender", params).then(console.log("젠더 저장완료"));
  };
  const saveBirthdayToAsyncStorage = (params) => {
    AsyncStorage.setItem("birthday", params).then(console.log("생일 저장완료"));
  };
  const saveNicknameToAsyncStorage = (params) => {
    AsyncStorage.setItem("nickname", params).then(
      console.log("닉네임 저장완료")
    );
  };

  return (
    <Swiper loop={false}>
      <Birthday saveBirthdayToAsyncStorage={saveBirthdayToAsyncStorage} />
      <Gender saveGenderToAsyncStorage={saveGenderToAsyncStorage} />
      <Nickname saveNicknameToAsyncStorage={saveNicknameToAsyncStorage} />
      <Confirm
        birthday={birthday}
        gender={gender}
        nickname={nickname}
        finishTakeUserInfo={props.finishTakeUserInfo}
      />
    </Swiper>
  );
};

export default TakeUserInfo;
