import React, { useState, useEffect } from "react";
import { View } from "react-native";

import styled from "styled-components";
import Body from "./MindTestBody";
import Tail from "./MindTestTail";
import { Layout } from "../components";

const MindTestPage = (props) => {
  return (
    <Layout>
      <Body pageNumber={props.pageNumber} />
      <Tail
        showLoadingScreenThenSubmitMindText={
          props.showLoadingScreenThenSubmitMindText
        }
        pageNumber={props.pageNumber}
      />
    </Layout>
  );
};

export default MindTestPage;
