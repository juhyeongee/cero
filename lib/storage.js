import AsyncStorage from "@react-native-async-storage/async-storage";

export const getMissionCompleteDateFromAsyncStorage = async () => {
  try {
    const missionCompleteDateFromAsyncStorage = await AsyncStorage.getItem(
      "missionCompleteDate"
    );
    return missionCompleteDateFromAsyncStorage;
  } catch (e) {
    console.log(e);
  }
};

export const getCompletedMissionNumberFromAsyncStorage = async () => {
  try {
    const completedMissionNumberFromAsyncStorage = await AsyncStorage.getItem(
      "completedMissionNumber"
    );
    return completedMissionNumberFromAsyncStorage;
  } catch (e) {
    console.log(e);
  }
};
