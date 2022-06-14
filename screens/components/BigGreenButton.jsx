import styled from "styled-components";

const BigGreenButton = (props) => {
  const BigGreenButtonInnerText = styled.Text`
    font-family: ${(props) => props.theme.mainFont};
    font-size: 16px;
    color: ${(props) => props.theme.n100};
  `;
  const BigGreenButtonBG = styled.Pressable`
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: ${(props) => props.theme.mainGreen};
    border-radius: 10px;
    height: 48px;
    padding: 10px 20px;
  `;
  return (
    <BigGreenButtonBG onPress={props.onPress}>
      <BigGreenButtonInnerText>{props.text}</BigGreenButtonInnerText>
    </BigGreenButtonBG>
  );
};

export default BigGreenButton;
