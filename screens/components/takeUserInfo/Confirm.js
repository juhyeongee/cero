import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styled from "styled-components";

// let birthday = null;
// AsyncStorage.getItem("birthday").then((text) => {
//   birthday = JSON.parse(text);
//   console.log("1", birthday);
// });

// console.log("2", birthday);

//

//여쭤볼 부분. 이건 왜 안되지?
//"비동기  함수로 어떻게 화면을 그리냐 친구야" -> 라는 에러였음.
//함수를 빼주는건  ㄱㅊ, 근데 우리 이거 컴포넌트로 쓰기로 했는데, 실행하는  요상한 것들이 많으면 얘가 헷갈려해서 안됨

// const birthday2 = await AsyncStorage.getItem("birthday");
// console.log("2번", birthday2);
// console.log("2번타입", typeof birthday2);

// const birthday3 = JSON.parse(birthday2);
// console.log("3번", birthday3);
// console.log("3번타입", typeof birthday3);

const Confirm = (props) => {
  const [birthday, setBirthday] = useState();
  const [gender, setGender] = useState();
  const [nickname, setNickname] = useState();
  //프로그램에 한번만 실행됨. 계쏙 선언될리 없잖아.
  //state바뀔때, rerendering을 한다.
  //값이 바뀌고 그 상태가 바뀌었을떄에 따라 다른 로직을  사용해야할 때도 있고 하니, useEffect로 제한한다고 생각하면 될듯.

  useEffect(() => {
    getBirthday();
    getGender();
    getNickname();
  }, []);

  //useEffect가 오히려 계속 바뀌는 것을 제한해주는 역할도 해줌. 기준만 줘라.
  //[]는 초기화의 의미지. 한번만하는거니까

  const getBirthday = async () => {
    const birthday = await AsyncStorage.getItem("birthday");
    // const parsedBirthday = JSON.parse(birthday);
    setBirthday(birthday);
    console.log(birthday);
  };
  const getGender = async () => {
    const gender = await AsyncStorage.getItem("gender");
    setGender(gender);
    console.log(gender);
  };
  const getNickname = async () => {
    const nickname = await AsyncStorage.getItem("nickname");
    setNickname(nickname);
    console.log(nickname);
  };

  const func = () => {
    console.log(props.setIsFinishedMindeTest(false)); // return type => 함수의 실행결과(여기서는 void)
    console.log(props.setIsFinishedMindeTest); // return type =>function
    console.log(() => {
      props.setIsFinishedMindeTest(false);
    }); // return type=> function,
  };
  //2번째 함수도 3번째 함수도 모두 정상적으로 동작함. 아래는 그냥 파라미터 유무 차이임.
  //그리고 지금 마인드테스트가 끝났는지 체크하는 함수를  보내줬는데, 이게 on off가 아니라 종료되면 끝인 변수니까
  //종료했다는 의미의 함수를 보내주는 것이 직관적이기도 하고, 파라미터가 필요한 함수인지 아닌지 헷갈릴 수 있다 나중에.
  //그러면 setIsFinisheD
  return (
    <BG>
      <Text>당신의 현재 정보가 이게 맞을까요? </Text>
      <Text>{birthday}</Text>
      <Text>{gender}</Text>
      <Text>{nickname}</Text>

      <TouchableOpacity onPress={props.finishMindTest}>
        <Text>예 맞아요!</Text>
        {/* 여기서 App.js로 정보를 보내서 setLoggedIn을 구현하고 싶은데요..  */}
      </TouchableOpacity>
    </BG>
  );
};

const BG = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Confirm;
