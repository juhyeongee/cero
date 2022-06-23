import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import styled from "styled-components";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import Precautious from "./Precautious";

const PhotoMission = () => {
  const options = {
    title: "Load Photo",
  };
  return (
    <PhotoContentContainer>
      <OpenGalleryBtn
        onPress={() =>
          launchImageLibrary(options, (response) => {
            if (response.didCancel) {
              return;
            } else if (response.errorCode == "camera_unavailable") {
              console.log("<error> camera_unavailable");
              return;
            } else if (response.errorCode == "permission") {
              console.log("<error> permission");
              return;
            } else if (response.errorCode == "others") {
              console.log("<error> others");
              return;
            }
            console.log(response.assets);
          })
        }
      >
        <IconContainer>
          <Image source={require("cero_/assets/camera.png")} />
        </IconContainer>
        <Precautious />
      </OpenGalleryBtn>
    </PhotoContentContainer>
  );
};
const PhotoContentContainer = styled.View`
  padding-left: 32px;
  padding-right: 32px;
  background-color: ${(props) => props.theme.n200};
  flex: 4;
  width: 100%;
  height: 100%;
`;

const OpenGalleryBtn = styled.Pressable`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.n700};
  flex: 0.6;
  width: 100%;
  border-radius: 8px;
`;
export default PhotoMission;
