import React from "react";
import { View, Text, Button } from "react-native";
import auth from "@react-native-firebase/auth";
import styled from "styled-components/native";
import firestore from "@react-native-firebase/firestore";

const userCollection = firestore().collection("Users");

const LogoutBtn = styled.Button`
  border: 1px solid black;
  width: 50%;
  height: 10%;
`;
const Setting = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ flex: 0.5 }}>
        <LogoutBtn
          title="로그아웃"
          onPress={() =>
            auth()
              .signOut()
              .then(() => console.log("로그아웃 되었습니다"))
          }
        >
          <Text>설정페이지</Text>
        </LogoutBtn>
      </View>
    </View>
  );
};
export default Setting;
