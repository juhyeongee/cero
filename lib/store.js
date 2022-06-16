import create from "zustand";
import dayjs from "dayjs";

const today = new dayjs();
const formattedToday = today.format("YYMMDD");

//서버에 데이터 넘기는 로직 추가하세요~

// 1.마지막으로 미션을 완료한 날짜
// 2.미션 번호랑
// 3.오늘의 날짜 이거 세개면 계쏙 넘길 수 있을듯 .ㅇㅇ

const useStore = create((set) => ({
  count: 1,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  decreaseCount: () => set((state) => ({ count: state.count - 1 })),
  todayDate: formattedToday,
  missionCompleteDate: null,
  completedMissionNumber: null,
  setMissionCompleteDate: (param) => set({ missionCompleteDate: param }),
  setCompletedMissionNumber: (param) => set({ completedMissionNumber: param }),
}));

export default useStore;

// 지금까지 완료한 미션 번호
//최근 미션 수행 날짜:
// 오늘날짜 => 비교 ? 같으면 완료컴포넌트: 다르면 미션번호 컴포넌트
