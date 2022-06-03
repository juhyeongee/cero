import styled from "styled-components";

const BigBlackButton = (props) => {
  const BigBlackButtonInnerText = styled.Text`
    font-family: ${(props) => props.theme.mainFont};
    font-size: 16px;
    color: ${(props) => props.theme.n100};
  `;
  const BigBlackButtonBG = styled.Pressable`
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: ${(props) => props.theme.n900};
    border-radius: 10px;
    height: 48px;
    padding: 10px 20px;
  `;
  return (
    <BigBlackButtonBG onPress={props.onPress}>
      <BigBlackButtonInnerText>{props.text}</BigBlackButtonInnerText>
    </BigBlackButtonBG>
  );
};

export default BigBlackButton;
