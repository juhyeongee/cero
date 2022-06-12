import create from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

const todayDate = new Date();
const dateObject = {
  year: todayDate.getFullYear(),
  month: todayDate.getMonth() + 1,
  day: todayDate.getDate(),
};
const missionCompleteDateFromAsyncStorage = async () => {
  if (AsyncStorage.getItem("missionNumber")) {
    console.log("미션넘버 가져오기 성공");
    return AsyncStorage.getItem("missionNumber").then((res) =>
      console.log(res)
    );
  } else {
    await AsyncStorage.setItem("missionNumber", "3").then(
      console.log("미션넘버 1로 초기화 성공")
    );
    return AsyncStorage.getItem("missionNumber").then((res) =>
      console.log(res)
    );
  }
};
const useStore = create((set) => ({
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  decreaseCount: () => set((state) => ({ count: state.count - 1 })),
  todayDate: dateObject.year + dateObject.month + dateObject.day,
  missionNumber: () => missionCompleteDateFromAsyncStorage(),
  // missionCompleteDate: AsyncStorage.getItem("missionCompleteDate")
  //   ? AsyncStorage.getItem("missionCompleteDate")
  //   : 1,
  example: () => console.log("예에에쓰"),
}));

export default useStore;

// 오늘 할 일 번호: 1,2,3,4,5..
// 오늘의 날짜: 2022-05-04;
// 미션 수행 날짜 : 2022-05-04;

// 이렇게 오늘의 날짜: 와 미션 수행 날짜: 가 같으면
// => 오늘 할 일 끝! 컴포넌트 보여주고
// => 오늘 할 일 번호 += 1 해줌

// 오늘 할 일 번호: 1,2,3,4,5..
// 오늘의 날짜: 2022-05-05; 혹은 2022-05-06
// 미션 수행 날짜 : 2022-05-04;

// 이렇게 미션 수행 날짜가 다르면,
// 저장되어있던 오늘 할 일 번호를 가져오면 될듯
