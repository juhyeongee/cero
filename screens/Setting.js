import React from "react";
import { View, Text, Button } from "react-native";
import auth from "@react-native-firebase/auth";
import styled from "styled-components/native";
import firestore from "@react-native-firebase/firestore";

const userCollection = firestore().collection("Users");

const FirebaseBtn = styled.Button`
  border: 1px solid black;
  width: 50%;
  height: 10%;
`;
const LogoutBtn = styled.Button`
  border: 1px solid black;
  width: 50%;
  height: 10%;
`;

const addUser = () => {
  firestore()
    .collection("Users")
    .add({
      name: "Ada Lovelace",
      age: 30,
    })
    .then(() => {
      console.log("User added!");
    });
};
const Setting = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ flex: 0.5 }}>
        <FirebaseBtn title="데이터 추가" onPress={addUser}></FirebaseBtn>
        <LogoutBtn
          title="로그아웃"
          onPress={() =>
            auth()
              .signOut()
              .then(() => console.log("로그아웃 되었습니다"))
          }
        ></LogoutBtn>
      </View>
    </View>
  );
};
export default Setting;
