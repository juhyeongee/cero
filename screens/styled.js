import styled from "styled-components";
import { Pressable, Text } from "react-native";

export const OutlineButton = styled.Pressable`
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme.n900};
  border-radius: 10px;
  height: 48px;
  padding: 10px 20px;
  margin: 10px;
`;
