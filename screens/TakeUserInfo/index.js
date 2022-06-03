import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Swiper from "react-native-swiper";
import Birthday from "./Birthday";
import Gender from "./Gender";
import Nickname from "./Nickname";
import Confirm from "./Confirm";

const TakeUserInfo = (props) => {
  const [birthday, setBirthday] = useState();
  const [gender, setGender] = useState();
  const [nickname, setNickname] = useState();
  const [age, setAge] = useState();
  const [birthdayDay, setBirthdayDay] = useState();
  const [birthdayMonth, setBirthdayMonth] = useState();
  const [birthdayYear, setBirthdayYear] = useState();

  const getBirthday = async () => {
    const getBirthday = await AsyncStorage.getItem("birthday");
    setBirthday(getBirthday);
  };
  const getGender = async () => {
    const getGender = await AsyncStorage.getItem("gender");
    setGender(getGender);
  };
  const getNickname = async () => {
    const getNickname = await AsyncStorage.getItem("nickname");
    setNickname(getNickname);
  };

  const saveGenderToAsyncStorage = (params) => {
    AsyncStorage.setItem("gender", params).then(console.log("젠더 저장완료"));
    getGender();
  };
  const saveBirthdayToAsyncStorage = (params) => {
    AsyncStorage.setItem("birthday", params).then(console.log("생일 저장완료"));
    getBirthday();
  };
  const saveNicknameToAsyncStorage = (params) => {
    AsyncStorage.setItem("nickname", params).then(
      console.log("닉네임 저장완료")
    );
    getNickname();
  };

  return (
    <Swiper
      loop={false}
      ref={(swiper) => {
        this._swiper = swiper;
      }}
      showsPagination={false}
    >
      <Nickname saveNicknameToAsyncStorage={saveNicknameToAsyncStorage} />
      <Birthday
        nickname={nickname}
        setBirthdayDay={setBirthdayDay}
        setBirthdayMonth={setBirthdayMonth}
        setBirthdayYear={setBirthdayYear}
        setAge={setAge}
        saveBirthdayToAsyncStorage={saveBirthdayToAsyncStorage}
      />
      <Gender
        nickname={nickname}
        saveGenderToAsyncStorage={saveGenderToAsyncStorage}
      />

      <Confirm
        age={age}
        birthdayDay={birthdayDay}
        birthdayMonth={birthdayMonth}
        birthdayYear={birthdayYear}
        gender={gender}
        nickname={nickname}
        finishTakeUserInfo={props.finishTakeUserInfo}
      />
    </Swiper>
  );
};

export default TakeUserInfo;
