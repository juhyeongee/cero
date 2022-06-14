import React, { useState, useEffect } from "react";

import { BigGreenButton } from "../components";

const Tail = (props) => {
  if (props.pageNumber === "20") {
    return <BigGreenButton text="제출하기" onPress={props.submitMindtest} />;
  } else {
    return null;
  }
};
export default Tail;
