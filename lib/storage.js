import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useStore from "./store";

export const getMissionCompleteDateFromAsyncStorage = async () => {
  try {
    const missionCompleteDateFromAsyncStorage = await AsyncStorage.getItem(
      "checkMindTestOver"
    );
    return missionCompleteDateFromAsyncStorage;
  } catch (e) {
    console.log(e);
  }
};

// export const setcompletedMissionNumberFromAsyncStorageToStore = async () => {
//   try {
//     const completedMissionNumberFromAsyncStorage = await AsyncStorage.getItem(
//       "completedMissionNumber"
//     );
//     return completedMissionNumberFromAsyncStorage;
//   } catch (e) {
//     console.log(e);
//   }
// };
