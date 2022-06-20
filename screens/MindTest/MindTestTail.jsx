import React, { useState, useEffect } from "react";
import { BigGreenButton } from "../components";
import styled from "styled-components";

const Tail = (props) => {
  const ButtonContainer = styled.View`
    width: 100%;
    position: absolute;
    bottom: 5%;
  `;
  if (props.pageNumber === "20") {
    return (
      <ButtonContainer>
        <BigGreenButton text="제출하기" onPress={props.submitMindTest} />
      </ButtonContainer>
    );
  } else {
    return null;
  }
};
export default Tail;
